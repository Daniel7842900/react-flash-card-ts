"use client";
import { useState } from "react";

export default function Card() {
  const [flip, setFlip] = useState(false);

  const handleOnClick = () => {
    setFlip(!flip);
  };

  return (
    <div
      className="flex flex-col overflow-hidden w-80 h-96 rounded-lg justify-center items-center [perspective:1000px]"
      onClick={handleOnClick}
    >
      <div
        className={
          "relative w-full h-full transition-all rounded-lg shadow-lg bg-orange-200 duration-500 [transform-style:preserve-3d] [backface-visibility:hidden] " +
          (flip ? "[transform:rotateY(180deg)]" : "")
        }
      >
        <div className="absolute inset-0">
          <div className="px-6 py-4">
            <p className="text-gray-700 text-base font-bold text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
              perferendis eaque, exercitationem praesentium nihil. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,
              nulla! Maiores et perferendis eaque, exercitationem praesentium
              nihil.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 rounded-lg shadow-lg bg-orange-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="px-6 py-4">
            <p className="text-gray-700 text-base font-bold text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
