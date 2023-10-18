"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";

export default function HomePage() {
  const { register, watch } = useForm({
    defaultValues: {
      isDiscounted: false,
      selectedValue: 2,
    },
  });
  const registeredValues = watch();
  return (
    <main className="mx-auto mb-20 flex w-full max-w-xl flex-col items-center justify-center pt-20">
      <Image
        src={"/images/bg-pattern.svg"}
        alt={"background"}
        width="1440"
        height="449"
        className="absolute top-0 -z-10 h-1/2 Fm:h-auto"
      />
      <section className="relative mb-16 text-center">
        <Image
          src={"/images/pattern-circles.svg"}
          alt="backround circles"
          width="146"
          height="145"
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-1/4 transform"
        />
        <h1 className="mb-3 text-xl font-bold Fm:text-2xl">
          Simple, traffic-based pricing
        </h1>
        <p className="text-sm text-[hsl(225,_20%,_60%)] Fm:inline Fm:text-xs">
          Sign-up for our 30-day-trial.
        </p>
        <p className="text-sm text-[hsl(225,_20%,_60%)] Fm:inline Fm:text-xs">
          {" "}
          No credit card required.
        </p>
      </section>
      <section className="mx-6 flex flex-col items-center justify-between gap-5 rounded-2xl bg-white py-8 Fm:mx-0 Fm:w-full Fm:flex-row Fm:flex-wrap Fm:px-12">
        <p className="text-sm font-bold tracking-wider text-gray-400 Fm:order-1">
          {allValues[registeredValues.selectedValue]?.label} PAGEVIEWS
        </p>
        <input
          type="range"
          id="billing"
          min="0"
          max="4"
          step="1"
          value={registeredValues.selectedValue}
          {...register("selectedValue", {
            valueAsNumber: true,
          })}
          className="mt-8 h-2 w-[90%] cursor-pointer appearance-none rounded-full bg-[hsl(224,_65%,_95%)] Fm:order-3 Fm:mx-auto Fm:mt-0 Fm:border"
          style={{
            background: `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${
              registeredValues.selectedValue * 25
            }%, hsl(224, 65%, 95%) ${
              registeredValues.selectedValue * 25
            }%, hsl(224, 65%, 95%) 100%)`,
            backgroundRepeat: `no-repeat`,
          }}
        />
        <p className="py-8 text-base font-bold text-gray-400 Fm:order-2">
          <span className="mr-2 text-4xl font-bold text-black">
            $
            {registeredValues.isDiscounted
              ? allValues[registeredValues.selectedValue]!.price * 0.75
              : allValues[registeredValues.selectedValue]!.price}
            {".00"}
          </span>
          / month
        </p>
        <div className="relative mx-10 flex items-center justify-center gap-3 Fm:order-4 Fm:mx-auto Fm:mt-6">
          <p className="text-xs font-bold text-gray-400">Monthly Billing</p>
          <div className="relative flex items-center justify-center ">
            <input
              type="checkbox"
              id="discount"
              {...register("isDiscounted", {})}
              className="peer h-6 w-11 cursor-pointer appearance-none rounded-full bg-[hsl(223,_50%,_87%)] checked:border-gray-900 checked:bg-[hsl(174,_77%,_80%)] hover:bg-[hsl(174,_77%,_80%)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
            />
            <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-white transition-all duration-200 peer-checked:left-6 peer-checked:bg-white"></span>
          </div>
          <p className="mr-1 text-xs font-bold text-gray-400">Yearly Billing</p>
          <p className="absolute right-0 translate-x-full transform rounded-full bg-[hsl(14,_92%,_95%)] p-0.5 px-1 text-[0.6rem] font-bold text-[hsl(15,_100%,_70%)]">
            -25%{" "}
            <span className="invisible absolute Fm:visible Fm:static ">
              {" "}
              discount
            </span>
          </p>
        </div>
        <div className="h-0.5 w-full bg-[hsl(227,47%,96%)] Fm:order-5"></div>
        <div className="flex flex-col gap-3 Fm:order-6">
          <p className="text-xs font-semibold text-gray-400">
            <Image
              src={"/images/icon-check.svg"}
              alt="check"
              width="18"
              height="16"
              className="mr-2 inline-block"
            />
            Unlimited websites
          </p>
          <p className="text-xs font-semibold text-gray-400">
            <Image
              src={"/images/icon-check.svg"}
              alt="check"
              width="18"
              height="16"
              className="mr-2 inline-block"
            />
            100% data ownership
          </p>
          <p className="text-xs font-semibold text-gray-400">
            <Image
              src={"/images/icon-check.svg"}
              alt="check"
              width="18"
              height="16"
              className="mr-2 inline-block"
            />
            Email reports
          </p>
        </div>
        <button className="mt-4 rounded-full bg-[hsl(227,_35%,_25%)] px-10 py-4 text-sm font-bold text-white/70 hover:cursor-pointer hover:text-white Fm:order-7">
          Start my trial
        </button>
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
