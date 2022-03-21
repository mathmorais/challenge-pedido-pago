import { css } from "@emotion/react";
import { animationKeyframes } from "./animationKeyframes";

export const animations = new (class Animations {
  readonly FadeIn = css`
    animation: ${animationKeyframes.FadeIn} 0.25s ease-in 0s normal both; ;
  `;
})();
