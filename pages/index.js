import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import SubscribeNewsletter from "../components/subscribe-newsletter";
import ShopItem from "../components/shop-item";
import ShopNowCTA from "../components/shop-now-cta";
import CollectionList from "../components/collection-list";
import EmbraceLuxury from "../components/embrace-luxury";

export default function HomePage() {
  return (
    <div>
      <Header />
      <section className="h-xl">
        <img
          className="object-cover h-full w-full"
          src="https://images.pexels.com/photos/3622616/pexels-photo-3622616.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
      </section>
      <div className="sticky top-0 bg-black text-white text-sm text-center p-3">
        <p>
          08.04.2020: We are delivering as usual and hope we can bring you a
          little ❤️ with 5O% OFF on selected items
        </p>
      </div>
      <div className="bg-gray-lighter text-gray-normal text-xs text-center font-medium p-3">
        <div className="max-w-lg mx-auto flex justify-between uppercase">
          <span>Fast delivery</span>
          <span>30 days of return</span>
          <span>Secure payments</span>
        </div>
      </div>
      <section className="flex px-20 py-10">
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
      </section>
      <section className="flex px-20 py-10 items-center justify-between">
        <ShopNowCTA
          width="xl"
          image="https://ideal-production.imgix.net/2020/03/13155033/Sale50_2160x2700.png?w=900&auto=format&fit=clip&fm=jpg"
        />
        <div className="flex">
          <ShopItem />
          <ShopItem />
        </div>
      </section>
      <section className="flex flex-row-reverse px-20 py-10 items-center justify-between">
        <ShopNowCTA
          height="2xl"
          width="full"
          image=" https://ideal-production.imgix.net/2020/02/12093934/01_PortLaurentMarble_Fannyamandanilsson_1.png?w=1200&auto=format&fit=clip&fm=jpg"
          title
          description
        />
        <div className="flex">
          <ShopItem />
        </div>
      </section>
      <section className="flex px-20 py-10 mb-5">
        <CollectionList />
      </section>
      <section className="flex px-20 py-10 mb-5">
        <EmbraceLuxury />
      </section>
      <SubscribeNewsletter />
      <Footer />
      {/* <section className="h-screen w-full "></section> */}
    </div>
  );
}
