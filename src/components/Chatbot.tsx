import { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send, X, Bot, User, Loader2 } from 'lucide-react';
import apiClient from '../api/client';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcomeDot, setShowWelcomeDot] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [previousInteractionId, setPreviousInteractionId] = useState<string | null>(null);

  // Initialize welcome message
  useEffect(() => {
    setMessages([
      {
        id: 'welcome',
        role: 'model',
        text: "Hi there! 👋 I am KiwiBot, KiwiClicks' growth assistant. Ask me anything about our SEO, Google Business listings, speed-optimized web design, WhatsApp automations, or how we can help grow your business in Delhi NCR!",
        timestamp: new Date()
      }
    ]);

    // Show a subtle notification dot on chatbot bubble after 5s
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowWelcomeDot(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Scroll to bottom whenever messages list changes
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setShowWelcomeDot(false);
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessageId = `msg-${Date.now()}`;
    const newMessages: ChatMessage[] = [
      ...messages,
      {
        id: userMessageId,
        role: 'user',
        text: text,
        timestamp: new Date()
      }
    ];

    setMessages(newMessages);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await apiClient.post('/chat', {
        message: text,
        previousInteractionId: previousInteractionId || ''
      });

      const replyText = response.data.data.reply;
      const nextInteractionId = response.data.data.interactionId;

      if (nextInteractionId) {
        setPreviousInteractionId(nextInteractionId);
      }

      setMessages(prev => [
        ...prev,
        {
          id: `reply-${Date.now()}`,
          role: 'model',
          text: replyText,
          timestamp: new Date()
        }
      ]);
    } catch (error) {
      console.error('[Chatbot Error] Failed to send chat message:', error);
      // Fail gracefully: show local fallback reply
      setMessages(prev => [
        ...prev,
        {
          id: `reply-err-${Date.now()}`,
          role: 'model',
          text: "I'm experiencing a brief connection drop, but I'm happy to help! You can call or text our founder Bandana Kumari directly on WhatsApp at +91 82100 77633 to discuss digital growth or Local SEO audits.",
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  const suggestions = [
    "SEO & Google Maps Pack",
    "Speed Web Development",
    "WhatsApp / CRM Automation",
    "Connect on WhatsApp"
  ];

  return (
    <div className={`fixed z-50 select-none font-sans transition-all duration-300 ${
      isOpen 
        ? 'inset-0 sm:inset-auto sm:bottom-6 sm:right-6 sm:left-auto sm:top-auto' 
        : 'bottom-6 right-6'
    }`}>
      {/* Floating Chat Trigger Button */}
      {!isOpen && (
        <div className="flex items-center gap-3 pointer-events-auto">
          {/* Attraction Bubble */}
          <div
            className={`hidden sm:block bg-white dark:bg-card-bg text-text-primary border border-border-color/20 text-xs font-semibold px-3.5 py-2.5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all duration-500 transform origin-right ${
              showWelcomeDot 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 translate-x-4 scale-95 pointer-events-none'
            }`}
          >
            <div className="relative flex items-center gap-1.5 whitespace-nowrap">
              <span className="text-accent-orange font-black">Hey!</span>
              <span>Need help? Chat with us! 💬</span>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowWelcomeDot(false);
                }}
                className="ml-1.5 text-text-secondary hover:text-text-primary font-bold cursor-pointer inline-block"
                aria-label="Close attraction bubble"
              >
                ×
              </button>
            </div>
          </div>

          <button
            onClick={handleToggle}
            className="w-14 h-14 rounded-full bg-accent-orange text-white flex items-center justify-center shadow-[0_6px_20px_rgba(255,138,61,0.45)] hover:shadow-[0_8px_30px_rgba(255,138,61,0.65)] hover:scale-108 active:scale-95 transition-all duration-300 relative group cursor-pointer border border-white/10 shrink-0"
            aria-label="Open AI Assistant"
          >
            <MessageSquare className="w-6 h-6 group-hover:rotate-6 transition-transform" />
          </button>
        </div>
      )}

      {/* Expanded Chat Dialog Panel */}
      {isOpen && (
        <div className="w-full h-full sm:w-[370px] sm:h-[480px] bg-card-bg sm:border-2 border-border-color sm:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden animate-slide-up transition-theme">
          
          {/* Chat Header */}
          <div className="bg-accent-emerald text-white px-5 py-4 flex items-center justify-between border-b border-border-color/30">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center relative">
                <Bot className="w-5 h-5 text-white" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#25D366] border border-accent-emerald animate-pulse" />
              </div>
              <div>
                <h4 className="font-serif italic font-bold text-sm tracking-wide">KiwiBot AI</h4>
                <p className="text-[10px] text-white/70 font-mono font-medium tracking-wider uppercase">Delhi Growth Agent</p>
              </div>
            </div>
            <button
              onClick={handleToggle}
              className="p-1.5 hover:bg-white/10 rounded-lg transition-colors cursor-pointer text-white/80 hover:text-white"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Message Logs Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar bg-page-bg/40 dark:bg-page-bg/15">
            {messages.map((m) => {
              const isBot = m.role === 'model';
              return (
                <div
                  key={m.id}
                  className={`flex gap-2.5 max-w-[85%] ${isBot ? 'mr-auto text-left' : 'ml-auto flex-row-reverse text-right'}`}
                >
                  <div className={`w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-[10px] font-bold ${
                    isBot ? 'bg-accent-emerald text-white' : 'bg-accent-orange text-white'
                  }`}>
                    {isBot ? <Bot className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
                  </div>
                  <div className={`rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed font-sans ${
                    isBot
                      ? 'bg-card-bg border border-border-color/10 text-text-primary shadow-sm rounded-tl-sm'
                      : 'bg-accent-orange text-white rounded-tr-sm font-semibold'
                  }`}>
                    {m.text}
                  </div>
                </div>
              );
            })}

            {/* AI Response Loader */}
            {isLoading && (
              <div className="flex gap-2.5 max-w-[80%] mr-auto text-left">
                <div className="w-6 h-6 rounded-full bg-accent-emerald text-white shrink-0 flex items-center justify-center">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="bg-card-bg border border-border-color/10 rounded-2xl px-3.5 py-2.5 text-xs text-text-secondary flex items-center gap-1.5 shadow-sm rounded-tl-sm">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-accent-green" />
                  <span>KiwiBot is thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestion Chips */}
          {messages.length === 1 && !isLoading && (
            <div className="px-4 py-2 border-t border-border-color/10 bg-page-bg/25">
              <p className="text-[10px] font-mono text-text-secondary uppercase tracking-widest font-bold mb-2 text-left">Suggested Topics:</p>
              <div className="flex flex-wrap gap-1.5">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSuggestionClick(s)}
                    className="text-[10px] font-sans font-bold px-2.5 py-1 bg-card-bg hover:bg-hover-highlight border border-border-color/20 text-text-secondary rounded-lg transition-all cursor-pointer whitespace-nowrap"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Chat Form Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputMessage);
            }}
            className="p-3 border-t border-border-color/15 bg-card-bg flex gap-2 items-center"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask me about SEO, website design..."
              className="flex-1 bg-page-bg border border-border-color/10 focus:border-accent-orange text-xs rounded-xl px-3.5 py-2.5 focus:outline-none text-text-primary font-medium"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!inputMessage.trim() || isLoading}
              className="w-9 h-9 shrink-0 rounded-xl bg-accent-emerald text-white flex items-center justify-center hover:bg-accent-green transition-colors cursor-pointer disabled:opacity-40"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
}
