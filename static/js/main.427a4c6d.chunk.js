(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{242:function(t,n){},265:function(t,n){},267:function(t,n){},344:function(t,n){},346:function(t,n){},379:function(t,n){},384:function(t,n){},386:function(t,n){},393:function(t,n){},406:function(t,n){},429:function(t,n){},438:function(t,n){},440:function(t,n){},517:function(t,n,e){},518:function(t,n,e){"use strict";e.r(n);var c,a,r,o,i,s,l,u,p,d,x,b,j,h,O,g,f=e(1),C=e(84),y=e.n(C),S=e(16),m=e.n(S),v=e(42),w=e(68),T=e(14),A=e(57),E=e(67),_=e.n(E),N=e(216),k=e.n(N),D=e(69),M=e(217),I=e(18),R={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},L=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CONNECTION_REQUEST":return Object(I.a)(Object(I.a)({},R),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(I.a)(Object(I.a)({},t),{},{loading:!1,account:n.payload.account,smartContract:n.payload.smartContract,web3:n.payload.web3});case"CONNECTION_FAILED":return Object(I.a)(Object(I.a)({},R),{},{loading:!1,errorMsg:n.payload});case"UPDATE_ACCOUNT":return Object(I.a)(Object(I.a)({},t),{},{account:n.payload.account});default:return t}},K={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},W=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CHECK_DATA_REQUEST":return Object(I.a)(Object(I.a)({},t),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(I.a)(Object(I.a)({},t),{},{loading:!1,totalSupply:n.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(I.a)(Object(I.a)({},K),{},{loading:!1,error:!0,errorMsg:n.payload});default:return t}},U=Object(D.b)({blockchain:L,data:W}),P=[M.a],F=Object(D.c)(D.a.apply(void 0,P)),Y=Object(D.d)(U,F),z=function(t){return{type:"CHECK_DATA_FAILED",payload:t}},B=function(){return function(){var t=Object(v.a)(m.a.mark((function t(n){var e;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"CHECK_DATA_REQUEST"}),t.prev=1,t.next=4,Y.getState().blockchain.smartContract.methods.totalSupply().call();case 4:e=t.sent,n({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:e}}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),n(z("Could not load data from contract."));case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(n){return t.apply(this,arguments)}}()},H=function(t){return{type:"CONNECTION_FAILED",payload:t}},G=function(t){return function(){var n=Object(v.a)(m.a.mark((function n(e){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e({type:"UPDATE_ACCOUNT",payload:{account:t}}),e(B());case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},Q=e(15),X=Q.a.div(c||(c=Object(T.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(t){var n=t.image;return n?"url(".concat(n,")"):"none"})),q=Q.a.div(a||(a=Object(T.a)(["\n  height: 8px;\n  width: 8px;\n"]))),J=Q.a.div(r||(r=Object(T.a)(["\n  height: 16px;\n  width: 16px;\n"]))),V=Q.a.div(o||(o=Object(T.a)(["\n  height: 24px;\n  width: 24px;\n"]))),Z=Q.a.div(i||(i=Object(T.a)(["\n  height: 32px;\n  width: 32px;\n"]))),$=Q.a.div(s||(s=Object(T.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(t){var n=t.flex;return n||0}),(function(t){var n=t.fd;return n||"column"}),(function(t){var n=t.jc;return n||"flex-start"}),(function(t){var n=t.ai;return n||"flex-start"}),(function(t){return t.test?"pink":"none"}),(function(t){var n=t.image;return n?"url(".concat(n,")"):"none"})),tt=Q.a.p(l||(l=Object(T.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),nt=(Q.a.p(u||(u=Object(T.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),Q.a.p(p||(p=Object(T.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),et=(Q.a.div(d||(d=Object(T.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),e(4)),ct=Q.a.button(x||(x=Object(T.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),at=Q.a.button(b||(b=Object(T.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),rt=Q.a.div(j||(j=Object(T.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),ot=Q.a.img(h||(h=Object(T.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),it=Q.a.img(O||(O=Object(T.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),st=Q.a.a(g||(g=Object(T.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var lt=function(){var t,n,e=Object(A.b)(),c=Object(A.c)((function(t){return t.blockchain})),a=Object(A.c)((function(t){return t.data})),r=Object(f.useState)(!1),o=Object(w.a)(r,2),i=o[0],s=o[1],l=Object(f.useState)("Click buy to mint your NFT."),u=Object(w.a)(l,2),p=u[0],d=u[1],x=Object(f.useState)(1),b=Object(w.a)(x,2),j=b[0],h=b[1],O=Object(f.useState)({CONTRACT_ADDRESS:"",OWNER_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,COST0:0,COST1:0,COST2:0,COST3:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),g=Object(w.a)(O,2),C=g[0],y=g[1],S=function(){""!==c.account&&null!==c.smartContract&&e(B(c.account))},T=function(){var t=Object(v.a)(m.a.mark((function t(){var n,e;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return n=t.sent,t.next=5,n.json();case 5:e=t.sent,y(e);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(f.useEffect)((function(){T()}),[]),Object(f.useEffect)((function(){S()}),[c.account]),Object(et.jsx)(X,{children:Object(et.jsxs)($,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:C.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(et.jsx)(ot,{alt:"logo",src:"/config/images/logo.png"}),Object(et.jsx)(J,{}),Object(et.jsxs)(rt,{flex:1,style:{padding:24},test:!0,children:[Object(et.jsx)($,{flex:1,jc:"center",ai:"center",children:Object(et.jsx)(it,{alt:"example",src:"/config/images/example.gif"})}),Object(et.jsx)(Z,{}),Object(et.jsxs)($,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"4px dashed var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(et.jsxs)(tt,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[a.totalSupply," / ",C.MAX_SUPPLY]}),Object(et.jsx)(nt,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(et.jsx)(st,{target:"_blank",href:C.SCAN_LINK,children:(t=C.CONTRACT_ADDRESS,n=15,t.length>n?"".concat(t.substring(0,n),"..."):t)})}),Object(et.jsx)(J,{}),Number(a.totalSupply)>=C.MAX_SUPPLY?Object(et.jsxs)(et.Fragment,{children:[Object(et.jsx)(tt,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(et.jsxs)(nt,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",C.NFT_NAME," on"]}),Object(et.jsx)(J,{}),Object(et.jsx)(st,{target:"_blank",href:C.MARKETPLACE_LINK,children:C.MARKETPLACE})]}):Object(et.jsxs)(et.Fragment,{children:[Object(et.jsxs)(tt,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",C.SYMBOL," costs ",C.DISPLAY_COST," ",C.NETWORK.SYMBOL,"."]}),Object(et.jsx)(q,{}),Object(et.jsx)(nt,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),Object(et.jsx)(J,{}),""===c.account||null===c.smartContract?Object(et.jsxs)($,{ai:"center",jc:"center",children:[Object(et.jsxs)(nt,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",C.NETWORK.NAME," network"]}),Object(et.jsx)(J,{}),Object(et.jsx)(ct,{onClick:function(t){t.preventDefault(),e(function(){var t=Object(v.a)(m.a.mark((function t(n){var e,c,a,r,o,i,s,l,u;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"CONNECTION_REQUEST"}),t.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return e=t.sent,t.next=6,e.json();case 6:return c=t.sent,t.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return a=t.sent,t.next=12,a.json();case 12:if(r=t.sent,o=window,!(i=o.ethereum)||!i.isMetaMask){t.next=33;break}return _.a.setProvider(i),s=new k.a(i),t.prev=18,t.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=t.sent,t.next=24,i.request({method:"net_version"});case 24:t.sent==r.NETWORK.ID?(u=new _.a(c,r.CONTRACT_ADDRESS),n({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:u,web3:s}}),i.on("accountsChanged",(function(t){n(G(t[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):n(H("Change network to ".concat(r.NETWORK.NAME,"."))),t.next=31;break;case 28:t.prev=28,t.t0=t.catch(18),n(H("Something went wrong."));case 31:t.next=34;break;case 33:n(H("Install Metamask."));case 34:case"end":return t.stop()}}),t,null,[[18,28]])})));return function(n){return t.apply(this,arguments)}}()),S()},children:"CONNECT"}),""!==c.errorMsg?Object(et.jsxs)(et.Fragment,{children:[Object(et.jsx)(J,{}),Object(et.jsx)(nt,{style:{textAlign:"center",color:"var(--accent-text)"},children:c.errorMsg})]}):null]}):Object(et.jsxs)(et.Fragment,{children:[Object(et.jsx)(nt,{style:{textAlign:"center",color:"var(--accent-text)"},children:p}),Object(et.jsx)(V,{}),Object(et.jsxs)($,{ai:"center",jc:"center",fd:"row",children:[Object(et.jsx)(at,{style:{lineHeight:.4},disabled:i?1:0,onClick:function(t){t.preventDefault(),function(){var t=j-1;t<10&&(t=10),h(t)}()},children:"-"}),Object(et.jsx)(V,{}),Object(et.jsx)(nt,{style:{textAlign:"center",color:"var(--accent-text)"},children:j}),Object(et.jsx)(V,{}),Object(et.jsx)(at,{disabled:i?1:0,onClick:function(t){t.preventDefault(),function(){var t=j+1;t>10&&(t=10),h(t)}()},children:"+"})]}),Object(et.jsx)(J,{}),Object(et.jsx)($,{ai:"center",jc:"center",fd:"row",children:Object(et.jsx)(ct,{disabled:i?1:0,onClick:function(t){t.preventDefault(),function(){var t=c.account;t=t.toUpperCase();var n=C.OWNER_ADDRESS;t==(n=n.toUpperCase())?C.WEI_COST=0:a.totalSupply>1&&a.totalSupply<35?C.WEI_COST=C.COST0:a.totalSupply>35&&a.totalSupply<40?C.WEI_COST=C.COST1:a.totalSupply>40&&a.totalSupply<45?C.WEI_COST=C.COST2:(a.totalSupply>45&&a.totalSupply<50||a.totalSupply>45&&a.totalSupply<50)&&(C.WEI_COST=C.COST3);var r=C.WEI_COST,o=(C.COST0,C.COST1,C.COST2,C.COST3,C.COST4,C.GAS_LIMIT),i=String(r*j),l=String(o*j);console.log("Cost: ",i),console.log("Gas limit: ",l),d("Minting your ".concat(C.NFT_NAME,"...")),s(!0),c.smartContract.methods.mint(j).send({gasLimit:String(l),to:C.CONTRACT_ADDRESS,from:c.account,value:i}).once("error",(function(t){console.log(t),d("Sorry, something went wrong please try again later."),s(!1)})).then((function(t){console.log(t),d("WOW, the ".concat(C.NFT_NAME," is yours! go visit Opensea.io to view it.")),s(!1),e(B(c.account))}))}(),S()},children:i?"BUSY":"BUY"})})]})]}),Object(et.jsx)(V,{})]}),Object(et.jsx)(Z,{}),Object(et.jsx)($,{flex:1,jc:"center",ai:"center",children:Object(et.jsx)(it,{alt:"example",src:"/config/images/example.gif",style:{transform:"scaleX(-1)"}})})]}),Object(et.jsx)(V,{}),Object(et.jsxs)($,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(et.jsxs)(nt,{style:{textAlign:"center",color:"var(--primary-text)"},children:["Please make sure you are connected to the right network (",C.NETWORK.NAME," Mainnet) and the correct address. Please note: Once you make the purchase, you cannot undo this action."]}),Object(et.jsx)(J,{}),Object(et.jsxs)(nt,{style:{textAlign:"center",color:"var(--primary-text)"},children:["We have set the gas limit to ",C.GAS_LIMIT," for the contract to successfully mint your NFT. We recommend that you don't lower the gas limit."]})]})]})})},ut=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,522)).then((function(n){var e=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,o=n.getTTFB;e(t),c(t),a(t),r(t),o(t)}))};e(517);y.a.render(Object(et.jsx)(A.a,{store:Y,children:Object(et.jsx)(lt,{})}),document.getElementById("root")),ut()}},[[518,1,2]]]);
//# sourceMappingURL=main.427a4c6d.chunk.js.map