import React, {useContext} from 'react'
import Add from '../img/user-plus-solid.svg'
import Cam from '../img/camera-retro-solid.svg'
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);
  const More = "https://icon-library.com/images/show-more-icon/show-more-icon-3.jpg";
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;