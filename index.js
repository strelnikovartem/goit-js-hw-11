import{a as d,S as m,i as n}from"./assets/vendor-BjRz3xa9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const f="49762911-ec3b435e9780d83fd842f10c5",y="https://pixabay.com/api/";function h(a){const r=new URLSearchParams({key:f,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return d(y,{params:r}).then(({data:s})=>s)}const g=new m(".gallery-link",{captionsData:"alt",captionDelay:250,animationSpeed:350,captionPosition:"outside"}),l=document.querySelector(".gallery"),c=document.querySelector(".loader");function b(a){const r=a.map(({webformatURL:s,largeImageURL:o,tags:e,likes:t,views:i,comments:u,downloads:p})=>`
      <li class="gallery-item">
	<a class="gallery-link" href="${o}">
		<img 
		  class="gallery-image" 
		  src="${s}" 
		  alt="${e}" 
		/>
	</a>
    
      <ul class="baner">
          <li class="baner-li">
            <p class="baner-title">Likes</p>
            <p class="baner-text">${t}</p>
          </li>
          <li class="baner-li">
            <p class="baner-title">Views</p>
            <p class="baner-text">${i}</p>
          </li>
          <li class="baner-li">
            <p class="baner-title">Comments</p>
            <p class="baner-text">${u}</p>
          </li>
          <li class="baner-li">
            <p class="baner-title">Downloads</p>
            <p class="baner-text">${p}</p>
          </li>
      </ul>
    
</li>
`).join("");l.insertAdjacentHTML("beforeend",r),g.refresh()}function L(){l.innerHTML=""}function S(){c.classList.remove("hidden")}function x(){c.classList.add("hidden")}const P=document.querySelector(".form");P.addEventListener("submit",q);function q(a){a.preventDefault(),L();const r=a.target.elements["search-text"].value.trim();if(a.target.reset(),!r){n.error({message:"Enter valid query",position:"topRight"});return}S(),h(r).then(({hits:s})=>{if(s.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:432});return}b(s)}).catch(s=>{console.log(s)}).finally(()=>{x()})}
//# sourceMappingURL=index.js.map
