import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as m,i as f}from"./assets/vendor-77e16229.js";const h="/goit-js-hw-10/assets/symbol-defs-70ffecbc.svg",t={inputEl:document.getElementById("datetime-picker"),btnEl:document.querySelector("[data-start]"),daysEl:document.querySelector("[data-days]"),hoursEl:document.querySelector("[data-hours]"),minutesEl:document.querySelector("[data-minutes]"),secondsEl:document.querySelector("[data-seconds]")};let n,c;t.btnEl.disabled=!0;t.btnEl.addEventListener("click",e=>{c=setInterval(()=>{const s=n-Date.now(),r=g(s),o=E(r);t.daysEl.textContent=o.d,t.hoursEl.textContent=o.h,t.minutesEl.textContent=o.m,t.secondsEl.textContent=o.s,t.inputEl.disabled=!0,t.btnEl.disabled=!0},1e3),setTimeout(()=>{clearInterval(c),t.inputEl.disabled=!1},n-Date.now())});function E({days:e,hours:s,minutes:r,seconds:o}){const d=e.toString().padStart(2,"0"),a=s.toString().padStart(2,"0"),i=r.toString().padStart(2,"0"),l=o.toString().padStart(2,"0");return{d,h:a,m:i,s:l}}function g(e){const a=Math.floor(e/864e5),i=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),u=Math.floor(e%864e5%36e5%6e4/1e3);return{days:a,hours:i,minutes:l,seconds:u}}const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){if(n=e[0],n<=Date.now())f.error({title:"Error",message:"Please choose a date in the future",messageColor:"#fff",messageSize:"16",messageLineHeight:"0.03em",titleColor:"#fff",titleSize:"16",titleLineHeight:"0.03em",position:"topCenter",backgroundColor:"#ef4040",theme:"dark",icon:"iziToast-icon",iconUrl:h,iconColor:"#FAFAFB"});else return t.btnEl.disabled=!1,n}};m(t.inputEl,S);
//# sourceMappingURL=commonHelpers.js.map