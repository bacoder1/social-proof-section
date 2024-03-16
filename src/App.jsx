import "./App.css";
import reviews from "./data";
import useMediaQuery from "./hooks/useMediaQuery";

import bgMobileTop from "./assets/bg-pattern-top-mobile.svg";
import bgMobileBottom from "./assets/bg-pattern-bottom-mobile.svg";
import bgDesktopTop from "./assets/bg-pattern-top-desktop.svg";
import bgDesktopBottom from "./assets/bg-pattern-bottom-desktop.svg";

import StarRating from "./components/StarRating";
import SocialReview from "./components/SocialReview";

export default function App() {
  const isMobile = useMediaQuery("(max-width: 1280px)");

  const sources = ["Reviews", "Report Guru", "BestTech"];

  const topBg = isMobile ? bgMobileTop : bgDesktopTop;
  const bottomBg = isMobile ? bgMobileBottom : bgDesktopBottom;

  return (
    <main className="min-h-screen pb-[99px] pt-[80px] font-spartan xl:flex xl:flex-col xl:justify-center xl:gap-[54px] xl:px-[165px]">
      <img className="absolute left-0 top-0" src={topBg} alt="" />
      <img className="absolute bottom-0 right-0" src={bottomBg} alt="" />

      <div className="items-center xl:flex">
        <div className="flex flex-col items-center xl:items-start">
          <h1 className="max-w-[13ch] text-center text-[38px] font-bold leading-8 tracking-tight text-darkest-magenta xl:text-left xl:text-[54px] xl:leading-[48px]">
            10,000+ of our users love our products.
          </h1>
          <p className="mx-5 mt-5 max-w-prose text-center text-lg font-medium leading-[25px] text-dark-gray-magenta xl:mx-0 xl:mt-6 xl:text-left">
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </div>

        <div className="relative mt-[34px] flex w-full flex-col items-end gap-4 px-6 xl:px-0">
          {sources.map((source, index) => (
            <StarRating source={source} key={source} index={index} />
          ))}
        </div>
      </div>
      <div className="mt-[49px] flex w-full flex-col gap-4 px-6 xl:flex-row xl:gap-[30px] xl:px-0">
        {reviews.map((review, index) => (
          <SocialReview key={index} {...review} index={index} />
        ))}
      </div>
    </main>
  );
}
