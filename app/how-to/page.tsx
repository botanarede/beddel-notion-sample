"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Sparkles, BookOpen, Code2, FileJson, Settings, MessageSquare } from "lucide-react";

export default function HowToPage() {
  return (
    <div className="flex h-screen w-full flex-col bg-background text-foreground font-sans">
      <header className="sticky top-0 z-10 flex items-center justify-between border-b bg-background/80 px-6 py-4 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
            <BookOpen className="h-5 w-5" />
          </div>
          <h1 className="text-lg font-semibold tracking-tight">Beddel Protocol Tutorial</h1>
        </div>
      </header>

      <main className="flex-1 overflow-hidden">
        <ScrollArea className="h-full">
          <article className="max-w-3xl mx-auto px-6 py-8 prose prose-invert">
            <div className="space-y-12">
              {/* Introdução */}
              <section>
                <h1 className="text-3xl font-bold tracking-tight mb-4">Entendendo o Beddel Protocol</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  O Beddel Protocol é um framework inovador que simplifica a criação de agentes de IA em aplicações Next.js.
                  Neste tutorial, vamos explorar como implementamos um chatbot completo utilizando este protocolo,
                  desmembrando cada componente e explicando como eles trabalham juntos.
                </p>
              </section>

              {/* Visão Geral da Arquitetura */}
              <section>
                <h2 className="text-2xl font-bold tracking-tight mb-4">Visão Geral da Arquitetura</h2>
                <p className="text-muted-foreground mb-6">
                  O Beddel Protocol funciona através de três componentes principais:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-pink-500 font-bold">1.</span>
                    <span><strong>Backend Handler:</strong> Processa requisições de chat no servidor</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-pink-500 font-bold">2.</span>
                    <span><strong>Agent Configuration:</strong> Define o comportamento do agente em YAML</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-pink-500 font-bold">3.</span>
                    <span><strong>Frontend Transport:</strong> Comunica com o servidor via AI SDK</span>
                  </li>
                </ul>
              </section>

              {/* FAQ - Arquivos */}
              <section>
                <h2 className="text-2xl font-bold tracking-tight mb-6">Detalhamento dos Arquivos</h2>

                {/* Arquivo 1 */}
                <div className="mb-8 pb-8 border-b border-border">
                  <div className="flex items-start gap-3 mb-4">
                    <Code2 className="h-6 w-6 text-pink-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold">app/api/beddel/chat/route.ts</h3>
                      <p className="text-sm text-muted-foreground mt-1">API Route Handler</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-foreground mb-2">Propósito:</p>
                      <p className="text-muted-foreground">
                        Este arquivo é o ponto de entrada do servidor para requisições de chat. Ele utiliza o handler do Beddel Protocol para processar mensagens de forma automática e segura.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-foreground mb-2">Conteúdo:</p>
                      <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 overflow-x-auto my-2">
                        <pre className="text-sm font-mono text-slate-100">
{`import { createBeddelHandler } from 'beddel/server';

export const POST = createBeddelHandler({
  agentsPath: 'agents'
});`}
                        </pre>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-foreground mb-2">Como Funciona:</p>
                      <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                        <li><code className="bg-slate-950 px-2 py-1 rounded text-slate-100">createBeddelHandler()</code> - Cria um handler HTTP automaticamente</li>
                        <li><code className="bg-slate-950 px-2 py-1 rounded text-slate-100">agentsPath: 'agents'</code> - Localiza os arquivos de configuração dos agentes</li>
                        <li><code className="bg-slate-950 px-2 py-1 rounded text-slate-100">export const POST</code> - Aceita requisições POST do frontend</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold text-foreground mb-2">Fluxo:</p>
                      <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                        <li>Frontend envia mensagem para <code className="bg-slate-950 px-2 py-1 rounded text-slate-100">/api/beddel/chat</code></li>
                        <li>Handler recebe o agentId e mensagens</li>
                        <li>Carrega a configuração do agente em <code className="bg-slate-950 px-2 py-1 rounded text-slate-100">agents/assistant.yaml</code></li>
                        <li>Executa o workflow definido</li>
                        <li>Retorna a resposta em stream (se configurado)</li>
                      </ol>
                    </div>
                  </div>
                </div>

                {/* Arquivo 2 */}
                <div className="mb-8 pb-8 border-b border-border">
                  <div className="flex items-start gap-3 mb-4">
                    <FileJson className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold">agents/assistant.yaml</h3>
                      <p className="text-sm text-muted-foreground mt-1">Agent Configuration</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-foreground mb-2">Propósito:</p>
                      <p className="text-muted-foreground">
                        Define toda a lógica e comportamento do agente de IA. Este arquivo YAML descreve como o agente deve processar requisições e interagir com modelos de linguagem.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-foreground mb-2">Conteúdo:</p>
                      <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 overflow-x-auto my-2">
                        <pre className="text-sm font-mono text-slate-100">
{`metadata:
  name: "Q&A Assistant"
  version: "1.0.0"

workflow:
  - id: "chat-interaction"
    type: "llm"
    config:
      model: "gemini-2.0-flash-exp"
      stream: true
      system: "You are a helpful assistant..."
      messages: "$input.messages"
      tools: []
    result: "llmOutput"`}
                        </pre>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-foreground mb-2">Estrutura Explicada:</p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li><strong>metadata:</strong> Informações sobre o agente (nome, versão)</li>
                        <li><strong>workflow:</strong> Array de passos que o agente executa</li>
                        <li><strong>id:</strong> Identificador único do passo no workflow</li>
                        <li><strong>type: "llm":</strong> Tipo de step (integração com modelo de linguagem)</li>
                        <li><strong>model:</strong> Qual modelo de IA será usado (Gemini 2.0 Flash)</li>
                        <li><strong>stream: true:</strong> Ativa respostas em tempo real (streaming)</li>
                        <li><strong>system:</strong> Instruções do sistema para o modelo</li>
                        <li><strong>messages: "$input.messages":</strong> Referência às mensagens da conversa</li>
                        <li><strong>tools: []:</strong> Ferramentas externas (vazio neste exemplo)</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold text-foreground mb-2">Variáveis Dinâmicas:</p>
                      <p className="text-muted-foreground mb-2">
                        O uso de <code className="bg-slate-950 px-2 py-1 rounded text-slate-100">$input</code> permite acessar dados da requisição:
                      </p>
                      <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                        <li><code className="bg-slate-950 px-2 py-1 rounded text-slate-100">$input.messages</code> - Array de mensagens do usuário</li>
                        <li><code className="bg-slate-950 px-2 py-1 rounded text-slate-100">$input.userId</code> - ID do usuário (quando disponível)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Arquivo 3 */}
                <div className="mb-8 pb-8 border-b border-border">
                  <div className="flex items-start gap-3 mb-4">
                    <MessageSquare className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold">app/page.tsx</h3>
                      <p className="text-sm text-muted-foreground mt-1">Frontend Chat Component</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-foreground mb-2">Propósito:</p>
                      <p className="text-muted-foreground">
                        Componente React que renderiza a interface de chat no navegador. Gerencia o estado da conversa, envia mensagens e exibe respostas.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-foreground mb-2">Configuração Chave:</p>
                      <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 overflow-x-auto my-2">
                        <pre className="text-sm font-mono text-slate-100">
{`const { messages, sendMessage, status } = useChat({
  transport: new DefaultChatTransport({
    api: "/api/beddel/chat",
    body: {
      agentId: "assistant",
    },
  }),
});`}
                        </pre>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-foreground mb-2">Como Comunica com o Backend:</p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li><code className="bg-slate-950 px-2 py-1 rounded text-slate-100">useChat()</code> - Hook do AI SDK que gerencia conversas</li>
                        <li><code className="bg-slate-950 px-2 py-1 rounded text-slate-100">DefaultChatTransport</code> - Configura a comunicação HTTP</li>
                        <li><code className="bg-slate-950 px-2 py-1 rounded text-slate-100">api: "/api/beddel/chat"</code> - Endpoint do servidor Beddel</li>
                        <li><code className="bg-slate-950 px-2 py-1 rounded text-slate-100">agentId: "assistant"</code> - Qual agente usar (referencia o arquivo YAML)</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold text-foreground mb-2">Estados Gerenciados:</p>
                      <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                        <li><code className="bg-slate-950 px-2 py-1 rounded text-slate-100">messages</code> - Histórico da conversa</li>
                        <li><code className="bg-slate-950 px-2 py-1 rounded text-slate-100">sendMessage()</code> - Função para enviar novas mensagens</li>
                        <li><code className="bg-slate-950 px-2 py-1 rounded text-slate-100">status</code> - Estado da requisição (idle, submitted, streaming)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Fluxo de Dados */}
              <section>
                <h2 className="text-2xl font-bold tracking-tight mb-6">Fluxo Completo de uma Mensagem</h2>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-500/10 text-pink-500 font-bold flex-shrink-0">1</div>
                    <div>
                      <p className="font-semibold text-foreground">Usuário digita mensagem</p>
                      <p className="text-sm text-muted-foreground mt-1">Interface React captura o input do usuário</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-500/10 text-pink-500 font-bold flex-shrink-0">2</div>
                    <div>
                      <p className="font-semibold text-foreground">sendMessage() é chamado</p>
                      <p className="text-sm text-muted-foreground mt-1">Hook <code className="bg-slate-950 px-2 py-1 rounded text-slate-100">useChat</code> envia via HTTP POST</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-500/10 text-pink-500 font-bold flex-shrink-0">3</div>
                    <div>
                      <p className="font-semibold text-foreground">Requisição chega em /api/beddel/chat</p>
                      <p className="text-sm text-muted-foreground mt-1">Handler Beddel recebe e valida a requisição</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-500/10 text-pink-500 font-bold flex-shrink-0">4</div>
                    <div>
                      <p className="font-semibold text-foreground">Carrega agents/assistant.yaml</p>
                      <p className="text-sm text-muted-foreground mt-1">Handler localiza e lê a configuração do agente</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-500/10 text-pink-500 font-bold flex-shrink-0">5</div>
                    <div>
                      <p className="font-semibold text-foreground">Executa workflow LLM</p>
                      <p className="text-sm text-muted-foreground mt-1">Envia mensagens para Gemini 2.0 Flash com streaming</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-500/10 text-pink-500 font-bold flex-shrink-0">6</div>
                    <div>
                      <p className="font-semibold text-foreground">Resposta é streamada</p>
                      <p className="text-sm text-muted-foreground mt-1">Dados chegam em tempo real via HTTP streaming</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-500/10 text-pink-500 font-bold flex-shrink-0">7</div>
                    <div>
                      <p className="font-semibold text-foreground">Interface atualiza</p>
                      <p className="text-sm text-muted-foreground mt-1">Mensagem é exibida no chat conforme chega</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Pontos-Chave */}
              <section>
                <h2 className="text-2xl font-bold tracking-tight mb-6">Pontos-Chave do Beddel Protocol</h2>

                <div className="grid grid-cols-1 gap-4">
                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-bold mb-2 flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-yellow-500" />
                      Simplicidade Declarativa
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Você descreve o comportamento em YAML, sem precisar escrever lógica de requisições HTTP manualmente
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-bold mb-2 flex items-center gap-2">
                      <Settings className="h-5 w-5 text-blue-500" />
                      Zero-Configuration Setup
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      O handler detecta automaticamente agentes no diretório especificado, sem configuração adicional
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-bold mb-2 flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-pink-500" />
                      Streaming Nativo
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Respostas em tempo real sem precisar de websockets ou configuração complexa
                    </p>
                  </div>
                </div>
              </section>

              {/* Conclusão */}
              <section>
                <h2 className="text-2xl font-bold tracking-tight mb-4">Conclusão</h2>
                <p className="text-muted-foreground leading-relaxed">
                  O Beddel Protocol reduz significativamente a complexidade de criar agentes de IA em Next.js.
                  Em apenas 3 arquivos, temos um chatbot totalmente funcional com streaming, gerenciamento de histórico
                  e integração com modelos de linguagem avançados. A abordagem declarativa via YAML torna fácil modificar
                  comportamentos, adicionar novas ferramentas ou escalar para múltiplos agentes.
                </p>
              </section>

              <div className="py-8 text-center text-sm text-muted-foreground border-t border-border">
                <p>Tutorial do Beddel Protocol • Construído com Next.js e Tailwind CSS</p>
              </div>
            </div>
          </article>
        </ScrollArea>
      </main>
    </div>
  );
}
