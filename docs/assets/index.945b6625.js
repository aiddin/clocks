import{o as D,a as A,d as h,c as w,r as _,b as r,e as $,w as p,f as g,g as i,h as m,t as y,i as C,v as k,j as Z,_ as S,k as L,l as T,F as B,m as M,n as I,p as q,q as U}from"./vendor.557d9aa9.js";const j=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}};j();const z=(e,o)=>{let s=-1;D(()=>{s=setInterval(e,o)}),A(()=>{clearInterval(s)})},V=e=>{const[o,s]=e.split(":").map(t=>Number(t));return o*60+s};var O=(e,o)=>{const s=e.__vccOpts||e;for(const[n,t]of o)s[n]=t;return s};const E=h({props:{name:{type:String,default:"Kyiv"},offset:{type:Number,default:2*60},timezone:{type:Object,required:!0},color:{type:String}},setup(e){const o=new Date().getTimezoneOffset(),s=w(()=>V(e.timezone.utc)+o),n=()=>{const a=new Date;return a.setTime(a.getTime()+s.value*1e3*60),a},t=_(n().toLocaleTimeString());return z(()=>{t.value=n().toLocaleTimeString()},1e3),{currentTime:t,timeZoneOffset:s}}}),K={class:"display-2"},F={class:"d-flex align--center justify--space-between"},J={class:"title"};function R(e,o,s,n,t,a){const d=r("va-divider"),c=r("va-button"),u=r("va-card-content"),v=r("va-hover"),l=r("va-card");return g(),$(l,{color:e.color,gradient:""},{default:p(()=>[i(v,{class:"time-zone-card",stateful:""},{default:p(({hover:b})=>[i(u,null,{default:p(()=>[m("h3",K,y(e.currentTime),1),i(d),m("div",F,[m("span",null,y(e.name),1),m("p",null,[m("span",J,"Offset "+y(e.timeZoneOffset/60)+"h",1)])]),C(i(c,{class:"time-zone-card__delete-button",icon:"close",size:"small",color:"danger",onClick:o[0]||(o[0]=f=>e.$emit("delete"))},null,512),[[k,b]])]),_:2},1024)]),_:1})]),_:1},8,["color"])}var P=O(E,[["render",R],["__scopeId","data-v-0a57e5cb"]]);const G=h({props:{modelValue:{type:Boolean,required:!0}},setup(e,{emit:o}){const s=_(),n=_({name:"",offset:"",timezone:null}),t=()=>{s.value.validate()&&n.value.timezone&&(o("create",n.value),o("update:modelValue",!1))},a=()=>{o("update:modelValue",!1)},d=()=>{n.value={name:"",offset:"",timezone:null}},c=w(()=>{const u=new Date().getTimezoneOffset();return n.value.offset?S.filter(v=>V(v.utc)+u===Number(n.value.offset)*60):S});return Z(()=>n.value.timezone,u=>{!n.value.name&&u&&(n.value.name=u.label)}),{computedTimeZones:c,form:s,formData:n,onOk:t,onCancel:a,onBeforeOpen:d}}});function W(e,o,s,n,t,a){const d=r("va-input"),c=r("va-select"),u=r("va-form"),v=r("va-modal");return g(),$(v,{"model-value":e.modelValue,onOk:e.onOk,onCancel:e.onCancel,onBeforeOpen:e.onBeforeOpen,title:"Add time zone"},{default:p(()=>[i(u,{style:{"max-width":"300px",width:"100vw"},ref:"form"},{default:p(()=>[i(d,{modelValue:e.formData.name,"onUpdate:modelValue":o[0]||(o[0]=l=>e.formData.name=l),label:"Name",class:"mb-4",placeholder:"Kyiv",rules:[l=>l!=null&&l.length>0||"Required"]},null,8,["modelValue","rules"]),i(d,{modelValue:e.formData.offset,"onUpdate:modelValue":o[1]||(o[1]=l=>e.formData.offset=l),label:"filter time zone by offset",class:"mb-2",placeholder:"2",mask:"numeral",rules:[l=>!l||!isNaN(l)||"Should be number",l=>!l||Number(l)<=24&&Number(l)>=-24||"Should in range from -24 to 24"]},null,8,["modelValue","rules"]),i(c,{modelValue:e.formData.timezone,"onUpdate:modelValue":o[2]||(o[2]=l=>e.formData.timezone=l),label:"Time zone","text-by":"label","track-by":"label",options:e.computedTimeZones,searchable:"",rules:[l=>l!=null&&l||"Required"]},null,8,["modelValue","options","rules"])]),_:1},512)]),_:1},8,["model-value","onOk","onCancel","onBeforeOpen"])}var Y=O(G,[["render",W]]);const H=h({components:{TimeZoneCard:P,AddTimeZoneModal:Y},setup(){const e=["#4cc9f0","#ffc6ff","#06d6a0","#4ea8de","#f9c74f","#bdb2ff","#ffc6ff"],o=_(new Date().toLocaleTimeString());z(()=>{o.value=new Date().toLocaleTimeString()},1e3);const s=_(!1),n=_([]),t="timezones",a=c=>{n.value.push(c),localStorage.setItem(t,JSON.stringify(n.value))},d=c=>{n.value=n.value.filter(u=>u!==c),localStorage.setItem(t,JSON.stringify(n.value))};return L(()=>{n.value=JSON.parse(localStorage.getItem(t)||"[]")}),{colors:e,currentTime:o,doShowAddModal:s,timeZones:n,createTimeZone:a,deleteTimeZone:d}}}),Q={class:"app"},X={class:"container"},x={class:"header d-flex justify--space-between align--center",style:{"flex-wrap":"wrap"}},ee={class:"display-1"},oe=I("Add"),te={class:"row",style:{margin:"0 -.5rem"}};function ne(e,o,s,n,t,a){const d=r("va-button"),c=r("AddTimeZoneModal"),u=r("va-divider"),v=r("TimeZoneCard"),l=r("va-card-content"),b=r("va-card");return g(),T("div",Q,[m("div",X,[i(b,null,{default:p(()=>[i(l,null,{default:p(()=>[m("div",x,[m("h1",ee,y(e.currentTime),1),m("div",null,[i(d,{"icon-right":"add",onClick:o[0]||(o[0]=f=>e.doShowAddModal=!0)},{default:p(()=>[oe]),_:1}),i(c,{modelValue:e.doShowAddModal,"onUpdate:modelValue":o[1]||(o[1]=f=>e.doShowAddModal=f),onCreate:e.createTimeZone},null,8,["modelValue","onCreate"])])]),i(u),m("div",te,[(g(!0),T(B,null,M(e.timeZones,(f,N)=>(g(),T("div",{key:f.name,class:"flex lg4 md6 sm12 xs12 pa-2"},[i(v,{name:f.name,offset:f.offset*60,timezone:f.timezone,color:e.colors[N],onDelete:le=>e.deleteTimeZone(f)},null,8,["name","offset","timezone","color","onDelete"])]))),128))])]),_:1})]),_:1})])])}var ae=O(H,[["render",ne]]);q(ae).use(U).mount("#app");
