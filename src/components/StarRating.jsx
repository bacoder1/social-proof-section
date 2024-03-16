import starIcon from "../assets/icon-star.svg";

import useMediaQuery from "../hooks/useMediaQuery";

export default function StarRating(props) {
  const isMobile = useMediaQuery("(max-width: 1280px)");

  return (
    <div
      className="flex w-full flex-col items-center gap-2 rounded-lg bg-light-gray-magenta pb-[10px] pt-4 font-bold text-darkest-magenta xl:h-14 xl:max-w-[445px] xl:flex-row xl:gap-7 xl:p-0 xl:pl-8"
      style={
        !isMobile
          ? {
              transform: `translateX(${(2 - props.index) * 48 * -1}px)`,
            }
          : null
      }
    >
      <div className="flex gap-2">
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <img key={index} src={starIcon} alt="" width={17} height={16} />
          ))}
      </div>
      <p className="text-lg">Rated 5 stars in {props.source}</p>
    </div>
  );
}
