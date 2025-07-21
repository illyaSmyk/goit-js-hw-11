import{a as u,S as f,i as a}from"./assets/vendor-DqB7j7Ix.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const d="14561738-ab29105e8f3333960184e35c7",p="https://pixabay.com/api/";function m(o){const s=new URLSearchParams({key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return u.get(`${p}?${s}`).then(e=>e.data.hits).catch(e=>{throw console.error("Error fetching images:",e),e})}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new f(".gallery a");function g(o){const s=o.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}" width="360" height="200">
        </a>
        <div class="info">
          <div class="labels">
            <span>Likes</span>
            <span>Views</span>
            <span>Comments</span>
            <span>Downloads</span>
          </div>
          <div class="values">
            <span>${e.likes}</span>
            <span>${e.views}</span>
            <span>${e.comments}</span>
            <span>${e.downloads}</span>
          </div>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",s),h.refresh()}function y(){c.innerHTML=""}function L(){l.classList.add("is-visible")}function v(){l.classList.remove("is-visible")}const b={form:document.querySelector(".form")};b.form.addEventListener("submit",w);function w(o){o.preventDefault();const s=o.target.elements["search-text"].value.trim();if(!s){a.warning({message:"Please enter a search query!",position:"topRight"});return}y(),L(),m(s).then(e=>{if(e.length===0){a.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(e)}).catch(()=>{a.error({message:"An error occurred while fetching images.",position:"topRight"})}).finally(()=>{v()})}
//# sourceMappingURL=index.js.map
