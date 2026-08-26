import React, { useState } from "react";
import { MdOutlineMessage } from "react-icons/md";

const OnlineChatButton = () => {
  return (
    <div>
      <button className="fixed bottom-5 right-5 p-3 bg-[#79043C] text-white border flex flex-row gap-2 items-center justify-center">
        <div className="text-2xl">
          <MdOutlineMessage />
        </div>
        <span className="md:flex hidden">
        Online Chat
        </span>
      </button>
    </div>
  );
};

export default OnlineChatButton;
