"use strict";(self.webpackChunkpreschool_songs=self.webpackChunkpreschool_songs||[]).push([[706],{4382:function(e,t,n){var r=n(4942),a=n(3366),o=n(7462),i=n(7294),c=n(2692),l=n(5332),s=n(8297),m=n(6486),u=n(8348),d=n(2371),p=n(5893),g=["component","direction","spacing","divider","children"];function f(e,t){var n=i.Children.toArray(e).filter(Boolean);return n.reduce((function(e,r,a){return e.push(r),a<n.length-1&&e.push(i.cloneElement(t,{key:"separator-".concat(a)})),e}),[])}var h=(0,u.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,n=e.theme,a=(0,o.Z)({display:"flex"},(0,c.k9)({theme:n},(0,c.P$)({values:t.direction,breakpoints:n.breakpoints.values}),(function(e){return{flexDirection:e}})));if(t.spacing){var i=(0,l.hB)(n),s=Object.keys(n.breakpoints.values).reduce((function(e,n){return null==t.spacing[n]&&null==t.direction[n]||(e[n]=!0),e}),{}),u=(0,c.P$)({values:t.direction,base:s}),d=(0,c.P$)({values:t.spacing,base:s});a=(0,m.Z)(a,(0,c.k9)({theme:n},d,(function(e,n){return{"& > :not(style) + :not(style)":(0,r.Z)({margin:0},"margin".concat((a=n?u[n]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[a])),(0,l.NA)(i,e))};var a})))}return a})),v=i.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiStack"}),r=(0,s.Z)(n),i=r.component,c=void 0===i?"div":i,l=r.direction,m=void 0===l?"column":l,u=r.spacing,v=void 0===u?0:u,Z=r.divider,E=r.children,y=(0,a.Z)(r,g),b={direction:m,spacing:v};return(0,p.jsx)(h,(0,o.Z)({as:c,ownerState:b,ref:t},y,{children:Z?f(E,Z):E}))}));t.Z=v},5918:function(e,t,n){n.r(t);var r=n(7294),a=n(1597),o=n(9148),i=n(5190),c=n(9308),l=n(9211),s=n(5616),m=n(4382),u=n(6217),d=n(4320),p=n(664),g=n(7221),f=n(5510),h=n(9675),v=n(559),Z=n(5668),E=n(7052),y=n(1788),b=E,k=(0,v.Z)({palette:{primary:{main:"#03a9f4"},secondary:{light:"#fff3e0",main:"#ff9100"}}});t.default=function(e){var t=e.location,n=t.state.category,v=function(e){console.log("line 11",e);var t=b.filter((function(t){return t.category===e}));return console.log("line 13:",t),t};return console.log("this is the way",v(n)),r.createElement(Z.Z,{theme:k},r.createElement(o.ZP,null),r.createElement(i.Z,{position:"relative"},r.createElement("title",null,t.state.title),r.createElement(c.Z,{variant:"h1",color:"inherit",noWrap:!0,align:"center"},"Song Book"),r.createElement("br",null)),r.createElement("main",null,r.createElement(l.Z,{sx:{backgroundImage:"url("+y.Z+")",backgroundSize:"cover",backgroundPosition:"center",pt:8,pb:6,border:"1px dashed grey"}},r.createElement(s.Z,{sx:{maxWidth:"sm",bgcolor:"rgba(0,0,0,.65)",pt:8,pb:6}},r.createElement(c.Z,{component:"h1",variant:"h2",align:"center",color:"secondary.light",gutterBottom:!0},t.state.title),r.createElement(c.Z,{variant:"h5",align:"center",color:"secondary.light",paragraph:!0},t.state.description),r.createElement(m.Z,{sx:{pt:4},direction:"row",spacing:2,justifyContent:"center"},r.createElement(u.Z,{variant:"contained"},r.createElement(a.rU,{to:"/"},"Back to main page")," ")))),r.createElement(s.Z,{sx:{py:8},maxWidth:"md"},r.createElement(d.ZP,{container:!0,spacing:4},v(n).map((function(e){return r.createElement(d.ZP,{item:!0,key:e,xs:12,sm:6,md:4},r.createElement(p.Z,{sx:{height:"100%",display:"flex",flexDirection:"column"}},r.createElement(g.Z,{component:"img",image:e.image,alt:e.title}),r.createElement(f.Z,{sx:{flexGrow:1}},r.createElement(c.Z,{gutterBottom:!0,variant:"h5",component:"h2"},e.title),r.createElement(c.Z,null,"by ",e.by)),r.createElement(h.Z,null,r.createElement(u.Z,{size:"small"},r.createElement(a.rU,{to:"/",state:{url:e.video,title:e.title,category:t.state.title}},"View Video")))))}))))))}}}]);
//# sourceMappingURL=component---src-pages-current-cat-js-fe0a733fd652851fcf94.js.map