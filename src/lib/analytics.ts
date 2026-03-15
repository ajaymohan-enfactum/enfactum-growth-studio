import posthog from 'posthog-js'

export const initAnalytics = () => {
  posthog.init('phc_C0roMVCpRCtVAu94QSdV21RlxqHDfmAkN2XC3smD1VV', {
    api_host: 'https://app.posthog.com',
    capture_pageview: false,
    persistence: 'localStorage',
    loaded: (ph) => {
      if (localStorage.getItem('analytics_consent') !== 'true') {
        ph.opt_out_capturing()
      }
    }
  })
}

export const grantConsent = () => {
  localStorage.setItem('analytics_consent', 'true')
  posthog.opt_in_capturing()
}

export const denyConsent = () => {
  localStorage.setItem('analytics_consent', 'false')
  posthog.opt_out_capturing()
}

export const hasConsented = () =>
  localStorage.getItem('analytics_consent') !== null

export { posthog }
