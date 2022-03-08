export const mediaQueries = new (class MediaQueries {
  private breakpoints = [960];

  readonly mediaQuery = this.breakpoints.map(
    (breakpoint) => `@media only screen and (max-width: ${breakpoint}px)`
  );
})();
