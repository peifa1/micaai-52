import Header from "@/components/Header";
import ChatMessage from "@/components/ChatMessage";
import MatrixRain from "@/components/MatrixRain";
import { useState } from "react";

const Index = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle message submission here
    setMessage("");
  };

  return (
    <div className="chat-container relative">
      <MatrixRain />
      <div className="relative z-10">
        <Header />
        <main className="flex-1 px-4 mb-20">
          <ChatMessage
            isAI
            message="Hello! I'm MICA, your friendly AI assistant. How can I help you today?"
          />
          <ChatMessage
            message="Hi MICA! Can you tell me more about yourself?"
          />
          <ChatMessage
            isAI
            message="I'm a minimalist AI chatbot designed to help users with various tasks while maintaining a clean and aesthetic interface. I love using emojis and keeping things simple! 😛"
          />
        </main>
        <form 
          onSubmit={handleSubmit}
          className="fixed bottom-0 left-0 right-0 p-4 bg-black/50 backdrop-blur-sm"
        >
          <div className="max-w-3xl mx-auto flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-container p-2 rounded border border-heading text-white font-arcade"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-heading text-black rounded font-arcade hover:opacity-80 transition-opacity"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;