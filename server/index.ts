import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { readFile } from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json());

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  app.post("/api/auth/login", async (req, res) => {
    try {
      const { username, password } = req.body || {};
      if (!username || !password) {
        return res.status(400).json({ ok: false, error: "Missing credentials" });
      }

      const candidatePaths = [
        path.resolve(__dirname, "users.json"),
        path.resolve(__dirname, "public", "users.json"),
        path.resolve(process.cwd(), "server", "users.json"),
        path.resolve(process.cwd(), "users.json"),
      ];
      let data: string | null = null;
      for (const p of candidatePaths) {
        try {
          data = await readFile(p, "utf-8");
          break;
        } catch {}
      }
      if (!data) {
        return res.status(500).json({ ok: false, error: "Users file not found" });
      }
      const parsed = JSON.parse(data) as { users: Array<{ username: string; password: string }> };
      const matched = parsed.users.find(u => u.username === username && u.password === password);

      if (!matched) {
        return res.status(401).json({ ok: false, error: "Invalid credentials" });
      }

      return res.json({ ok: true, redirectUrl: "https://79cdaa32-9b19-4e9d-ab9d-a89800ef0f46.valox.co/" });
    } catch (err) {
      return res.status(500).json({ ok: false, error: "Server error" });
    }
  });

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
