"use client";
import { useEffect, useState } from "react";
import Card from "../../_components/Card";
import CardNavigation from "../../_components/CardNavigation";
import useData from "@/app/_hooks/useData";

export interface Quiz {
  question: string;
  answers: {
    answer_a: string | null;
    answer_b: string | null;
    answer_c: string | null;
    answer_d: string | null;
    answer_e: string | null;
    answer_f: string | null;
  };
  correct_answers: {
    answer_a_correct: string | null;
    answer_b_correct: string | null;
    answer_c_correct: string | null;
    answer_d_correct: string | null;
    answer_e_correct: string | null;
    answer_f_correct: string | null;
  };
}

export default function FlashCard() {
  const BASE_URL = "https://quizapi.io/api/v1/questions";
  const limit = 10;
  const API_KEY = process.env.NEXT_PUBLIC_QUIZ_API_KEY;
  const URL = BASE_URL + "?apiKey=" + API_KEY + "&limit=" + limit;
  const { data, error, isLoading } = useData(URL);
  const [currentCard, setCurrentCard] = useState<Quiz | undefined>();

  useEffect(() => {
    if (data.length > 0) {
      setCurrentCard(data[0]);
    }
  }, [data]);

  return (
    <>
      {error && <p className="text-xl">{error}</p>}
      {currentCard && (
        <>
          <Card quiz={currentCard} />
          <CardNavigation cardLimit={data ? data.length : 0} />
        </>
      )}
    </>
  );
}
