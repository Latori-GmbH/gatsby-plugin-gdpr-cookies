const {
  validKlaviyoTrackingId,
  getCookie
} = require('../helper')

exports.addKlaviyo = function (options) {
  return new Promise(function (resolve, reject) {
    if (window.gatsbyPluginGDPRCookiesKlaviyoAdded) return resolve(true);
    
    /* eslint-disable */
    // KLAVIYO SPECIFIC CODE HERE
    _Klaviyo_partner_id = options.trackingId;
    window._Klaviyo_data_partner_ids = window._Klaviyo_data_partner_ids || [];

    window._Klaviyo_data_partner_ids.push(_Klaviyo_partner_id);
    /* eslint-enable */


    window.gatsbyPluginGDPRCookiesKlaviyoAdded = true;
    resolve(true);
  });
};

exports.initializeKlaviyo = function (options) {
  if (!window.gatsbyPluginGDPRCookiesKlaviyoInitialized && getCookie(options.cookieName) === "true" && validKlaviyoTrackingId(options)) {
    // (function(){
    var s = document.getElementsByTagName("script")[0];
    var b = document.createElement("script");
    b.type = "text/javascript";
    b.async = true;
    b.src = `https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${options.trackingId}`;
    s.parentNode.insertBefore(b, s); // })();

    window.gatsbyPluginGDPRCookiesKlaviyoInitialized = true;
  }
};