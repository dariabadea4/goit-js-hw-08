function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=n);var a=n("kEUo3");const l=document.querySelector(".feedback-form input"),c=document.querySelector(".feedback-form textarea"),d=document.querySelector(".feedback-form button"),s=document.querySelector(".feedback-form");class u{constructor(e,t){this.user=e,this.message=t}}const f=e=>{const t=localStorage.getItem(e);return null===t?void 0:t};s.addEventListener("change",e(a).debounce((()=>{const e=new u(l.value,c.value),t=JSON.stringify(e);var o,r;o="feedback-form-state",r=t,localStorage.setItem(o,r)}),2e3)),window.addEventListener("load",(()=>{(e=>{if(void 0!==f("feedback-form-state")){const t=f(e),o=JSON.parse(t);l.value=o.user,c.value=o.message}})("feedback-form-state")})),d.addEventListener("click",(e=>{e.preventDefault();const t=new u(l.value,c.value);var o;console.log(t),s.reset(),o="feedback-form-state",localStorage.removeItem(o)}));
//# sourceMappingURL=03-feedback.0fe39eda.js.map
