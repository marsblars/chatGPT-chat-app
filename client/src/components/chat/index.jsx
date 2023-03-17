import React from "react";
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";
import Header from "@/components/customHeader";
import StandardMessageForm from "@/components/customMessageForms/StandardMessageForm";
const Chat = () => {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    "marbles",
    "Marselo1"
  )

  return <div style={{flexBasis: "100%"}}>
    <MultiChatSocket {...chatProps} />
    <MultiChatWindow
    {...chatProps}
    style={{height: "100vh"}} 
    renderChatHeader={(chat) => <Header chat={chat} />} 
    renderMessageForm={(props) => {
      return (
        <StandardMessageForm></StandardMessageForm>
      )
    }}
    />    
    </div>;
};

export default Chat;
