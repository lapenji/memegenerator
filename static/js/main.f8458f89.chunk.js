(this["webpackJsonpmeme-generator"]=this["webpackJsonpmeme-generator"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/cina.a9a07d89.jpeg"},function(e,t,a){e.exports=a.p+"static/media/iconaClaretto.693b36ce.png"},,,,function(e,t,a){e.exports=a.p+"static/media/iconaCina.2619645c.png"},function(e,t,a){e.exports=a.p+"static/media/iconaCina2.20197d04.png"},function(e,t,a){e.exports=a.p+"static/media/claretto.c19f62bb.jpg"},function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/cina.a9a07d89.jpeg"},function(e,t,a){e.exports=a.p+"static/media/claretto.c19f62bb.jpg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),s=(a(19),a(10)),i=a(2),l=a(3),m=a(1),p=a(5),u=a(4),h=a(11),d=a.n(h),g=a(12),E=a.n(g),v=a(7),x=a.n(v);var f=function(e){var t,a;return"CLARETTO"===e.currentMeme?(t=x.a,a=x.a):"CINA"===e.currentMeme&&(t=d.a,a=E.a),r.a.createElement("header",{class:"titolo"},r.a.createElement("img",{src:t,height:"50px"}),r.a.createElement("h1",null,e.currentMeme," meme generator"),r.a.createElement("img",{src:a,height:"50px"}))},C=(a(20),a(21),function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChoose=n.handleChoose.bind(Object(m.a)(n)),n}return Object(l.a)(a,[{key:"handleChoose",value:function(e){this.props.imgChooseHandle(e.target.value)}},{key:"render",value:function(){var e={};this.props.textUp.length>11&&(e={fontSize:"20px"});var t={};return this.props.textBottom.length>11&&(t={fontSize:"20px"}),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"generatore"},r.a.createElement("h1",null,"GENERA IL TUO ",this.props.currentMeme,"MEME"),r.a.createElement("form",null,r.a.createElement("input",{type:"text",name:"textUp",value:this.props.textUp,placeHolder:"QUESTO SOPRA",onChange:this.props.onChangeHandler}),r.a.createElement("input",{type:"text",name:"textBottom",value:this.props.textBottom,placeHolder:"QUESTO SOTTO",onChange:this.props.onChangeHandler}),r.a.createElement("span",{onClick:this.props.reset},"\ud83d\udd04"))),r.a.createElement("div",{class:"memeconswitcher"},r.a.createElement("div",{className:"meme",style:{backgroundImage:"url(".concat(this.props.currentImg,")")}},r.a.createElement("p",{className:"top",style:e},this.props.textUp),r.a.createElement("p",{className:"bottom",style:t},this.props.textBottom)),r.a.createElement("span",null,"choose your meme"),r.a.createElement("select",{name:"currentImg",onChange:this.handleChoose},r.a.createElement("option",{value:"cina"},"Cina"),r.a.createElement("option",{value:"claretto"},"Claretto"))))}}]),a}(r.a.Component)),b=a(6),O=a.n(b),j=a(13),H=a.n(j);var y=function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"fatto dal lapenji, icone del claretto"))},M=(a(22),function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={textUp:"",textBottom:"",currentImg:O.a,currentMeme:"CINA"},e.onChangeHandler=e.onChangeHandler.bind(Object(m.a)(e)),e.imgChooseHandle=e.imgChooseHandle.bind(Object(m.a)(e)),e.reset=e.reset.bind(Object(m.a)(e)),e}return Object(l.a)(a,[{key:"onChangeHandler",value:function(e){var t=e.target.value,a=e.target.name;this.setState(Object(s.a)({},a,t))}},{key:"imgChooseHandle",value:function(e){var t=e;switch(console.log(t),t){case"claretto":this.setState({currentImg:H.a,currentMeme:"CLARETTO",textUp:"",textBottom:""});break;case"cina":default:this.setState({currentImg:O.a,currentMeme:"CINA",textUp:"",textBottom:""})}}},{key:"reset",value:function(){this.setState({textUp:"",textBottom:""})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(f,{currentMeme:this.state.currentMeme}),r.a.createElement(C,{currentMeme:this.state.currentMeme,currentImg:this.state.currentImg,textUp:this.state.textUp,textBottom:this.state.textBottom,onChangeHandler:this.onChangeHandler,imgChooseHandle:this.imgChooseHandle,reset:this.reset})),r.a.createElement(y,null))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.f8458f89.chunk.js.map