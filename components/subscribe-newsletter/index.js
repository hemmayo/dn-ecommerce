import React from "react";

export default function SubscribeNewsletter() {
  return (
    <section
      className="px-20 py-10 text-white"
      style={{
        backgroundImage:
          "url(https://ideal-production.imgix.net/2020/03/20145254/GLACIAL_Footer_desktop2.png?w=2000px&auto=format&fit=clip&fm=jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h3 className="uppercase text-base font-semibold mb-3">
        Subscribe to our newsletter
      </h3>
      <div className="text-sm">
        <p className="mb-6">
          Subscribe to our newsletter and be the first to hear about exclusive
          offers and product releases.
        </p>
        <p className="mb-6">
          You can unsubscribe at any time, and we always keep your information
          safe and secure.
        </p>
        <div>
          <input
            className="bg-white max-w-md w-full outline-none border border-white px-6 py-4 mr-4 text-black"
            placeholder="Enter your email address"
          />
          <button className="text-base uppercase border border-white hover:bg-white hover:text-black py-4 w-40">
            Send
          </button>
        </div>
      </div>
    </section>
  );
}
