(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{215:function(t,e,r){var content=r(218);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(77).default)("170449f6",content,!0,{sourceMap:!1})},217:function(t,e,r){"use strict";var n=r(215);r.n(n).a},218:function(t,e,r){(e=r(76)(!1)).push([t.i,".img-fluid{-o-object-fit:cover;object-fit:cover}@media (max-width:768px){.card{width:100%}}",""]),t.exports=e},221:function(t,e,r){"use strict";r.r(e);var n=r(53),c=r.n(n),o={data:function(){return{dataCurrentNews:{},idNews:0}},mounted:function(){this.idNews=this.$route.query.id,this.getDataCurrentNews()},methods:{getDataCurrentNews:function(){var t=this;c.a.get("https://beritaku-api.herokuapp.com/articles/".concat(this.idNews)).then((function(e){t.dataCurrentNews=e.data})).catch((function(t){console.log(t)}))}}},d=(r(217),r(25)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-5"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row justify-content-md-center"},[r("div",{staticClass:"card col-md-6"},[r("img",{staticClass:"img-fluid",attrs:{src:t.dataCurrentNews.urlToImage,alt:"Card image cap"}}),t._v(" "),r("p",{staticClass:"card-text"},[r("small",{staticClass:"text-muted"},[t._v(t._s(t.dataCurrentNews.publishedAt)+" - "+t._s(t.dataCurrentNews.author))])]),t._v(" "),r("h5",{staticClass:"card-title"},[t._v(t._s(t.dataCurrentNews.title))]),t._v(" "),r("p",{staticClass:"card-text"},[t._v(t._s(t.dataCurrentNews.description))]),t._v(" "),r("p",[t._v("\n              sumber:\n              "),r("a",{attrs:{href:t.dataCurrentNews.url}},[t._v(t._s(t.dataCurrentNews.url))])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);