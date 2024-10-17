import React, { useState } from 'react';

function Chat() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Toggle the chat box visibility
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="fixed bottom-5 right-5">
      {/* Chat Icon */}
      <div
        className="  p-3 rounded-t-xl cursor-pointer "
        onClick={toggleChat}
      >
        <img className='w-12' src="../../public/chatbox.png" alt="" />
      </div>

      {/* Chat Box */}
      {isChatOpen && (
        <div className="bg-white w-80 mb-0 border border-gray-300 rounded-t-xl shadow-lg ">
          {/* Chat Header */}
          <div className="bg-[#F26922] h-16  font-semibold text-xl rounded-t-xl text-white p-3 flex justify-between items-center">
            <h4 className="text-lg">Chat with Cypher</h4>
            <button
              className="text-white hover:bg-[#F26929] p-1 rounded-full"
              onClick={toggleChat}
            >
              X
            </button>
          </div>

          {/* Chat Body */}
          <div className=" overflow-y-auto ">
          <p className="text-white w-48 h-14 p-2 mt-6 ml-28 bg-[#3F3F46] rounded-md  text-sm">Lorem ipsum dolor sit amet  consectetur adipisicingjui </p>

          <div>
<p className="text-[#71717A] border  w-48 h-14 p-2 mt-6 ml-2 rounded-md  text-sm">Lorem ipsum dolor sit amet  consectetur adipisicingjui </p>
<p className="text-[#71717A] border w-48 h-14 p-2 mt-6 ml-2  rounded-md  text-sm">Lorem ipsum dolor sit amet  consectetur adipisicingjui </p>

</div>

<p className="text-white w-48 h-14 p-2 mt-6 ml-28 bg-[#3F3F46] rounded-md  text-sm">Lorem ipsum dolor sit amet  consectetur adipisicingjui </p>

            {/* Add more chat messages here */}
          </div>

          {/* Chat Input */}
          <div className="p-3  border-gray-200">
          <input type="text" placeholder="Enter your question..." className="p-5 w-72 border h-11 mt-5 " /> 

         <div className="flex ml-4 pt-5 gap-2">
<img className="h-5 mt-1" src="../../public/logo1.png" alt="" />
    <img className="h-6 mt-1" src="../../public/logo2.png" alt="" />
    <img className="h-6 mt-1" src="../../public/logo3.png" alt="" />  
    <button className="bg-[#F26922] text-white h-9 w-20 rounded-2xl ml-24 ">Send</button>
</div>           
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;





{/*

import React, { useState } from 'react';

function Chat() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Toggle the chat box visibility
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="fixed bottom-5 right-5">
      
      <div
        className="bg-blue-500 text-white p-3 rounded-full cursor-pointer shadow-lg"
        onClick={toggleChat}
      >
        💬
      </div>

      
      {isChatOpen && (
        <div className="bg-white w-72 h-96 border border-gray-300 rounded-lg shadow-lg mt-2">
          
          <div className="bg-blue-500 text-white p-3 flex justify-between items-center">
            <h4 className="text-lg">Chat Room</h4>
            <button
              className="text-white hover:bg-blue-600 p-1 rounded-full"
              onClick={toggleChat}
            >
              X
            </button>
          </div>

          
          <div className="p-4 overflow-y-auto h-64">
            <p>Welcome to the chat room!</p>
            {/* Add more chat messages here 
          </div>

         
          <div className="p-3 border-t border-gray-200">
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Type a message..."
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat; */}





