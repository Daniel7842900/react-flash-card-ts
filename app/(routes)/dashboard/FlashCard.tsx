"use client";
import { useEffect, useState } from "react";
import Card from "../../_components/Card";
import CardNavigation from "../../_components/CardNavigation";
import CardSkeleton from "@/app/_components/CardSkeleton";
import CardContainer from "@/app/_components/CardContainer";
import Loading from "@/app/_components/Loading";
import useQuiz, { Quiz } from "@/app/_hooks/useQuiz";

export default function FlashCard() {
  const { data, error, isLoading } = useQuiz();
  const [currentCard, setCurrentCard] = useState<Quiz | undefined>();
  const [currentIdx, setCurrentIdx] = useState<number>(1);

  useEffect(() => {
    if (data.length > 0) {
      setCurrentCard(data[0]);
    }
  }, [data]);

  const handleOnPrevious = () => {
    if (currentIdx > 1) {
      setCurrentIdx(currentIdx - 1);
      setCurrentCard(data[currentIdx - 2]);
    }
  };

  const handleOnNext = () => {
    if (currentIdx < data.length) {
      setCurrentIdx(currentIdx + 1);
      setCurrentCard(data[currentIdx]);
    }
  };

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
            <Card quiz={currentCard} />
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
