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

  useEffect(() => {
    if (data.length > 0) {
      setCurrentCard(data[0]);
    }
  }, [data]);

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
            <CardNavigation cardLimit={data ? data.length : 0} />
          </CardContainer>
        </>
      )}
    </>
  );
}
