import React from "react";

const InfoCard = ({text, image}) => {



  return (
    <div>
      <div className="h-[30rem] w-[20rem] scale-110 lg:scale-100=5 flex flex-col gap-10 items-center justify-center bg-black bg-opacity-85 border-[1px] border-white rounded-3xl relative">
        <div className="h-[8rem] w-[9rem] absolute -translate-y-[15rem] p-2 flex items-center justify-center bg-white overflow-hidden rounded-[1rem]">
          <img className="rounded-full" src={`${image}`} alt="" />
        </div>
        <div className="text-white font-semibold w-[14rem] text-center break-words pt-12">
          {text}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
