"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["css/main.css","6abc8edf84972a4de5599a6ad230cdcf"],["index.html","87e05ebca5cd8501b1bf0e41ce45f65d"],["static/js/main.0427fa2c.js","5f2ffe5402627e318f5e71019b41e061"],["static/media/adding-table.152f9c29.less","152f9c29515fa7ae78f3817c6aa058bf"],["static/media/adding-table.b2328beb.less","b2328beb0372c051d06daccb00e35bf0"],["static/media/all-table-icon.cdd68bfd.svg","cdd68bfde8e2f387d1e687ccb5619b5b"],["static/media/attributeEditor.ac9c58ce.less","ac9c58ce1ce941a466ff0c2077c8149d"],["static/media/attributeEditor.b2328beb.less","b2328beb0372c051d06daccb00e35bf0"],["static/media/attributes.7134d770.less","7134d770274183dc714e30ba2b2e8f00"],["static/media/attributes.b2328beb.less","b2328beb0372c051d06daccb00e35bf0"],["static/media/bigButton.3e1050d2.less","3e1050d29640b108f7e9a6b579c84b4e"],["static/media/bigButton.b2328beb.less","b2328beb0372c051d06daccb00e35bf0"],["static/media/bigButton.c3671ff1.less","c3671ff1e5623f58fee137c6b5a92a63"],["static/media/buttons.0ae544cf.less","0ae544cfc277f073ae39ef349b682d3c"],["static/media/buttons.b2328beb.less","b2328beb0372c051d06daccb00e35bf0"],["static/media/calendar-icon.f7631018.svg","f76310184b81c699c8da08a7d0217f14"],["static/media/comparison-chart-icon.1c91950b.svg","1c91950bb4105c16b8be8ee34a29c6e0"],["static/media/dayPicker.631d1603.less","631d160340c0f79b0158fa91ce8bba3b"],["static/media/dayPicker.b2328beb.less","b2328beb0372c051d06daccb00e35bf0"],["static/media/events.2e6bf999.less","2e6bf9998a8c4fb37952a89f7d58a73f"],["static/media/events.b2328beb.less","b2328beb0372c051d06daccb00e35bf0"],["static/media/form-builder.b2328beb.less","b2328beb0372c051d06daccb00e35bf0"],["static/media/form-builder.d9351854.less","d93518542fcbbde7f987d8d26256a451"],["static/media/header.2877d248.less","2877d248444aa80ffaf4d6b6524200f0"],["static/media/header.b2328beb.less","b2328beb0372c051d06daccb00e35bf0"],["static/media/home.61ed6b32.less","61ed6b32e6978400374451a729f9b213"],["static/media/home.b2328beb.less","b2328beb0372c051d06daccb00e35bf0"],["static/media/index.b2328beb.less","b2328beb0372c051d06daccb00e35bf0"],["static/media/index.c9687017.less","c968701724a1e10247d2e4460143ff1d"],["static/media/interests-icon.5249c32e.svg","5249c32ee758228d60578d727996e929"],["static/media/loading.6201f081.less","6201f081ef881cc2bf82d0b18d85a3cb"],["static/media/loading.b2328beb.less","b2328beb0372c051d06daccb00e35bf0"],["static/media/logo.19defd99.png","19defd99ce801e80d2c1ba46ba52c41a"],["static/media/multiple-choice-icon.84dea95a.svg","84dea95a348345103457cacf4a5f26fb"],["static/media/multireferent-form.b2328beb.less","b2328beb0372c051d06daccb00e35bf0"],["static/media/multireferent-form.bc56bd06.less","bc56bd067b773625abb6e2b77fa79c1c"],["static/media/new_coffee.b27b05e8.png","b27b05e8a1d2422b50e3778034e175f2"],["static/media/open-responses-icon.a57fb09c.svg","a57fb09c8efe79c53cbd68beba62c9fa"],["static/media/possible-leaders-icon.8bd34c87.svg","8bd34c87608ac2f455ef4fc3ece592fe"],["static/media/ratings-heatmap-icon.7b5bbfa0.svg","7b5bbfa0100375ac6bab2ac4347011be"],["static/media/reportBuilder.7bf3bcd0.less","7bf3bcd070abd985f4e2bdf4bd4143ab"],["static/media/reportBuilder.b2328beb.less","b2328beb0372c051d06daccb00e35bf0"],["static/media/rich-text-widget-icon.2a0b4bca.svg","2a0b4bca907f27b6cd9ef9c4251ed8b1"],["static/media/rubricColors.601e4c45.less","601e4c45c07f99cb728b5ddab78442c4"],["static/media/rubricColors.b2328beb.less","b2328beb0372c051d06daccb00e35bf0"],["static/media/scales.afad2eec.less","afad2eecc4998292b2ecb5d109417037"],["static/media/scales.b2328beb.less","b2328beb0372c051d06daccb00e35bf0"],["static/media/section-icon.a9549215.svg","a954921528128a9820952e73d092ef66"],["static/media/submenu.6c508035.less","6c5080359b76e2b06f83754a29c25afd"],["static/media/submenu.b2328beb.less","b2328beb0372c051d06daccb00e35bf0"],["static/media/subnav.9171cc61.less","9171cc615342cda06a61cfbd14ea5a93"],["static/media/subnav.b2328beb.less","b2328beb0372c051d06daccb00e35bf0"],["static/media/success-and-needs-icon.a7d5c2b5.svg","a7d5c2b548169a618d17a792f70c8826"],["static/media/tags.b2328beb.less","b2328beb0372c051d06daccb00e35bf0"],["static/media/tags.d3b1fbd1.less","d3b1fbd1a6b38910a2cd1a9c3f66adb8"],["static/media/underline.a790227a.less","a790227aa475c39ce4fa36446a43c6b1"],["static/media/underline.b2328beb.less","b2328beb0372c051d06daccb00e35bf0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,t){var s=new URL(e);return t&&s.pathname.match(t)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),s=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),s]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);a=urlsToCacheKeys.has(c);a||(c=addDirectoryIndex(c,"index.html"),a=urlsToCacheKeys.has(c));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("./index.html",self.location).toString(),a=urlsToCacheKeys.has(c)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});