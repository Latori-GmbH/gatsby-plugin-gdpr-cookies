var _require = require('gatsby-plugin-gdpr-cookies/src/helper'),
    validInspectletConfig = _require.validInspectletConfig,
    getCookie = _require.getCookie;

exports.addInspectlet = function (options) {
  return new Promise(function (resolve, reject) {
    if (window.gatsbyPluginGDPRCookiesInspectletAdded) return resolve(true);
    /* eslint-disable */

    !function (d, t) {
      var g = d.createElement(t),
          s = d.getElementsByTagName(t)[0];
      g.defer = true;
      g.async = true;
      g.id = "inspectement-id";
      g.innerHTML = `(function() {
        window.__insp = window.__insp || [];
        __insp.push(['wid', ${options.pixelId}]);
        var ldinsp = function(){
        if(typeof window.__inspld != "undefined") return; window.__inspld = 1; var insp = document.createElement('script'); insp.type = 'text/javascript'; insp.async = true; insp.id = "inspsync"; insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cdn.inspectlet.com/inspectlet.js?wid=1522785580&r=' + Math.floor(new Date().getTime()/3600000); var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(insp, x); };
        setTimeout(ldinsp, 0);
        })();`
      s.parentNode.insertBefore(g, s);

    }(document, "script");
    /* eslint-enable */

    window.gatsbyPluginGDPRCookiesInspectletAdded = true;
    resolve(true);
  });
};