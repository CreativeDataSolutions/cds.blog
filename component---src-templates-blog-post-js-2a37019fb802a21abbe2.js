(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{BZiS:function(e,t,a){"use strict";var l=a("mXGw"),n=a.n(l),r=a("Wbzz");a("DSpU");t.a=function(e){var t=e.tags;return n.a.createElement("section",{className:"tags__container"},t.map((function(e){return n.a.createElement(r.Link,{to:"/tags/"+e,className:"tags__link"},e)})))}},DSpU:function(e,t,a){},Yr1x:function(e,t,a){"use strict";var l=a("mXGw"),n=a.n(l),r=a("Wbzz"),i=a("BZiS");a("yTMr");t.a=function(e){var t=e.posts;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"post__section"},n.a.createElement("h4",null,"Latest Blogs"),n.a.createElement(r.Link,{to:"/blog"},"View All")),n.a.createElement("ol",{className:"post__grid"},t.map((function(e){var t=e.frontmatter,a=t.thumbnail,l=t.tags,c=t.date,s=t.title,m=e.fields.slug;return n.a.createElement("li",{key:m,className:"post__item"},n.a.createElement(r.Link,{to:m,itemProp:"url"},n.a.createElement("article",{itemScope:!0,itemType:"http://schema.org/Article"},n.a.createElement("img",{src:a,alt:""}),n.a.createElement("header",null,n.a.createElement("h4",{className:"post__item-title"},s),n.a.createElement("small",null,c)),n.a.createElement(i.a,{tags:l}))))}))))}},yTMr:function(e,t,a){},yZlL:function(e,t,a){"use strict";a.r(t);var l=a("mXGw"),n=a.n(l),r=a("Wbzz"),i=a("Zttt"),c=a("vrFN"),s=a("Yr1x");t.default=function(e){var t=e.data,a=e.location,l=t.markdownRemark,m=t.site.siteMetadata.title,o=t.previous,u=t.next,p=t.more,E=l.excerpt,d=l.html,f=l.frontmatter,g=f.title,h=f.description,w=f.date,_=f.tags;return n.a.createElement(i.a,{location:a,title:m},n.a.createElement(c.a,{title:g,keywords:_,description:h||E}),n.a.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},n.a.createElement("header",null,n.a.createElement("h1",{itemProp:"headline"},g),n.a.createElement("p",null,w)),n.a.createElement("section",{dangerouslySetInnerHTML:{__html:d},itemProp:"articleBody"}),n.a.createElement("hr",null)),n.a.createElement("nav",{className:"blog-post-nav"},n.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},n.a.createElement("li",null,o&&n.a.createElement(r.Link,{to:o.fields.slug,rel:"prev"},"←"," ",o.frontmatter.title)),n.a.createElement("li",null,u&&n.a.createElement(r.Link,{to:u.fields.slug,rel:"next"},u.frontmatter.title," ","→")))),n.a.createElement(s.a,{posts:p.nodes}))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-2a37019fb802a21abbe2.js.map