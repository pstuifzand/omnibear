(function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=6)})({2:function(t,n,e){"use strict";function r(t,n,e){var r;return r="string"==typeof n?n:u(n),fetch(t+"?"+r,{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:e?JSON.stringify(e):null}).then(function(t){return t.text()})}function o(t,n,e){return fetch(t,{method:"POST",headers:{Authorization:"Bearer "+e},body:new FormData(n)}).then(function(t){return t.text()})}function u(t){var n=[];for(var e in t)n.push(e+"="+t[e]);return n.join("&")}t.exports={post:r,postMicropub:o,getParamString:u}},6:function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,n,e){switch(t.action){case"begin-auth":u(t.payload)}}function u(t){localStorage.setItem("domain",t.domain),d=t.tabId}function i(t,n,e){if(t===d&&a(n)){var r=c("code",n.url);l(r).then(function(t){var n=s("access_token",t);localStorage.setItem("token",n),chrome.tabs.remove(e.id),d=null})}}function a(t){var n="http://omnibear.com/auth/success";return"loading"===t.status&&t.url&&t.url.startsWith(n)}function c(t,n){var e=n.split("?")[1];return s(t,e)}function s(t,n){var e=n.split("&").filter(function(n){return n.startsWith(t+"=")});if(e&&e.length){var r=e[0].substr(t.length+1);return decodeURIComponent(r)}return null}function l(t){var n={code:t,redirect_uri:"http://omnibear.com/auth/success/",client_id:"http://omnibear.com",me:"http://keithjgrant.com"},e=localStorage.getItem("tokenEndpoint");return p.default.post(e,n)}var f=e(2),p=r(f),d=null;t.exports=function(){chrome.runtime.onMessage.addListener(o),chrome.tabs.onUpdated.addListener(i)}}});
//# sourceMappingURL=background.js.map