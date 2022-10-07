const {
  validProvenExpertConfig,
  getCookie
} = require('../helper')

exports.addProvenExpert = (options) => {
  return new Promise((resolve, reject) => {
    if (window.gatsbyPluginGDPRCookiesProvenExpertAdded) return resolve(true)

    /* eslint-disable */
    !(function(d,t) {
      var BASE_URL=options.url;
      var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
      g.src=BASE_URL+`?style=${localStorage.getItem('theme') == 'light' ? 'white' : 'black'}&amp;feedback=0`;
      g.defer = true;
      g.async = true;
      s.parentNode.insertBefore(g,s);
    })(document,"script")
    /* eslint-enable */

    window.gatsbyPluginGDPRCookiesProvenExpertAdded = true

    resolve(true)
  })
}
