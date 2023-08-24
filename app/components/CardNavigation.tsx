"use client";
import Button from "./Button";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";

export default function CardNavigation() {
  return (
    <div className="mt-4 flex">
      <Button className="text-3xl">
        <GrFormPreviousLink />
      </Button>
      <span className="text-xl">card number here</span>
      <Button className="text-3xl">
        <GrFormNextLink />
      </Button>
    </div>
  );
}
