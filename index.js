import{a as p,S as d,i as f}from"./assets/vendor-0KvIZ-q-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const m="54239914-b8bb815315f9ce22f6479101b",h=o=>p.get("https://pixabay.com/api/",{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(({data:r})=>r).catch(r=>console.error("Помилка:",r)),i=document.querySelector(".gallery"),c=document.querySelector(".loader");function g(o){const r=o.map(({webformatURL:n,largeImageURL:a,tags:e,likes:t,views:s,comments:l,downloads:u})=>`<li>
  <a href='${a}'>
  <img src="${n}" alt="${e}" width = 360px height = 200px/>
  </a>
  <div class="text-img-engagement">
    <p>Likes <span>${t}</span></p>
    <p>View <span>${s}</span></p>
    <p>Comments <span>${l}</span></p>
    <p>Downloads <span>${u}</span></p>
  </div>
</li>`).join("");i.insertAdjacentHTML("beforeend",r)}function y(){i.innerHTML=""}function L(){c.classList.remove("hidden")}function b(){c.classList.add("hidden")}const x=document.querySelector(".form"),S=new d(".gallery a",{captionsData:"alt"});x.addEventListener("submit",v);function v(o){o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(!r){alert("Введіть пошукове значення");return}L(),h(r).then(({hits:n})=>{if(y(),n.length===0){f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(n),S.refresh()}).catch().finally(()=>{b()})}
//# sourceMappingURL=index.js.map
