import React from "react";

export default function ShopNowCTA({
  width = "sm",
  height = "full",
  image,
  title,
  description,
}) {
  return (
    <div
      className={`w-${width} h-${height} max-w-5xl flex items-center justify-center`}
    >
      <img className="w-full h-full object-cover" src={image} />
      <div className="flex flex-col text-center absolute text-white font-medium">
        {title && <h2 className="text-3xl uppercase">New Galaxy</h2>}
        {description && <p>Samsung S20, S20+, S20 Ultra</p>}
        <button className="px-6 py-2 uppercase text-base  border border-white hover:bg-white hover:text-black text-white font-medium mt-4">
          Shop now
        </button>
      </div>
    </div>
  );
}
