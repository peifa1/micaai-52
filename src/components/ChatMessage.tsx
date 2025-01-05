import React from "react";

interface ChatMessageProps {
  isAI?: boolean;
  message: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ isAI = false, message }) => {
  return (
    <div className={`message ${isAI ? "message-ai" : "message-user"}`}>
      <div className="flex items-start gap-2">
        <span className="font-arcade text-sm">
          {isAI ? "😛" : "<"}
        </span>
        <p className="font-arcade text-sm leading-relaxed">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;