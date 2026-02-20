"use client";

import { QuestionBodyItem } from "@/types/questions";
import Image from "next/image";

interface Props {
  body: QuestionBodyItem[];
}

export const QuestionBody = ({ body }: Props) => {
  return (
    <div>
      {body.map((item, index) => {
        switch (item.type) {
          case "paragraph":
            return (
              <p key={index} className="mb-4 font-text">
                {item.content}
              </p>
            );
          case "image":
            return (
              <div
                key={index}                
                className="flex w-full justify-center mb-4">
                <img
                src={`/images/${item.content}`}
                alt={ `Question Image ${index + 1}` }
              />
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};
