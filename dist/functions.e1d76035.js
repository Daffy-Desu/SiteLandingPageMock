parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"OeGu":[function(require,module,exports) {
var e=function(){var e=document.querySelector(".cursor"),t=document.querySelectorAll(".nav-a");window.addEventListener("mousemove",function(t){e.style.top=t.pageY+"px",e.style.left=t.pageX+"px"}),t.forEach(function(t){t.addEventListener("mouseleave",function(){e.classList.remove("cursor-turn"),t.classList.remove("cursor-switch")}),t.addEventListener("mouseover",function(){e.classList.add("cursor-turn"),t.classList.add("cursor-switch")})})};e();var t=function(){var e=document.querySelector(".hamburg"),t=document.querySelector(".nav-l"),o=document.querySelectorAll(".nav-l li");e.addEventListener("click",function(){t.classList.toggle("nav-active"),e.classList.toggle("hamSwitch"),o.forEach(function(t,o){e.classList.contains("hamSwitch")?(t.style.opacity=0,t.style.animation="listFadeUp 1.5s ease forwards ".concat(o/7+.3,"s")):(t.style.opacity=1,t.style.animation="")})})};t();var o=function(){var e=document.querySelector(".button-l"),t=document.querySelector(".button-r");e.addEventListener("mouseover",function(){e.style.transition="transform 0.2s ease",e.style.transform="scale(1.5) skew(-12deg)"}),e.addEventListener("mouseout",function(){e.style.transform="scale(1) skew(0deg)"}),t.addEventListener("mouseover",function(){t.style.transition="transform 0.2s ease",t.style.transform="scale(1.5) skew(-12deg)"}),t.addEventListener("mouseout",function(){t.style.transform="scale(1) skew(0deg)"})};o();var n=function(){var e=document.querySelector(".cc"),t=document.querySelector(".nav-l"),o=document.querySelector(".button-l"),n=document.querySelector(".button-r"),r=document.querySelectorAll(".social-box"),s=["crimson","rebeccapurple","royalblue","black"],c=0;e.addEventListener("click",function(){o.style.transition="background-color 0.5s ease-in",n.style.transition="background-color 0.5s ease-in",c+=1,document.body.style.backgroundColor=s[c],o.style.backgroundColor=s[c],n.style.backgroundColor=s[c];for(var e=0;e<r.length;e++)r[e].style.backgroundColor=s[c];if(window.innerWidth<1024?t.style.backgroundColor=s[c]:t.style.backgroundColor="transparent",c>3){c=0,document.body.style.backgroundColor=s[c],o.style.backgroundColor=s[c],n.style.backgroundColor=s[c];for(var l=0;l<r.length;l++)r[l].style.backgroundColor=s[c];window.innerWidth<1024?t.style.backgroundColor=s[c]:t.style.backgroundColor="transparent"}}),window.addEventListener("resize",function(){window.innerWidth<1024?t.style.backgroundColor=s[c]:t.style.backgroundColor="transparent"})};n();var r=function(){function e(){var e=document.querySelector(".crosses").childNodes,t=document.querySelector(".dots").childNodes,o=(document.querySelector(".heelclip"),window.innerWidth),n=window.innerHeight,r=[o/5,o/1.5,o/1.4],s=[n/2.4,n/8,n/1.5],c=[o/o,o/6,o/1.3],l=[n/2,n/n,n/1.5];function a(e){return Math.floor(Math.random()*Math.floor(e))}for(var u=0;u<e.length;u++)e[u].style.left=a(100)+r[u]+"px",e[u].style.top=a(100)+s[u]+"px";for(var i=0;i<t.length;i++)t[i].style.left=a(100)+c[i]+"px",t[i].style.top=a(100)+l[i]+"px"}e(),window.addEventListener("resize",function(){e()})};r();
},{}]},{},["OeGu"], null)
//# sourceMappingURL=/functions.e1d76035.js.map