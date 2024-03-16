import imageColton from "../assets/image-colton.jpg";
import imageIrene from "../assets/image-irene.jpg";
import imageAnne from "../assets/image-anne.jpg";

import data from "../data";

import useMediaQuery from "../hooks/useMediaQuery";

export default function SocialReview(props) {
  const isMobile = useMediaQuery("(max-width: 1280px)");

  const imageMap = {
    "image-colton.jpg": imageColton,
    "image-irene.jpg": imageIrene,
    "image-anne.jpg": imageAnne,
  };

  const profileImage = imageMap[props.image];

  return (
    <article
      className="w-full rounded-lg bg-[#511f50] px-8 pb-6 pt-10 xl:flex-[1] xl:py-10"
      style={
        !isMobile
          ? {
              transform: `translateY(${(data.length - 1 - props.index) * 16 * -1}px)`,
            }
          : null
      }
    >
      <div className="flex gap-[22px]">
        <img
          className="h-10 w-10 rounded-full"
          src={profileImage}
          alt={`${props.reviewer}'s profile picture`}
        />
        <div className="flex flex-col justify-between text-[18px] leading-none">
          <p className="font-bold text-white">{props.reviewer}</p>
          <p className="font-normal text-soft-pink">Verified Buyer</p>
        </div>
      </div>
      <p className="mt-[26px] text-[16.5px] leading-[22.5px] text-white">
        " {props.review} "
      </p>
    </article>
  );
}
