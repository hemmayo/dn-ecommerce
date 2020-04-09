import React from "react";

export default function Header() {
  return (
    <header className="sticky z-20 top-0 h-24 flex flex-col justify-between w-full bg-white px-8 py-4">
      <div className="flex justify-between">
        <div className="flex w-xs">
          <span className="mr-4">ham</span>
          <span>search</span>
        </div>
        <div>
          <img src="/images/logo.png" className="w-20" />
        </div>
        <div className="flex w-xs justify-end">
          <div>Iphone 11</div>
          <div className="flex">
            <span>heart</span>
            <span>cart</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between uppercase text-xs font-medium -mb-2">
        <div className="flex">
          <span className="mr-4">For him</span>
          <span className="mr-4">For her</span>
        </div>
        <div className="flex">
          <span className="mr-4">Cases</span>
          <span className="mr-4">Wallet Cases</span>
          <span className="mr-4">Charging</span>
          <span className="mr-4">Phone holders</span>
          <span className="mr-4">Screen protectors</span>
          <span className="mr-4">Accessories</span>
          <span className="mr-4">Sale</span>
        </div>
        <div className="flex">
          <span>Track order</span>
        </div>
      </div>
    </header>
  );
}
