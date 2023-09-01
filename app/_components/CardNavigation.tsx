"use client";
import Button from "./Button";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";

interface cardNavigationProps {
  cardLimit: number;
  currentIdx: number;
  handleOnPrevious?: () => void;
  handleOnNext?: () => void;
}

const NO_CARD_MESSAGE = "No Card Available";

export default function CardNavigation({
  cardLimit,
  currentIdx,
  handleOnPrevious,
  handleOnNext,
}: cardNavigationProps) {
  return (
    <div className="mt-4 flex">
      <Button className="text-3xl" handleClick={handleOnPrevious}>
        <GrFormPreviousLink />
      </Button>
      <span className="text-xl">
        {cardLimit == 0 ? NO_CARD_MESSAGE : currentIdx + "/" + cardLimit}
      </span>
      <Button className="text-3xl" handleClick={handleOnNext}>
        <GrFormNextLink />
      </Button>
    </div>
  );
}
