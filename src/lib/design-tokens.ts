// Screens
export const BREAKPOINTS = {
  laptopMax: 1500,
  tabletMax: 1100,
  mobileMax: 550,
  smMobileMax: 390,
}

export const QUERIES = {
  laptopAndDown: `(max-width ${BREAKPOINTS.laptopMax})`,
  tabletAndDown: `(max-width ${BREAKPOINTS.tabletMax})`,
  mobileAndDown: `(max-width ${BREAKPOINTS.mobileMax})`,
  smMobileAndDown: `(max-width ${BREAKPOINTS.smMobileMax})`,
}

// Core tokens

export const COLORS = {
  ocean: 'hsl(207deg 100% 7%)',
  white: 'hsl(0deg 0% 100%)',
}

export const TYPOGRAPHY = {
  family: {
    sans: 'archivo',
  },
}
