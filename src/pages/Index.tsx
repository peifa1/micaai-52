import Header from "@/components/Header";
import ChatMessage from "@/components/ChatMessage";

const Index = () => {
  return (
    <div className="chat-container">
      <Header />
      <main className="flex-1 px-4">
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
    </div>
  );
};

export default Index;