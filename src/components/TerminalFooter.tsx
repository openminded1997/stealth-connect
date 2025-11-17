import { useEffect, useState } from 'react';

const TERMINAL_MESSAGES = [
  'Initializing secure connection...',
  'Establishing encrypted tunnel...',
  'Connecting to VPN server...',
  'Verifying credentials...',
  'Negotiating encryption protocols...',
  'Configuring routing tables...',
  'Connection established successfully!',
  'Your IP is now protected.',
  'All traffic encrypted with AES-256.',
  'Disconnecting...',
];

export const TerminalFooter = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessages(prev => {
        const newMessages = [...prev, TERMINAL_MESSAGES[currentIndex]];
        return newMessages.slice(-3); // Keep only last 3 messages
      });
      
      setCurrentIndex(prev => (prev + 1) % TERMINAL_MESSAGES.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="mt-4 glass dark:glass-dark border border-border/50 rounded-lg p-3 font-mono text-xs overflow-hidden">
      <div className="space-y-1">
        {messages.map((message, index) => (
          <div
            key={`${index}-${message}`}
            className="animate-fade-in text-muted-foreground flex items-center gap-2"
          >
            <span className="text-primary">{'>'}</span>
            <span className="text-green-500">[VPN]</span>
            <span className="truncate">{message}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
