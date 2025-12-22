import { useState } from "react";
import { MessageCircle, X, Send, Bot, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-cta rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-shadow group"
      >
        <MessageCircle className="w-6 h-6 text-primary-foreground group-hover:scale-110 transition-transform" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full flex items-center justify-center">
          <span className="w-2 h-2 bg-success-foreground rounded-full animate-pulse" />
        </span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] bg-card rounded-2xl shadow-2xl border border-border overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-cta p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-foreground">CSPzone Assistant</h4>
                  <p className="text-xs text-primary-foreground/80">Online • Ready to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
              >
                <X className="w-4 h-4 text-primary-foreground" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-80 p-4 overflow-y-auto bg-secondary/30">
              {/* Bot Welcome */}
              <div className="flex gap-3 mb-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-card rounded-2xl rounded-tl-none p-3 shadow-sm max-w-[80%]">
                  <p className="text-sm text-foreground">
                    👋 Hi there! I'm your Freezone setup assistant. I can help you:
                  </p>
                  <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                    <li>• Find the right Freezone for your business</li>
                    <li>• Compare packages and pricing</li>
                    <li>• Understand visa requirements</li>
                    <li>• Guide you through the setup process</li>
                  </ul>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-2">
                <button className="px-3 py-1.5 bg-accent text-accent-foreground text-xs font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                  Best Freezone for e-commerce?
                </button>
                <button className="px-3 py-1.5 bg-accent text-accent-foreground text-xs font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                  How many visas can I get?
                </button>
                <button className="px-3 py-1.5 bg-accent text-accent-foreground text-xs font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                  Documents required?
                </button>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border bg-card">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2.5 bg-secondary rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <Button size="icon" className="rounded-xl">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
