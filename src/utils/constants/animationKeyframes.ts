import { css, keyframes as keyframesHandler } from "@emotion/react";

export const animationKeyframes = new (class AnimationKeyframes {
  readonly FadeIn = keyframesHandler`
    from {
      visibility: hidden;
      opacity: 0;
    } to {
      visibility: visible;
      opacity: 1;
    }
  `;
})();
