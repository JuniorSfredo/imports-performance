const media = {
  sm: 576,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536
}

const breakpoints = {
  sm: `(min-width: ${media.sm}px)`,
  md: `(min-width: ${media.md}px)`,
  lg: `(min-width: ${media.lg}px)`,
  xl: `(min-width: ${media.xl}px)`,
  xxl: `(min-width: ${media.xxl}px)`
}

export default breakpoints;
