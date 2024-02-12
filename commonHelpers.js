import{i as l,a as g,S as y}from"./assets/vendor-da186403.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();l.settings({timeout:3e3,resetOnHover:!0,position:"topRight"});const a={form:document.querySelector(".js-form"),gallery:document.querySelector(".gallery"),guard:document.querySelector(".js-guard")},h={rootMargin:"50px"},d=new IntersectionObserver(S,h);let u=1,c="";function b(s){const r=s.data.hits.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:i,comments:m,downloads:f})=>`<div class="photo-card">
            <a href="${n}">
                <img src="${o}" alt="${e}" loading="lazy" />
            </a>
            <div class="info">
                <p class="info-item">
                    <b>Likes</b>
                    <span>${t}</span>
                </p>
                <p class="info-item">
                    <b>Views</b>
                    <span>${i}</span>
                </p>
                <p class="info-item">
                    <b>Comments</b>
                    <span>${m}</span>
                </p>
                <p class="info-item">
                    <b>Downloads</b>
                    <span>${f}</span>
                </p>
            </div>
         </div>`).join("");a.gallery.insertAdjacentHTML("beforeend",r)}a.form.addEventListener("submit",v);function v(s){s.preventDefault();const{searchQuery:r}=s.currentTarget.elements;a.gallery.innerHTML="",c=r.value,c!==""?(p(c,u),a.form.reset()):l.error({message:"Sorry, there are no images matching your search query. Please try again."})}async function p(s,r){try{const o=await g.get(`https://pixabay.com/api/?key=42309515-7c9611a24bfcb09e365820ed6&q=${s}&image_type=photo&orientation=horizontal&=true&per_page=40&page=${r}`);if(o.data.hits.length===0)l.error({message:"Sorry, there are no images matching your search query. Please try again."});else{b(o);let n=new y(".photo-card a",{captionDelay:"250"})}r<=o.data.total/40&&r<500?d.observe(a.guard):d.unobserve(a.guard)}catch{l.error({message:"Sorry, there are no images matching your search query. Please try again."})}}function S(s){s.forEach(r=>{if(r.isIntersecting){u+=1,p(c,u);const{height:o}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}})}
//# sourceMappingURL=commonHelpers.js.map
