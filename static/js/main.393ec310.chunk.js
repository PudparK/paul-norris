(this["webpackJsonppaul-norris"]=this["webpackJsonppaul-norris"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),c=n.n(o),i=(n(11),n(1)),u=n.n(i),s=n(5),l=n(4);n(13),n(14);var p=function(e){var t=e.joke;return(a.a.createElement("blockquote",null,t?t.value.joke:"text"))};var f=function(e){var t=e.onClick;return(a.a.createElement("button",{onClick:t},"Next Joke"))};function m(){return(m=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://api.icndb.com/jokes/random?firstName=Paul&exclude=[explicit]");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=function(){function e(e){(function(){return m.apply(this,arguments)})().then((function(t){e(t)})).catch((function(e){console.log("Error",e)}))}var t=Object(r.useState)(),n=Object(s.a)(t,2),o=n[0],c=n[1];return(a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"}),a.a.createElement(p,{joke:o}),a.a.createElement(f,{onClick:function(){return e(c)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.393ec310.chunk.js.map