(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[29],{"+YzT":function(e,t,n){"use strict";n("bHtr");var a=n("wx14"),r=n("zLVn"),o=n("TSYQ"),i=n.n(o),c=(n("K9S6"),n("q1tI")),s=n.n(c),l=n("JCAc"),u=n("vUet"),d=s.a.createContext(null),f=s.a.createContext(null),m=(n("V+eJ"),n("2Spj"),Function.prototype.bind.call(Function.prototype.call,[].slice));var p=n("YGJp"),v=n("lcWJ"),b=s.a.createContext(null),h=n("ILyh"),y=n("Qdst"),g=function(){},w=s.a.forwardRef((function(e,t){var n,o,i=e.as,l=void 0===i?"ul":i,u=e.onSelect,d=e.activeKey,f=e.role,w=e.onKeyDown,E=Object(r.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),x=Object(p.a)(),O=Object(c.useRef)(!1),j=Object(c.useContext)(h.a),C=Object(c.useContext)(y.a);C&&(f=f||"tablist",d=C.activeKey,n=C.getControlledId,o=C.getControllerId);var k=Object(c.useRef)(null),K=function(e){if(!k.current)return null;var t,n,a=(t=k.current,n="[data-rb-event-key]:not(.disabled)",m(t.querySelectorAll(n))),r=k.current.querySelector(".active"),o=a.indexOf(r);if(-1===o)return null;var i=o+e;return i>=a.length&&(i=0),i<0&&(i=a.length-1),a[i]},I=function(e,t){null!=e&&(u&&u(e,t),j&&j(e,t))};Object(c.useEffect)((function(){if(k.current&&O.current){var e=k.current.querySelector("[data-rb-event-key].active");e&&e.focus()}O.current=!1}));var T=Object(v.a)(t,k);return s.a.createElement(h.a.Provider,{value:I},s.a.createElement(b.Provider,{value:{role:f,activeKey:Object(h.b)(d),getControlledId:n||g,getControllerId:o||g}},s.a.createElement(l,Object(a.a)({},E,{onKeyDown:function(e){var t;switch(w&&w(e),e.key){case"ArrowLeft":case"ArrowUp":t=K(-1);break;case"ArrowRight":case"ArrowDown":t=K(1);break;default:return}t&&(e.preventDefault(),I(t.dataset.rbEventKey,e),O.current=!0,x())},ref:T,role:f}))))})),E=s.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,c=e.children,l=e.as,d=void 0===l?"div":l,f=Object(r.a)(e,["bsPrefix","className","children","as"]);return n=Object(u.b)(n,"nav-item"),s.a.createElement(d,Object(a.a)({},f,{ref:t,className:i()(o,n)}),c)}));E.displayName="NavItem";var x=E,O=n("dbZe"),j=n("ZCiN"),C=s.a.forwardRef((function(e,t){var n=e.active,o=e.className,l=e.tabIndex,u=e.eventKey,d=e.onSelect,f=e.onClick,m=e.as,p=Object(r.a)(e,["active","className","tabIndex","eventKey","onSelect","onClick","as"]),v=Object(h.b)(u,p.href),y=Object(c.useContext)(h.a),g=Object(c.useContext)(b),w=n;g&&(p.role||"tablist"!==g.role||(p.role="tab"),p["data-rb-event-key"]=v,p.id=g.getControllerId(v),p["aria-controls"]=g.getControlledId(v),w=null==n&&null!=v?g.activeKey===v:n),"tab"===p.role&&(p.tabIndex=w?l:-1,p["aria-selected"]=w);var E=Object(j.a)((function(e){f&&f(e),null!=v&&(d&&d(v,e),y&&y(v,e))}));return s.a.createElement(m,Object(a.a)({},p,{ref:t,onClick:E,className:i()(o,w&&"active")}))}));C.defaultProps={disabled:!1};var k=C,K={disabled:!1,as:O.a},I=s.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.disabled,c=e.className,l=e.href,d=e.eventKey,f=e.onSelect,m=e.as,p=Object(r.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return n=Object(u.b)(n,"nav-link"),s.a.createElement(k,Object(a.a)({},p,{href:l,ref:t,eventKey:d,as:m,disabled:o,onSelect:f,className:i()(c,n,o&&"disabled")}))}));I.displayName="NavLink",I.defaultProps=K;var T=I,N=s.a.forwardRef((function(e,t){var n,o,m,p=Object(l.b)(e,{activeKey:"onSelect"}),v=p.as,b=void 0===v?"div":v,h=p.bsPrefix,y=p.variant,g=p.fill,E=p.justify,x=p.navbar,O=p.className,j=p.children,C=p.activeKey,k=Object(r.a)(p,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]);h=Object(u.b)(h,"nav");var K=Object(c.useContext)(d),I=Object(c.useContext)(f);return K?(o=K.bsPrefix,x=null==x||x):I&&(m=I.cardHeaderBsPrefix),s.a.createElement(w,Object(a.a)({as:b,ref:t,activeKey:C,className:i()(O,(n={},n[h]=!x,n[o+"-nav"]=x,n[m+"-"+y]=!!m,n[h+"-"+y]=!!y,n[h+"-fill"]=g,n[h+"-justified"]=E,n))},k),j)}));N.displayName="Nav",N.defaultProps={justify:!1,fill:!1},N.Item=x,N.Link=T;t.a=N},"5Dlp":function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return f}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP");var a=n("q1tI"),r=n.n(a),o=(n("84bF"),n("vOnD")),i=n("KD6P"),c=n("+YzT"),s=n("C+fU"),l=Object(o.d)(c.a).withConfig({displayName:"tabsstyle__TabHeader",componentId:"sc-1ru4x8s-0"})(["margin:0 -10px;width:100%;justify-content:center;@media ","{margin:0;}"],s.a.small),u=Object(o.d)(c.a.Link).withConfig({displayName:"tabsstyle__NavItem",componentId:"sc-1ru4x8s-1"})(["margin:0 10px;text-align:center;align-self:center;flex-grow:1;flex-basis:0;font-size:14px;font-weight:500;line-height:1.3;text-transform:uppercase;letter-spacing:1px;border:1px solid #ededed !important;border:#ededed;background:#fff;color:#696969;padding:21px 20px 19px;min-width:200px;border-radius:5px !important;@media ","{padding:21px 10px 19px;}@media ","{padding:12px 13px 12px;min-width:150px;margin-bottom:10px;}@media ","{max-width:45%;flex-basis:45%;}@media ","{max-width:100%;flex-basis:100%;margin-left:0;margin-right:0;}&.active{color:",";border-color:"," !important;}"],s.a.large,s.a.medium,s.a.small,s.a.xsmall,(function(e){return e.theme.colors.themeColor}),(function(e){return e.theme.colors.themeColor})),d=Object(o.d)(i.a.Content).withConfig({displayName:"tabsstyle__TabContent",componentId:"sc-1ru4x8s-2"})(["width:100%;padding-top:",";margin-top:",";"],(function(e){return e.pt}),(function(e){return e.mt})),f=Object(o.d)(i.a.Pane).withConfig({displayName:"tabsstyle__TabPane",componentId:"sc-1ru4x8s-3"})(["width:100%;"]),m=Object(o.d)(i.a.Container).withConfig({displayName:"tabsstyle__TabsWrap",componentId:"sc-1ru4x8s-4"})([""]);t.e=function(e){var t=e.children,n=e.id,a=e.defaultActiveKey,o=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["children","id","defaultActiveKey"]);return r.a.createElement(m,Object.assign({id:n,defaultActiveKey:a},o),t)}},"7xGa":function(e,t,n){"use strict";var a,r=n("wx14"),o=n("zLVn"),i=n("TSYQ"),c=n.n(i),s=n("CR+v"),l=n("q1tI"),u=n.n(l),d=n("dRu9"),f=n("z+q/"),m=((a={})[d.b]="show",a[d.a]="show",a),p=u.a.forwardRef((function(e,t){var n=e.className,a=e.children,i=Object(o.a)(e,["className","children"]),p=Object(l.useCallback)((function(e){Object(f.a)(e),i.onEnter&&i.onEnter(e)}),[i]);return u.a.createElement(d.c,Object(r.a)({ref:t,addEndListener:s.a},i,{onEnter:p}),(function(e,t){return u.a.cloneElement(a,Object(r.a)({},t,{className:c()("fade",n,a.props.className,m[e])}))}))}));p.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},p.displayName="Fade",t.a=p},ANPE:function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV");function a(e){var t=function(e){return e&&e.ownerDocument||document}(e);return t&&t.defaultView||window}n("pIFo");var r=/([A-Z])/g;var o=/^ms-/;function i(e){return function(e){return e.replace(r,"-$1").toLowerCase()}(e).replace(o,"-ms-")}var c=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;t.a=function(e,t){var n="",r="";if("string"==typeof t)return e.style.getPropertyValue(i(t))||function(e,t){return a(e).getComputedStyle(e,t)}(e).getPropertyValue(i(t));Object.keys(t).forEach((function(a){var o=t[a];o||0===o?!function(e){return!(!e||!c.test(e))}(a)?n+=i(a)+": "+o+";":r+=a+"("+o+") ":e.style.removeProperty(i(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n}},"CR+v":function(e,t,n){"use strict";n("V+eJ");var a=n("ctsM"),r=n("ANPE"),o=!1,i=!1;try{var c={get passive(){return o=!0},get once(){return i=o=!0}};a.a&&(window.addEventListener("test",c,c),window.removeEventListener("test",c,!0))}catch(m){}var s=function(e,t,n,a){if(a&&"boolean"!=typeof a&&!i){var r=a.once,c=a.capture,s=n;!i&&r&&(s=n.__once||function e(a){this.removeEventListener(t,e,c),n.call(this,a)},n.__once=s),e.addEventListener(t,s,o?a:c)}e.addEventListener(t,n,a)};var l=function(e,t,n,a){var r=a&&"boolean"!=typeof a?a.capture:a;e.removeEventListener(t,n,r),n.__once&&e.removeEventListener(t,n.__once,r)};var u=function(e,t,n,a){return s(e,t,n,a),function(){l(e,t,n,a)}},d=a.a&&"ontransitionend"in window;function f(e,t,n){void 0===n&&(n=5);var a=!1,r=setTimeout((function(){a||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),o=u(e,"transitionend",(function(){a=!0}),{once:!0});return function(){clearTimeout(r),o()}}t.a=function(e,t,n){return d?(null==n&&(a=e,o=Object(r.a)(a,"transitionDuration")||"",i=-1===o.indexOf("ms")?1e3:1,n=parseFloat(o)*i||0),f(e,n),u(e,"transitionend",t)):f(e,0,0);var a,o,i}},ILyh:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var a=n("q1tI"),r=n.n(a).a.createContext(),o=function(e,t){return null!=e?String(e):t||null};t.a=r},JCAc:function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return b}));n("bWfx"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("DNiP"),n("xfY5"),n("rE2o"),n("ioFf");var a=n("wx14"),r=n("zLVn"),o=n("q1tI"),i=n.n(o),c=(n("Tze0"),n("8+KV"),n("QLaP")),s=n.n(c),l=function(){};function u(e,t){return void 0!==e[t]}function d(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function f(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function m(e,t){return Object.keys(t).reduce((function(n,i){var c,s=n,l=s[d(i)],u=s[i],m=Object(r.a)(s,[d(i),i].map(f)),p=t[i],v=function(e,t,n){var a=Object(o.useRef)(void 0!==e),r=Object(o.useState)(t),i=r[0],c=r[1],s=void 0!==e,l=a.current;return a.current=s,!s&&l&&i!==t&&c(t),[s?e:i,Object(o.useCallback)((function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];n&&n.apply(void 0,[e].concat(a)),c(e)}),[n])]}(u,l,e[p]),b=v[0],h=v[1];return Object(a.a)({},m,((c={})[i]=b,c[p]=h,c))}),e)}n("hHhE"),n("f3/d");var p=n("dI71"),v=n("94VI");function b(e,t,n){void 0===n&&(n=[]);var o,c=e.displayName||e.name||"Component",f=!!(o=e)&&("function"!=typeof o||o.prototype&&o.prototype.isReactComponent),m=Object.keys(t),h=m.map(d);!f&&n.length&&s()(!1);var y=function(o){function c(){for(var e,r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];(e=o.call.apply(o,[this].concat(i))||this).handlers=Object.create(null),m.forEach((function(n){var r=t[n];e.handlers[r]=function(t){if(e.props[r]){var o;e._notifying=!0;for(var i=arguments.length,c=new Array(i>1?i-1:0),s=1;s<i;s++)c[s-1]=arguments[s];(o=e.props)[r].apply(o,[t].concat(c)),e._notifying=!1}e.unmounted||e.setState((function(e){var r,o=e.values;return{values:Object(a.a)(Object.create(null),o,(r={},r[n]=t,r))}}))}})),n.length&&(e.attachRef=function(t){e.inner=t});var s=Object.create(null);return m.forEach((function(t){s[t]=e.props[d(t)]})),e.state={values:s,prevProps:{}},e}Object(p.a)(c,o);var s=c.prototype;return s.shouldComponentUpdate=function(){return!this._notifying},c.getDerivedStateFromProps=function(e,t){var n=t.values,r=t.prevProps,o={values:Object(a.a)(Object.create(null),n),prevProps:{}};return m.forEach((function(t){o.prevProps[t]=e[t],!u(e,t)&&u(r,t)&&(o.values[t]=e[d(t)])})),o},s.componentWillUnmount=function(){this.unmounted=!0},s.render=function(){var t=this,n=this.props,o=n.innerRef,c=Object(r.a)(n,["innerRef"]);h.forEach((function(e){delete c[e]}));var s={};return m.forEach((function(e){var n=t.props[e];s[e]=void 0!==n?n:t.state.values[e]})),i.a.createElement(e,Object(a.a)({},c,s,this.handlers,{ref:o||this.attachRef}))},c}(i.a.Component);Object(v.polyfill)(y),y.displayName="Uncontrolled("+c+")",y.propTypes=Object(a.a)({innerRef:function(){}},function(e,t){var n={};return Object.keys(e).forEach((function(e){n[d(e)]=l})),n}(t)),n.forEach((function(e){y.prototype[e]=function(){var t;return(t=this.inner)[e].apply(t,arguments)}}));var g=y;return i.a.forwardRef&&((g=i.a.forwardRef((function(e,t){return i.a.createElement(y,Object(a.a)({},e,{innerRef:t}))}))).propTypes=y.propTypes),g.ControlledComponent=e,g.deferControlTo=function(e,n,r){return void 0===n&&(n={}),b(e,Object(a.a)({},t,n),r)},g}},K9S6:function(e,t,n){"use strict";n("8+KV"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];function a(){for(var e=arguments.length,n=Array(e),a=0;a<e;a++)n[a]=arguments[a];var r=null;return t.forEach((function(e){if(null==r){var t=e.apply(void 0,n);null!=t&&(r=t)}})),r}return(0,o.default)(a)};var a,r=n("pvIh"),o=(a=r)&&a.__esModule?a:{default:a};e.exports=t.default},KD6P:function(e,t,n){"use strict";var a=n("dI71"),r=n("q1tI"),o=n.n(r),i=n("JCAc"),c=n("Qdst"),s=n("ILyh"),l=function(e){var t=Object(i.b)(e,{activeKey:"onSelect"}),n=t.id,a=t.generateChildId,l=t.onSelect,u=t.activeKey,d=t.transition,f=t.mountOnEnter,m=t.unmountOnExit,p=t.children,v=Object(r.useMemo)((function(){return a||function(e,t){return n?n+"-"+t+"-"+e:null}}),[n,a]),b=Object(r.useMemo)((function(){return{onSelect:l,activeKey:u,transition:d,mountOnEnter:f,unmountOnExit:m,getControlledId:function(e){return v(e,"tabpane")},getControllerId:function(e){return v(e,"tab")}}}),[l,u,d,f,m,v]);return o.a.createElement(c.a.Provider,{value:b},o.a.createElement(s.a.Provider,{value:l},p))},u=n("wx14"),d=n("zLVn"),f=n("TSYQ"),m=n.n(f),p=n("vUet"),v=o.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.as,r=void 0===a?"div":a,i=e.className,c=Object(d.a)(e,["bsPrefix","as","className"]),s=Object(p.b)(n,"tab-content");return o.a.createElement(r,Object(u.a)({ref:t},c,{className:m()(i,s)}))})),b=n("7xGa");var h=o.a.forwardRef((function(e,t){var n=function(e){var t=Object(r.useContext)(c.a);if(!t)return e;var n=t.activeKey,a=t.getControlledId,o=t.getControllerId,i=Object(d.a)(t,["activeKey","getControlledId","getControllerId"]),l=!1!==e.transition&&!1!==i.transition,f=Object(s.b)(e.eventKey);return Object(u.a)({},e,{active:null==e.active&&null!=f?Object(s.b)(n)===f:e.active,id:a(e.eventKey),"aria-labelledby":o(e.eventKey),transition:l&&(e.transition||i.transition||b.a),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:i.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:i.unmountOnExit})}(e),a=n.bsPrefix,i=n.className,l=n.active,f=n.onEnter,v=n.onEntering,h=n.onEntered,y=n.onExit,g=n.onExiting,w=n.onExited,E=n.mountOnEnter,x=n.unmountOnExit,O=n.transition,j=n.as,C=void 0===j?"div":j,k=(n.eventKey,Object(d.a)(n,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),K=Object(p.b)(a,"tab-pane");if(!l&&x)return null;var I=o.a.createElement(C,Object(u.a)({},k,{ref:t,role:"tabpanel","aria-hidden":!l,className:m()(i,K,{active:l})}));return O&&(I=o.a.createElement(O,{in:l,onEnter:f,onEntering:v,onEntered:h,onExit:y,onExiting:g,onExited:w,mountOnEnter:E,unmountOnExit:x},I)),o.a.createElement(c.a.Provider,{value:null},o.a.createElement(s.a.Provider,{value:null},I))}));h.displayName="TabPane";var y=h,g=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(o.a.Component);g.Container=l,g.Content=v,g.Pane=y;t.a=g},Qdst:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a).a.createContext(null);t.a=r},SkDj:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("vrFN"),i=n("/lKu"),c=n("k0zA"),s=n("ZBg+"),l=n("sHIg"),u=n("n3vq"),d=n("6jYG"),f=n("s+Kf"),m=n("5Dlp"),p=(n("84bF"),n("vOnD")),v=n("C+fU"),b=p.d.div.withConfig({displayName:"style__SectionWrap",componentId:"sc-3j0nki-0"})(["padding-top:86px;padding-bottom:96px;@media ","{padding-top:70px;padding-bottom:76px;}@media ","{padding-top:50px;padding-bottom:56px;}"],v.a.medium,v.a.small),h=function(){return r.a.createElement(b,null,r.a.createElement(d.c,null,r.a.createElement(d.d,null,r.a.createElement(d.b,{lg:12},r.a.createElement(f.a,{mb:"40px",textalign:"center"},"Tab Style 01"))),r.a.createElement(d.d,null,r.a.createElement(d.b,{lg:12},r.a.createElement(m.e,{defaultActiveKey:"our-mission-tab"},r.a.createElement(m.c,null,r.a.createElement(m.a,{eventKey:"our-mission-tab"},"Our Mission"),r.a.createElement(m.a,{eventKey:"our-services-tab"},"Our Services"),r.a.createElement(m.a,{eventKey:"partners-tab"},"Technology Partners"),r.a.createElement(m.a,{eventKey:"our-awards-tab"},"Our Awards")),r.a.createElement(m.b,{pt:"50px"},r.a.createElement(m.d,{eventKey:"our-mission-tab"},r.a.createElement(f.a,{as:"h4",mb:"20px"},"We’ve come a long way in 25 years"),r.a.createElement("p",null,"The studio was keen to create an identity that would not interfere with any of the existing brands, settling on a helicoid system that can be easily adapted to “work with any colour system”. The studio consulted with the various brands throughout the process. (Source: designweek.co.uk)"),r.a.createElement("p",null,"The studio was keen to create an identity that would not interfere with any of the existing brands, settling on a helicoid system that can be easily adapted to “work with any colour system”. The studio consulted with the various brands throughout the process. (Source: designweek.co.uk)")),r.a.createElement(m.d,{eventKey:"our-services-tab"},r.a.createElement(f.a,{as:"h4",mb:"20px"},"New multiple site connectivity"),r.a.createElement("p",null,"Advancements in technology – including machine-to-machine communications between smart sensors, referred to as ‘The Internet of Things’. For example, appliances in the home that can be monitored and controlled wirelessly by the homeowner wherever they are."),r.a.createElement("p",null,"Advancements in technology – including machine-to-machine communications between smart sensors, referred to as ‘The Internet of Things’. For example, appliances in the home that can be monitored and controlled wirelessly by the homeowner wherever they are.")),r.a.createElement(m.d,{eventKey:"partners-tab"},r.a.createElement(f.a,{as:"h4",mb:"20px"},"IT Security & Software"),r.a.createElement("p",null,"Market development – increasing market share in new markets such as servers and networking equipment. ARM’s technology is well placed to provide lower power options to transport, distribute, analyse and store data across the internet."),r.a.createElement("p",null,"Market development – increasing market share in new markets such as servers and networking equipment. ARM’s technology is well placed to provide lower power options to transport, distribute, analyse and store data across the internet.")),r.a.createElement(m.d,{eventKey:"our-awards-tab"},r.a.createElement(f.a,{as:"h4",mb:"20px"},"Weak hosted capability"),r.a.createElement("p",null,"This case study will demonstrate how ARM’s strategies contribute to the achievement of its business vision, aims and objectives using an integrated approach focusing on innovation, its people and its network of partners."),r.a.createElement("p",null,"This case study will demonstrate how ARM’s strategies contribute to the achievement of its business vision, aims and objectives using an integrated approach focusing on innovation, its people and its network of partners."))))))))},y=n("jTSP"),g=p.d.div.withConfig({displayName:"style__SectionWrap",componentId:"quqgd7-0"})(["padding-top:86px;padding-bottom:96px;background:#f8f8f8;@media ","{padding-top:70px;padding-bottom:76px;}@media ","{padding-top:50px;padding-bottom:56px;}"],v.a.medium,v.a.small),w=function(){return r.a.createElement(g,null,r.a.createElement(d.c,null,r.a.createElement(d.d,null,r.a.createElement(d.b,{lg:12},r.a.createElement(f.a,{mb:"40px",textalign:"center"},"Tab Style 02"))),r.a.createElement(d.d,null,r.a.createElement(d.b,{lg:12},r.a.createElement(y.e,{defaultActiveKey:"our-mission-tab"},r.a.createElement(y.c,null,r.a.createElement(y.a,{eventKey:"our-mission-tab"},"Our Mission"),r.a.createElement(y.a,{eventKey:"our-services-tab"},"Our Services"),r.a.createElement(y.a,{eventKey:"partners-tab"},"Technology Partners"),r.a.createElement(y.a,{eventKey:"our-awards-tab"},"Our Awards")),r.a.createElement(y.b,{pt:"50px"},r.a.createElement(y.d,{eventKey:"our-mission-tab"},r.a.createElement(f.a,{as:"h4",mb:"20px"},"We’ve come a long way in 25 years"),r.a.createElement("p",null,"The studio was keen to create an identity that would not interfere with any of the existing brands, settling on a helicoid system that can be easily adapted to “work with any colour system”. The studio consulted with the various brands throughout the process. (Source: designweek.co.uk)"),r.a.createElement("p",null,"The studio was keen to create an identity that would not interfere with any of the existing brands, settling on a helicoid system that can be easily adapted to “work with any colour system”. The studio consulted with the various brands throughout the process. (Source: designweek.co.uk)")),r.a.createElement(y.d,{eventKey:"our-services-tab"},r.a.createElement(f.a,{as:"h4",mb:"20px"},"New multiple site connectivity"),r.a.createElement("p",null,"Advancements in technology – including machine-to-machine communications between smart sensors, referred to as ‘The Internet of Things’. For example, appliances in the home that can be monitored and controlled wirelessly by the homeowner wherever they are."),r.a.createElement("p",null,"Advancements in technology – including machine-to-machine communications between smart sensors, referred to as ‘The Internet of Things’. For example, appliances in the home that can be monitored and controlled wirelessly by the homeowner wherever they are.")),r.a.createElement(y.d,{eventKey:"partners-tab"},r.a.createElement(f.a,{as:"h4",mb:"20px"},"IT Security & Software"),r.a.createElement("p",null,"Market development – increasing market share in new markets such as servers and networking equipment. ARM’s technology is well placed to provide lower power options to transport, distribute, analyse and store data across the internet."),r.a.createElement("p",null,"Market development – increasing market share in new markets such as servers and networking equipment. ARM’s technology is well placed to provide lower power options to transport, distribute, analyse and store data across the internet.")),r.a.createElement(y.d,{eventKey:"our-awards-tab"},r.a.createElement(f.a,{as:"h4",mb:"20px"},"Weak hosted capability"),r.a.createElement("p",null,"This case study will demonstrate how ARM’s strategies contribute to the achievement of its business vision, aims and objectives using an integrated approach focusing on innovation, its people and its network of partners."),r.a.createElement("p",null,"This case study will demonstrate how ARM’s strategies contribute to the achievement of its business vision, aims and objectives using an integrated approach focusing on innovation, its people and its network of partners."))))))))};t.default=function(e){var t=e.pageContext,n=e.location;return r.a.createElement(i.default,{location:n},r.a.createElement(o.a,{title:"Tabs"}),r.a.createElement(c.a,null),r.a.createElement(l.a,{pageContext:t,location:n,title:"Tabs"}),r.a.createElement("main",{className:"site-wrapper-reveal"},r.a.createElement(h,null),r.a.createElement(w,null),r.a.createElement(u.a,null)),r.a.createElement(s.a,null))}},YGJp:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("q1tI");function r(){return Object(a.useReducer)((function(e){return!e}),!1)[1]}},ZCiN:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("q1tI");var r=function(e){var t=Object(a.useRef)(e);return Object(a.useEffect)((function(){t.current=e}),[e]),t};function o(e){var t=r(e);return Object(a.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},ctsM:function(e,t,n){"use strict";t.a=!("undefined"==typeof window||!window.document||!window.document.createElement)},dbZe:function(e,t,n){"use strict";n("Tze0");var a=n("wx14"),r=n("zLVn"),o=n("q1tI"),i=n.n(o);n("0l/t"),n("DNiP");var c=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];e.apply(this,a),t.apply(this,a)}}),null)};function s(e){return!e||"#"===e.trim()}var l=i.a.forwardRef((function(e,t){var n=e.as,o=void 0===n?"a":n,l=e.disabled,u=e.onKeyDown,d=Object(r.a)(e,["as","disabled","onKeyDown"]),f=function(e){var t=d.href,n=d.onClick;(l||s(t))&&e.preventDefault(),l?e.stopPropagation():n&&n(e)};return s(d.href)&&(d.role=d.role||"button",d.href=d.href||"#"),l&&(d.tabIndex=-1,d["aria-disabled"]=!0),i.a.createElement(o,Object(a.a)({ref:t},d,{onClick:f,onKeyDown:c((function(e){" "===e.key&&(e.preventDefault(),f(e))}),u)}))}));l.displayName="SafeAnchor";t.a=l},jTSP:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return d}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP");var a=n("q1tI"),r=n.n(a),o=n("vOnD"),i=n("KD6P"),c=n("+YzT"),s=Object(o.d)(c.a).withConfig({displayName:"tabsstyle__TabHeader",componentId:"onc4o2-0"})(["width:100%;justify-content:center;margin-bottom:60px;"]),l=Object(o.d)(c.a.Link).withConfig({displayName:"tabsstyle__NavItem",componentId:"onc4o2-1"})(["font-size:16px;font-weight:500;line-height:1.25;border:1px solid #ededed;background:#fff;color:#454545;padding:18px 10px 16px;min-width:160px;border-radius:0;text-align:center;&:first-child{border-top-left-radius:5px !important;border-bottom-left-radius:5px !important;}&:last-child{border-top-right-radius:5px !important;border-bottom-right-radius:5px !important;}&.active{color:#fff;background-color:",";border-color:"," !important;}"],(function(e){return e.theme.colors.themeColor}),(function(e){return e.theme.colors.themeColor})),u=Object(o.d)(i.a.Content).withConfig({displayName:"tabsstyle__TabContent",componentId:"onc4o2-2"})(["width:100%;"]),d=Object(o.d)(i.a.Pane).withConfig({displayName:"tabsstyle__TabPane",componentId:"onc4o2-3"})(["width:100%;"]),f=Object(o.d)(i.a.Container).withConfig({displayName:"tabsstyle__TabsWrap",componentId:"onc4o2-4"})([""]);t.e=function(e){var t=e.children,n=e.id,a=e.defaultActiveKey,o=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["children","id","defaultActiveKey"]);return r.a.createElement(f,Object.assign({id:n,defaultActiveKey:a},o),t)}},lcWJ:function(e,t,n){"use strict";var a=n("q1tI"),r=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e};t.a=function(e,t){return Object(a.useMemo)((function(){return function(e,t){var n=r(e),a=r(t);return function(e){n&&n(e),a&&a(e)}}(e,t)}),[e,t])}},pvIh:function(e,t,n){"use strict";n("2Spj"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,a,r,o,i){var c=r||"<<anonymous>>",s=i||a;if(null==n[a])return t?new Error("Required "+o+" `"+s+"` was not specified in `"+c+"`."):null;for(var l=arguments.length,u=Array(l>6?l-6:0),d=6;d<l;d++)u[d-6]=arguments[d];return e.apply(void 0,[n,a,c,o,s].concat(u))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},"z+q/":function(e,t,n){"use strict";function a(e){e.offsetHeight}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-elements-tabs-js-66ac903b19c91d0dbd48.js.map