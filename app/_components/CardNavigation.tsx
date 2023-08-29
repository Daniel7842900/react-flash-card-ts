"use client";
import Button from "./Button";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";

interface cardNavigationProps {
  cardLimit: number;
}

const NO_CARD_MESSAGE = "No Card Available";

const START_INDEX = 1;

export default function CardNavigation({ cardLimit }: cardNavigationProps) {
  return (
    <div className="mt-4 flex">
      <Button className="text-3xl">
        <GrFormPreviousLink />
      </Button>
      <span className="text-xl">
        {cardLimit == 0 ? NO_CARD_MESSAGE : START_INDEX + "/" + cardLimit}
      </span>
      <Button className="text-3xl">
        <GrFormNextLink />
      </Button>
    </div>
  );
}
