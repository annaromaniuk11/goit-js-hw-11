import{i as c,S as p}from"./assets/vendor-7659544d.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="/goit-js-hw-11/assets/err-7962080a.svg",u="/goit-js-hw-11/assets/x-c58b0ecf.svg";function d(){c.warning({title:"Sorry,",titleColor:"#FFFFFF",message:"there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",messageSize:"16px",backgroundColor:"#FFA000",iconUrl:dangIcon,position:"center",close:!1,buttons:[[`<button type="button" style="
          background-color: #FFA000; 
          width: 20px; 
          height: 20px; 
          padding: 5px">
            <img style="
              width: 10px; 
              height: 10px" 
              src=${u}>
        </button>`,function(r,o){r.hide({transitionOut:"fadeOut"},o)}]]})}function f(r){c.show({title:"Error",titleColor:"#FFFFFF",message:`${r}`,messageColor:"#FFFFFF",messageSize:"16px",backgroundColor:"#EF4040",iconUrl:g,position:"topRight",close:!1,buttons:[[`<button type="button" style="
          background-color: #EF4040; 
          width: 20px; 
          height: 20px; 
          padding: 5px">
            <img style="
              width: 10px; 
              height: 10px" 
                src=${u}>
        </button>`,function(o,s){o.hide({transitionOut:"fadeOut"},s)}]]})}const h=new p(".gallery a",{captionDelay:250,captionsData:"alt"}),a=document.querySelector(".gallery");function y({totalHits:r,hits:o}){if(parseInt(r)>0){const s=o.map(F).join("");a.innerHTML=s,h.refresh()}else a.innerHTML="",d()}function F({webformatURL:r,largeImageURL:o,tags:s,likes:n,views:e,comments:t,downloads:i}){return`
  <li class="gallery-item">
    <a class="gallery-link" href="${o}">
      <img class="gallery-image" src="${r}" alt="${s}">
    </a>
    <ul class="item-img">
      <li class="elem-img">
        <p class="elem-name">Likes</p>
        <p>${n}</p>
      </li>
      <li class="elem-img">
        <p class="elem-name">Views</p>
        <p>${e}</p>
      </li>
      <li class="elem-img">
        <p class="elem-name">Comments</p>
        <p>${t}</p>
      </li>
      <li class="elem-img">
        <p class="elem-name">Downloads</p>
        <p>${i}</p>
      </li>
    </ul>
  </li>
  `}function b(r){const o="https://pixabay.com/",s="api/",n=new URLSearchParams({key:"42208232-118910d8102453b47e924ae6c",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}${s}?${n}`;return fetch(e).then(t=>{if(t.ok)return t.json();throw new Error(`${t.status} - ${t.statusText}`)})}const m=document.querySelector("#searchForm"),l=document.querySelector(".loader");m.addEventListener("submit",x);function x(r){r.preventDefault();const o=r.target.keyword.value.trim();o&&(l.style.display="block",b(o).then(s=>{y(s)}).catch(s=>{f(s)}).finally(()=>l.style.display="none"),m.reset())}
//# sourceMappingURL=commonHelpers.js.map
