(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return p});a(142);var r=a(0),n=a.n(r),i=a(4),o=a.n(i),l=a(141),c=a(153),m=a(147),s=a.n(m),g=Object(l.a)("div",{target:"eu9a0zg0"})("display:grid;grid-template-columns:repeat(",function(e){return e.theme.gridColumns},",1fr);grid-gap:50px;@media (max-width:768px){grid-template-columns:1fr;}.gatsby-image-outer-wrapper,.gatsby-image-wrapper{position:static !important;}"),u=Object(l.a)("div",{target:"eu9a0zg1"})("margin:-6rem auto 6rem auto;max-width:",function(e){return e.theme.maxWidths.general},";padding:0 ",function(e){return e.theme.contentPadding}," 1.45rem;position:relative;"),d=function(e){var t=e.data.allMarkdownRemark.edges;return n.a.createElement(c.d,null,n.a.createElement(c.c,{avatar:s.a.avatar,name:s.a.name,location:s.a.location,socialMedia:s.a.socialMedia}),n.a.createElement(u,null,n.a.createElement(g,null,t.map(function(e){return n.a.createElement(c.a,{date:e.node.frontmatter.date,title:e.node.frontmatter.title,cover:e.node.frontmatter.cover.childImageSharp.fluid,path:e.node.fields.slug,areas:e.node.frontmatter.areas,slug:e.node.fields.slug,key:e.node.fields.slug})}))))};t.default=d,d.propTypes={data:o.a.shape({allMarkdownRemark:o.a.shape({edges:o.a.array.isRequired})}).isRequired};var p="3009045730"},143:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return d});var r=a(0),n=a.n(r),i=a(4),o=a.n(i),l=a(140),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var m=a(145),s=a.n(m);a.d(t,"PageRenderer",function(){return s.a});var g=a(29);a.d(t,"parsePath",function(){return g.a});var u=n.a.createContext({}),d=function(e){return n.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(e,t,a){var r;e.exports=(r=a(150))&&r.default||r},146:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI1NiAyNTY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxnPgoJCTxwb2x5Z29uIHBvaW50cz0iMjA3LjA5MywzMC4xODcgMTc2LjkwNywwIDQ4LjkwNywxMjggMTc2LjkwNywyNTYgMjA3LjA5MywyMjUuODEzIDEwOS4yOCwxMjgiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K"},147:function(e,t){e.exports={pathPrefix:"/",siteTitle:"Emilia",siteTitleAlt:"Emilia - Gatsby Starter Portfolio",siteUrl:"http://emilia.gabe.ws",siteLanguage:"en",siteLogo:"/logos/logo-1024.png",siteDescription:"Dark One-Page portfolio with cards & detailed project views",userTwitter:"@emilia",ogSiteName:"emilia",ogLanguage:"en_US",googleAnalyticsID:"UA-12345689-1",themeColor:"#3498DB",backgroundColor:"#2b2e3c",headerFontFamily:"Fira Sans",bodyFontFamily:"Montserrat",baseFontSize:"16px",avatar:"/logos/social.png",name:"LekoArts",location:"Germany",socialMedia:[{url:"https://www.facebook.com/lekoarts.de",name:"Facebook"},{url:"https://www.instagram.com/lekoarts.de",name:"Instagram"}]}},150:function(e,t,a){"use strict";a.r(t);a(28);var r=a(0),n=a.n(r),i=a(4),o=a.n(i),l=a(50),c=a(2),m=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};m.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=m},151:function(e,t){e.exports={bgPattern:"data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2316191f' fill-opacity='0.8'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E",colors:{bg:"#16191f",color:"white",secondary:"#b6b6b6",link:"#328bff",linkHover:"#79a8ff"},maxWidths:{general:"1600px",project:1600},gridColumns:2,contentPadding:"1.0875rem"}},152:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI1NiAyNTY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxnPgoJCTxwb2x5Z29uIHBvaW50cz0iNzkuMDkzLDAgNDguOTA3LDMwLjE4NyAxNDYuNzIsMTI4IDQ4LjkwNywyMjUuODEzIDc5LjA5MywyNTYgMjA3LjA5MywxMjggICAiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K"},153:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(141),o=a(4),l=a.n(o),c=a(149),m=a.n(c),s=a(143),g=a(144),u=a.n(g),d=Object(i.a)(s.Link,{target:"e1sbrz4u0"})("min-height:500px;position:relative;overflow:hidden;box-shadow:0 20px 40px rgba(0,0,0,0.3),0 15px 12px rgba(0,0,0,0.2);display:flex;flex-direction:column;justify-content:space-between;color:",function(e){return e.theme.colors.color},";transition:all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);&:after{content:'';position:absolute;display:block;width:102%;height:102%;left:0;right:0;bottom:0;background:linear-gradient( to bottom,rgba(0,0,0,0.75) 0%,rgba(0,0,0,0) 20%,rgba(0,0,0,0) 80%,rgba(0,0,0,0.75) 100% );transition:all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);opacity:0;}&:hover{transform:translateY(-15px);color:white;&:after{opacity:1;}box-shadow:0 35px 48px rgba(0,0,0,0.3),0 30px 20px rgba(0,0,0,0.2);}"),p=Object(i.a)("div",{target:"e1sbrz4u1"})("width:100%;height:100%;position:absolute;div{overflow:hidden;}"),b=Object(i.a)("div",{target:"e1sbrz4u2"})("display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;padding:1rem;z-index:10;transition:all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);opacity:0;",d,":hover &{opacity:1;}"),f=Object(i.a)("div",{target:"e1sbrz4u3"})("font-size:0.9rem;"),h=Object(i.a)("div",{target:"e1sbrz4u4"})("z-index:10;position:relative;width:100%;"),y=Object(i.a)("div",{target:"e1sbrz4u5"})("padding:1rem;position:relative;transition:all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);opacity:0;",d,":hover &{opacity:1;}"),w=Object(i.a)("span",{target:"e1sbrz4u6"})("font-size:0.75rem;"),v=Object(i.a)("span",{target:"e1sbrz4u7"})("&:not(:last-child){margin-right:0.25rem;&:after{content:',';}}"),x=Object(i.a)("h2",{target:"e1sbrz4u8"})("margin-top:1.25rem;margin-bottom:0;"),E=function(e){var t=e.path,a=e.cover,r=e.date,i=e.areas,o=e.title,l=e.slug;return n.a.createElement(u.a,{id:l+"-cover"},n.a.createElement(d,{to:t},n.a.createElement(p,null,n.a.createElement(m.a,{sizes:a})),n.a.createElement(b,null,n.a.createElement(f,null,r),n.a.createElement(w,null,i.map(function(e){return n.a.createElement(v,{key:e},e)}))),n.a.createElement(h,null,n.a.createElement(y,null,n.a.createElement(x,null,o)))))},k=E;E.propTypes={path:l.a.string.isRequired,cover:l.a.object.isRequired,date:l.a.string.isRequired,areas:l.a.array.isRequired,title:l.a.string.isRequired,slug:l.a.string.isRequired};var j=Object(i.a)("p",{target:"erhvvw80"})("color:",function(e){return e.theme.colors.secondary},";padding:0 ",function(e){return e.theme.contentPadding},";text-align:center;"),I=function(){return n.a.createElement(j,null,"© 2018 by Gatsby Starter Portfolio - Emilia. Pictures by"," ",n.a.createElement("a",{href:"https://unsplash.com/",target:"_blank",rel:"noopener noreferrer"},"Unsplash"),". Design by"," ",n.a.createElement("a",{href:"https://www.lekoarts.de",target:"_blank",rel:"noopener noreferrer"},"LekoArts"),".",n.a.createElement("br",null),"Have a look at the"," ",n.a.createElement("a",{href:"https://github.com/LekoArts/gatsby-starter-portfolio-emilia",target:"_blank",rel:"noopener noreferrer"},"Github repository"),"!")},z=(a(142),Object(i.a)("div",{target:"e1ckdo840"})('background:url("',function(e){return e.theme.bgPattern},'") #000;display:flex;position:relative;')),M=Object(i.a)("div",{target:"e1ckdo841"})("margin:0 auto;max-width:",function(e){return e.theme.maxWidths.general},";padding:3rem 1.0875rem 10rem 1.0875rem;color:",function(e){return e.theme.colors.secondary},";text-align:center;"),T=Object(i.a)("div",{target:"e1ckdo842"})("height:125px;width:125px;margin:0 auto;image-rendering:-moz-crisp-edges;image-rendering:-o-crisp-edges;image-rendering:-webkit-optimize-contrast;-ms-interpolation-mode:nearest-neighbor;img{border-radius:50%;}"),N=Object(i.a)("h1",{target:"e1ckdo843"})("margin:1rem 0 0.25rem 0;color:",function(e){return e.theme.colors.color},";"),O=Object(i.a)("div",{target:"e1ckdo844"})("font-size:0.9rem;display:flex;align-items:center;justify-content:center;"),L=Object(i.a)("div",{target:"e1ckdo845"})("margin-top:2rem;a{margin:0 0.3rem;}"),C=function(e){var t=e.avatar,a=e.name,r=e.location,i=e.socialMedia;return n.a.createElement(z,null,n.a.createElement(M,null,n.a.createElement(u.a,{id:"avatar-to-back"},n.a.createElement(T,null,n.a.createElement("img",{src:t,alt:a}))),n.a.createElement(u.a,{id:"name-to-back"},n.a.createElement(N,null,a)),n.a.createElement(O,null,r),n.a.createElement(L,null,i.map(function(e){return n.a.createElement("a",{key:e.name,href:e.url,rel:"noopener noreferrer",target:"_blank"},e.name)}))))},P=C;C.propTypes={avatar:l.a.string.isRequired,name:l.a.string.isRequired,location:l.a.string.isRequired,socialMedia:l.a.array.isRequired};a(156);var S=a(157),R=a(151),A=a.n(R);Object(i.b)("body{background:",A.a.colors.bg,";color:",A.a.colors.color,";-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}a{color:",A.a.colors.link,";transition:color .5s;text-decoration:none;}a:hover{text-decoration:none;color:",A.a.colors.linkHover,";}.gatsby-resp-image-wrapper{margin:2.75rem 0;}");var D=function(e){var t=e.children;return n.a.createElement(S.a,{theme:A.a},n.a.createElement(n.a.Fragment,null,n.a.createElement(ce,null),t,n.a.createElement(I,null)))},B=D;D.propTypes={children:l.a.oneOfType([l.a.array,l.a.node]).isRequired};var W=a(146),Z=a.n(W),q=Object(i.a)("div",{target:"ecap73z0"})('background:url("',function(e){return e.theme.bgPattern},'") #000;display:flex;position:relative;'),G=Object(i.a)("div",{target:"ecap73z1"})("margin:0 auto;width:100%;max-width:",function(e){return e.theme.maxWidths.general},";padding:2rem 1.0875rem 16rem 1.0875rem;color:",function(e){return e.theme.colors.secondary},";"),F=Object(i.a)(s.Link,{target:"ecap73z2"})("display:flex;flex-direction:row;align-items:center;justify-content:flex-start;img[data-info='back']{width:25px;height:25px;margin:0 1rem 0 0;}"),H=Object(i.a)("div",{target:"ecap73z3"})("height:40px;width:40px;image-rendering:-moz-crisp-edges;image-rendering:-o-crisp-edges;image-rendering:-webkit-optimize-contrast;-ms-interpolation-mode:nearest-neighbor;img{border-radius:50%;}"),Y=Object(i.a)("h4",{target:"ecap73z4"})("margin:0 0 0 1rem;color:",function(e){return e.theme.colors.color},";"),U=Object(i.a)("div",{target:"ecap73z5"})("width:100%;margin-top:6rem;text-align:center;h1{color:",function(e){return e.theme.colors.color},";}span{&:not(:last-child){margin-right:0.25rem;&:after{content:',';}}}"),V=Object(i.a)("div",{target:"ecap73z6"})("max-width:750px;margin:4rem auto 2rem auto;color:white;"),J=function(e){var t=e.avatar,a=e.name,r=e.title,i=e.date,o=e.areas,l=e.text;return n.a.createElement(q,null,n.a.createElement(G,null,n.a.createElement(F,{to:"/"},n.a.createElement("img",{src:Z.a,"data-info":"back",alt:"test"}),n.a.createElement(u.a,{id:"avatar-to-back"},n.a.createElement(H,null,n.a.createElement("img",{src:t,alt:a}))),n.a.createElement(u.a,{id:"name-to-back"},n.a.createElement(Y,null,a))),n.a.createElement(U,null,n.a.createElement("h1",null,r),n.a.createElement("p",null,i),n.a.createElement("div",null,o.map(function(e){return n.a.createElement("span",{key:e},e)})),l&&n.a.createElement(V,{dangerouslySetInnerHTML:{__html:l}}))))},X=J;J.propTypes={avatar:l.a.string.isRequired,name:l.a.string.isRequired,title:l.a.string.isRequired,date:l.a.string.isRequired,areas:l.a.array.isRequired,text:l.a.string.isRequired};var _=a(152),K=a.n(_),Q=Object(i.a)("div",{target:"emfb1ye0"})("display:flex;max-width:",function(e){return e.theme.maxWidths.general},";margin:6rem auto;a{color:",function(e){return e.theme.colors.color},";display:flex;align-items:center;font-size:1.25rem;}justify-items:center;"),$=Object(i.a)("div",{target:"emfb1ye1"})("img{width:25px;height:25px;margin:0 1rem 0 0;}"),ee=Object(i.a)("div",{target:"emfb1ye2"})("img{width:25px;height:25px;margin:0 0 0 1rem;}margin-left:auto;"),te=function(e){var t=e.next,a=e.prev;return n.a.createElement(Q,null,a&&n.a.createElement($,null,n.a.createElement(s.Link,{to:a.fields.slug},n.a.createElement("img",{src:Z.a,alt:"Arrow Left"}),a.frontmatter.title)),t&&n.a.createElement(ee,null,n.a.createElement(s.Link,{to:t.fields.slug},t.frontmatter.title,n.a.createElement("img",{src:K.a,alt:"Arrow Right"}))))},ae=te;te.propTypes={next:l.a.object,prev:l.a.object},te.defaultProps={next:null,prev:null};var re=a(148),ne=a.n(re),ie=a(147),oe=a.n(ie),le=function(e){var t,a,r,i,o=e.postNode,l=e.postPath,c=e.postSEO,m="/"===oe.a.pathPrefix?"":oe.a.pathPrefix;if(c){var s=o.frontmatter;t=s.title,a=o.excerpt||oe.a.siteDescription,r=s.cover.childImageSharp.resize.src,i=oe.a.siteUrl+m+l}else t=oe.a.siteTitle,a=oe.a.siteDescription,r=oe.a.siteLogo;r=oe.a.siteUrl+m+r;var g=oe.a.siteUrl+oe.a.pathPrefix,u=[{"@context":"http://schema.org","@type":"WebSite","@id":g,url:g,name:t,alternateName:oe.a.siteTitleAlt?oe.a.siteTitleAlt:""}];return c&&(u=[{"@context":"http://schema.org","@type":"BlogPosting","@id":i,url:i,name:t,alternateName:oe.a.siteTitleAlt?oe.a.siteTitleAlt:"",headline:t,image:{"@type":"ImageObject",url:r},description:a,datePublished:o.frontmatter.date,dateModified:o.frontmatter.date,author:{"@type":"Person",name:oe.a.name},publisher:{"@type":"Organization",name:oe.a.name,logo:{"@type":"ImageObject",url:oe.a.siteUrl+m+oe.a.siteLogo}},isPartOf:g,mainEntityOfPage:{"@type":"WebSite","@id":g}}]),n.a.createElement(ne.a,null,n.a.createElement("html",{lang:oe.a.siteLanguage}),n.a.createElement("title",null,t),n.a.createElement("meta",{name:"description",content:a}),n.a.createElement("meta",{name:"image",content:r}),n.a.createElement("script",{type:"application/ld+json"},JSON.stringify(u)),n.a.createElement("meta",{property:"og:locale",content:oe.a.ogLanguage}),n.a.createElement("meta",{property:"og:site_name",content:oe.a.ogSiteName?oe.a.ogSiteName:""}),n.a.createElement("meta",{property:"og:url",content:c?i:g}),c?n.a.createElement("meta",{property:"og:type",content:"article"}):null,n.a.createElement("meta",{property:"og:title",content:t}),n.a.createElement("meta",{property:"og:description",content:a}),n.a.createElement("meta",{property:"og:image",content:r}),n.a.createElement("meta",{property:"fb:app_id",content:oe.a.siteFBAppID?oe.a.siteFBAppID:""}),n.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.a.createElement("meta",{name:"twitter:creator",content:oe.a.userTwitter?oe.a.userTwitter:""}),n.a.createElement("meta",{name:"twitter:title",content:t}),n.a.createElement("meta",{name:"twitter:url",content:oe.a.siteUrl}),n.a.createElement("meta",{name:"twitter:description",content:a}),n.a.createElement("meta",{name:"twitter:image",content:r}))},ce=le;le.propTypes={postNode:l.a.object,postPath:l.a.string,postSEO:l.a.bool},a.d(t,"a",function(){return k}),a.d(t,"b",function(){return I}),a.d(t,"c",function(){return P}),a.d(t,"d",function(){return B}),a.d(t,"e",function(){return X}),a.d(t,"f",function(){return ae}),a.d(t,"g",function(){return ce})}}]);
//# sourceMappingURL=component---src-pages-index-js-f93cfe088cdf26870bf8.js.map