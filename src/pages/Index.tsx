import Header from "@/components/Header";
import ChatMessage from "@/components/ChatMessage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Index = () => {
  const [inputMessage, setInputMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    
    // Here we would typically handle sending the message
    // For now, we'll just clear the input
    setInputMessage("");
  };

  return (
    <div className="chat-container">
      <Header />
      <main className="flex-1 px-4 overflow-y-auto">
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
      <form onSubmit={handleSubmit} className="sticky bottom-0 p-4 bg-background/80 backdrop-blur-sm border-t border-aiMessage/20">
        <div className="flex gap-2 max-w-3xl mx-auto">
          <Input
            type="text"
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="flex-1 bg-container border-aiMessage text-aiMessage placeholder:text-aiMessage/50"
          />
          <Button 
            type="submit"
            className="bg-aiMessage text-background hover:bg-aiMessage/90 font-arcade text-sm"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Index;