(function(t){function e(e){for(var a,n,l=e[0],c=e[1],o=e[2],d=0,u=[];d<l.length;d++)n=l[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&u.push(i[n][0]),i[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);h&&h(e);while(u.length)u.shift()();return r.push.apply(r,o||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,l=1;l<s.length;l++){var c=s[l];0!==i[c]&&(a=!1)}a&&(r.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},i={app:0},r=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/photo-splash/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var h=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0746":function(t,e,s){},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(t){var e=r(t);return s(e)}function r(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=r,t.exports=i,i.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Navbar"),s("router-view"),s("Footer"),s("button",{staticClass:"z-depth-3 grey darken-4 btn-floating btn-large waves-effect waves-light z-10 scroll-to-top",attrs:{type:"button"},on:{click:t.scrollToTop}},[s("i",{staticClass:"material-icons"},[t._v("arrow_upward")])])],1)},r=[],n=s("bc3a"),l=s.n(n),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"grey darken-4"},[s("div",{staticClass:"container"},[s("div",{staticClass:"nav-wrapper"},[s("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[t._v("PhotoSplash 💦")]),t._m(0)],1)])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"right hide-on-med-and-down",attrs:{id:"nav-mobile"}},[s("li",[s("a",{attrs:{href:"https://github.com/rtabulov/photo-splash",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Github repo ")])])])}],h={name:"Navbar"},d=h,u=s("2877"),f=Object(u["a"])(d,c,o,!1,null,null,null),p=f.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"page-footer grey darken-4 mt-12"},[t._m(0),s("div",{staticClass:"footer-copyright"},[s("div",{staticClass:"container text-center"},[t._v(" © "),s("a",{attrs:{href:"https://github.com/rtabulov",target:"_blank",rel:"noopener noreferrer"}},[t._v(" rtabulov ")]),t._v(" | "+t._s((new Date).getFullYear())+" ")])])])},m=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col m6 s12"},[s("h5",{staticClass:"white-text"},[t._v("Photo Splash")]),s("p",{staticClass:"grey-text text-lighten-4"},[t._v(" A demo app, showcasing the Unsplash API. "),s("br"),t._v(" Built with vuejs and some love ❤️ ")])]),s("div",{staticClass:"col m4 offset-l2 offset-m1 s12"},[s("h5",{staticClass:"white-text"},[t._v("Some stuff I used")]),s("ul",[s("li",[s("a",{staticClass:"grey-text text-lighten-3",attrs:{rel:"noopener noreferrer",target:"_blank",href:"https://vuejs.org/"}},[t._v("Vue docs")])]),s("li",[s("a",{staticClass:"grey-text text-lighten-3",attrs:{rel:"noopener noreferrer",target:"_blank",href:"https://unsplash.com/documentation"}},[t._v("Unsplash API docs")])]),s("li",[s("a",{staticClass:"grey-text text-lighten-3",attrs:{rel:"noopener noreferrer",target:"_blank",href:"https://materializecss.com/"}},[t._v("Materialize")])]),s("li",[s("a",{staticClass:"grey-text text-lighten-3",attrs:{rel:"noopener noreferrer",target:"_blank",href:"https://tailwindcss.com/"}},[t._v("Tailwind")])])])])])])}],b={name:"Footer"},g=b,_=Object(u["a"])(g,v,m,!1,null,null,null),j=_.exports,C=(s("0746"),s("8266"),s("0cc2"),s("dbc8"),s("6885"),{name:"App",components:{Navbar:p,Footer:j},methods:{scrollToTop:function(){window.scrollTo(0,0)}},created:function(){l.a.defaults.headers.common["Authorization"]="Client-ID 11a74ce7eb951b44a650e7d7f8357c68d0d2c832d514395230893af7bd1eae22"}}),y=C,w=Object(u["a"])(y,i,r,!1,null,null,null),k=w.exports,x=s("8c4f"),z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Search",{on:{inputSubmit:t.onSearch}}),s("div",{staticClass:"container"},[s("h1",[t._v(t._s(t.heading))])]),t.loading?s("div",{staticClass:"container py-12 text-center"},[s("h2",[t._v("Loading "),s("Preloader",{staticClass:"ml-8"})],1)]):t.photos&&Object.keys(t.photos).length>0?s("Gallery",{attrs:{photos:t.photos,more:t.morePhotos,updating:t.updating},on:{loadMore:t.onLoadMore}}):s("div",{staticClass:"container py-24"},[s("h1",[t._v("Nothing Found 😥")])])],1)},E=[],$=(s("99af"),s("7db0"),s("a630"),s("d81d"),s("d3b7"),s("6062"),s("3ca3"),s("ddb0"),s("284c")),P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"flex items-start",attrs:{id:"gallery"}},[s("div",{attrs:{id:"col1"}},t._l(t.photos1,(function(t){return s("GalleryItem",{key:t.id,staticClass:"gallery-item",attrs:{photo:t}})})),1),s("div",{attrs:{id:"col2"}},t._l(t.photos2,(function(t){return s("GalleryItem",{key:t.id,staticClass:"gallery-item",attrs:{photo:t}})})),1),s("div",{attrs:{id:"col3"}},t._l(t.photos3,(function(t){return s("GalleryItem",{key:t.id,staticClass:"gallery-item",attrs:{photo:t}})})),1)]),t.more?s("div",{staticClass:"text-center my-10"},[t.updating?s("Preloader"):s("div",{staticClass:"btn-large waves-effect waves-light grey darken-4",on:{click:function(e){return t.$emit("loadMore")}}},[t._v(" Load more "),s("i",{staticClass:"material-icons right"},[t._v("arrow_forward")])])],1):t._e()])},O=[],S=(s("4de4"),s("4160"),s("159b"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"photo leading-none"},[s("router-link",{attrs:{to:"/photos/"+t.photo.id}},[s("img",{staticClass:"photo__img",attrs:{src:t.photo.urls.small,alt:"Photo by "+t.fullName}})]),s("a",{staticClass:"user",attrs:{href:t.photo.user.links.html,target:"_blank",rel:"noopener noreferrer"}},[s("img",{staticClass:"rounded-full",attrs:{src:t.photo.user.profile_image.small,alt:""}}),t._v(" "+t._s(t.fullName)+" ")]),s("a",{staticClass:"download",attrs:{href:t.photo.links.download,target:"_blank",rel:"noopener noreferrer"}},[s("i",{staticClass:"material-icons"},[t._v("file_download")])])],1)}),M=[],N={name:"GalleryItem",computed:{fullName:function(){var t=this.photo.user.first_name;return this.photo.user.last_name&&(t+=" "+this.photo.user.last_name),t}},props:{photo:Object}},T=N,G=Object(u["a"])(T,S,M,!1,null,null,null),D=G.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"preloader-wrapper active",class:[t.size]},["all"===t.color?[t._m(0),t._m(1),t._m(2),t._m(3)]:"blue"===t.color?s("div",{staticClass:"spinner-layer spinner-blue-only"},[t._m(4),t._m(5),t._m(6)]):"red"===t.color?s("div",{staticClass:"spinner-layer spinner-red-only"},[t._m(7),t._m(8),t._m(9)]):"yellow"===t.color?s("div",{staticClass:"spinner-layer spinner-yellow-only"},[t._m(10),t._m(11),t._m(12)]):"green"===t.color?s("div",{staticClass:"spinner-layer spinner-green-only"},[t._m(13),t._m(14),t._m(15)]):t._e()],2)},L=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"spinner-layer spinner-blue"},[s("div",{staticClass:"circle-clipper left"},[s("div",{staticClass:"circle"})]),s("div",{staticClass:"gap-patch"},[s("div",{staticClass:"circle"})]),s("div",{staticClass:"circle-clipper right"},[s("div",{staticClass:"circle"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"spinner-layer spinner-red"},[s("div",{staticClass:"circle-clipper left"},[s("div",{staticClass:"circle"})]),s("div",{staticClass:"gap-patch"},[s("div",{staticClass:"circle"})]),s("div",{staticClass:"circle-clipper right"},[s("div",{staticClass:"circle"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"spinner-layer spinner-yellow"},[s("div",{staticClass:"circle-clipper left"},[s("div",{staticClass:"circle"})]),s("div",{staticClass:"gap-patch"},[s("div",{staticClass:"circle"})]),s("div",{staticClass:"circle-clipper right"},[s("div",{staticClass:"circle"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"spinner-layer spinner-green"},[s("div",{staticClass:"circle-clipper left"},[s("div",{staticClass:"circle"})]),s("div",{staticClass:"gap-patch"},[s("div",{staticClass:"circle"})]),s("div",{staticClass:"circle-clipper right"},[s("div",{staticClass:"circle"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"circle-clipper left"},[s("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"gap-patch"},[s("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"circle-clipper right"},[s("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"circle-clipper left"},[s("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"gap-patch"},[s("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"circle-clipper right"},[s("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"circle-clipper left"},[s("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"gap-patch"},[s("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"circle-clipper right"},[s("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"circle-clipper left"},[s("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"gap-patch"},[s("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"circle-clipper right"},[s("div",{staticClass:"circle"})])}],U={name:"Preloader",props:{size:{type:String,default:"medium"},color:{type:String,default:"all"}}},A=U,F=Object(u["a"])(A,I,L,!1,null,null,null),Y=F.exports,q={name:"Gallery",props:{photos:Array,more:Boolean,updating:Boolean},components:{GalleryItem:D,Preloader:Y},data:function(){return{photos1:[],photos2:[],photos3:[],height1:0,height2:0,height3:0,cols:null}},methods:{resizeHandler:function(){var t=window.innerWidth,e=this.cols;this.cols=t<600?1:t<1100?2:3,e&&this.cols!==e&&(this.photos1=[],this.photos2=[],this.photos3=[],this.height1=0,this.height2=0,this.height3=0,this.resolveCols(this.photos))},resolveCols:function(t){var e=this;t.forEach((function(t){if(2===e.cols&&e.height2<e.height1)return e.photos2.push(t),void(e.height2+=t.height/t.width);if(3===e.cols){if(e.height3<e.height2&&e.height2<e.height1)return e.photos3.push(t),void(e.height3+=t.height/t.width);if(e.height2<e.height1)return e.photos2.push(t),void(e.height2+=t.height/t.width)}e.photos1.push(t),e.height1+=t.height/t.width}))}},watch:{photos:function(t,e){if(t[0].id!==e[0].id)this.photos1=[],this.photos2=[],this.photos3=[],this.height1=0,this.height2=0,this.height3=0,this.resolveCols(t);else{var s=t.map((function(t){return t.id})).filter((function(t){return!e.find((function(e){return e.id===t}))})).map((function(e){return t.find((function(t){return t.id===e}))}));this.resolveCols(s)}}},destroyed:function(){window.removeEventListener("resize",this.resizeHandler)},created:function(){window.addEventListener("resize",this.resizeHandler),this.resizeHandler(),this.resolveCols(this.photos)}},B=q,H=Object(u["a"])(B,P,O,!1,null,null,null),J=H.exports,V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"grey darken-4 search-nav"},[s("div",{staticClass:"container h-full"},[s("div",{staticClass:"nav-wrapper"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[s("div",{staticClass:"input-field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],ref:"intputElement",attrs:{placeholder:"Search for anything",id:"search",type:"search",required:""},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}}),t._m(0),s("i",{staticClass:"material-icons"},[t._v("close")])])])])])])},W=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"label-icon",attrs:{for:"search"}},[s("i",{staticClass:"material-icons"},[t._v("search")])])}],K={name:"Search",data:function(){return{input:""}},methods:{onSubmit:function(){this.$emit("inputSubmit",this.input),this.$refs.intputElement.blur()}}},Q=K,R=Object(u["a"])(Q,V,W,!1,null,null,null),X=R.exports,Z={name:"home",components:{Gallery:J,Search:X,Preloader:Y},data:function(){return{photos:null,heading:"Latest photos",nextPage:1,apiUrl:"https://api.unsplash.com/photos?",loading:!0,morePhotos:!0,updating:!1}},methods:{onSearch:function(t){var e=this;this.loading=!0,t.length>1&&(this.apiUrl="https://api.unsplash.com/search/photos?query="+t+"&",l.a.get(this.apiUrl).then((function(s){e.photos=s.data.results,e.heading='Search "'.concat(t,'" photos'),e.nextPage=2,e.morePhotos=(e.nextPage-1)*s.headers["x-per-page"]<s.headers["x-total"]})).finally((function(){return e.loading=!1})))},onLoadMore:function(){var t=this;this.updating=!0,l.a.get(this.apiUrl+"page="+this.nextPage).then((function(e){var s;s=e.data.results?[].concat(Object($["a"])(t.photos),Object($["a"])(e.data.results)):[].concat(Object($["a"])(t.photos),Object($["a"])(e.data)),t.photos=Array.from(new Set(s.map((function(t){return t.id})))).map((function(t){return s.find((function(e){return e.id===t}))})),t.nextPage++,t.morePhotos=(t.nextPage-1)*e.headers["x-per-page"]<e.headers["x-total"]})).finally((function(){return t.updating=!1}))}},created:function(){var t=this;l.a.get(this.apiUrl).then((function(e){t.photos=e.data,t.nextPage=2})).finally((function(){t.loading=!1}))}},tt=Z,et=Object(u["a"])(tt,z,E,!1,null,null,null),st=et.exports,at=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.loading?s("div",{staticClass:"container py-24 text-center"},[s("h1",[t._v("Loading "),s("Preloader",{staticClass:"ml-8",attrs:{size:"medium"}})],1)]):t.photo&&Object.keys(t.photo).length>0?s("div",[s("div",{staticClass:"flex justify-center"},[s("img",{staticStyle:{"max-height":"120vh","max-width":"100%"},attrs:{src:t.photo.urls.full,alt:""}})]),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col m5 text-lg"},[s("h1",{staticClass:"text-3xl"},[s("a",{staticClass:"inline-flex items-center",staticStyle:{color:"inherit"},attrs:{href:t.photo.user.links.html,target:"_blank",rel:"noopener noreferrer"}},[s("img",{staticClass:"mr-3 rounded-full",attrs:{width:"50",src:t.photo.user.profile_image.medium,alt:t.fullName+" profile image"}}),s("span",[t._v(" "+t._s(t.fullName)+" "),s("br"),t._m(0)])])]),t.photo.description?s("p",[t._v(t._s(t.photo.description))]):t._e(),t.photo.location.title?s("p",[t._v(t._s(t.photo.location.title))]):t._e(),s("h2",{staticClass:"text-xl inline-block mr-4"},[t._v("Download:")]),s("a",{staticClass:"btn green darken-3 waves-effect waves-light my-6",attrs:{href:t.photo.links.download,target:"_blank",rel:"noopener noreferrer"}},[t._v(" Full size "),s("i",{staticClass:"material-icons right"},[t._v("cloud_download")])])]),s("div",{staticClass:"col m6 offset-m1"},[s("div",{staticClass:"mb-10 mt-6"},[s("h2",{staticClass:"text-xl inline-block mr-4"},[t._v("Info:")]),s("span",{staticClass:"btn waves-effect waves-light blue darken-1 mr-2 mb-2"},[t._v(t._s(t.photo.width)+" x "+t._s(t.photo.height)+" px ")]),s("span",{staticClass:"btn waves-effect waves-light blue darken-1 mr-2 mb-2"},[t._v(t._s(t.photo.color)+" ")]),s("span",{staticClass:"btn waves-effect waves-light blue darken-1 mr-2 mb-2"},[t._v(t._s(t.formattedDate)+" "),s("i",{staticClass:"material-icons right"},[t._v("access_time")])]),s("span",{staticClass:"btn waves-effect waves-light blue darken-1 mr-2 mb-2"},[t._v(t._s(t.photo.likes)+" "),s("i",{staticClass:"material-icons right"},[t._v("favorite_border")])]),s("span",{staticClass:"btn waves-effect waves-light blue darken-1 mr-2 mb-2"},[t._v(t._s(t.photo.views)+" "),s("i",{staticClass:"material-icons right"},[t._v("visibility")])]),s("span",{staticClass:"btn waves-effect waves-light blue darken-1 mr-2 mb-2"},[t._v(t._s(t.photo.downloads)+" "),s("i",{staticClass:"material-icons right"},[t._v("cloud_download")])])]),s("div",{staticClass:"tags"},[s("h2",{staticClass:"text-xl inline-block mr-4"},[t._v("Tags:")]),t._l(t.photo.tags,(function(e){return s("span",{key:e.title,staticClass:"btn-small waves-effect waves-light indigo text-darken-4 mr-2 mb-2"},[t._v(t._s(e.title)+" ")])}))],2)])])])]):s("div",{staticClass:"container py-24"},[s("h1",[t._v(" This photo does not exist 😢 ")])])},it=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("small",{staticClass:"text-base inline-flex items-center"},[t._v("visit on unsplash "),s("i",{staticClass:"material-icons ml-1",staticStyle:{"font-size":"17px"}},[t._v("arrow_forward")])])}],rt=s("c1df"),nt=s.n(rt),lt={name:"Photo",components:{Preloader:Y},data:function(){return{photo:{},loading:!0}},computed:{fullName:function(){var t=this.photo.user.first_name;return this.photo.user.last_name&&(t+=" "+this.photo.user.last_name),t},formattedDate:function(){return nt()(this.photo.date).format("MMM DD, YYYY")}},created:function(){var t=this;l.a.get("https://api.unsplash.com/photos/"+this.$route.params.id).then((function(e){t.photo=e.data})).finally((function(){t.loading=!1}))}},ct=lt,ot=Object(u["a"])(ct,at,it,!1,null,null,null),ht=ot.exports,dt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ut=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container py-32"},[s("h1",[t._v("Page not found 😢")])])}],ft={},pt=ft,vt=Object(u["a"])(pt,dt,ut,!1,null,null,null),mt=vt.exports;a["a"].use(x["a"]);var bt=[{path:"/",name:"home",component:st},{path:"/photos/:id",component:ht},{path:"*",component:mt}],gt=new x["a"]({base:"/photo-splash/",routes:bt,scrollBehavior:function(t,e,s){return s||{x:0,y:0}}}),_t=gt;a["a"].config.productionTip=!1,new a["a"]({router:_t,render:function(t){return t(k)}}).$mount("#app")},dbc8:function(t,e,s){}});
//# sourceMappingURL=app.f19125a2.js.map