(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{31:function(e,t,a){e.exports=a(62)},36:function(e,t,a){},37:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),l=(a(36),a(4)),i=a(5),s=a(6),m=a(7),u=(a(37),a(18)),d=a.n(u),p=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{"data-collapse":"none","data-animation":"default","data-duration":"400",className:"navbar w-nav"},r.a.createElement("div",{className:"w-container"},r.a.createElement("img",{src:"/images/mini-donut.svg",alt:"alt_image",className:" w-nav-brand  h-logo"}),r.a.createElement("nav",{role:"navigation",className:"w-nav-menu"},r.a.createElement("a",{href:"https://www.yelp.com/",className:"nav-link w-nav-link",style:{maxWidth:"940px"}},"Yelp"),r.a.createElement("a",{href:"https://www.instagram.com/yelp/?hl=en",target:"_blank",rel:"noopener noreferrer",className:"Home__InstagramLink-sc-1sbsg8u-0 kCEMFk"},r.a.createElement("img",{src:"/images/instagram.svg"}))),r.a.createElement("div",{className:"w-nav-button"},r.a.createElement("div",{className:"w-icon-nav-menu"}))),r.a.createElement("div",{className:"w-nav-overlay","data-wf-ignore":""}))}}]),a}(n.Component),h=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"download-container w-container"},r.a.createElement("div",{className:"download-wrapper"},r.a.createElement("h3",{className:"h3"},"Tell me what's in your mind?"),r.a.createElement("form",{className:"app-store-wrapper"},r.a.createElement("input",{type:"hidden",name:"u",value:"996c443c67aecf27290a79302"}),r.a.createElement("input",{type:"hidden",name:"id",value:"413478499d"}),r.a.createElement("input",{type:"text",required:"",className:"prelist-word",id:"word",name:"word",placeholder:"Your words..."}),r.a.createElement("button",{type:"submit",className:"prelist-submit"},"Share"))))}}]),a}(n.Component),f=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"Footer",className:"footer"},r.a.createElement("div",{className:"footer-container w-container"},r.a.createElement("div",{className:"footer-wrapper-top"},r.a.createElement("a",{href:"/",className:"w-inline-block w--current"},r.a.createElement("img",{src:"/images/cupcake.svg",width:"160",height:"44",alt:"",className:"cake-logo"})),r.a.createElement("a",{href:"mailto:hic.ch.ntu@gmail.com",className:"link"},"Contact"),r.a.createElement("a",{href:"https://www.instagram.com/yelp/?hl=en",target:"_blank",rel:"noopener noreferrer",className:"Footer__InstagramLink-sc-1mb098p-0 bBdLAF"},r.a.createElement("img",{src:"/images/instagram.svg"})),r.a.createElement("div",{className:"text-block"},"\xa9 2020 Vickey Lee"))))}}]),a}(n.Component),v=a(13),g=(a(54),a(2)),b=a(30),E=[{value:"Abbotsford",label:"Abbotsford"},{value:"Carlton",label:"Carlton"},{value:"Collingwood",label:"Collingwood"},{value:"Fitzroy",label:"Fitzroy"},{value:"Melbourne CBD",label:"Melbourne CBD"},{value:"Northcote",label:"Northcote"},{value:"Preston",label:"Preston"},{value:"South Melbourne",label:"South Melbourne"},{value:"South Yarra",label:"South Yarra"},{value:"etc",label:"etc"}],w={option:function(e,t){return Object(v.a)({},e,{borderBottom:"1px solid hsla(213.33333333333331, 4.52%, 39.02%, 0.20)",width:300,fontFamily:"Inter beta, sans-serif",fontSize:12,fontWeight:1e3,textAlign:"left",display:"flex",backgroundColor:t.isSelected?"#f8f9fa":"white"})},control:function(){return{display:"flex",alignItems:"center",width:"auto"}},placeholder:function(e,t){return Object(v.a)({},e,{position:"relative",zIndex:1,marginTop:25,marginBottom:0,color:"#FA8072",fontFamily:"Inter, sans-serif",fontWeight:700,textDecoration:"underline",fontSize:42,letterSpacing:-1,width:"auto"})},indicatorContainer:function(e){return{padding:0}},menuList:function(){return{marginBottom:0,fontFamily:"Inter beta, sans-serif",fontSize:24,fontWeight:300,textAlign:"left",marginTop:0,color:"#5f6368",letterSpacing:0}},menu:function(e){return Object(v.a)({},e,{width:300})},singleValue:function(e,t){return Object(v.a)({},e,{position:"relative",zIndex:1,marginTop:25,marginBottom:0,color:"hsla(48.23529411764706, 100.00%, 50.00%, 1.00)",fontFamily:"Inter, sans-serif",fontWeight:700,textDecoration:"underline",fontSize:42,letterSpacing:-1,maxWidth:400})}},y=function(e){return g.z.DropdownIndicator&&r.a.createElement(g.z.DropdownIndicator,e,r.a.createElement("img",{src:"/images/search.svg",width:"540",alt:"",className:"image"}))},N=function(e){return g.z.Option&&r.a.createElement(g.z.Option,e,r.a.createElement("img",{src:"/images/icon_map_marker@3x.png",className:"image-option",sizes:"15px"}),r.a.createElement("div",{className:"text-option-container"},r.a.createElement("span",{className:"text-option1"},e.data.label,r.a.createElement("br",null),r.a.createElement("span",{className:"text-option2"},"Location"))))},O=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={selected:E[3].value},e.onChange=function(t){e.props.getInfo(t),e.setState({selected:t})},e}return Object(i.a)(a,[{key:"render",value:function(){var e="string"===typeof this.state.selected?this.state.selected:this.state.selected.label,t=this.state.selectedOption;return r.a.createElement("div",{className:"search-div"},r.a.createElement(b.a,{value:t,menuShouldScrollIntoView:!1,styles:w,options:E,placeholder:e,components:{Option:N,DropdownIndicator:y,IndicatorSeparator:function(){return null},Input:function(){return null}},onChange:this.onChange}))}}]),a}(n.Component),j=a(29),k=a.n(j),x=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.url,n=e.rating,o=e.review_count,c=e.categories;return r.a.createElement("div",{className:"expert-card"},r.a.createElement("div",{className:"expert-wrapper"},r.a.createElement("div",{className:"profile-pic",style:{backgroundImage:'url("/images/child.svg")'}}),r.a.createElement("div",{className:"expert-info-card"},r.a.createElement("div",{className:"expert-info name"},r.a.createElement("strong",{className:"bold-text"},t)),r.a.createElement("div",{className:"expert-info"},r.a.createElement("div",null,"Food expert of"),r.a.createElement("span",{className:"venue text-span-2"}," ",c[0].title," ")))),r.a.createElement("div",{className:"recommendation-wrapper"},r.a.createElement("div",{className:"comment"},r.a.createElement(k.a,{text:"This fantastic restaurant is a "+c[0].title+" restaurant! It received "+o+" reviews and got a rating of "+n+". Come and try it!",maxLine:"3",ellipsis:"...",trimRight:!0})),r.a.createElement("div",{className:"food-image",style:{backgroundImage:'url("'.concat(a,'")')}})))}}]),a}(n.Component),S=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.chef,a=e.getInfo;return r.a.createElement("div",{className:"search-container w-container"},r.a.createElement("h2",{className:"h2 search"},"Search for Restaurants in ",r.a.createElement("br",null)),r.a.createElement(O,{getInfo:a}),r.a.createElement("div",{className:"all-container"},t.slice(0,6).map((function(e){var t=e.id,a=e.alias,n=e.name,o=e.image_url,c=e.rating,l=e.review_count,i=e.categories;return r.a.createElement(x,{key:t,name:n,profileUrl:o,url:o,venue:a,rating:c,review_count:l,categories:i})}))))}}]),a}(n.Component),C=["Abbotsford","Carlton","Collingwood","Fitzroy","Melbourne CBD","Northcote","Preston","Richmond","South Melbourne","South Yarra","etc"],I=Object({NODE_ENV:"production",PUBLIC_URL:"/SearchRestaurants",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_AUTH_TOKEN,_=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={chef:null},e.getInfo=function(t){console.log(t),d.a.get("https://cors-anywhere.herokuapp.com/".concat("https://api.yelp.com/v3/businesses/search?location=",t.value),{headers:{Authorization:"Bearer ".concat(I)}}).then((function(t){var a=t.data;e.setState({chef:a.businesses})})).catch((function(e){console.log("error")}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://cors-anywhere.herokuapp.com/".concat("https://api.yelp.com/v3/businesses/search?location=",C[3]),{headers:{Authorization:"Bearer ".concat(I)}}).then((function(t){var a=t.data;console.log(a),e.setState({chef:a.businesses})})).catch((function(e){console.log("error")}))}},{key:"render",value:function(){return null===this.state.chef?r.a.createElement("div",{className:"App-header App"},"Loading..."):r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(S,{chef:this.state.chef,getInfo:this.getInfo}),r.a.createElement("div",{id:"Download",className:"download"},r.a.createElement(h,null)),r.a.createElement(f,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(59).config(),c.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.a9d0c4cd.chunk.js.map