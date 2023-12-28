"use client";
import { useEffect, useState } from "react";
import Card, {ICard} from "../../_components/Card";
import CardNavigation from "../../_components/CardNavigation";
import CardSkeleton from "@/app/_components/CardSkeleton";
import CardContainer from "@/app/_components/CardContainer";
import Loading from "@/app/_components/Loading";
import useQuiz, { Quiz } from "@/app/_hooks/useQuiz";

export default function FlashCard() {
  const { data, error, isLoading } = useQuiz();
  const [currentCard, setCurrentCard] = useState<ICard | undefined>();
  const [currentIdx, setCurrentIdx] = useState<number>(1);

  useEffect(() => {
    if (data.length > 0) {
      const card = {
        quiz: data[0],
        flipped: false
      }
      setCurrentCard(card);
    }
  }, [data]);

  const handleOnPrevious = () => {
    if (currentIdx > 1) {
      setCurrentIdx(currentIdx - 1);
      const card = {
        quiz: data[currentIdx - 2],
        flipped: false
      }
      setCurrentCard(card);
    }
  };

  const handleOnNext = () => {
    if (currentIdx < data.length) {
      setCurrentIdx(currentIdx + 1);
      const card = {
        quiz: data[currentIdx],
        flipped: false
      }
      setCurrentCard(card);
    }
  };

  const handleOnClickFlip = (newValue) => {
    setCurrentCard((prevData) => ({
      ...prevData,
      flipped: newValue,
    }));
  }

  return (
    <>
      {error && <p className="text-xl">{error}</p>}
      {isLoading && (
        <CardContainer>
          <CardSkeleton>
            <Loading />
          </CardSkeleton>
        </CardContainer>
      )}
      {currentCard && (
        <>
          <CardContainer>
            <Card card={currentCard} handleOnClickFlip={handleOnClickFlip} />
            <CardNavigation
              cardLimit={data ? data.length : 0}
              currentIdx={currentIdx}
              handleOnPrevious={handleOnPrevious}
              handleOnNext={handleOnNext}
            />
          </CardContainer>
        </>
      )}
    </>
  );
}
