'use client';

import { useState } from 'react';
import { HiX, HiChat } from 'react-icons/hi';
import { FaPaperPlane } from 'react-icons/fa';

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hello! 👋 Welcome to EdgesOf Solutions. How can we help you today?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const quickReplies = [
    'I need a quote',
    'Tell me about your services',
    'Schedule a demo',
    'Talk to sales',
  ];

  const handleSend = () => {
    if (!message.trim()) return;

    const newMessage = {
      type: 'user',
      text: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, newMessage]);
    setMessage('');

    // Auto-reply after 1 second
    setTimeout(() => {
      const botReply = {
        type: 'bot',
        text: 'Thanks for your message! Our team will get back to you shortly. For immediate assistance, please call us at +91 99994 56126 or email kumar@edgesof.com',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botReply]);
    }, 1000);
  };

  const handleQuickReply = (reply: string) => {
    setMessage(reply);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-r from-cyan-glow to-aqua-bright rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          aria-label="Open chat"
        >
          <HiChat className="w-7 h-7 text-navy-dark" />
          <span className="absolute left-16 bg-navy-dark text-white px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
            Chat with us
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 left-6 z-50 w-full max-w-sm bg-navy-dark border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-glow to-aqua-bright p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <HiChat className="w-6 h-6 text-cyan-glow" />
              </div>
              <div>
                <div className="text-navy-dark font-bold">EdgesOf Support</div>
                <div className="text-navy-dark/70 text-xs">Online now</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-navy-dark hover:bg-white/20 rounded-lg p-2 transition-colors"
            >
              <HiX className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4 bg-navy-medium/30">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    msg.type === 'user'
                      ? 'bg-gradient-to-r from-cyan-glow to-aqua-bright text-navy-dark'
                      : 'bg-navy-dark border border-white/10 text-white'
                  }`}
                >
                  <div className="text-sm">{msg.text}</div>
                  <div
                    className={`text-xs mt-1 ${
                      msg.type === 'user' ? 'text-navy-dark/70' : 'text-gray-400'
                    }`}
                  >
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          {messages.length === 1 && (
            <div className="px-4 py-2 border-t border-white/10">
              <div className="text-xs text-gray-400 mb-2">Quick replies:</div>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs px-3 py-1.5 bg-navy-dark border border-cyan-glow/30 text-cyan-glow rounded-full hover:bg-cyan-glow/10 transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 bg-navy-medium border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-cyan-glow transition-colors text-sm"
              />
              <button
                onClick={handleSend}
                className="w-10 h-10 bg-gradient-to-r from-cyan-glow to-aqua-bright rounded-full flex items-center justify-center hover:shadow-lg transition-all"
              >
                <FaPaperPlane className="w-4 h-4 text-navy-dark" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
