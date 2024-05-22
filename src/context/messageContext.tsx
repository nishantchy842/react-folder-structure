import React, { createContext, useState, ReactNode } from "react";

type Message = {
  message: string;
  success: boolean | null;
};

interface MessageContextType {
  message: Message;
  setMessage: React.Dispatch<React.SetStateAction<Message>>;
}

const MessageContext = createContext<MessageContextType>({
  message: { message: "", success: null },
  setMessage: () => {},
});

const MessageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [message, setMessage] = useState<Message>({
    message: "",
    success: null,
  });

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {children}
    </MessageContext.Provider>
  );
};

export { MessageContext, MessageProvider };
