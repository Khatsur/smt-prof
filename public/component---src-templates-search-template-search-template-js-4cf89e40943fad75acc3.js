(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[56],{"0Pag":function(e,t,n){"use strict";var a=n("iRbI"),o=n("q1tI"),r=n.n(o),i=n("NIcq"),s=n("vOnD"),l=n("wxAs"),c=s.d.ul.withConfig({displayName:"recent-post-liststyle__List",componentId:"dme4ps-0"})([""]),d=s.d.li.withConfig({displayName:"recent-post-liststyle__ListItem",componentId:"dme4ps-1"})(["line-height:1;overflow:hidden;&:not(:last-child){margin-bottom:22px;}"]),u=Object(s.d)(l.a).withConfig({displayName:"recent-post-liststyle__ListLink",componentId:"dme4ps-2"})(["position:relative;font-weight:600;font-size:15px;color:",";padding-left:25px;line-height:1.6;.icon{font-size:18px;margin-top:5px;position:absolute;left:0;transition:",";&-1{transform:translateX(-100%);visibility:hidden;opacity:0;}}&:hover{.icon{&-1{transform:translateX(0);visibility:visible;opacity:1;}&-2{visibility:hidden;opacity:0;transform:translateX(100%);}}}"],(function(e){return e.theme.colors.textColor}),(function(e){return e.theme.transition}));t.a=function(e){e.listStyle;var t=a.data.allMarkdownRemark.edges;return r.a.createElement(c,null,t&&t.map((function(e,t){return r.a.createElement(d,{key:e.node.fields.slug+"-"+t},r.a.createElement(u,{path:"/"+e.node.fields.slug},r.a.createElement(i.s,{className:"icon icon-1"}),r.a.createElement(i.s,{className:"icon icon-2"}),r.a.createElement("span",null,e.node.frontmatter.title)))})))}},"3mIp":function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return w}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("Z2Ku"),n("L9s1"),n("f3/d");var a=n("q1tI"),o=n.n(a),r=n("vrFN"),i=n("/lKu"),s=n("k0zA"),l=n("ZBg+"),c=n("sHIg"),d=n("6jYG"),u=n("s+Kf"),p=n("JNbB"),m=n("n3vq"),f=n("Kd0Z"),g=(n("84bF"),n("vOnD")),A=n("C+fU"),h=g.d.section.withConfig({displayName:"search-templatestyle__BlogListWrapper",componentId:"sc-6wm0j6-0"})(["padding-top:89px;padding-bottom:100px;@media ","{padding-top:72px;padding-bottom:80px;}@media ","{padding-top:53px;padding-bottom:60px;}"],A.a.medium,A.a.small),b=g.d.div.withConfig({displayName:"search-templatestyle__BlogBoxWrapper",componentId:"sc-6wm0j6-1"})([""]),E=g.d.div.withConfig({displayName:"search-templatestyle__BlogBox",componentId:"sc-6wm0j6-2"})(["padding-bottom:50px;margin-bottom:50px;border-bottom:1px solid ",";"],(function(e){return e.theme.colors.borderColor})),y=g.d.div.withConfig({displayName:"search-templatestyle__SearchInfoHeader",componentId:"sc-6wm0j6-3"})(["margin-bottom:70px;text-align:center;@media ","{margin-bottom:50px;}"],A.a.medium),x=g.d.div.withConfig({displayName:"search-templatestyle__SearchError",componentId:"sc-6wm0j6-4"})(["text-align:center;h2{font-size:60px;@media ","{font-size:50px;}}"],A.a.medium);var v=function(e){var t=e.data,n=e.pageContext,a=e.location,g=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["data","pageContext","location"]).headingStyle,A=t.allMarkdownRemark.edges||[],v=a.state,w=v&&v.query,N=[];return v&&(N=A.filter((function(e){var t=e.node.frontmatter,n=t.title,a=t.quote_text,o=t.quote_author,r=t.categories,i=t.tags,s=t.author.name,l=e.node.html;return n&&n.toLowerCase().includes(w)||a&&a.toLowerCase().includes(w)||o&&o.toLowerCase().includes(w)||l&&l.toLowerCase().includes(w)||s&&s.toLowerCase().includes(w)||i&&i.join("").toLowerCase().includes(w.toLowerCase())||r&&r.join("").toLowerCase().includes(w.toLowerCase())}))),o.a.createElement(i.default,{location:a},o.a.createElement(r.a,{title:"Search"}),o.a.createElement(s.a,null),o.a.createElement(c.a,{pageContext:n,location:a,title:"Search"}),o.a.createElement("main",{className:"site-wrapper-reveal"},o.a.createElement(h,null,o.a.createElement(d.c,null,o.a.createElement(d.d,null,o.a.createElement(d.b,{lg:{span:4,order:1},xs:{span:12,order:2}},o.a.createElement(p.a,null)),o.a.createElement(d.b,{lg:{span:8,order:2},xs:{span:12,order:1}},N&&o.a.createElement(y,null,o.a.createElement(u.a,g,"Search for: ",o.a.createElement("span",null,w)),o.a.createElement(u.a,{as:"h5"},"Posts Found: ",N.length)),N.length>0&&o.a.createElement(b,null,N.map((function(e){return o.a.createElement(E,{key:e.node.fields.slug},o.a.createElement(f.a,{content:e.node}))}))),0===N.length&&o.a.createElement(x,null,o.a.createElement("h2",null,"Nothing Found")))))),o.a.createElement(m.a,null)),o.a.createElement(l.a,null))},w="260490267";v.defaultProps={headingStyle:{as:"h3",child:{color:"primary"}}};t.default=v},"60Bi":function(e,t,n){"use strict";n("xfY5"),n("KKXr"),n("2Spj"),n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=i(n("q1tI")),r=i(n("tyaF"));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isOpen:!1},n.closeModal=n.closeModal.bind(n),n.updateFocus=n.updateFocus.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"openModal",value:function(){this.setState({isOpen:!0})}},{key:"closeModal",value:function(){this.setState({isOpen:!1}),"function"==typeof this.props.onClose&&this.props.onClose()}},{key:"keydownHandler",value:function(e){27===e.keyCode&&this.closeModal()}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keydownHandler.bind(this))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keydownHandler.bind(this))}},{key:"componentDidUpdate",value:function(){this.state.isOpen&&this.modal&&this.modal.focus()}},{key:"updateFocus",value:function(e){9===e.keyCode&&(e.preventDefault(),e.stopPropagation(),this.modal===document.activeElement?this.modalbtn.focus():this.modal.focus())}},{key:"getQueryString",value:function(e){var t="";for(var n in e)e.hasOwnProperty(n)&&null!==e[n]&&(t+=n+"="+e[n]+"&");return t.substr(0,t.length-1)}},{key:"getYoutubeUrl",value:function(e,t){return"//www.youtube.com/embed/"+t+"?"+this.getQueryString(e)}},{key:"getVimeoUrl",value:function(e,t){return"//player.vimeo.com/video/"+t+"?"+this.getQueryString(e)}},{key:"getYoukuUrl",value:function(e,t){return"//player.youku.com/embed/"+t+"?"+this.getQueryString(e)}},{key:"getVideoUrl",value:function(e,t){return"youtube"===e.channel?this.getYoutubeUrl(e.youtube,t):"vimeo"===e.channel?this.getVimeoUrl(e.vimeo,t):"youku"===e.channel?this.getYoukuUrl(e.youku,t):void 0}},{key:"getPadding",value:function(e){var t=e.split(":"),n=Number(t[0]);return 100*Number(t[1])/n+"%"}},{key:"render",value:function(){var e=this,t={paddingBottom:this.getPadding(this.props.ratio)};return o.default.createElement(r.default,{classNames:this.props.classNames.modalVideoEffect,timeout:this.props.animationSpeed},(function(){return e.state.isOpen?o.default.createElement("div",{className:e.props.classNames.modalVideo,tabIndex:"-1",role:"dialog","aria-label":e.props.aria.openMessage,onClick:e.closeModal,ref:function(t){e.modal=t},onKeyDown:e.updateFocus},o.default.createElement("div",{className:e.props.classNames.modalVideoBody},o.default.createElement("div",{className:e.props.classNames.modalVideoInner},o.default.createElement("div",{className:e.props.classNames.modalVideoIframeWrap,style:t},o.default.createElement("button",{className:e.props.classNames.modalVideoCloseBtn,"aria-label":e.props.aria.dismissBtnMessage,ref:function(t){e.modalbtn=t},onKeyDown:e.updateFocus}),o.default.createElement("iframe",{width:"460",height:"230",src:e.getVideoUrl(e.props,e.props.videoId),frameBorder:"0",allowFullScreen:e.props.allowFullScreen,tabIndex:"-1"}))))):null}))}}],[{key:"getDerivedStateFromProps",value:function(e){return{isOpen:e.isOpen}}}]),t}(o.default.Component);t.default=s,s.defaultProps={channel:"youtube",isOpen:!1,youtube:{autoplay:1,cc_load_policy:1,color:null,controls:1,disablekb:0,enablejsapi:0,end:null,fs:1,h1:null,iv_load_policy:1,list:null,listType:null,loop:0,modestbranding:null,origin:null,playlist:null,playsinline:null,rel:0,showinfo:1,start:0,wmode:"transparent",theme:"dark"},ratio:"16:9",vimeo:{api:!1,autopause:!0,autoplay:!0,byline:!0,callback:null,color:null,height:null,loop:!1,maxheight:null,maxwidth:null,player_id:null,portrait:!0,title:!0,width:null,xhtml:!1},youku:{autoplay:1,show_related:0},allowFullScreen:!0,animationSpeed:300,classNames:{modalVideoEffect:"modal-video-effect",modalVideo:"modal-video",modalVideoClose:"modal-video-close",modalVideoBody:"modal-video-body",modalVideoInner:"modal-video-inner",modalVideoIframeWrap:"modal-video-movie-wrap",modalVideoCloseBtn:"modal-video-close-btn"},aria:{openMessage:"You just openned the modal video",dismissBtnMessage:"Close the modal by clicking here"}}},"6SZx":function(e,t,n){"use strict";t.__esModule=!0,t.classNamesShape=t.timeoutsShape=void 0;var a;(a=n("17x9"))&&a.__esModule;t.timeoutsShape=null;t.classNamesShape=null},"8XhC":function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"frontmatter":{"tags":["business","IT Security","IT Services"]}}},{"node":{"frontmatter":{"tags":["business","IT Security","IT Services"]}}},{"node":{"frontmatter":{"tags":["business","IT Security","IT Services"]}}},{"node":{"frontmatter":{"tags":["business","IT Security","IT Services"]}}},{"node":{"frontmatter":{"tags":["business","IT Security","IT Services"]}}},{"node":{"frontmatter":{"tags":["business","IT Security","IT Services"]}}},{"node":{"frontmatter":{"tags":["business","IT Security","IT Services"]}}}]}}}')},CMt0:function(e){e.exports=JSON.parse('{"data":{"advertismentsJson":{"title":"Blog Sidebar Ad","path":"/","image":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAcABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAe9IaAAB/8QAFhAAAwAAAAAAAAAAAAAAAAAAESAw/9oACAEBAAEFAkMP/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAFhAAAwAAAAAAAAAAAAAAAAAAIDBB/9oACAEBAAY/AgqP/8QAGxABAAAHAAAAAAAAAAAAAAAAAQAQESEwMYH/2gAIAQEAAT8hm2IKnXRg/9oADAMBAAIAAwAAABAgAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAaEAEBAAIDAAAAAAAAAAAAAAABEQBBECEw/9oACAEBAAE/EOVRizQVw5BdbDw//9k=","aspectRatio":0.723404255319149,"src":"/static/fa5b1d6ade5d5f5db259735e8bef1543/e3e04/blog-sidebar-ads.jpg","srcSet":"/static/fa5b1d6ade5d5f5db259735e8bef1543/d55fb/blog-sidebar-ads.jpg 170w,\\n/static/fa5b1d6ade5d5f5db259735e8bef1543/0d958/blog-sidebar-ads.jpg 340w,\\n/static/fa5b1d6ade5d5f5db259735e8bef1543/e3e04/blog-sidebar-ads.jpg 680w","srcWebp":"/static/fa5b1d6ade5d5f5db259735e8bef1543/160a0/blog-sidebar-ads.webp","srcSetWebp":"/static/fa5b1d6ade5d5f5db259735e8bef1543/58d98/blog-sidebar-ads.webp 170w,\\n/static/fa5b1d6ade5d5f5db259735e8bef1543/5a3f9/blog-sidebar-ads.webp 340w,\\n/static/fa5b1d6ade5d5f5db259735e8bef1543/160a0/blog-sidebar-ads.webp 680w","sizes":"(max-width: 680px) 100vw, 680px","presentationWidth":680,"presentationHeight":940}}}}}}')},FUzq:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"siteUrl":"http://themesmummy.com/mitech"}}}}')},Hyfy:function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0mN4"),n("f3/d");var a=n("q1tI"),o=n.n(a),r=n("9eSz"),i=n.n(r),s=n("tBDR"),l=n("wxAs"),c=n("6UNW"),d=n("vOnD").d.div.withConfig({displayName:"author-metastyle__AuthorMetaWrap",componentId:"sc-1fz2qs5-0"})(["margin-top:",";margin-bottom:",";margin-left:",";margin-right:",";a{display:flex;align-items:center;.gatsby-image-wrapper{border-radius:50%;width:40px;height:40px;}span{margin-left:8px;color:",";}}"],(function(e){return e.mt}),(function(e){return e.mb}),(function(e){return e.ml}),(function(e){return e.mr}),(function(e){return e.color}));t.a=function(e){var t,n=e.slug,a=e.name,r=e.imageSrc,u=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["slug","name","imageSrc"]);return t=r.fixed&&"function"!=typeof r.fixed?o.a.createElement(i.a,{fixed:r.fixed,alt:a}):r.fluid?o.a.createElement(s.a,{fluid:r.fluid,alt:a}):o.a.createElement("img",{src:r,alt:a}),o.a.createElement(d,u,o.a.createElement(l.a,{path:"/profile/"+n},t,o.a.createElement(c.a,{as:"span"},a)))}},IOix:function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var a=n("q1tI"),o=n.n(a),r=n("6UNW"),i=n("wxAs"),s=n("vOnD").d.div.withConfig({displayName:"blog-metastyle__BlogMetaWrap",componentId:"sc-146vzmh-0"})(["margin-top:",";margin-bottom:",";margin-left:",";margin-right:",";a{display:flex;align-items:center;}svg{margin-right:6px;color:",";}span{color:",";}"],(function(e){return e.mt}),(function(e){return e.mb}),(function(e){return e.ml}),(function(e){return e.mr}),(function(e){return e.color||e.theme.colors.textColor}),(function(e){return e.color}));t.a=function(e){var t=e.icon,n=e.text,a=e.path,l=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["icon","text","path"]);return o.a.createElement(s,l,o.a.createElement(i.a,{path:a},t,o.a.createElement(r.a,{as:"span"},n)))}},JNbB:function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),r=n("s+Kf"),i=n("0Pag"),s=n("CMt0"),l=n("wxAs"),c=n("tBDR"),d=function(e){var t=s.data.advertismentsJson,n=t.image.childImageSharp.fluid;return o.a.createElement(l.a,{path:t.path,display:"block"},o.a.createElement(c.a,{fluid:n,alt:t.title}))},u=(n("91GP"),n("HEwt"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("T39b"),n("8XhC")),p=n("6jYG"),m=n("Pz91"),f=n("wkEL"),g=function(e){var t=e.boxStyle,n=e.tagStyle,a=u.data.allMarkdownRemark.edges.map((function(e){return e.node.frontmatter})).map((function(e,t){return e.tags})),r=Object(f.flatDeep)(a),i=new Set(r),s=Array.from(i);return o.a.createElement(p.a,t,s.map((function(e,t){return o.a.createElement(m.a,Object.assign({},n,{to:"/tag/"+Object(f.slugify)(e),key:Object(f.slugify)(e)}),e)})))};g.defaultProps={boxStyle:{m:"-5px"},tagStyle:{hover:"2",size:"xsmall",skin:"light",color:"#ababab",bgcolor:"#f5f5f5",p:"0 14px",m:"5px",height:"32px",lineheight:"32px",fontSize:"13px"}};var A=g,h=n("vOnD"),b=h.d.aside.withConfig({displayName:"sidebarstyle__SidebarWrap",componentId:"sc-1fyqp4f-0"})(["padding-right:30px;height:100%;"]),E=h.d.div.withConfig({displayName:"sidebarstyle__RecentWidgetBox",componentId:"sc-1fyqp4f-1"})(["margin-bottom:50px;"]),y=h.d.div.withConfig({displayName:"sidebarstyle__RecentPostListWrap",componentId:"sc-1fyqp4f-2"})(["li{padding-bottom:15px;margin-bottom:18px;&:not(:last-child){border-bottom:1px solid ",";}&:before,&:after{font-size:18px;}}a{font-size:18px;font-weight:600;}"],(function(e){return e.theme.colors.borderColor})),x=h.d.div.withConfig({displayName:"sidebarstyle__AdWidgetBox",componentId:"sc-1fyqp4f-3"})(["margin-bottom:47px;"]),v=h.d.div.withConfig({displayName:"sidebarstyle__TagWidgetBox",componentId:"sc-1fyqp4f-4"})([""]),w=function(e){var t=e.widgetTitleStyle;return o.a.createElement(b,null,o.a.createElement(E,null,o.a.createElement(r.a,t,"Recent Posts"),o.a.createElement(y,null,o.a.createElement(i.a,null))),o.a.createElement(x,null,o.a.createElement(d,null)),o.a.createElement(v,null,o.a.createElement(r.a,t,"Popular Tags"),o.a.createElement(A,null)))};w.defaultProps={widgetTitleStyle:{fontSize:"34px",fontweight:500,mb:"27px"}};t.a=w},Kd0Z:function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("f3/d"),n("91GP"),n("KKXr");var a=n("q1tI"),o=n.n(a),r=n("ma3e"),i=n("Pz91"),s=n("6UNW"),l=n("wxAs"),c=n("zT88"),d=n("Hyfy"),u=n("IOix"),p=n("uqnN"),m=n("teYP"),f=n("tBDR"),g=n("fpNA"),A=(n("84bF"),n("vOnD")),h=n("WT7U"),b=n.n(h),E=n("C+fU"),y=A.d.article.withConfig({displayName:"blogstyle__BlogWrapper",componentId:"sc-1n2fmn9-0"})([""]),x=A.d.div.withConfig({displayName:"blogstyle__BlogMedia",componentId:"sc-1n2fmn9-1"})(["margin-bottom:22px;"]),v=A.d.figure.withConfig({displayName:"blogstyle__BlogThumb",componentId:"sc-1n2fmn9-2"})(["margin:0;.gatsby-image-wrapper{border-radius:5px;}a{display:block;}"]),w=A.d.blockquote.withConfig({displayName:"blogstyle__BlogQuote",componentId:"sc-1n2fmn9-3"})(["position:relative;padding:78px 40px 53px;background:#f5f7fd;text-align:center;@media ","{padding:60px 20px 36px;}&:before{content:'';position:absolute;left:50%;top:54px;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);height:132px;width:150px;background:url(",") no-repeat;}h3{font-size:24px;line-height:1.5;margin-bottom:39px;}footer{font-size:18px;color:#333;margin-bottom:0;}"],E.a.small,b.a),N=A.d.div.withConfig({displayName:"blogstyle__BlogInfo",componentId:"sc-1n2fmn9-4"})([""]),C=A.d.header.withConfig({displayName:"blogstyle__BlogHeader",componentId:"sc-1n2fmn9-5"})([""]),S=A.d.h3.withConfig({displayName:"blogstyle__BlogTitle",componentId:"sc-1n2fmn9-6"})(["font-size:40px;margin-bottom:10px;@media ","{font-size:35px;}@media ","{font-size:30px;}@media ","{font-size:25px;}a{color:",";}"],E.a.large,E.a.small,E.a.xsmall,(function(e){return e.theme.colors.headingColor})),O=A.d.div.withConfig({displayName:"blogstyle__BlogHeaderMeta",componentId:"sc-1n2fmn9-7"})(["display:flex;align-items:center;flex-wrap:wrap;margin-bottom:25px;"]),I=A.d.div.withConfig({displayName:"blogstyle__BlogExcerpt",componentId:"sc-1n2fmn9-8"})(["margin-bottom:35px;"]),B=A.d.footer.withConfig({displayName:"blogstyle__BlogFooter",componentId:"sc-1n2fmn9-9"})(["display:flex;flex-wrap:wrap;"]),_=A.d.div.withConfig({displayName:"blogstyle__BlogFooterLeft",componentId:"sc-1n2fmn9-10"})(["flex-basis:50%;max-width:50%;@media ","{flex-basis:100%;max-width:100%;}"],E.a.xsmall),k=A.d.div.withConfig({displayName:"blogstyle__BlogFooterRight",componentId:"sc-1n2fmn9-11"})(["flex-basis:49%;max-width:49%;@media ","{flex-basis:100%;max-width:100%;}.share-label{font-weight:500;}"],E.a.xsmall);var j=function(e){var t,n,A=e.content,h=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["content"]),b=A.frontmatter,E=b.title,j=b.author,D=b.date,T=b.format,P=b.featured_image,M=b.quote_text,q=b.quote_author,R=b.video_link,F=b.categories,L=A.excerpt,V=A.fields,U=V.slug,G=V.authorId,z=V.dateSlug,Y=h.metaStyle,X=h.categoryBoxStyle;R&&(t=R.split("=",-1)[1],n=R.split(".")[1]);var Q=Object(a.useState)(!1),H=Q[0],K=Q[1];return o.a.createElement(a.Fragment,null,o.a.createElement(y,h,o.a.createElement(x,null,"image"===T&&o.a.createElement(v,null,o.a.createElement(l.a,{path:"/"+U},o.a.createElement(f.a,{fluid:P.childImageSharp.fluid,alt:E}))),"quote"===T&&o.a.createElement(w,null,M&&o.a.createElement("h3",null,M),q&&o.a.createElement("footer",null,"-",q)),"video"===T&&o.a.createElement(m.a,{onClick:function(){K(!0)},poster:P.childImageSharp.fluid,title:E})),o.a.createElement(N,null,o.a.createElement(C,null,o.a.createElement(p.a,Object.assign({},X,{categories:F})),E&&o.a.createElement(S,null,o.a.createElement(l.a,{path:"/"+U},E)),o.a.createElement(O,null,j&&o.a.createElement(d.a,Object.assign({},Y,{slug:G,name:j.name,imageSrc:j.image.childImageSharp})),D&&o.a.createElement(u.a,Object.assign({},Y,{path:"/date/"+z,text:D,icon:o.a.createElement(r.c,null)})))),L&&o.a.createElement(I,null,o.a.createElement(s.a,null,L)),o.a.createElement(B,null,o.a.createElement(_,null,o.a.createElement(i.a,{to:"/"+U,hover:"2"},"Read More")),o.a.createElement(k,null,o.a.createElement(c.a,null))))),o.a.createElement(g.a,{channel:n,videoId:t,isOpen:H,onClose:function(){K(!1)}}))};j.defaultProps={metaStyle:{mt:"10px",mr:"20px"},categoryBoxStyle:{mb:"18px"}};t.a=j},SkRC:function(e,t,n){"use strict";n("hHhE"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("HAE/"),t.__esModule=!0,t.default=t.EXITING=t.ENTERED=t.ENTERING=t.EXITED=t.UNMOUNTED=void 0;var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n("17x9")),o=s(n("q1tI")),r=s(n("i8i4")),i=n("94VI");n("6SZx");function s(e){return e&&e.__esModule?e:{default:e}}t.UNMOUNTED="unmounted";t.EXITED="exited";t.ENTERING="entering";t.ENTERED="entered";t.EXITING="exiting";var l=function(e){var t,n;function a(t,n){var a;a=e.call(this,t,n)||this;var o,r=n.transitionGroup,i=r&&!r.isMounting?t.enter:t.appear;return a.appearStatus=null,t.in?i?(o="exited",a.appearStatus="entering"):o="entered":o=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",a.state={status:o},a.nextCallback=null,a}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=a.prototype;return i.getChildContext=function(){return{transitionGroup:null}},a.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null},i.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},i.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},i.componentWillUnmount=function(){this.cancelNextCallback()},i.getTimeouts=function(){var e,t,n,a=this.props.timeout;return e=t=n=a,null!=a&&"number"!=typeof a&&(e=a.exit,t=a.enter,n=void 0!==a.appear?a.appear:t),{exit:e,enter:t,appear:n}},i.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=r.default.findDOMNode(this);"entering"===t?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},i.performEnter=function(e,t){var n=this,a=this.props.enter,o=this.context.transitionGroup?this.context.transitionGroup.isMounting:t,r=this.getTimeouts(),i=o?r.appear:r.enter;t||a?(this.props.onEnter(e,o),this.safeSetState({status:"entering"},(function(){n.props.onEntering(e,o),n.onTransitionEnd(e,i,(function(){n.safeSetState({status:"entered"},(function(){n.props.onEntered(e,o)}))}))}))):this.safeSetState({status:"entered"},(function(){n.props.onEntered(e)}))},i.performExit=function(e){var t=this,n=this.props.exit,a=this.getTimeouts();n?(this.props.onExit(e),this.safeSetState({status:"exiting"},(function(){t.props.onExiting(e),t.onTransitionEnd(e,a.exit,(function(){t.safeSetState({status:"exited"},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:"exited"},(function(){t.props.onExited(e)}))},i.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},i.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},i.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,t.nextCallback=null,e(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},i.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var a=null==t&&!this.props.addEndListener;e&&!a?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},i.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,a=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["children"]);if(delete a.in,delete a.mountOnEnter,delete a.unmountOnExit,delete a.appear,delete a.enter,delete a.exit,delete a.timeout,delete a.addEndListener,delete a.onEnter,delete a.onEntering,delete a.onEntered,delete a.onExit,delete a.onExiting,delete a.onExited,"function"==typeof n)return n(e,a);var r=o.default.Children.only(n);return o.default.cloneElement(r,a)},a}(o.default.Component);function c(){}l.contextTypes={transitionGroup:a.object},l.childContextTypes={transitionGroup:function(){}},l.propTypes={},l.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:c,onEntering:c,onEntered:c,onExit:c,onExiting:c,onExited:c},l.UNMOUNTED=0,l.EXITED=1,l.ENTERING=2,l.ENTERED=3,l.EXITING=4;var d=(0,i.polyfill)(l);t.default=d},VOcB:function(e,t,n){"use strict";function a(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}n("Oyvg"),n("pIFo"),e.exports=function(e,t){e.classList?e.classList.remove(t):"string"==typeof e.className?e.className=a(e.className,t):e.setAttribute("class",a(e.className&&e.className.baseVal||"",t))}},WT7U:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACEBAMAAACAMc9BAAAAAXNSR0IB2cksfwAAABtQTFRFAAAAAAAAKioqAAAAAAAAnQCdAAAAICAgAAAAdK1XAQAAAAl0Uk5TAAoGAQMCCQgH/u33iQAABM9JREFUeJyVWk2PE0cQHTFriasReH0cEuAcsmHJcQABe8RCglyXJAvHGATK0VEU5W8zM7a7qqZevWrXtZ5ed796/TnTNCrai4umOij4lx++3dx8fvlTFdMe/BCD26vr5RQf3lb0qYBfgOzi0fIYq4cpFQWr7JD/MaF6pcBLR/ZaZ5fnPeX6zYBXM/DZ0sYdVgAObu/P0sv/yAgd+KtO/zrPLs/fhFw/O/BKgdt/XNq2ZboFwH+yloaORYrdQmDpmBNgjH8DrmcI/OWYnddlH3cw1QKC18dRvIPpZQ+5nmJwx4ZoBFURgO+xXgfqL64pGBUmHGQI3g9yE6XRIC8j8D2mAK5kCF6P2TZQYAg/j9ptCB4Vwe6aonNcUZ2G2DE1S6FrpN+DA/ON4QW7zcGbOO0dFpZxv/DAuXqIfs5FGh7BjMuJz8CD+GBpK/H7KVyD+FuethFadYi7TRNbFRSScQ1gkt1PjFquoeqsX6u5KRjXMOW2PH0CV0/r6AzG6jg4KEmfwLXL0jY2DPwlS9sg83Fch8k64Y1P1onR2WRJ8san4LtsXfVcZF0duch6P80xE2S9nyZRMl/rzbrmdXaTOzh7THHO9XRcDLziejqu6Dxx4GIa+J2ICcbN7LmYtRu6c3supgjvNziekLWAFwdwkUqOaXRkD7n8teMYqynv7x2HcL5v8G1gijVvC3GF8h4GEZUSckXgoyDvT+Ca3R8d2FxVV2UU/jQ3hbnXPppz2Sv0JuFqXyvwYw9unx+m7acX4kd30JmD1y9lzdINP3n+/83Hvx/o813EBcGzQVzsDxBFr79CLgDGDZd50DGuQ/CGZTup4dpSsKwrfU614A2LsePXAACGDZdlxZ3lTm+4rMPhY4CK27zh4r7g/m6i7BbucDtFcR+e2gEYN5xNbQyGDYu94ikk4C1tWCqzy7nEi/Mz5BSy0/Q5l4A7lJazTIVVL3nDpTI19ipgbK+iZo29ypIC7SVqVlhCwNASoiasTASG/tnwyti45GDZlivKKKeeHmRFgYoyyhSBZRQFKma2TBFYc5ELP8yZELlgzUWuLucS8A5k1Xk0l16d0HuQlmPdOpdetIV1kiJXSL+hYNXr3PXq1oZcr07JfcqlwB1IyxArnCpDXIE6qV7ncqmjPHKq6nUulzoDI7nUBaVPuTYUrKqId2EdSg+krbp/5Guq0gNpq24UXcql9ADfIJSYqMg29EUSgNUlP3eEAgNHLETM8MtJCX1PBPbRN790iPpK2vu0Uj7fZTlYt5Sa/oyD9aU8HaIG97SltIoanLwV7E7plh+ibik16tk1BeuW0rmo77VeD3Mf7xMq89jU0W6l5tLd8juf6VZmLgP2BwX9fJEqb16HHNi892TKG7BT3j7B9JwqAb+nLc3CvCMl74kdp9KLHFjmjJb0630ze35xhrDPRsmCasHug/oz2hIDuw/99mEy6ZaV1nXL2CXrlgH7/w82Op1NH/Os638/0AqkR1TdMPgtQts43RX5eqq/W2XeMg2vwRKg9t/k95cmO4+odMU1VoHRGETOPudKrovlbeePnEr8hVeT4wwjf75IHCfJ/P+eY9yv9MMUB8Giv2RuVfpBgZEf9vGKdBqDY/Msrm4+od+4YLRX3z7Sf7ou6gaYgb8DjVeJ6qaf9JEAAAAASUVORK5CYII="},fpNA:function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),r=n("60Bi"),i=n.n(r);n("KGzY");t.a=function(e){var t=e.channel,n=e.isOpen,a=e.videoId,r=e.onClose;return o.a.createElement("div",{className:"modal-video-wrapper"},o.a.createElement(i.a,{channel:t,isOpen:n,videoId:a,onClose:r}))}},iRbI:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"fields":{"slug":"ideas-for-high-returns-on-investment"},"frontmatter":{"title":"Ideas for High Returns on Investment"}}},{"node":{"fields":{"slug":"how-technology-made-businesses-more-efficient"},"frontmatter":{"title":"How Technology Made Businesses More Efficient"}}},{"node":{"fields":{"slug":"data-secure-on-transitioning-to-a-new-office"},"frontmatter":{"title":"Data Secure on Transitioning to a New Office"}}},{"node":{"fields":{"slug":"the-keys-to-persuading-customers-nowadays"},"frontmatter":{"title":"The Keys to Persuading Customers Nowadays"}}},{"node":{"fields":{"slug":"blockchain-technology-effects-on-logistics-sector"},"frontmatter":{"title":"Blockchain Technology Effects on Logistics Sector?"}}}]}}}')},teYP:function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),r=n("tBDR"),i=n("vOnD").d.div.withConfig({displayName:"video-thumbstyle__VideoThumbWrapper",componentId:"xac35l-0"})(["position:relative;cursor:pointer;.video-poster{position:relative;img{width:100%;border-radius:5px;}}.video-overlay{background-color:rgba(8,106,216,0.8);position:absolute;top:0;right:0;bottom:0;left:0;}.video-button{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}.video-play{width:70px;height:70px;background:0 0;border:6px solid #fff;color:#fff;position:relative;transition:all 1s cubic-bezier(0,0,.2,1) !important;border-radius:50%;}.video-play-icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);line-height:1;margin-left:1px;z-index:2;&:before{content:'';position:absolute;top:0;left:0;width:0;height:0;transform:translate(-50%,-50%);border-top:11px solid transparent;border-bottom:11px solid transparent;border-left:17px solid currentColor;border-top-width:13px;border-bottom-width:13px;border-left-width:20px;}}&:hover{.video-play{transform:scale3d(1.15,1.15,1.15);}}"]);t.a=function(e){var t=e.poster,n=e.title,a=e.onClick;return o.a.createElement(i,{onClick:a},o.a.createElement("div",{className:"video-poster"},o.a.createElement(r.a,{fluid:t,alt:n})),o.a.createElement("div",{className:"video-overlay"},o.a.createElement("div",{className:"video-button"},o.a.createElement("div",{className:"video-play"},o.a.createElement("span",{className:"video-play-icon"})))))}},tyaF:function(e,t,n){"use strict";n("KKXr"),n("8+KV"),n("hHhE"),n("91GP"),n("HAE/"),t.__esModule=!0,t.default=void 0;!function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}t.default=e}(n("17x9"));var a=s(n("ycFn")),o=s(n("VOcB")),r=s(n("q1tI")),i=s(n("SkRC"));n("6SZx");function s(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,a.default)(e,t)}))},d=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,o.default)(e,t)}))},u=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).onEnter=function(e,n){var a=t.getClassNames(n?"appear":"enter").className;t.removeClasses(e,"exit"),c(e,a),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var a=t.getClassNames(n?"appear":"enter").activeClassName;t.reflowAndAddClass(e,a),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var a=t.getClassNames("appear").doneClassName,o=t.getClassNames("enter").doneClassName,r=n?a+" "+o:o;t.removeClasses(e,n?"appear":"enter"),c(e,r),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.getClassNames("exit").className;t.removeClasses(e,"appear"),t.removeClasses(e,"enter"),c(e,n),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.getClassNames("exit").activeClassName;t.reflowAndAddClass(e,n),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.getClassNames("exit").doneClassName;t.removeClasses(e,"exit"),c(e,n),t.props.onExited&&t.props.onExited(e)},t.getClassNames=function(e){var n=t.props.classNames,a="string"==typeof n,o=a?(a&&n?n+"-":"")+e:n[e];return{className:o,activeClassName:a?o+"-active":n[e+"Active"],doneClassName:a?o+"-done":n[e+"Done"]}},t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.removeClasses=function(e,t){var n=this.getClassNames(t),a=n.className,o=n.activeClassName,r=n.doneClassName;a&&d(e,a),o&&d(e,o),r&&d(e,r)},o.reflowAndAddClass=function(e,t){t&&(e&&e.scrollTop,c(e,t))},o.render=function(){var e=l({},this.props);return delete e.classNames,r.default.createElement(i.default,l({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},a}(r.default.Component);u.defaultProps={classNames:""},u.propTypes={};var p=u;t.default=p,e.exports=t.default},uqnN:function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var a=n("q1tI"),o=n.n(a),r=n("wxAs"),i=n("wkEL"),s=n("vOnD").d.div.withConfig({displayName:"categoriesstyle__CategroiesWrap",componentId:"lsuygf-0"})(["margin-bottom:",";a{font-size:14px;font-weight:500;text-transform:uppercase;letter-spacing:1px;color:",";text-transform:uppercase;&:not(:last-child){margin-right:5px;}}"],(function(e){return e.mb}),(function(e){return e.theme.colors.secondary}));t.a=function(e){var t=e.categories,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["categories"]),a=Object(i.createList)({list:t});return o.a.createElement(s,n,a.map((function(e){return o.a.createElement(r.a,{path:"/category/"+Object(i.slugify)(e.text),key:Object(i.slugify)(e.text)},e.text,e.sep)})))}},yD6e:function(e,t,n){"use strict";n("V+eJ"),t.__esModule=!0,t.default=function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")},e.exports=t.default},ycFn:function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.default=function(e,t){e.classList?e.classList.add(t):(0,o.default)(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))};var o=a(n("yD6e"));e.exports=t.default},zT88:function(e,t,n){"use strict";n("91GP");var a=n("FUzq"),o=n("q1tI"),r=n.n(o),i=n("NIcq"),s=n("rCLJ"),l=n("azQ5"),c=n("6UNW"),d=n("Pz91"),u=(n("84bF"),n("vOnD")),p=n("C+fU"),m=u.d.div.withConfig({displayName:"social-sharestyle__SocialShareWrap",componentId:"sc-1b7fd6d-0"})(["display:flex;align-items:center;justify-content:flex-end;"]),f=u.d.div.withConfig({displayName:"social-sharestyle__SocialMediaWrap",componentId:"sc-1b7fd6d-1"})(["position:relative;margin-left:10px;"]),g=u.d.div.withConfig({displayName:"social-sharestyle__FloatingSocialBox",componentId:"sc-1b7fd6d-2"})(["position:absolute;bottom:100%;right:0%;transform:translate(0%,-1px);width:auto;white-space:nowrap;padding:0 4px;text-align:center;background:#fff;border-radius:5px;box-shadow:0 2px 20px rgba(0,0,0,0.06);user-select:none;filter:drop-shadow(0 2px 20px rgba(0,0,0,0.06));z-index:999;padding:10px 15px;visibility:hidden;opacity:0;transition:",";"," @media ","{right:10%;}&:before{position:absolute;top:100%;left:50%;transform:translateX(100%);content:'';border-top:8px solid #fff;border-left:9px solid transparent;border-right:9px solid transparent;}"],(function(e){return e.theme.transition}),(function(e){return e.isOpen&&Object(u.c)(["transform:translate(0%,-12px);visibility:visible;opacity:1;"])}),p.a.small),A=function(e){var t=e.socialStyle,n=e.socialButtonStyle,u=e.title,p=e.url,A=Object(o.useState)(!1),h=A[0],b=A[1],E=a.data.site.siteMetadata.siteUrl;return r.a.createElement(m,{className:"social-share"},r.a.createElement(c.a,{as:"span",className:"share-label"},"Share this post"),r.a.createElement(f,null,r.a.createElement(d.a,Object.assign({},n,{onClick:function(){b((function(e){return!e}))}}),r.a.createElement(i.q,null)),r.a.createElement(g,{isOpen:h},r.a.createElement(l.b,t,r.a.createElement(l.a,{path:"https://twitter.com/intent/tweet?status="+u+"+"+(E+p)},r.a.createElement(s.d,null)),r.a.createElement(l.a,{path:"https://www.facebook.com/share.php?u="+(E+p)+"&title="+u},r.a.createElement(s.a,null)),r.a.createElement(l.a,{path:"https://www.linkedin.com/shareArticle?mini=true&url="+(E+p)+"&title="+u},r.a.createElement(s.c,null))))))};A.defaultProps={socialButtonStyle:{varient:"onlyIcon",width:"48px",shape:"bullet",hover:"false"},socialStyle:{fontSize:"12px",color:"#555",space:"14px"}};t.a=A}}]);
//# sourceMappingURL=component---src-templates-search-template-search-template-js-4cf89e40943fad75acc3.js.map