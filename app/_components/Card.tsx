"use client";
import { useEffect, useState } from "react";
import { Quiz } from "../(routes)/dashboard/FlashCard";

interface Props {
  quiz?: Quiz;
}

export default function Card({ quiz }: Props) {
  const [flip, setFlip] = useState(false);
  const [answer, setAnswer] = useState("");

  const findAnswer = () => {
    let answerIndex = 0;
    if (quiz) {
      Object.values(quiz.correct_answers).forEach((value, index) => {
        if (value == "true") {
          answerIndex = index;
        }
      });

      Object.values(quiz.answers).forEach((value, index) => {
        if (index === answerIndex && value !== null) {
          setAnswer(value);
        }
      });
    }
  };

  const handleOnClick = () => {
    if (quiz !== undefined) {
      setFlip(!flip);
    }
  };

  useEffect(() => {
    findAnswer();
  }, [quiz]);

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
          {quiz ? (
            <div className="px-6 py-4">
              <p className="text-gray-700 text-base font-bold text-xl">
                {quiz.question}
              </p>
              <br />
              <ul className="list-disc pl-6 text-xl">
                {Object.values(quiz.answers).map(
                  (value, index) => value && <li key={index}>{value}</li>
                )}
              </ul>
            </div>
          ) : (
            <div className="px-6 py-4">
              <p className="text-gray-700 text-base font-bold text-xl">
                No quiz available!
              </p>
            </div>
          )}
        </div>
        <div className="absolute inset-0 rounded-lg shadow-lg bg-orange-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          {quiz ? (
            <div className="px-6 py-4">
              <p className="text-gray-700 text-base font-bold text-xl">
                {answer}
              </p>
            </div>
          ) : (
            <div className="px-6 py-4">
              <p className="text-gray-700 text-base font-bold text-xl">
                No quiz available!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
