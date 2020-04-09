import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col bg-primary text-white p-20">
        <div className="pb-16 border-b border-gray-normal">
          <div className="flex justify-between">
            <div className="flex justify-between w-2/5">
              <div className="text-sm">
                <h3 className="uppercase font-semibold mb-4">
                  Customer service
                </h3>
                <div className="flex flex-col">
                  <span className="mb-2">Contact us</span>
                  <span className="mb-2">FAQ</span>
                  <span className="mb-2">Returns</span>
                </div>
              </div>
              <div className="text-sm">
                <h3 className="uppercase font-semibold mb-4">
                  About ideal of sweden
                </h3>
                <div className="flex flex-col">
                  <span className="mb-2">About us</span>
                  <span className="mb-2">Sustainability</span>
                  <span className="mb-2">Open Positions</span>
                </div>
              </div>
              <div className="text-sm">
                <h3 className="uppercase font-semibold mb-4">
                  Customer service
                </h3>
                <div className="flex flex-col">
                  <span className="mb-2">Terms and conditions</span>
                  <span className="mb-2">Retailers</span>
                  <span className="mb-2">Privacy Policy</span>
                </div>
              </div>
            </div>
            <div className="text-sm"> Choose country</div>
          </div>
          <div></div>
        </div>
        <div className="flex justify-between mt-16">
          <div className="w-1/2 text-sm">
            <h3 className="uppercase font-medium mb-4">
              Accessories of Attraction
            </h3>
            <p className="">
              Deal of Sweden’s products are designed and developed in Sweden, a
              pioneering country in both creativity and new thinking, and
              sustainable environmental aspects. We have developed a unique
              ecosystem of compatible magnetic products such as mobile cases,
              wallets, power banks, lightning cables and different kinds of
              mounts which all make the use of mobile devices easier. Our
              product collection is made to be adjusted to different situations
              and occasions without sacrificing design or style. We constantly
              update our products so that we can complete current trends within
              interior and fashion and we always have quality, functionality and
              high standard as our prime key words.
            </p>
          </div>
          <div></div>
        </div>
      </div>
      <div className="flex justify-between bg-primary-dark px-20 h-16 items-center">
        <div className="flex">
          <span className="mr-12">
            <img
              src="https://ideal-production.imgix.net/2018/10/30091756/mastercard.svg"
              alt="mastercard"
              height="30px"
            />
          </span>
          <span className="mr-12">
            <img
              src="https://ideal-production.imgix.net/2018/10/30091814/american_express.svg"
              alt="american_express"
              height="30px"
            />
          </span>
          <span className="mr-12">
            <img
              src="https://ideal-production.imgix.net/2018/10/30091745/visa.svg"
              alt="visa"
              height="30px"
            />
          </span>
        </div>
        <div className="flex justify-between w-64">
          <a
            href="https://www.facebook.com/idealofsweden"
            className=""
            to="https://www.facebook.com/idealofsweden"
          >
            <img
              src="https://ideal-production.imgix.net/2018/10/30092031/fb.svg"
              alt="fb"
              height="30px"
            />
          </a>
          <a
            href="https://www.instagram.com/idealofsweden"
            className=""
            to="https://www.instagram.com/idealofsweden"
          >
            <img
              src="https://ideal-production.imgix.net/2018/10/30092040/instagram.svg"
              alt="instagram"
              height="30px"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCZOU4umLQG3Wd1J1Pl-hgxA"
            className=""
            to="https://www.youtube.com/channel/UCZOU4umLQG3Wd1J1Pl-hgxA"
          >
            <img
              src="https://ideal-production.imgix.net/2018/10/30092059/youtube.svg"
              alt="youtube"
              height="30px"
            />
          </a>
          <a
            href="https://twitter.com/idealofsweden"
            className=""
            to="https://twitter.com/idealofsweden"
          >
            <img
              src="https://ideal-production.imgix.net/2018/10/30092058/twitter.svg"
              alt="twitter"
              height="30px"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/ideal-of-sweden"
            className=""
            to="https://www.linkedin.com/company/ideal-of-sweden"
          >
            <img
              src="https://ideal-production.imgix.net/2018/10/30092058/linkedin.svg"
              alt="linkedin"
              height="30px"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
