(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"1Hwa":function(t,e,n){"use strict";var a=n("q1tI"),r=n.n(a),s=n("Wbzz"),i=n("BZiS"),o=n("IGcV");n("UeTM");e.a=function(t){var e=t.posts;return r.a.createElement("ul",{className:"posts__container"},e.map((function(t){var e=t.node,n=e.frontmatter,a=n.thumbnail,l=n.tags,c=n.title,u=e.fields.slug,g=e.excerpt;return r.a.createElement("li",null,r.a.createElement(s.Link,{to:u},r.a.createElement("article",{className:"posts__article"},r.a.createElement("div",{className:"posts__thumbnail",style:{backgroundImage:"url("+Object(o.a)(a)}}),r.a.createElement("div",null,r.a.createElement("h2",{className:"posts__title"},c),r.a.createElement("p",null,g),r.a.createElement(i.a,{tags:l})))))})))}},"33yf":function(t,e,n){(function(t){function n(t,e){for(var n=0,a=t.length-1;a>=0;a--){var r=t[a];"."===r?t.splice(a,1):".."===r?(t.splice(a,1),n++):n&&(t.splice(a,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function a(t,e){if(t.filter)return t.filter(e);for(var n=[],a=0;a<t.length;a++)e(t[a],a,t)&&n.push(t[a]);return n}e.resolve=function(){for(var e="",r=!1,s=arguments.length-1;s>=-1&&!r;s--){var i=s>=0?arguments[s]:t.cwd();if("string"!=typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(e=i+"/"+e,r="/"===i.charAt(0))}return(r?"/":"")+(e=n(a(e.split("/"),(function(t){return!!t})),!r).join("/"))||"."},e.normalize=function(t){var s=e.isAbsolute(t),i="/"===r(t,-1);return(t=n(a(t.split("/"),(function(t){return!!t})),!s).join("/"))||s||(t="."),t&&i&&(t+="/"),(s?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(a(t,(function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function a(t){for(var e=0;e<t.length&&""===t[e];e++);for(var n=t.length-1;n>=0&&""===t[n];n--);return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var r=a(t.split("/")),s=a(n.split("/")),i=Math.min(r.length,s.length),o=i,l=0;l<i;l++)if(r[l]!==s[l]){o=l;break}var c=[];for(l=o;l<r.length;l++)c.push("..");return(c=c.concat(s.slice(o))).join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!=typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,a=-1,r=!0,s=t.length-1;s>=1;--s)if(47===(e=t.charCodeAt(s))){if(!r){a=s;break}}else r=!1;return-1===a?n?"/":".":n&&1===a?"/":t.slice(0,a)},e.basename=function(t,e){var n=function(t){"string"!=typeof t&&(t+="");var e,n=0,a=-1,r=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!r){n=e+1;break}}else-1===a&&(r=!1,a=e+1);return-1===a?"":t.slice(n,a)}(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!=typeof t&&(t+="");for(var e=-1,n=0,a=-1,r=!0,s=0,i=t.length-1;i>=0;--i){var o=t.charCodeAt(i);if(47!==o)-1===a&&(r=!1,a=i+1),46===o?-1===e?e=i:1!==s&&(s=1):-1!==e&&(s=-1);else if(!r){n=i+1;break}}return-1===e||-1===a||0===s||1===s&&e===a-1&&e===n+1?"":t.slice(e,a)};var r="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("8oxB"))},"6Ufb":function(t){t.exports=JSON.parse('{"title":"CDS - Creative Data Science","siteUrl":"https://creative-data.science/","softwarelink":"https://creative-data.science/","email":"createdatasol@gmail.com","description":"Welcome to musing about data, code and visualization of complex systems and concepts. Get ready to get to know and love your data,  learn how to connect information with context and discover creative solutions to help guide your data analysis and modeling pursuits.","social":{"twitter":"https://twitter.com/dgrapov","instagram":"https://www.instagram.com/dgrapov","redbubble":"https://www.redbubble.com/","github":"https://github.com/CreativeDataSolutions"}}')},BZiS:function(t,e,n){"use strict";var a=n("q1tI"),r=n.n(a),s=n("Wbzz");n("DSpU");e.a=function(t){var e=t.tags;return r.a.createElement("section",{className:"tags__container"},e.map((function(t){return r.a.createElement(s.Link,{to:"/tags/"+t,className:"tags__link"},t)})))}},DSpU:function(t,e,n){},IGcV:function(t,e,n){"use strict";var a=n("33yf"),r=n.n(a),s=n("jFb6"),i=n.n(s).a.pathPrefix,o="development"===({}.GATSBY_ACTIVE_ENV||"production");e.a=function(t){return o?t:r.a.join(i,t)}},UeTM:function(t,e,n){},jFb6:function(t,e,n){(function(e){t.exports={siteMetadata:n("6Ufb"),pathPrefix:"/cds.blog",plugins:[{resolve:"gatsby-plugin-disqus",options:{shortname:"cds_blog"}},{resolve:"gatsby-source-filesystem",options:{path:e+"/content/blog",name:"blog"}},{resolve:"gatsby-source-filesystem",options:{path:e+"/content/assets",name:"assets"}},{resolve:"gatsby-transformer-remark",options:{plugins:[{resolve:"gatsby-remark-images",options:{maxWidth:630}},{resolve:"gatsby-remark-responsive-iframe",options:{wrapperStyle:"margin-bottom: 1.0725rem"}},"gatsby-remark-prismjs","gatsby-remark-copy-linked-files","gatsby-remark-smartypants"]}},"gatsby-transformer-sharp","gatsby-plugin-sharp",{resolve:"gatsby-plugin-google-analytics",options:{}},"gatsby-plugin-feed",{resolve:"gatsby-plugin-manifest",options:{name:"CDS - Creative Data Science Blog",short_name:"CDS Blog",start_url:"/",background_color:"#ffffff",theme_color:"#663399",display:"minimal-ui",icon:"content/assets/gatsby-icon.png"}},{resolve:"gatsby-plugin-react-svg",options:{rule:{include:/static/}}},"gatsby-plugin-react-helmet","gatsby-plugin-offline","gatsby-plugin-netlify-cms","gatsby-plugin-sitemap","gatsby-plugin-sass","gatsby-plugin-dark-mode"]}}).call(this,"/")},vx99:function(t,e,n){"use strict";n.r(e);var a=n("q1tI"),r=n.n(a),s=n("TJpk"),i=n.n(s),o=n("Zttt"),l=n("1Hwa"),c=n("vrFN");e.default=function(t){var e=t.data,n=e.site.siteMetadata,a=n.title,s=n.description,u=e.blogPosts.edges,g=t.location;return r.a.createElement(o.a,{location:g},r.a.createElement(c.a,{title:"All Posts"}),r.a.createElement(i.a,null,r.a.createElement("title",null,a),r.a.createElement("meta",{name:"description",content:s})),r.a.createElement("h2",null,"Blog Posts ↓"),r.a.createElement(l.a,{posts:u}))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-32d6431a068cd360758d.js.map