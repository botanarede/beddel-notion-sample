"use client";

import { Mail, Sparkles, Loader2, HelpCircle, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function NewsletterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const res = await fetch('/api/beddel/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          agentId: 'newsletter-signup',
          name,
          email,
          message,
          createdAt: new Date().toISOString(),
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to submit. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-full flex-col bg-background text-foreground font-sans selection:bg-primary/20">
      <header className="sticky top-0 z-10 flex items-center justify-between border-b bg-background/80 px-6 py-4 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-pink-500/10 text-pink-500">
            <Sparkles className="h-5 w-5" />
          </div>
          <h1 className="text-lg font-semibold tracking-tight">Beddel Studio</h1>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/how-to">
            <Button variant="ghost" size="sm" className="gap-2">
              <HelpCircle className="h-4 w-4" />
              Tutorial
            </Button>
          </Link>
          <div className="text-xs font-medium text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
            Powered by Beddel Protocol
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-hidden relative">
        <div className="h-full w-full max-w-xl mx-auto px-4 flex items-center justify-center">
          <div className="w-full space-y-8 animate-in fade-in zoom-in duration-500">
            <div className="text-center space-y-3">
              <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 p-4 rounded-full ring-1 ring-pink-500/20 inline-flex">
                <Mail className="h-10 w-10 text-pink-500" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Join Our Newsletter</h2>
              <p className="text-muted-foreground text-base leading-relaxed max-w-md mx-auto">
                Stay updated with the latest news, insights, and exclusive content delivered directly to your inbox.
              </p>
            </div>

            {isSuccess && (
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                <div>
                  <p className="font-medium text-green-700 dark:text-green-400">Successfully subscribed!</p>
                  <p className="text-sm text-green-600 dark:text-green-500">Thank you for joining our newsletter.</p>
                </div>
              </div>
            )}

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-700 dark:text-red-400 text-sm animate-in fade-in slide-in-from-top-2 duration-300">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  disabled={isLoading}
                  className="h-11"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  disabled={isLoading}
                  className="h-11"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">
                  Message
                </Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what you're interested in..."
                  disabled={isLoading}
                  className="min-h-[120px] resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading || !name.trim() || !email.trim() || !message.trim()}
                className="w-full h-11 bg-gradient-to-br from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 shadow-lg text-base font-medium"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    <Mail className="h-4 w-4 mr-2" />
                    Subscribe to Newsletter
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By subscribing, you agree to receive our newsletter and promotional content. You can unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
