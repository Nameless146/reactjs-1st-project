
import React from "react"
import Card from "./cardpart2"


function Cards(){
    return(
        <>





<div className="">


     {/* First row of cards */}
    <div className="  grid place-items-center justify-center grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6 ">
        <Card
          imageSrc="../public/fire fighters photo1.png" 
          title="Whitechapel Rd." 
          description="Tulare County,  Los Angles, CA 23415" 
          para = "$1,456,654.00"
        />
        <Card
          imageSrc="../public/b91107b5f31bbb9b5908cfce2154f879.png" 
          title="Whitechapel Rd." 
           description="Tulare County,  Los Angles, CA 23415" 
          para = "$1,456,654.00"
        />
        <Card
          imageSrc="../public/Rectangle 42010.png" 
          title="Tulare County" 
          description="Tulare County,  Los Angles, CA 23415" 
          para = "$1,456,654.00"
        />
        <Card
          imageSrc="../public/Rectangle 42010 (1).png" 
          title="Tulare County" 
          description="Tulare County,  Los Angles, CA 23415" 
          para = "$1,456,654.00"
        />
      </div>

      {/* Second row of cards */}
     <div className=" grid  place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card 
          imageSrc="../public/Rectangle 42010 (2).png" 
          title="Tulare County" 
          description="Tulare County,  Los Angles, CA 23415" 
          para = "$1,456,654.00"
        />
        <Card
          imageSrc="../public/Rectangle 42010 (3).png" 
          title="Tulare County" 
          description="Tulare County,  Los Angles, CA 23415" 
          para = "$1,456,654.00"
        />
        
      </div>
   
      
      
      
      </div>
     </>

        
    )
}



export default Cards