const {
  initializeAndTrackGoogleAnalytics,
  initializeAndTrackGoogleTagManager,
  initializeAndTrackFacebookPixel,
  initializeAndTrackTikTokPixel,
  initializeAndTrackHotjar,
  initializeChatwoot,
  initializeLinkedin,
  initializeKlaviyo,
  initializeProvenExpert,
  initializeInspectlet
} = require('./services')

const { isEnvironmentValid } = require('./helper')
const { initializeTikTokPixel } = require('./services/tiktok')


exports.initializeAndTrack = (location) => {
  const options = window.gatsbyPluginGDPRCookiesOptions

  if (isEnvironmentValid(options.environments)) {
    if (location === undefined || location === null) {
      console.error('Please provide a reach router location to the initializeAndTrack function.')
    } else {
      initializeAndTrackGoogleAnalytics(options.googleAnalytics, location)
      initializeAndTrackGoogleTagManager(options.googleTagManager, location)
      initializeAndTrackFacebookPixel(options.facebookPixel)
      initializeAndTrackTikTokPixel(options.tikTokPixel)
      initializeAndTrackHotjar(options.hotjar)
      initializeChatwoot(options.chatwoot)
      initializeLinkedin(options.linkedin)
      initializeKlaviyo(options.klaviyo)
      initializeProvenExpert(options.provenExpert)
      initializeInspectlet(options.inspectlet);
    }
  }
}
