"use client";
import { useState, useEffect } from "react";
import Card from "./Card";

const cards = [
  {
    title: "JLG Industries",
    description: "Software Engineer",
    link: "/projects/JLG/",
  },
  {
    title: "Forterra",
    description: "Software Engineering Intern",
    link: "/projects/Forterra/",
  },
  {
    title: "CAN Trace Visualizer",
    description: "Senior Design Project",
    link: "/projects/CANbus/",
  },
];

export default function CardsRendering() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    cards.forEach((_, i) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, i]);
      }, i * 100); // 300ms delay between each card
    });
  }, []);

  return (
    <div className="flex flex-row space-x-8 justify-center">
      {cards.map((card, i) => (
        <div
          key={i}
          className={`transition-all duration-500 ${visibleCards.includes(i) ? "opacity-100 rotate-y-0" : "opacity-0 rotate-y-90"}`}
          style={{
            transform: visibleCards.includes(i)
              ? "rotateY(0deg)"
              : "rotateY(90deg)",
            transition: "transform 0.8s ease, opacity 0.8s ease",
          }}
        >
          <Card
            title={card.title}
            description={card.description}
            link={card.link}
          />
        </div>
      ))}
    </div>
  );
}
