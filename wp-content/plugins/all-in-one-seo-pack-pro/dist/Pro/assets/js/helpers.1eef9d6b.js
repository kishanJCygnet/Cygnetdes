import{f as tt,d as et}from"./index.1a8da5ff.js";import{V as y}from"./vueComponentNormalizer.a77505d6.js";import{s as o}from"./index.670b7e80.js";import{c as x,g as w}from"./cleanForSlug.ba4852e5.js";const q=()=>{if(!window.aioseo.currentPost||!window.aioseo.currentPost.postType)return"";const t=window.aioseo.currentPost.postType,e=window.aioseo.dynamicOptions.searchAppearance.postTypes[t].customFields;if(!e||!At)return"";const n=()=>{S(500)},s=e.replace(/\n/g,",").split(","),i=[],c=["INPUT","TEXTAREA","IMG"],r=a=>{try{document.createDocumentFragment().querySelector(a)}catch{return!1}return!0};s.forEach(a=>{a=a.trim();const l=r(`#${a}`)?document.querySelector(`#${a}`):!1,L=document.querySelectorAll("#the-list > tr"),X=document.querySelectorAll(".acf-field");c.includes(l==null?void 0:l.tagName)&&!(l!=null&&l.closest(".acf-field"))?i.push(l):L.forEach(u=>{const m=u.querySelector(`#${u.id}-key`),T=u.querySelector(`#${u.id}-value`);c.includes(T==null?void 0:T.tagName)&&s.includes(m==null?void 0:m.value)&&i.push(T)}),X.forEach(u=>{if(a!==u.dataset.name)return"";let m=u.querySelector(`[id^="acf"][name$="[${u.dataset.key}]"]`);if(u.dataset.type==="image"&&(m=u.querySelector(".has-value img")),u.dataset.type==="gallery"&&(m=u.querySelector(".acf-gallery-attachment img")),!m||m.type&&m.type==="hidden")return"";if(u.dataset.type==="wysiwyg"){const T=window.setInterval(()=>{window.tinyMCE&&window.tinyMCE.activeEditor&&(window.clearInterval(T),window.tinyMCE.activeEditor.on("keyup",function(){!window.tinyMCE.activeEditor.acf||S(500)}))},50),F=function(Y){Y.forEach(K=>{var D;if(K.attributeName==="class"&&u.querySelector(".wp-editor-wrap.tmce-active")&&((D=window.tinyMCE)==null?void 0:D.activeEditor)){window.tinyMCE.activeEditor.on("keyup",function(){S(500)});const M=u.querySelector(`[name="acf[${u.dataset.key}]"]`);M&&(M.addEventListener("keyup",()=>{S(500)}),M.addEventListener("paste",()=>{S(500)}))}})},Q=new MutationObserver(F),B=u.querySelector(".wp-editor-wrap");B&&Q.observe(B,{attributes:!0})}c.includes(m.tagName)&&i.push(m)})});let d="";return i.forEach(a=>{let l="";if(c.includes(a.tagName)&&a.addEventListener("keyup",n),a.value&&(l=a.value),a.tagName==="IMG"&&a.src){const L=a.alt?`alt="${a.alt}"`:"";l=`<img src="${a.src}" ${L}>`}a.value&&a.type&&a.type==="url"&&(l=`<a href="${l}">${l}</a>`),l&&(d+=`${l} `)}),d},qt=(t,e=["INPUT","TEXTAREA","IMG"])=>{if(!t)return"";const n=document.querySelector(`#${t}`),s=document.querySelectorAll("#the-list > tr"),i=document.querySelectorAll(".acf-field");let c="";return n&&e.indexOf(n.tagName)!==-1&&(n.closest(".acf-field")||(c=n.tagName==="IMG"?n.getAttribute("src"):n.value)),s.length&&s.forEach(r=>{const d=r.querySelector(`#${r.id}-key`),a=r.querySelector(`#${r.id}-value`);a&&e.indexOf(a.tagName)!==-1&&d.value===t&&(c=a.tagName==="IMG"?a.getAttribute("src"):a.value)}),i.length&&i.forEach(r=>{if(t!==r.dataset.name)return;let d;e.forEach(a=>{const l=a.toLowerCase();d=r.querySelector(`[data-key="${r.dataset.key}"] ${l}`)||d}),d&&(c=d.tagName==="IMG"?d.getAttribute("src"):d.value)}),c};!window.wp.blockEditor&&window.wp.blocks&&window.wp.oldEditor&&(window.wp.blockEditor=window.wp.editor);const g=()=>document.body.classList.contains("block-editor-page")&&window.wp.data&&nt(),f=()=>!!(document.querySelector("#wp-content-wrap.tmce-active")||document.querySelector("#wp-content-wrap.html-active")),P=()=>!!(document.body.classList.contains("elementor-editor-active")&&window.elementor),A=()=>!!(document.body.classList.contains("et_pb_pagebuilder_layout")&&window.ET_Builder),C=()=>!!(document.body.classList.contains("seedprod-builder")&&window.seedprod_data),$t=()=>window.aioseo.data.isWooCommerceActive&&window.aioseo.currentPost&&window.aioseo.currentPost.postType==="product",nt=()=>{const t=window.wp;return typeof t<"u"&&typeof t.blocks<"u"&&typeof t.blockEditor<"u"},O=(t,e="div")=>{const n=document.createElement(e);return n.innerHTML=t.trim(),n},I=t=>(typeof t=="string"&&(t=O(t.replace(/[\t|\n]/gm,""))),t.textContent||t.innerText||""),N=t=>(typeof t=="string"&&(t=O(t)),t.querySelectorAll("img")),ot=()=>{const t=window.elementor.documents.getCurrent(),e=[];return t.$element?(t.$element.find(".elementor-widget-container").each((n,s)=>{let i=s.innerHTML.trim();i=i.replaceAll(/<p.*>(<img.*>)<\/p>/g,"$1"),!(I(i)===""&&N(i).length===0)&&e.push(i)}),e.join(" ")):""},k=()=>({content:ot(),title:window.elementor.settings.page.model.get("post_title"),excerpt:window.elementor.settings.page.model.get("post_excerpt")||"",slug:x(window.elementor.settings.page.model.get("post_title")),permalink:window.elementor.config.document.urls.permalink||""}),it=()=>{const t=w(ET_Builder,"Frames.app.frameElement",document.querySelector("iframe#et-fb-app-frame"));if(!t)return document.createElement("div");let e=t.contentWindow.document.querySelectorAll("#et-fb-app");return 1<e.length&&(e=[...e].filter(n=>n.classList.contains("et-fb-root-ancestor"))),e[0]||document.createElement("div")},st=()=>{const t=[],e=it().querySelectorAll(".et_pb_section"),n=new RegExp(["<style.*?</style>","\\[object Object\\]"].join("|"),"gi");for(let s=0;s<e.length;s++){let i=e[s].innerHTML;i=e[s].innerHTML.replace(n,""),i=i.replaceAll(/<p.*>(<img.*>)<\/p>/g,"$1"),!(I(i)===""&&N(i).length===0)&&t.push(i)}return t.join(" ")},at=()=>{const t=new URL(w(ETBuilderBackendDynamic,"currentPage.permalink",""));return t.searchParams.delete("PageSpeed"),t.href},b=()=>({content:st(),title:w(ETBuilderBackendDynamic,"postTitle",""),excerpt:w(ETBuilderBackendDynamic,"postMeta.post_excerpt",""),slug:w(ETBuilderBackendDynamic,"postMeta.post_name",""),permalink:at()}),rt=t=>{let e;switch(t.type){case"header":e=document.createElement(t.settings.tag),e.innerHTML=t.settings.headerTxt.trim();break;case"image":const n=document.createElement("img");t.settings.altTxt&&n.setAttribute("alt",t.settings.altTxt),t.settings.src&&n.setAttribute("src",t.settings.src),t.settings.noFollow&&n.setAttribute("rel","nofollow"),e=n,t.settings.link&&(e=document.createElement("a"),e.setAttribute("href",t.settings.link),e.innerHTML=n.outerHTML,t.settings.noFollow&&e.setAttribute("rel","nofollow"),t.settings.openNewWindow&&e.setAttribute("target","_blank"));break;case"video":t.settings.type==="youtube"?(e=document.createElement("iframe"),e.setAttribute("src",t.settings.youtubeUrl)):(e=document.createElement("div"),e.innerHTML=t.settings.code);break;case"text":e=document.createElement("div"),e.innerHTML=t.settings.txt.trim();break;case"button":e=document.createElement("a"),e.appendChild(document.createTextNode(t.settings.btnTxt+" "+t.settings.btnSubTxt)),t.settings.link&&e.setAttribute("href",t.settings.link),t.settings.altTxt&&e.setAttribute("alt",t.settings.altTxt),t.settings.src&&e.setAttribute("src",t.settings.src),t.settings.noFollow&&e.setAttribute("rel","nofollow"),t.settings.openNewWindow&&e.setAttribute("target","_blank");break;case"bullet-list":e=document.createElement("ul"),t.settings.items.forEach(s=>{const i=document.createElement("li");i.innerHTML=s.txt,e.appendChild(i)});break;case"custom-html":e=document.createElement("div"),e.innerHTML=t.settings.code;break}return e},ct=()=>{const t=[];return JSON.parse(JSON.stringify(w(seedprod_data,"settings.document.sections",[]))).forEach(n=>{n.rows.forEach(s=>{s.cols.forEach(i=>{i.blocks.forEach(c=>{const r=rt(c);!r||I(r)===""&&N(r).length===0||t.push(r.outerHTML)})})})}),t.join(" ")},lt=()=>{const t=w(seedprod_data,"home_url",""),e=w(seedprod_data,"settings.post_name","");return`${t}/${e}/`},_=()=>({content:ct(),title:w(seedprod_data,"settings.post_title",""),excerpt:"",slug:w(seedprod_data,"settings.post_name",""),permalink:lt()}),H=()=>{let t="";return P()&&(t=k().permalink),A()&&(t=b().permalink),C()&&(t=_().permalink),t},ut=()=>{if(o.state["live-tags"].liveTags.permalink)return o.state["live-tags"].liveTags.permalink;let t;if(f()){const e=document.querySelector("#edit-slug-box a");e&&e.href&&(t=e.href)}return g()&&(t=window.wp.data.select("core/editor").getPermalink()),t||(t=H()),t&&o.commit("live-tags/updatePermalink",t),t},h=()=>{let t;if(f()){const e=document.querySelector("#edit-slug-box a");e&&e.href&&(t=e.href)}return g()&&(t=window.wp.data.select("core/editor").getPermalink()),t||(t=H()),t},dt=async(t=!0)=>{let e=ut();const n=h();e!==n&&(e=n,e&&(o.commit("live-tags/updatePermalink",e),t&&y.prototype.$truSeo.runAnalysis({postId:o.state.currentPost.id,postData:{...o.state.currentPost},content:E(),slug:h()})))},U=/base64,(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)/g,j=()=>{let t="";return P()&&(t=k().content),A()&&(t=b().content),C()&&(t=_().content),t},W=t=>{var s;if(!t.includes('<!-- wp:block {"ref":'))return t;const e=(s=window.wp.blocks)==null?void 0:s.rawHandler({HTML:t});return tt(e).forEach(i=>{var c,r,d;if(i.name==="core/block"){const a=window.wp.data.select("core").getEntityRecord("postType","wp_block",(c=i.attributes)==null?void 0:c.ref);(r=a==null?void 0:a.content)!=null&&r.raw&&(t=t.replace(`<!-- wp:block {"ref":${(d=i.attributes)==null?void 0:d.ref}} /-->`,a.content.raw))}}),t},R=()=>{if(o.state["live-tags"].liveTags.post_content)return o.state["live-tags"].liveTags.post_content;let t="";if(f())if(window.tinyMCE||document.querySelector("#wp-content-wrap.html-active"))t=$();else{const e=window.setInterval(()=>{window.tinyMCE&&(window.clearInterval(e),t=$())},50)}return g()&&(t=window.wp.data.select("core/editor").getCurrentPost().content,t=W(t)),t||(t=j()),q()&&(t=t+q()),t=t.replace(U,""),t&&o.commit("live-tags/updatePostContent",t),t},E=()=>{let t="";if(f())if(window.tinyMCE||document.querySelector("#wp-content-wrap.html-active"))t=$();else{const e=window.setInterval(()=>{window.tinyMCE&&(window.clearInterval(e),t=$())},50)}return g()&&(t=window.wp.data.select("core/editor").getEditedPostContent(),t=W(t)),t||(t=j()),q()&&(t=t+q()),t=t.replace(U,""),t},pt=async(t=!0)=>{let e=R();const n=E();e!==n&&(e=n,o.commit("live-tags/updatePostContent",e),t&&y.prototype.$truSeo.runAnalysis({postId:o.state.currentPost.id,postData:{...o.state.currentPost},content:E(),slug:h()}))},$=()=>{let t="";const e=window.tinyMCE?window.tinyMCE.get("content"):"";if(document.querySelector("#wp-content-wrap.tmce-active")&&e)t=e.getContent({format:"raw"});else{const n=document.querySelector("textarea#content");t=n?n.value:""}return t},z=()=>{let t="";return P()&&(t=k().title),A()&&(t=b().title),C()&&(t=_().title),t},mt=()=>{if(o.state["live-tags"].liveTags.post_title)return o.state["live-tags"].liveTags.post_title;let t;if(f()){const e=document.querySelector("#post input#title");t=e?e.value:""}return g()&&(t=window.wp.data.select("core/editor").getCurrentPost().title),t||(t=z()),t&&o.commit("live-tags/updatePostTitle",t),t},gt=()=>{let t;if(f()){const e=document.querySelector("#post input#title");t=e?e.value:""}return g()&&(t=window.wp.data.select("core/editor").getEditedPostAttribute("title")),t||(t=z()),t},ft=async(t=!0)=>{let e=mt();const n=gt();e!==n&&(e=n,o.commit("live-tags/updatePostTitle",e),t&&y.prototype.$truSeo.runAnalysis({postId:o.state.currentPost.id,postData:{...o.state.currentPost},content:E(),slug:h()}))},G=t=>{if(!t)return"";const e=[/\[.*?\]/g,/<\/?[a-z][^>]*?>/gi,/<!--[\s\S]*?-->/g,/(\r\n|\n|\r)/g];return t=t.replaceAll(/\n\n/g," "),e.forEach(n=>{t=t.replace(n,"")}),t.trim()},V=()=>{let t="";return P()&&(t=k().excerpt),A()&&(t=b().excerpt),C()&&(t=_().excerpt),t},wt=()=>{if(o.state["live-tags"].liveTags.post_excerpt)return o.state["live-tags"].liveTags.post_excerpt;let t;if(f()){const e=document.querySelector("#postexcerpt textarea#excerpt");t=e?e.value:""}return g()&&(t=window.wp.data.select("core/editor").getCurrentPost().excerpt),t||(t=V()),t||(t=G(R())),t&&o.commit("live-tags/updatePostExcerpt",t),t},yt=()=>{let t;if(f()){const e=document.querySelector("#postexcerpt textarea#excerpt");t=e?e.value:""}return g()&&(t=window.wp.data.select("core/editor").getEditedPostAttribute("excerpt")),t||(t=V()),t||(t=G(E())),t},vt=async(t=!0)=>{let e=wt();const n=yt();e!==n&&(e=n,o.commit("live-tags/updatePostExcerpt",e),t&&y.prototype.$truSeo.runAnalysis({postId:o.state.currentPost.id,postData:{...o.state.currentPost},content:E(),slug:h()}))},Z=()=>{let t="";return P()&&(t=k().slug),A()&&(t=b().slug),C()&&(t=_().slug),t},Et=()=>{if(o.state["live-tags"].permalinkSlug)return o.state["live-tags"].permalinkSlug;let t="";if(f()){const e=document.querySelector("#post_name");e&&(t=x(e.value))}return g()&&(t=window.wp.data.select("core/editor").getCurrentPost().slug),t||(t=Z()),t&&o.commit("live-tags/updatePermalinkSlug",t),t},Tt=()=>{let t="";if(f()){const e=document.querySelector("#post_name");e&&(t=x(e.value))}if(g()&&(t=window.wp.data.select("core/editor").getEditedPostAttribute("slug")),P()){const e=window.elementor.settings.page.model.get("post_title");e&&(t=x(e))}return t||(t=Z()),t},ht=async(t=!0)=>{let e=Et();const n=Tt();e!==n&&(e=n,o.commit("live-tags/updatePermalinkSlug",e),t&&y.prototype.$truSeo.runAnalysis({postId:o.state.currentPost.id,postData:{...o.state.currentPost},content:E(),slug:h()}))};let p="",v="";const Pt=(t=!0)=>{var e;if(f()){const n=document.querySelectorAll('#post input[name="post_category[]"]:checked');n.length?(p!==n[0].parentNode.innerText&&(p=n[0].parentNode.innerText,o.commit("live-tags/updateTaxonomyTitle",p)),v=Array.from(n).map(s=>s.parentNode.innerText).join(", "),o.commit("live-tags/updateCategories",v)):p!==""&&(p=v="",o.commit("live-tags/updateTaxonomyTitle",p),o.commit("live-tags/updateCategories",v))}if(g()){let n=[],s=[];if((e=window.aioseo.user.data.allcaps)!=null&&e.manageCategories&&(n=window.wp.data.select("core").getEntityRecords("taxonomy","category"),s=window.wp.data.select("core/editor").getEditedPostAttribute("categories")),s&&s.length&&n){const i=n.find(c=>c.id===s[0]);i&&p!==i.name&&(p=i.name,o.commit("live-tags/updateTaxonomyTitle",p)),v=n.filter(c=>s.includes(c.id)).map(c=>c.name).join(", "),o.commit("live-tags/updateCategories",v)}else p!==""&&(p=v="",o.commit("live-tags/updateTaxonomyTitle",p),o.commit("live-tags/updateCategories",v))}t&&y.prototype.$truSeo.runAnalysis({postId:o.state.currentPost.id})},St=(t=!1)=>{if(o.state.currentPost.context!=="term")return;const e=document.querySelector("#edittag input#name");e&&(o.commit("live-tags/updateTaxonomyTitle",e.value),e.addEventListener("input",()=>{o.commit("live-tags/updateTaxonomyTitle",e.value)}));const n=document.querySelector("#edittag textarea#description");n&&(o.commit("live-tags/updateTaxonomyDescription",n.value),n.addEventListener("input",()=>{o.commit("live-tags/updateTaxonomyDescription",n.value)}));const s=document.querySelector("#edittag input#slug");if(s){const i=x(s.value);o.commit("live-tags/updatePermalinkSlug",i),o.commit("live-tags/updatePermalink",o.state.currentPost.permalink.replace(`/${o.state["live-tags"].permalinkSlug}`,`/${i.replace(/ /gi,"-").replace(/[^a-z0-9-]/gi,"").toLowerCase()}`)),s.addEventListener("input",()=>{o.commit("live-tags/updatePermalinkSlug",i),o.commit("live-tags/updatePermalink",o.state.currentPost.permalink.replace(`/${o.state["live-tags"].permalinkSlug}`,`/${i.replace(/ /gi,"-").replace(/[^a-z0-9-]/gi,"").toLowerCase()}`))})}o.dispatch("savePostState"),t&&y.prototype.$truSeo.runAnalysis({postId:o.state.currentPost.id})},xt=(t=!1)=>{if(o.state.currentPost.postType!=="attachment")return;const e=document.querySelector("textarea#attachment_caption");e&&(o.commit("live-tags/updateAttachmentCaption",e.value),e.addEventListener("input",r=>{o.commit("live-tags/updateAttachmentCaption",r.target.value)}));const n=document.querySelector("textarea#attachment-details-caption");n&&(o.commit("live-tags/updateAttachmentCaption",n.value),n.addEventListener("input",r=>{o.commit("live-tags/updateAttachmentCaption",r.target.value)}));const s=document.querySelector("textarea#attachment_content");s&&(o.commit("live-tags/updateAttachmentDescription",s.value),s.addEventListener("input",r=>{o.commit("live-tags/updateAttachmentDescription",r.target.value)}));const i=document.querySelector("input#attachment_alt");i&&(o.commit("live-tags/updateAltTag",i.value),i.addEventListener("input",r=>{o.commit("live-tags/updateAltTag",r.target.value)}));const c=document.querySelector("input#attachment-details-alt-text");c&&(o.commit("live-tags/updateAltTag",i.value),c.addEventListener("input",r=>{o.commit("live-tags/updateAltTag",r.target.value)})),t&&y.prototype.$truSeo.runAnalysis({postId:o.state.currentPost.id})},At=()=>!window.aioseo.currentPost||!window.aioseo.currentPost.id?!1:window.aioseo.options.advanced&&window.aioseo.options.advanced.truSeo&&!window.aioseo.currentPost.isSpecialPage&&window.aioseo.currentPost.postType!=="attachment"&&J(),Lt=()=>!window.aioseo.screen||!window.aioseo.screen.postType?!1:!!(window.aioseo.options.advanced&&window.aioseo.options.advanced.truSeo&&J(window.aioseo.screen.postType)),J=(t=null)=>{if(t)return!!(window.aioseo.dynamicOptions.searchAppearance.postTypes[t]&&window.aioseo.dynamicOptions.searchAppearance.postTypes[t].advanced&&window.aioseo.dynamicOptions.searchAppearance.postTypes[t].advanced.showMetaBox);if(!window.aioseo.currentPost||!window.aioseo.currentPost.id)return!1;const e=window.aioseo.currentPost.postType,n=window.aioseo.currentPost.termType,s=!!(e&&window.aioseo.currentPost.context==="post"&&window.aioseo.dynamicOptions.searchAppearance.postTypes[e]&&window.aioseo.dynamicOptions.searchAppearance.postTypes[e].advanced&&window.aioseo.dynamicOptions.searchAppearance.postTypes[e].advanced.showMetaBox),i=!!(n&&window.aioseo.currentPost.context==="term"&&window.aioseo.dynamicOptions.searchAppearance.taxonomies[n]&&window.aioseo.dynamicOptions.searchAppearance.taxonomies[n].advanced&&window.aioseo.dynamicOptions.searchAppearance.taxonomies[n].advanced.showMetaBox);return s||i},S=async(t=900,e=!0)=>{et(async()=>{await ft(!1),await pt(!1),await vt(!1),await ht(!1),await dt(!1),Pt(!1),St(!1),xt(!1),e&&y.prototype.$truSeo.runAnalysis({postId:o.state.currentPost.id})},t)};export{$t as a,f as b,Lt as c,gt as d,E as e,h as f,Tt as g,Pt as h,g as i,St as j,xt as k,qt as l,S as m,nt as n,b as o,k as p,J as s,At as t};
