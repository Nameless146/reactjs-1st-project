import React from 'react';

const Card = ({ imageSrc, title, description , para}) => {
  return (

    <div className=" relative mt-8 ml-3 grid max-w-sm rounded overflow-hidden shadow-lg">
    
      <img className=" w-80 h-72  bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl" src={imageSrc} alt="Card image" />

      < div className="  flex gap-1 bg-white shadow-lg w-28 absolute top-3 ml-48 h-12 rounded-3xl  " >

<img className="mt-4 ml-4 m h-5 " src="../../public/cloud.png" alt="" />

 <p className="text-sm ml-1 font-bold mt-4 ">Blizzard</p></div>




      <div className="px-6 py-4">
        <p className="text-xl font-bold mb-2">{title}</p>
        <p className="text-md text-[#71717A]">
          {description}  </p>
         <p className="text-2xl font-bold">{para}</p>

      </div>
    </div>





  );
};

export default Card;
