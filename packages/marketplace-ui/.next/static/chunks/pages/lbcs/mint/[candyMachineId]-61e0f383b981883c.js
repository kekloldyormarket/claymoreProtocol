(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[843],{34109:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lbcs/mint/[candyMachineId]",function(){return n(56121)}])},56121:function(e,t,n){"use strict";n.r(t),n.d(t,{DarkModeDisplay:function(){return B},default:function(){return C}});var i=n(92021),s=n.n(i),o=n(52322),a=n(60564),r=n(62620),c=n(3229),l=n(69704),d=n(96687),u=n(9744),g=n(27733),p=n(28392),v=n(62981),b=n(27158),h=n(6323),x=n(1447),f=(n(73239),n(99684),n(31186)),m=n(2784),y=n(27193),w=n(11756),j=n(50138),k=n(82198),S=n(5632);function T(e,t,n,i,s,o,a){try{var r=e[o](a),c=r.value}catch(l){return void n(l)}r.done?t(c):Promise.resolve(c).then(i,s)}function K(e){return function(){var t=this,n=arguments;return new Promise((function(i,s){var o=e.apply(t,n);function a(e){T(o,i,s,a,r,"next",e)}function r(e){T(o,i,s,a,r,"throw",e)}a(void 0)}))}}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){M(e,t,n[t])}))}return e}var P=function(e){var t,n,i,S,T=(0,v.useConnection)().connection,M=(0,v.useWallet)().publicKey,O=(0,m.useState)(),P=O[0],B=O[1],C=(0,m.useState)(!1),I=C[0],N=C[1],_=(0,m.useState)(),A=(_[0],_[1]),L=(0,m.useState)(),W=(L[0],L[1]),E=(0,m.useState)(!1),U=E[0],R=E[1],F=(0,m.useState)(!1),Z=F[0],z=F[1],H=(0,m.useState)(),Q=(H[0],H[1]),X=null===P||void 0===P?void 0:P.state.tokenMint,$=(0,f.useTokenBondingFromMint)(X),q=$.info,G=$.loading,Y=($.error,(0,x.LN)(null===q||void 0===q?void 0:q.publicKey).price),J=(0,u.Y)(M||void 0,null===q||void 0===q?void 0:q.publicKey).isAdmin,V=h.Am,ee=(0,v.useWallet)(),te=(0,m.useMemo)((function(){if(ee&&ee.publicKey&&ee.signAllTransactions&&ee.signTransaction)return{publicKey:ee.publicKey,signAllTransactions:ee.signAllTransactions,signTransaction:ee.signTransaction}}),[ee]),ne=(0,m.useCallback)(K(s().mark((function t(){var n,i,o,a,r,c,l,d,u,g,v;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(te){t.next=2;break}return t.abrupt("return");case 2:if(!e.candyMachineId){t.next=44;break}return t.prev=3,t.next=7,(0,w.Qk)(te,e.candyMachineId,T);case 7:if(a=t.sent,r=(null===(n=null===a||void 0===a?void 0:a.state.goLiveDate)||void 0===n?void 0:n.toNumber())<(new Date).getTime()/1e3,c=!1,!(null===a||void 0===a?void 0:a.state.whitelistMintSettings)){t.next=32;break}return a.state.whitelistMintSettings.presale&&(!a.state.goLiveDate||a.state.goLiveDate.toNumber()>(new Date).getTime()/1e3)&&(c=!0),a.state.whitelistMintSettings.discountPrice?Q(a.state.whitelistMintSettings.discountPrice):(Q(void 0),a.state.whitelistMintSettings.presale||(a.state.isWhitelistOnly=!0)),l=new p.web3.PublicKey(a.state.whitelistMintSettings.mint),t.next=16,(0,k.w2)(l,te.publicKey);case 16:return d=t.sent[0],t.prev=17,t.next=20,T.getTokenAccountBalance(d);case 20:u=t.sent,g=parseInt(u.value.amount)>0,R(g),r=c&&g||r,t.next=32;break;case 26:t.prev=26,t.t0=t.catch(17),R(!1),a.state.isWhitelistOnly&&(r=!1),console.log("There was a problem fetching whitelist token balance"),console.log(t.t0);case 32:(null===(i=null===a||void 0===a?void 0:a.state.endSettings)||void 0===i?void 0:i.endSettingType.date)&&(A((0,k.ZU)(a.state.endSettings.number)),a.state.endSettings.number.toNumber()<(new Date).getTime()/1e3&&(r=!1)),(null===(o=null===a||void 0===a?void 0:a.state.endSettings)||void 0===o?void 0:o.endSettingType.amount)?(v=Math.min(a.state.endSettings.number.toNumber(),a.state.itemsAvailable),a.state.itemsRedeemed<v?W(v-a.state.itemsRedeemed):(W(0),a.state.isSoldOut=!0)):W(a.state.itemsRemaining),a.state.isSoldOut&&(r=!1),N(a.state.isActive=r),z(a.state.isPresale=c),B(a),t.next=44;break;case 40:t.prev=40,t.t1=t.catch(3),console.log("There was a problem fetching Candy Machine state"),console.log(t.t1);case 44:case"end":return t.stop()}}),t,null,[[3,40],[17,26]])}))),[te,e.candyMachineId,T]);var ie=K(s().mark((function e(t){var n,i,a,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,null===(n=document.getElementById("#identity"))||void 0===n||n.click(),!(ee.connected&&(null===P||void 0===P?void 0:P.program)&&ee.publicKey)){e.next=8;break}return e.next=6,(0,w.CI)(P,ee.publicKey,t);case 6:i=e.sent,y.default.custom((function(e){return(0,o.jsx)(j.m,{mint:i,onDismiss:function(){return y.default.dismiss(e.id)}})}),{duration:1/0});case 8:e.next=18;break;case 10:e.prev=10,e.t0=e.catch(0),a=e.t0.msg||e.t0.toString()||"Minting failed! Please try again!",r="Transaction Failed",e.t0.msg?311===e.t0.code?(a="SOLD OUT!",window.location.reload()):312===e.t0.code?a="Minting period hasn't started yet.":6005===e.t0.code||6006===e.t0.code?(r="Transaction Cancelled",a="The price moved unfavorably by more than the configured slippage. Change slippage by clicking Advanced Settings"):a=e.t0.toString():e.t0.message?-1!=e.t0.message.indexOf("0x137")?a="SOLD OUT!":-1!=e.t0.message.indexOf("0x135")&&(a="Insufficient funds to mint. Please fund your wallet."):a="Transaction Timeout! Please try again.",console.error(e.t0),y.default.custom((function(e){return(0,o.jsx)(f.Notification,{show:e.visible,type:"error",heading:r,message:a,onDismiss:function(){return y.default.dismiss(e.id)}})}),{duration:12e4}),ne();case 18:case"end":return e.stop()}}),e,null,[[0,10]])})));(0,m.useEffect)((function(){ne()}),[te,e.candyMachineId,T,ne]);var se={borderBottom:"3px solid #F07733"};return(0,o.jsx)(a.xu,{color:(0,r.ff)("black","white"),w:"full",backgroundColor:"black.500",height:"100vh",overflow:"auto",paddingBottom:"200px",children:(0,o.jsx)(a.W2,{mt:"35px",justifyItems:"stretch",maxW:"460px",children:(0,o.jsxs)(c.mQ,{varaint:"unstyled",children:[(0,o.jsxs)(c.td,{borderBottom:"none",children:[(0,o.jsx)(c.OK,{_selected:se,fontWeight:600,children:"Mint"}),(0,o.jsx)(c.OK,{_selected:se,fontWeight:600,children:"Transactions"})]}),(0,o.jsxs)(c.nP,{children:[(0,o.jsxs)(c.x4,{p:0,pt:4,children:[(0,o.jsx)(h.Zg,{tokenBondingKey:null===q||void 0===q?void 0:q.publicKey}),(0,o.jsxs)(a.xu,{zIndex:1,shadow:"xl",rounded:"lg",p:"16px",pb:"29px",minH:"300px",bg:"black.300",children:[J&&q&&(0,o.jsxs)(a.xu,{p:4,borderBottom:"3px solid",borderRadius:"lg",borderColor:"gray.300",children:[(0,o.jsx)(a.X6,{size:"md",children:"Disburse Funds"}),(0,o.jsx)(d.Z,{tokenBondingKey:null===q||void 0===q?void 0:q.publicKey,includeRetrievalCurve:!0})]}),ee.connected&&(0,o.jsxs)(o.Fragment,{children:[G&&(0,o.jsx)(a.M5,{children:(0,o.jsx)(l.$,{})}),!G&&q&&(0,o.jsxs)(a.gC,{align:"stretch",spacing:8,children:[(0,o.jsx)(h.yH,{price:Y,tokenBondingKey:q.publicKey}),(null===P||void 0===P?void 0:P.state.isActive)&&(null===P||void 0===P?void 0:P.state.gatekeeper)&&ee.publicKey&&ee.signTransaction?(0,o.jsx)(g.GatewayProvider,{wallet:{publicKey:ee.publicKey||new b.PublicKey(w.dk),signTransaction:ee.signTransaction},gatekeeperNetwork:null===P||void 0===P||null===(t=P.state)||void 0===t||null===(n=t.gatekeeper)||void 0===n?void 0:n.gatekeeperNetwork,clusterUrl:V,options:{autoShowModal:!1},children:(0,o.jsx)(h.g4,{price:Y,onMint:ie,tokenBondingKey:q.publicKey,isDisabled:!I&&(!Z||!U),disabledText:"Mint launches ".concat(null===(i=D(P))||void 0===i?void 0:i.toLocaleTimeString())})}):(0,o.jsx)(h.g4,{price:Y,onMint:ie,tokenBondingKey:q.publicKey,isDisabled:!I&&(!Z||!U),disabledText:P&&"Mint launches ".concat(null===(S=D(P))||void 0===S?void 0:S.toLocaleTimeString())}),(0,o.jsx)(h.cd,{})]})]}),!ee.connected&&(0,o.jsx)(a.M5,{children:(0,o.jsx)(h.eU,{children:"Connect Wallet"})})]})]}),(0,o.jsx)(c.x4,{p:0,pt:4,children:(0,o.jsxs)(a.xu,{zIndex:1,shadow:"xl",rounded:"lg",p:"16px",pb:"29px",minH:"300px",bg:"black.300",children:[G&&(0,o.jsx)(a.M5,{children:(0,o.jsx)(l.$,{})}),!G&&q&&(0,o.jsxs)(a.gC,{align:"stretch",spacing:8,children:[(0,o.jsx)(h.zj,{tokenBondingKey:q.publicKey}),(0,o.jsx)(h.cQ,{tokenBondingKey:q.publicKey})]})]})})]})]})})})},D=function(e){var t;return e.state.isActive&&(null===(t=e.state.endSettings)||void 0===t?void 0:t.endSettingType.date)?(0,k.ZU)(e.state.endSettings.number):(0,k.ZU)(e.state.goLiveDate?e.state.goLiveDate:e.state.isPresale?new p.BN((new Date).getTime()/1e3):void 0)},B=function(e){var t=(0,S.useRouter)().query.candyMachineId,n=(0,f.usePublicKey)(t);return(0,o.jsx)(r.t7,{children:(0,o.jsx)(P,O({candyMachineId:n},e))})},C=B}},function(e){e.O(0,[80,196,613,579,774,888,179],(function(){return t=34109,e(e.s=t);var t}));var t=e.O();_N_E=t}]);