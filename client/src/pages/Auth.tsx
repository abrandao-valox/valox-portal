import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleLogin() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok || !data?.ok) {
        setError(data?.error || "Authentication failed");
      } else if (data?.redirectUrl) {
        window.location.href = data.redirectUrl;
      }
    } catch (e) {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="relative min-h-[600px] overflow-hidden flex items-center">
        <div className="absolute inset-0 -z-10">
          <img src="/hero-background.jpg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="container">
          <div className="max-w-md mx-auto">
            <Card className="border-2 border-primary/30 shadow-2xl">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center justify-center">
                  <img src="/valox-logo.png" alt="ValoX" className="h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username">Login</Label>
                  <Input
                    id="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="Digite seu usuário"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Digite sua senha"
                  />
                </div>
                {error && (
                  <div className="text-destructive text-sm">{error}</div>
                )}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="gradient-purple-cyan text-white px-8"
                    onClick={handleLogin}
                    disabled={loading}
                  >
                    {loading ? "Autenticando..." : "Autenticar"}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8"
                    onClick={() => window.history.back()}
                  >
                    Voltar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
