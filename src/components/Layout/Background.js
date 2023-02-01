import React from "react";

import Container from "./Container";

import BubbleTop from "../../assets/img/layout/bubble.png";
import BubbleBottom from "../../assets/img/layout/bubble-bottom.png";

const Background = () => {
  return (
    <div className="-z-50 absolute top-0 left-0 w-full overflow-hidden">
      <Container>
        <div className="relative h-full" style={{ minHeight: "100vh" }}>
          <img
            src={BubbleTop}
            alt="bubble-top"
            className="absolute lg:-top-[280px] xl:-top-[380px] 2xl:-top-[380px] lg:-left-[600px] xl:-left-[785px]"
          />
          <img
            src={BubbleBottom}
            alt="bubble-bottom"
            className="absolute lg:-bottom-[400px] xl:-bottom-[500px] lg:-right-[600px] xl:-right-[700px]"
          />
        </div>
      </Container>
    </div>
  );
};

export default Background;
