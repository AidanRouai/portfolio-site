"use client";
import { useState } from "react";

export default function HobbiesCarousel() {
  const [index, setIndex] = useState(0);
  const hobbies = [
    {
      name: "Cars",
      description:
        "I have always been massively into cars ever since watching 2Fast2Furious as a kid with my dad. This interest has grown into a passion to linking machinery with software, and is the reason why I love working with IoT and embedded systems. (I love my Toyota GR86)",
    },
    {
      name: "Gaming",
      description:
        "My longest running hobby, I have been gaming for over 15 years now. My main game for 10 of those years was Rainbow Six Siege, in which I reached the top 5k in the world. But lately I've been enjoying racing and story games.",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-center">
        <h3 className="text-xl font-bold text-mainPrimary">
          {hobbies[index].name}
        </h3>
        <p className="">{hobbies[index].description}</p>
      </div>
      <div className="flex items-center gap-4 mt-auto">
        <button
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
          className="px-3 py-1 rounded disabled:opacity-30"
        >
          ‹
        </button>
        <span className="text-sm">
          {index + 1} / {hobbies.length}
        </span>
        <button
          onClick={() => setIndex((i) => Math.min(hobbies.length - 1, i + 1))}
          disabled={index === hobbies.length - 1}
          className="px-3 py-1 rounded disabled:opacity-30"
        >
          ›
        </button>
      </div>
    </div>
  );
}
