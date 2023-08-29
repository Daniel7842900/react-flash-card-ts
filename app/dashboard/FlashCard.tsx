"use client";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import CardNavigation from "../components/CardNavigation";

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
  const [data, setData] = useState<Quiz[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [currentCard, setCurrentCard] = useState<Quiz | undefined>();

  const fetchQuiz = async () => {
    try {
      const BASE_URL = "https://quizapi.io/api/v1/duestions";
      const limit = 10;
      const API_KEY = process.env.NEXT_PUBLIC_QUIZ_API_KEY;
      const URL = BASE_URL + "?apiKey=" + API_KEY + "&limit=" + limit;
      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error(`HTTP error, Status: ${response.status}`);
      }

      const jsonResponse = await response.json();
      console.log(jsonResponse);
      setData(jsonResponse);
    } catch (error) {
      const message =
        "An error occurred while fetching questions & answers. " + error;
      console.log(message);
      setError(message);
    }
  };

  useEffect(() => {
    fetchQuiz();
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
