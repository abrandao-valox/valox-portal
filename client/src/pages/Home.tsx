import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Globe, Zap, Shield, Blocks, CreditCard, TrendingUp, CheckCircle2, Rocket, Puzzle, Coins, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[600px] overflow-hidden flex items-center">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <img src="/hero-background.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="container">
          <div className="max-w-2xl">
            <div className="space-y-8">
              <div className="my-8">
                <img src="/valox-logo.png" alt="ValoX" className="h-16 md:h-20" />
              </div>
              
              <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                Instant global accounts. Stablecoin-native rails. One unified API.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                ValoX enables banks, fintechs, and platforms to launch global money experiences without touching their core systems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gradient-purple-cyan text-white text-lg px-8">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <a href="https://docs.valox.ngrok.io/" target="_blank" rel="noopener noreferrer">
                    View Documentation
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Future of Money Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <img src="/future-section-bg.png" alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              The Future of Money Is Borderless
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Traditional banking rails weren't built for a world where users move between countries, currencies, and chains instantly.
              ValoX provides the missing layer: compliant, programmable financial infrastructure that works across borders just as easily as locally.
            </p>
          </div>
        </div>
      </section>

      {/* What You Can Build Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What You Can Build With ValoX
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <img
                src="/feature-accounts.png"
                alt="Multi-currency accounts and global cards"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <h3 className="text-xl font-semibold">Multi Currency Accounts and Global Cards</h3>
              <p className="text-muted-foreground">
                Issue accounts in local or on chain currencies and provide cards that work seamlessly worldwide.
              </p>
            </div>

            <div className="space-y-4">
              <img
                src="/feature-transfers.png"
                alt="Instant cross-border transfers"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <h3 className="text-xl font-semibold">Instant Cross Border Transfers</h3>
              <p className="text-muted-foreground">
                Move value across countries and blockchains in seconds using simple API calls.
              </p>
            </div>

            <div className="space-y-4">
              <img
                src="/feature-onchain.png"
                alt="On-chain financial features"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <h3 className="text-xl font-semibold">On Chain Financial Features</h3>
              <p className="text-muted-foreground">
                Enable users to access stablecoin settlements, liquidity, and yield bearing assets with full transparency and safety.
              </p>
            </div>

            <div className="space-y-4">
              <img
                src="/feature-compliance.png"
                alt="Embedded compliance and security"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <h3 className="text-xl font-semibold">Embedded Compliance and Security</h3>
              <p className="text-muted-foreground">
                KYC, AML, monitoring, and regulatory controls fully integrated and ready for MiCA and EMI standards, without the need for additional vendors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plug In Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <img src="/plugin-section-bg.png" alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Plug In
              <br />
              <span style={{ color: '#331B78' }}>No Core Migration</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Keep your existing systems. ValoX sits on top, instantly unlocking global interoperability.
            </p>
          </div>
        </div>
      </section>

      {/* Why Teams Choose ValoX */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Teams Choose ValoX
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 rounded-xl gradient-purple-cyan flex items-center justify-center">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Faster To Market</h3>
                <p className="text-muted-foreground">
                  Go live in weeks, not years.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 rounded-xl gradient-purple-cyan flex items-center justify-center">
                  <Puzzle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Modular</h3>
                <p className="text-muted-foreground">
                  Use only the components you need: accounts, cards, payments, compliance, treasury, swaps, or credit.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 rounded-xl gradient-purple-cyan flex items-center justify-center">
                  <Coins className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Stablecoin-Native</h3>
                <p className="text-muted-foreground">
                  Designed for the next decade of global finance, not the last.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 rounded-xl gradient-purple-cyan flex items-center justify-center">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Enterprise-Grade Compliance</h3>
                <p className="text-muted-foreground">
                  Built for regulated institutions aligning with MiCA and EMI frameworks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="relative py-20 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <img src="/usecases-bg.png" alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Use Cases
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Banks expanding cross-border services",
              "Fintechs offering global accounts",
              "Platforms needing local wallets + on-chain settlements",
              "Companies paying remote teams in multiple currencies",
              "Travel and commerce apps wanting instant FX and global cards"
            ].map((useCase, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">{useCase}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* API Section */}
      <section id="api" className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-center">
              <h2 className="text-4xl md:text-5xl font-bold">
                API-First from Day One
              </h2>
              <p className="text-xl text-muted-foreground">
                Your entire global money stack through a single API.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-lg gradient-purple-cyan flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Unified Integration</h3>
                  <p className="text-muted-foreground">
                    One API for accounts, transfers, cards, compliance, and treasury.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-lg gradient-purple-cyan flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Real-Time Webhooks</h3>
                  <p className="text-muted-foreground">
                    Get instant notifications for transactions, settlements, and compliance events.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-lg gradient-purple-cyan flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Developer-Friendly</h3>
                  <p className="text-muted-foreground">
                    Comprehensive documentation, SDKs, and sandbox environment.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" className="gradient-purple-cyan text-white" asChild>
                  <a href="https://docs.valox.ngrok.io/" target="_blank" rel="noopener noreferrer">
                    View API Documentation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Start Integrating CTA */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <Card className="border-2 border-primary/30 shadow-2xl">
              <CardContent className="p-12 md:p-16">
                <div className="text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl gradient-purple-cyan mb-4">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Start Integrating Today
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Get your API keys, explore our documentation, and launch your first global money experience in minutes.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button size="lg" className="gradient-purple-cyan text-white text-lg px-10">
                      Get API Keys
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button size="lg" variant="outline" className="text-lg px-10" asChild>
                      <a href="https://docs.valox.ngrok.io/" target="_blank" rel="noopener noreferrer">
                        Read Documentation
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 overflow-hidden text-white">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <img src="/nextera-bg.png" alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Built for the Next Era of Global Finance
            </h2>
            <p className="text-xl text-white/80 leading-relaxed">
              ValoX brings together stablecoins, local payment rails, real-time settlements, and compliance, making global money as seamless as the internet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-purple-cyan text-white text-lg px-8">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white/10">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
