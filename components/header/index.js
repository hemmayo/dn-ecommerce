import React from "react";

export default function Header() {
  return (
    <header className="sticky z-20 top-0 h-24 flex flex-col justify-between w-full bg-white px-8 py-4 text-sm">
      <div className="flex justify-between items-center">
        <div className="flex items-center w-xs">
          <span className="mr-4">ham</span>
          <span>
            <svg
              viewBox="0 0 21 21"
              xmlns="http://www.w3.org/2000/svg"
              class="w-5"
            >
              <g
                fillRule="evenodd"
                transform="translate(1 1)"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="8" cy="8" r="8"></circle>
                <path
                  strokeLinecap="round"
                  d="M14 14l4.5 4.5"
                  class="css-13wylk3 emszb490"
                ></path>
              </g>
            </svg>
          </span>
        </div>
        <div>
          <img src="/images/logo.png" className="w-20" />
        </div>
        <div className="flex w-xs justify-end items-center">
          <div className="mr-4">iPhone 11</div>
          <div className="flex">
            <button class="p-2 mr-2" data-action="add-to-favourites">
              <svg
                viewBox="0 0 24 21"
                xmlns="http://www.w3.org/2000/svg"
                class="w-6"
              >
                <path
                  d="M12.2 2a7 7 0 015-2C20.9 0 24 3 24 6.6c0 3.3-1.9 6.5-5 9.4-2 2-4.5 3.6-6.6 4.8l-.4.2-.4-.2A33.3 33.3 0 015 16C1.9 13 0 10 0 6.6 0 2.9 3 0 6.8 0a7 7 0 015 2l.2.2.2-.2zm.5 17c1.7-1.1 3.6-2.5 5.2-4 3-2.7 4.6-5.6 4.6-8.4 0-2.9-2.4-5.1-5.3-5.1-1.5 0-2.8.5-3.8 1.5L12 4.3H12L10.6 3c-1-1-2.3-1.5-3.8-1.5-2.9 0-5.3 2.2-5.3 5 0 3 1.7 5.8 4.6 8.5 1.6 1.5 3.5 2.9 5.2 4l.7.3.7-.4z"
                  class="css-193q0fd emszb490"
                ></path>
              </svg>
            </button>

            <button data-action="add-to-basket" class="p-2">
              <svg
                class="w-5"
                viewBox="0 0 20 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="transparent"
                  stroke="rgb(32, 32, 32)"
                  strokeWidth="1.5"
                  d="M.8 5.8h18.5v17.5H.8z"
                  class="fill-none"
                ></path>
                <path
                  fillRule="nonzero"
                  d="M5.8 9.7V5.3c0-2.5 1.4-3.7 4.2-3.7 3 0 4.2 1.2 4.2 3.7v4.4c0 .4.3.8.7.8.5 0 .8-.4.8-.8V5.3C15.7 2 13.7 0 10 0 6.4 0 4.4 1.8 4.3 5.3v4.4c0 .4.3.8.8.8.4 0 .7-.4.7-.8z"
                  class="fill-none"
                ></path>
              </svg>
            </button>
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
