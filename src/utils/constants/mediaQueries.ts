export const mediaQueries = new (class MediaQueries {
  private breakpoints = [960];

  readonly mediaQuery = this.breakpoints.map(
    (breakpoint) => `@media (min-width: ${breakpoint}px)`
  );
})();
