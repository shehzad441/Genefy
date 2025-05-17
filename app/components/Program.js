'use client';
import React from "react";

const programItems = [
  {
    label: "MYP",
    gradient: "bg-[linear-gradient(90deg,_#DCEAFB_0%,_#FFFFFF_100%)]",
    text: "text-[#003063]",
  },
  {
    label: "IBDP",
    gradient: "bg-[linear-gradient(90deg,_#E3F9E5_0%,_#FFFFFF_100%)]",
    text: "text-[#004225]",
  },
  {
    label: "IGCSE",
    gradient: "bg-[linear-gradient(90deg,_#EDE7F6_0%,_#FFFFFF_100%)]",
    text: "text-[#470d5c]",
  },
  {
    label: "A/AS",
    gradient: "bg-[linear-gradient(90deg,_#FFE5D9_0%,_#FFFFFF_100%)]",
    text: "text-[#6b0000]",
  },
];

export default function Program() {
  return (
    <section className="flex justify-center pt-[100px]">
      <div className="flex gap-[30px] w-[1709px] h-[111px]">
        {programItems.map((item, index) => (
          <div
            key={index}
            className={`w-[375px] h-[111px] ${item.gradient} ${item.text} flex items-center justify-center text-2xl font-semibold rounded-[10px] shadow-sm`}
          >
            {item.label}
          </div>
        ))}
      </div>
    </section>
  );
}