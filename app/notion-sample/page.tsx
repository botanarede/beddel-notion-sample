"use client";

import { useChat, type UIMessage } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { Send, User, Bot, Sparkles, Loader2, HelpCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function NotionSamplePage() {
  const setupDatabase = async () => {
  const pageId = prompt('Enter Notion parent page ID:');
  if (!pageId) return;
  
  const res = await fetch('/api/beddel/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      agentId: 'notion-create-database',  // Different agent!
      parentPageId: pageId,
    }),
  });
  
  const data = await res.json();

  if (data.finalOutput?.databaseId) {
    localStorage.setItem('BEDDEL_NOTION_DB_ID', data.finalOutput.databaseId);
    alert('Database created successfully!');
  }
};

  return (
    <div className="flex h-screen w-full flex-col bg-background text-foreground font-sans selection:bg-primary/20">
      <a href="#" onClick={(e) => { e.preventDefault(); setupDatabase(); }} >Criar banco de dados</a>
    </div>
  );
}
