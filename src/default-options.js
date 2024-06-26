export const defaultOptions = {
  environments: [`production`],
  googleAnalytics: {
    cookieName: `gatsby-gdpr-google-analytics`,
    anonymize: true,
    allowAdFeatures: false
  },
  googleTagManager: {
    cookieName: `gatsby-gdpr-google-tagmanager`,
    dataLayerName: `dataLayer`,
    routeChangeEvent: `gatsbyRouteChange`
  },
  facebookPixel: {
    cookieName: `gatsby-gdpr-facebook-pixel`
  },
  tikTokPixel: {
    cookieName: `gatsby-gdpr-tiktok-pixel`
  },
  hotjar: {
    cookieName: `gatsby-gdpr-hotjar`
  },
  chatwoot: {
    cookieName: 'gatsby-gdpr-chatwoot'
  },
  linkedin: {
    cookieName: 'gatsby-gdpr-linkedin'
  },
  klaviyo: {
    cookieName: `gatsby-gdpr-klaviyo`
  },
  provenExpert: {
    cookieName: `gatsby-gdpr-proven-expert`
  },
  inspectlet: {
    cookieName: 'gatsby-gdpr-inspectlet-pixel'
  }
}
