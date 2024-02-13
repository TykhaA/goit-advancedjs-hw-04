import{i,S as g,a as h}from"./assets/vendor-da186403.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();i.settings({timeout:3e3,resetOnHover:!0,position:"topRight"});const a={form:document.querySelector(".js-form"),gallery:document.querySelector(".gallery"),guard:document.querySelector(".js-guard")};let y=new g(".photo-card a",{captionDelay:"250"});const b={rootMargin:"50px"},p=new IntersectionObserver($,b);let u=1,l="";function v(o){const r=o.data.hits.map(({webformatURL:s,largeImageURL:c,tags:e,likes:t,views:n,comments:f,downloads:m})=>`<div class="photo-card">
            <a href="${c}">
                <img src="${s}" alt="${e}" loading="lazy" />
            </a>
            <div class="info">
                <p class="info-item">
                    <b>Likes</b>
                    <span>${t}</span>
                </p>
                <p class="info-item">
                    <b>Views</b>
                    <span>${n}</span>
                </p>
                <p class="info-item">
                    <b>Comments</b>
                    <span>${f}</span>
                </p>
                <p class="info-item">
                    <b>Downloads</b>
                    <span>${m}</span>
                </p>
            </div>
         </div>`).join("");a.gallery.insertAdjacentHTML("beforeend",r)}a.form.addEventListener("submit",L);function L(o){o.preventDefault();const{searchQuery:r}=o.currentTarget.elements;a.gallery.innerHTML="",l=r.value,l.trim()!==""?(u=1,p.unobserve(a.guard),d(l,u),a.form.reset()):i.error({message:"You need to fill thecorrect search."})}async function S(o,r){try{return await h.get(`https://pixabay.com/api/?key=42309515-7c9611a24bfcb09e365820ed6&q=${o}&image_type=photo&orientation=horizontal&=true&per_page=40&page=${r}`)}catch{i.error({message:"Sorry, there are no images matching your search query. Please try again."})}}async function d(o,r){const s=await S(o,r);s.data.hits.length===0?i.error({message:"Sorry, there are no images matching your search query. Please try again."}):(v(s),y.refresh(),r<=s.data.total/40&&r<500?p.observe(a.guard):(p.unobserve(a.guard),i.info({message:"We're sorry, but you've reached the end of search results."})))}function $(o){o.forEach(r=>{r.isIntersecting&&(u+=1,d(l,u))})}
//# sourceMappingURL=commonHelpers.js.map
