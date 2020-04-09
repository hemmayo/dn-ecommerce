import React from "react";

export default function CollectionItem({ image, title }) {
  return (
    <figure className="">
      <a className="">
        <div className="w-20 h-20 mb-2">
          <img src={image} className="w-full h-full object-cover" />
        </div>
        <figcaption className="text-xs text-center capitalize w-20">
          {title}
        </figcaption>
      </a>
    </figure>
  );
}
