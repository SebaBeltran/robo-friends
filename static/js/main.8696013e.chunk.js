(this["webpackJsonpPWA-robofriends"]=this["webpackJsonpPWA-robofriends"]||[]).push([[0],{18:function(e,t,n){e.exports=n(31)},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(3),c=n.n(a),i=n(4),s=n(1),l=n(10),u=n(11),d=(n(29),function(e){return o.a.createElement("h1",{className:"f1"},"RoboFriends")}),h=n(15),f=function(e){var t=e.name,n=e.username,r=e.email;return o.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow tc bw1 shadow-5"},o.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(n,"?200x200")}),o.a.createElement("h2",null,t),o.a.createElement("p",null,r))},b=function(e){var t=e.robots;console.log(t);var n=t.map((function(e){var t=e.id,n=e.name,r=e.username,a=e.email;return o.a.createElement(f,{key:t,name:n,username:r,email:a})}));return o.a.createElement(o.a.Fragment,null,n)},m=n(12),p=n(13),E=n(16),g=n(14),v=n(17),w=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(E.a)(this,Object(g.a)(t).call(this,e))).state={hasError:!1},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){var e=this.state.hasError,t=this.props.children;return e?o.a.createElement("h1",null,"Ooops! Something went wrong"):t}}]),t}(r.Component),O=function(e){var t=e.children;return o.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"}},t)},S=function(e){var t=e.handleInput;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",placeholder:"search robots",type:"search",onChange:t}))},R=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchField:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))((function(e){var t=Object(r.useState)([]),n=Object(h.a)(t,2),a=n[0],c=n[1],i=e.onRequestRobots,s=e.robots,l=e.isPending,u=e.error;return Object(r.useEffect)((function(){i()}),[i]),Object(r.useEffect)((function(){var t=s.filter((function(t){return t.name.toLocaleLowerCase().includes(e.searchField.toLocaleLowerCase())}));c(t)}),[s,e.searchField]),u?o.a.createElement("h1",null,"Oops!"):o.a.createElement(o.a.Fragment,null,o.a.createElement(S,{handleInput:function(t){e.onSearchField(t.target.value)}}),l?o.a.createElement("h1",{className:"f2"},"Loading..."):o.a.createElement(O,null,o.a.createElement(w,null,o.a.createElement(b,{robots:a}))))}));var y=function(){return o.a.createElement("div",{className:"tc"},o.a.createElement(d,null),o.a.createElement(R,null))},j=(n(30),n(2)),C={isPending:!1,robots:[],error:""},_={searchField:""},k=Object(s.combineReducers)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.type,r=t.payload;switch(n){case"CHANGE_SEARCH_FIELD":return Object(j.a)({},e,{searchField:r});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.type,r=t.payload;switch(n){case"REQUEST_ROBOTS_PENDING":return Object(j.a)({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(j.a)({},e,{isPending:!1,robots:r});case"REQUEST_ROBOTS_FAILED":return Object(j.a)({},e,{isPending:!1,error:r});default:return e}}}),F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var N=Object(s.createStore)(k,Object(l.composeWithDevTools)(Object(s.applyMiddleware)(u.a)));c.a.render(o.a.createElement(i.a,{store:N},o.a.createElement(y,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robo-friends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robo-friends","/service-worker.js");F?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):T(t,e)}))}}()}},[[18,1,2]]]);
//# sourceMappingURL=main.8696013e.chunk.js.map