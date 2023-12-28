"use client";
import { useEffect, useState } from "react";
import { Quiz } from "@/app/_hooks/useQuiz";

export interface ICard {
  quiz?: Quiz,
  flipped: boolean
}

interface Props {
  quiz?: Quiz;
  handleOnClickFlip: (isFlipped: boolean) => void;
}

export default function Card({ card, handleOnClickFlip }: Props) {
  const [answer, setAnswer] = useState("");

  const findAnswer = () => {
    let answerIndex = 0;
    if (card) {
      Object.values(card.quiz.correct_answers).forEach((value, index) => {
        if (value == "true") {
          answerIndex = index;
        }
      });

      Object.values(card.quiz.answers).forEach((value, index) => {
        if (index === answerIndex && value !== null) {
          setAnswer(value);
        }
      });
    }
  };

  const handleOnClick = () => {
    if (card.quiz !== undefined) {
      handleOnClickFlip(!card.flipped);
    }
  };

  useEffect(() => {
    findAnswer();
  }, [card]);

  return (
    <div
      className="flex flex-col w-80 h-96 rounded-lg justify-center items-center [perspective:1000px]"
      onClick={handleOnClick}
    >
      <div
          className={
              "relative w-full h-full transition-all rounded-lg shadow-lg bg-orange-200 duration-500 [transform-style:preserve-3d] [backface-visibility:hidden] " +
              (card.flipped ? "[transform:rotateY(180deg)]" : "")
          }
      >
        <div className="absolute inset-0 overflow-y-auto">
          {card ? (
            <div className="px-6 py-4">
              <p className="text-gray-700 text-base font-bold text-xl">
                {card.quiz.question}
              </p>
              <br />
              <ul className="list-disc pl-6 text-xl">
                {Object.values(card.quiz.answers).map(
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
          {card ? (
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
