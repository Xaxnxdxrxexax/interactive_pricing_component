"use client";
import Image from "next/image";
import { useState } from "react";

export default function HomePage() {
  const [isDiscounted, setIsDiscounted] = useState(false);
  const [selectedValue, setSelectedValue] = useState(2);
  return (
    <main className="flex flex-col items-center justify-center px-6 pt-20">
      <section className="relative mb-16 text-center">
        <Image
          src={"/images/pattern-circles.svg"}
          alt="backround circles"
          width="146"
          height="145"
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-1/4 transform"
        />
        <h1 className="mb-3 text-xl font-bold">
          Simple, traffic-based pricing
        </h1>
        <p className="text-sm text-[hsl(225,_20%,_60%)]">
          Sign-up for our 30-day-trial.
        </p>
        <p className="text-sm text-[hsl(225,_20%,_60%)]">
          No credit card required.
        </p>
      </section>
      <section className="flex w-full flex-col items-center justify-between gap-5 rounded-2xl border bg-white py-8">
        <p className="font-semibold text-[hsl(227,_35%,_25%)]">
          {allValues[selectedValue]?.label} PAGEVIEWS
        </p>
        <input
          type="range"
          name="billing"
          id="billing"
          min="0"
          max="4"
          step="1"
          value={selectedValue}
          onChange={(e) => setSelectedValue(Number(e.target.value) ?? 2)}
          className="mt-8 h-2 w-[90%] cursor-pointer appearance-none rounded-full bg-[hsl(224,_65%,_95%)]"
          style={{
            background: `linear-gradient(to right, blue 0%, blue ${
              selectedValue * 25
            }%, transparent ${selectedValue * 25}%, transparent 100%)`,
            backgroundRepeat: `no-repeat`,
          }}
        />
        <p className="py-8 text-2xl">
          <span className="text-5xl font-bold">
            $
            {isDiscounted
              ? allValues[selectedValue]!.price * 0.75
              : allValues[selectedValue]!.price}
            {".00"}
          </span>
          / month
        </p>
        <div className="flex w-full items-center justify-around border">
          <p>Monthly Billing</p>
          <input
            type="checkbox"
            name="discount"
            id="discount"
            onClick={() => setIsDiscounted(!isDiscounted)}
          />
          <p>Yearly Billing</p>
          <p className="text-sm">-25%</p>
        </div>
      </section>
    </main>
  );
}

const allValues = [
  {
    label: "10K",
    price: 8,
  },
  {
    label: "50K",
    price: 12,
  },
  {
    label: "100K",
    price: 16,
  },
  {
    label: "500K",
    price: 24,
  },
  {
    label: "1M",
    price: 36,
  },
];
