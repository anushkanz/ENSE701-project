(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[44],{6468:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/new",function(){return s(36)}])},36:function(e,a,s){"use strict";s.r(a);var l=s(5893),r=s(7294);a.default=()=>{let[e,a]=(0,r.useState)(""),[s,t]=(0,r.useState)(""),[d,n]=(0,r.useState)(""),[o,i]=(0,r.useState)(""),[u,c]=(0,r.useState)(""),[m,h]=(0,r.useState)(""),[b,x]=(0,r.useState)(""),[g,p]=(0,r.useState)(""),w=async a=>{a.preventDefault();let l=await fetch("http://localhost:8082/api/articles",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:JSON.stringify({title:e,authors:s,source:d,publication_year:o,doi:u,summary:m,linked_discussion:b,status:g})});console.log(JSON.stringify(l=await l.json())),console.log(JSON.stringify({title:e,authors:s,source:d,publication_year:o,doi:u,summary:m,linked_discussion:b}))};return(0,l.jsx)("div",{className:"bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2",children:(0,l.jsxs)("div",{className:"pb-12",children:[(0,l.jsxs)("div",{className:"flex space-x-2 space-y-2 flex-wrap justify-left items-baseline",children:[(0,l.jsx)("h3",{className:"my-4 text-2xl font-semibold text-gray-700",children:"New Article"}),(0,l.jsx)("a",{href:"/articles",className:"rounded-lg px-4 py-2 bg-green-700 text-green-100 hover:bg-green-800 duration-300",children:"Articles"}),(0,l.jsx)("a",{href:"/logout",className:"rounded-lg px-4 py-2 bg-red-700 text-green-100 hover:bg-red-800 duration-300",children:"Logout"})]}),(0,l.jsxs)("form",{onSubmit:w,children:[(0,l.jsxs)("div",{className:"mb-5 hidden",children:[(0,l.jsx)("label",{htmlFor:"title",children:"Status:"}),(0,l.jsx)("input",{className:"border border-gray-300 shadow p-3 w-full rounded",type:"text",name:"status",id:"status",value:"0",onChange:e=>{p(e.target.value)}})]}),(0,l.jsxs)("div",{className:"mb-5",children:[(0,l.jsx)("label",{htmlFor:"title",children:"Title:"}),(0,l.jsx)("input",{className:"border border-gray-300 shadow p-3 w-full rounded mb-",type:"text",name:"title",id:"title",value:e,onChange:e=>{a(e.target.value)}})]}),(0,l.jsxs)("div",{className:"mb-5",children:[(0,l.jsx)("label",{htmlFor:"author",children:"Authors:"}),(0,l.jsx)("input",{className:"border border-gray-300 shadow p-3 w-full rounded mb-",type:"text",name:"authors",id:"authors",value:s,onChange:e=>{t(e.target.value)}})]}),(0,l.jsxs)("div",{className:"mb-5",children:[(0,l.jsx)("label",{htmlFor:"source",children:"Source:"}),(0,l.jsx)("input",{className:"border border-gray-300 shadow p-3 w-full rounded mb-",type:"text",name:"source",id:"source",value:d,onChange:e=>{n(e.target.value)}})]}),(0,l.jsxs)("div",{className:"mb-5",children:[(0,l.jsx)("label",{htmlFor:"pubYear",children:"Publication Year:"}),(0,l.jsx)("input",{className:"border border-gray-300 shadow p-3 w-full rounded mb-",type:"number",name:"pubYear",id:"pubYear",value:o,onChange:e=>{i(e.target.value)}})]}),(0,l.jsxs)("div",{className:"mb-5",children:[(0,l.jsx)("label",{htmlFor:"doi",children:"DOI:"}),(0,l.jsx)("input",{className:"border border-gray-300 shadow p-3 w-full rounded mb-",type:"text",name:"doi",id:"doi",value:u,onChange:e=>{c(e.target.value)}})]}),(0,l.jsxs)("div",{className:"mb-5",children:[(0,l.jsx)("label",{htmlFor:"summary",children:"Summary:"}),(0,l.jsx)("textarea",{className:"border border-gray-300 shadow p-3 w-full rounded mb-",name:"summary",value:m,onChange:e=>h(e.target.value)})]}),(0,l.jsxs)("div",{className:"mb-5",children:[(0,l.jsx)("label",{htmlFor:"linked_discussion",children:"Linked discussion:"}),(0,l.jsx)("textarea",{className:"border border-gray-300 shadow p-3 w-full rounded mb-",name:"linked_discussion",value:b,onChange:e=>x(e.target.value)})]}),(0,l.jsx)("div",{className:"mb-5",children:(0,l.jsx)("button",{className:"block w-full bg-blue-500 text-white font-bold p-4 rounded-lg",type:"submit",children:"Submit"})})]})]})})}}},function(e){e.O(0,[888,774,179],function(){return e(e.s=6468)}),_N_E=e.O()}]);