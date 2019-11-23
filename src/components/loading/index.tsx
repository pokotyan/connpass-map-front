import * as React from "react";
import { useRef, useEffect } from "react";
import LottieWeb from "lottie-web";
import style from "./style.module.scss";
import animationJson from "./animation.json";

const animation = (ref: React.RefObject<HTMLDivElement>) => {
  LottieWeb.loadAnimation({
    container: ref.current!,
    renderer: "svg",
    loop: true,
    autoplay: true,
    animationData: animationJson
  });
};

const Loading = ({ isLoading }: { isLoading: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animation(ref);
  });

  return (
    <div>
      {isLoading && (
        <div className={style.loadingBox}>
          <div className={style.boxInner}>
            <div className={style.boxBg}>
              <div ref={ref} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Loading;
