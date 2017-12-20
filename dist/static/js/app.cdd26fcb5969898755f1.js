webpackJsonp([4],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),i=n("3EgV"),a=n.n(i),o=(n("QCv7"),{data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"bubble_chart",title:"Inspire"}],miniVariant:!1,right:!0,rightDrawer:!1}},computed:{appName:function(){return this.$store.getters.appTitle},isAuthenticated:function(){return null!==this.$store.getters.getUser&&void 0!==this.$store.getters.getUser},toolbarItems:function(){return this.isAuthenticated?[]:[{icon:"face",title:"Sign Up",link:"/signup"},{icon:"lock_open",title:"Sign In",link:"/login"}]}},methods:{userSignOut:function(){this.$store.dispatch("userSignOut")}}}),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{fixed:"","mini-variant":t.miniVariant,clipped:t.clipped,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",t._l(t.items,function(e,r){return n("v-list-tile",{key:r,attrs:{value:"true"}},[n("v-list-tile-action",[n("v-icon",{domProps:{innerHTML:t._s(e.icon)}})],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}))],1),t._v(" "),n("v-toolbar",{attrs:{fixed:"",app:"","clipped-left":t.clipped}},[n("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[n("v-icon",{domProps:{innerHTML:t._s(t.miniVariant?"chevron_right":"chevron_left")}})],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.clipped=!t.clipped}}},[n("v-icon",[t._v("web")])],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.fixed=!t.fixed}}},[n("v-icon",[t._v("remove")])],1),t._v(" "),n("v-toolbar-title",{domProps:{textContent:t._s(t.appName)}}),t._v(" "),n("v-spacer"),t._v(" "),t.isAuthenticated?n("v-btn",{attrs:{flat:""},on:{click:t.userSignOut}},[n("v-icon",{attrs:{left:""}},[t._v("exit_to_app")]),t._v("\n      Sign Out\n    ")],1):t._e(),t._v(" "),t._l(t.toolbarItems,function(e,r){return n("v-btn",{key:e.i,attrs:{flat:"",to:e.link}},[n("v-icon",{attrs:{left:""}},[t._v(t._s(e.icon))]),t._v("\n      "+t._s(e.title)+"\n    ")],1)})],2),t._v(" "),n("v-content",[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1),t._v(" "),n("v-footer",{attrs:{fixed:t.fixed,app:""}},[n("span",[t._v("© 2017")])])],1)},u=[],c={render:s,staticRenderFns:u},l=c,p=n("VU/8"),v=p(o,l,!1,null,null,null),f=v.exports,d=n("/ocq");n("gORT");r.a.use(d.a);var m=[{path:"/signup",component:"SignUp"},{path:"/login",component:"LogIn"},{path:"/",component:"Fuuu"}],_=m.map(function(t){return{path:t.path,component:function(){return n("mUJ2")("./"+t.component+".vue")}}}),g=new d.a({mode:"history",routes:_}),h=n("NYxO"),b={appName:"Fuuu",user:null,error:null,loading:!1},k={setUser:function(t,e){t.user=e},setError:function(t,e){t.error=e},setLoading:function(t,e){t.loading=e}},w=n("Sazm"),U=n.n(w),x={userSignUp:function(t,e){var n=t.commit;n("setLoading",!0),U.a.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){n("setUser",t),n("setLoading",!1),g.push("/login")}).catch(function(t){n("setError",t.message),n("setLoading",!1)})},userSignIn:function(t,e){var n=t.commit;n("setLoading",!0),U.a.auth().signInWithEmailAndPassword(e.email,e.password).then(function(t){n("setUser",t),n("setLoading",!1),n("setError",null),g.push("/")}).catch(function(t){n("setError",t.message),n("setLoading",!1)})},autoSignIn:function(t,e){(0,t.commit)("setUser",e)},userSignOut:function(t){var e=t.commit;U.a.auth().signOut(),e("setUser",null),g.push("/login")}},S={appTitle:function(t){return t.appName},getUser:function(t){return t.user},getError:function(t){return t.error},getLoading:function(t){return t.loading}};r.a.use(h.a);var E=new h.a.Store({state:b,mutations:k,actions:x,getters:S}),j={apiKey:"AIzaSyDO2A2zXecNe5O96MpYl3UDxAt8bxF9vss",authDomain:"vue-fire-demo-33a23.firebaseapp.com",databaseURL:"https://vue-fire-demo-33a23.firebaseio.com",projectId:"vue-fire-demo-33a23"};r.a.use(a.a),U.a.initializeApp(j),r.a.config.productionTip=!1,new r.a({el:"#app",router:g,store:E,template:"<App/>",components:{App:f},created:function(){U.a.auth().onAuthStateChanged(function(t){t&&E.dispatch("autoSignIn",t)})}})},QCv7:function(t,e){},gORT:function(t,e,n){"use strict";function r(t){n("pVZD")}Object.defineProperty(e,"__esModule",{value:!0});var i={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("Community Chat")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),n("br"),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}],s={render:a,staticRenderFns:o},u=s,c=n("VU/8"),l=r,p=c(i,u,!1,l,"data-v-d14401cc",null);e.default=p.exports},mUJ2:function(t,e,n){function r(t){var e=i[t];return e?Promise.all(e.slice(1).map(n.e)).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var i={"./Fuuu.vue":["X4Uw",2],"./HelloWorld.vue":["gORT"],"./LogIn.vue":["Uypd",1],"./SignUp.vue":["ApaE",0]};r.keys=function(){return Object.keys(i)},r.id="mUJ2",t.exports=r},pVZD:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.cdd26fcb5969898755f1.js.map