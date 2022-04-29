(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[749],{88157:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/launchpad/lbcs/new",function(){return t(91243)}])},91243:function(e,n,t){"use strict";t.r(n),t.d(n,{NewLBC:function(){return Y},default:function(){return Q}});var i=t(52322),r=t(59141),a=t(92021),s=t.n(a),o=t(60564),c=t(725),u=t(54082),l=t(20893),h=t(88513),d=t(95496),m=t(9535),p=t(28392),y=t(72919),g=t(62981),f=t(27158),b=t(84761),x=t(31186),v=t(62197),w=t.n(v),M=t(74022),j=t(5632),P=t(2784),k=t(11929),C=t(32439),I=t(65413),S=t(99684),T=t(30884),O=t(69227),E=t(75109),_=t(94948),N=t(87892),A=t(9031),B=t(96822),D=t(37763),K=t(39324),L=t(28278),R=t(41031);function q(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){q(e,n,t[n])}))}return e}var H=function(){var e=(0,C.Gc)(),n=e.watch,t=e.formState.errors,r=e.register,a=e.setValue,s=(0,P.useState)(!1),u=s[0],h=s[1],d=(0,L.ar)({name:"interval",onChange:function(e){return a("interval",+e)}}),m=d.getRootProps,p=d.getRadioProps,y=n("interval"),g=m();return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(E.H,{id:"interval",label:"Interval",errors:t,help:u?"How long should this LBC go on for (in seconds)? This period is the time during which the price will fall. We recommend you set this period long enough so that everyone gets a chance to participate. Windows less than 15 Minutes (900 seconds) are not recommended.":"How long should this LBC go on for? This period is the time during which the price will fall. We recommend you set this period long enough so that everyone gets a chance to participate.",children:[(0,i.jsx)(o.Kq,z({},g,{direction:"row",flexWrap:"wrap",spacing:0,children:[{value:900,heading:"15 Minutes"},{value:1800,heading:"30 Minutes"},{value:10800,heading:"3 Hours"},{value:43200,heading:"12 Hours"},{value:86400,heading:"1 Day"},{value:259200,heading:"3 Days"}].map((function(e){var n=e.value,t=e.heading,r=p({value:n});return(0,P.createElement)(R.R,z({},r,{isChecked:y===n,key:n,children:(0,i.jsx)(o.kC,{w:24,h:10,justifyContent:"center",alignItems:"center",children:(0,i.jsx)(o.xv,{fontWeight:"bold",fontSize:"sm",children:t})})}))}))})),(0,i.jsxs)(o.xu,{mt:3,children:[!u&&(0,i.jsx)(c.zx,{colorScheme:"orange",variant:"link",size:"sm",onClick:function(){return h(!0)},children:"Custom Interval"}),u&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.II,z({type:"number",min:0,step:1e-12},r("interval"))),(0,i.jsx)(o.xv,{color:"red.500",fontSize:"sm",mt:2,children:"Any value less than 15 Minutes (900 seconds) will result in the initial price dropping fast."})]})]})]})})};function V(e,n,t,i,r,a,s){try{var o=e[a](s),c=o.value}catch(u){return void t(u)}o.done?n(c):Promise.resolve(c).then(i,r)}function W(e){return function(){var n=this,t=arguments;return new Promise((function(i,r){var a=e.apply(n,t);function s(e){V(a,i,r,s,o,"next",e)}function o(e){V(a,i,r,s,o,"throw",e)}s(void 0)}))}}function F(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){F(e,n,t[n])}))}return e}var U=I.object({mint:I.string().required(),useExistingMint:I.boolean(),useCandyMachine:I.boolean(),existingMint:I.string().when(["useExistingMint","useCandyMachine"],{is:function(e,n){return e&&!n},then:I.string().required()}),candyMachineId:I.string().when("useCandyMachine",{is:!0,then:I.string().required()}),image:I.mixed(),name:I.string().when(["useExistingMint","useCandyMachine"],{is:function(e,n){return!e&&!n},then:I.string().required().min(2)}),description:I.string(),symbol:I.string().when("useExistingMint",{is:!1,then:I.string()}),authority:I.string().required(),startPrice:I.number().min(0).required(),minPrice:I.number().min(0).required(),interval:I.number().min(0).required(),decimals:I.number().nullable().transform((function(e){return""===e||isNaN(e)?null:e})).when(["useExistingMint","useCandyMachine"],{is:function(e,n){return!e&&!n},then:I.number().min(0).required()}),mintCap:I.number().min(1).required(),goLiveDate:I.date().required(),disclosures:O._});function G(e,n){return J.apply(this,arguments)}function J(){return(J=W(s().mark((function e(n,t){var i,r,a,o,c,u,l,h,d,g,b,x,v,j,P,k,C,I,S;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=f.Keypair.generate(),r=new f.PublicKey(t.authority),a=new f.PublicKey(t.mint),!t.useExistingMint||t.useCandyMachine){e.next=12;break}return c=new f.PublicKey(t.existingMint),e.next=8,(0,M.getMintInfo)(n.provider,c);case 8:t.decimals=e.sent.decimals,o=new m.DataV2({name:t.name||"",symbol:t.symbol||"",uri:t.uri||"",sellerFeeBasisPoints:0,creators:null,collection:null,uses:null}),e.next=20;break;case 12:if(!t.useCandyMachine){e.next=16;break}o=new m.DataV2({name:"Candymachine Mint Token",symbol:"MINT",uri:"",sellerFeeBasisPoints:0,creators:null,collection:null,uses:null}),e.next=20;break;case 16:return e.next=18,n.tokenMetadataSdk.uploadMetadata({provider:t.provider,name:t.name,symbol:t.symbol||"",description:t.description,image:t.image,mint:i.publicKey});case 18:u=e.sent,o=new m.DataV2({name:t.name.substring(0,32),symbol:(t.symbol||"").substring(0,10),uri:u,sellerFeeBasisPoints:0,creators:null,collection:null,uses:null});case 20:return e.next=22,n.createLiquidityBootstrapperInstructions({targetMintKeypair:i,authority:r,metadata:o,baseMint:a,startPrice:Number(t.startPrice),minPrice:Number(t.minPrice),interval:Number(t.interval),maxSupply:Number(t.mintCap),bondingArgs:{targetMintDecimals:Number(t.decimals||0),goLiveDate:t.goLiveDate,sellFrozen:t.useExistingMint}});case 22:if(l=e.sent,h=l.output.targetMint,d=l.instructions,g=l.signers,!t.useExistingMint||t.useCandyMachine){e.next=32;break}return e.next=29,n.createRetrievalCurveForSetSupplyInstructions({reserveAuthority:r,supplyMint:new f.PublicKey(t.existingMint),supplyAmount:t.mintCap,targetMint:h});case 29:b=e.sent,d.push(b.instructions),g.push(b.signers);case 32:if(!t.useCandyMachine){e.next=52;break}return x=new f.PublicKey(t.candyMachineId),v=new f.PublicKey("1nc1nerator11111111111111111111111111111111"),e.next=37,y.Token.getAssociatedTokenAddress(y.ASSOCIATED_TOKEN_PROGRAM_ID,y.TOKEN_PROGRAM_ID,h,v,!0);case 37:return j=e.sent,(P=d[d.length-1]).push(y.Token.createAssociatedTokenAccountInstruction(y.ASSOCIATED_TOKEN_PROGRAM_ID,y.TOKEN_PROGRAM_ID,h,j,v,n.provider.wallet.publicKey)),e.next=42,p.Program.fetchIdl(new f.PublicKey("cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ"),n.provider);case 42:return k=e.sent,C=new p.Program(k,new f.PublicKey("cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ"),n.provider),e.next=46,C.account.candyMachine.fetch(x);case 46:return I=e.sent,e.next=49,C.instruction.updateCandyMachine(Z({},I.data,{price:new(w())(1)}),{accounts:{candyMachine:x,authority:n.provider.wallet.publicKey,wallet:j}});case 49:(S=e.sent).keys.push({pubkey:h,isWritable:!1,isSigner:!1}),P.push(S);case 52:return e.next=54,(0,M.sendMultipleInstructions)(n.tokenBondingSdk.errors||new Map,n.provider,d,g);case 54:return e.abrupt("return",h);case 55:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var X=function(){var e=(0,C.cI)({resolver:(0,d.X)(U),defaultValues:{useExistingMint:!0}}),n=e.register,t=e.handleSubmit,r=e.watch,a=e.setValue,m=e.setError,p=e.clearErrors,f=e.formState,v=f.errors,w=f.isSubmitting,M=(0,g.useWallet)(),I=M.publicKey,L=M.connected,R=(0,D.hB)(),q=R.visible,z=R.setVisible,V=(0,x.usePrimaryClaimedTokenRef)(I).info,F=(0,x.useProvider)().awaitingApproval,J=(0,k.useAsyncCallback)(G),X=J.execute,Y=J.loading,Q=J.error,$=(0,S.T7)().marketplaceSdk,ee=(0,j.useRouter)(),ne=r(),te=ne.authority,ie=(ne.mint,ne.useExistingMint),re=ne.useCandyMachine,ae=ne.startPrice,se=ne.minPrice;(0,P.useEffect)((function(){a("useCandyMachine",!!ee.query.candymachine)}),[ee,a]),(0,P.useEffect)((function(){ae&&se&&(se<ae/5?(m("startPrice",{type:"custom",message:"The diffrence between Starting Price and Minimum Price is greater than the reccommended 5x of each other."}),m("minPrice",{type:"custom",message:"The diffrence between Minimum Price and Starting Price is greater than the reccommended 5x of each other."})):(p("minPrice"),p("startPrice")))}),[ae,se,m,p]);var oe=W(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X($,n);case 2:t=e.sent,n.useCandyMachine?ee.push((0,T.B)(T._.mintLbc,{candyMachineId:n.candyMachineId}),void 0,{shallow:!0}):ee.push((0,T.B)(T._.tokenLbc,{mintKey:t.toBase58()}),void 0,{shallow:!0});case 4:case"end":return e.stop()}}),e)}))),ce=n("authority");return(0,i.jsxs)(o.kC,{position:"relative",children:[!L&&(0,i.jsxs)(o.kC,{position:"absolute",w:"full",h:"full",zIndex:"1",flexDirection:"column",children:[(0,i.jsx)(o.kC,{justifyContent:"center",children:(0,i.jsx)(c.zx,{colorScheme:"orange",variant:"outline",onClick:function(){return z(!q)},children:"Connect Wallet"})}),(0,i.jsx)(o.kC,{w:"full",h:"full",bg:"white",opacity:"0.6"})]}),(0,i.jsx)(C.RV,Z({},e,{children:(0,i.jsx)("form",{onSubmit:t(oe),children:(0,i.jsxs)(o.gC,{spacing:8,mt:L?0:12,children:[!re&&(0,i.jsx)(B.g,{}),(0,i.jsxs)(o.xu,{w:"full",children:[(0,i.jsx)(u.UO,{in:re,animateOpacity:!0,children:(0,i.jsx)(E.H,{id:"candyMachineId",help:"The id of the candymachine",label:"Candy Machine ID",errors:v,children:(0,i.jsx)(l.II,Z({},n("candyMachineId")))})}),(0,i.jsx)(u.UO,{in:!ie&&!re,animateOpacity:!0,children:(0,i.jsxs)(o.gC,{spacing:8,children:[(0,i.jsx)(A.c,{entityName:"token"}),(0,i.jsx)(K.m,{}),(0,i.jsx)(E.H,{id:"symbol",help:"A less than 10 character symbol for the token being sold",label:"Symbol",errors:v,children:(0,i.jsx)(l.II,Z({},n("symbol")))})]})})]}),(0,i.jsxs)(E.H,{id:"mint",help:"The token that should be used to buy this token. If you want users to purchase your token using SOL, use ".concat(y.NATIVE_MINT.toBase58()),label:"Purchase Mint",errors:v,children:[V&&(0,i.jsx)(c.zx,{variant:"link",onClick:function(){return a("mint",V.mint.toBase58())},children:"Use my Social Token"}),(0,i.jsx)(_.J,{value:r("mint"),onChange:function(e){return a("mint",e)}})]}),(0,i.jsxs)(E.H,{id:"authority",help:"The wallet that can claim the bootstrapped liquidity",label:"Beneficiary",errors:v,children:[I&&(0,i.jsx)(c.zx,{variant:"link",onClick:function(){return a("authority",I.toBase58())},children:"Set to My Wallet"}),(0,i.jsx)(N.y,{name:ce.name,value:te,onChange:ce.onChange})]}),(0,i.jsx)(E.H,{id:"startPrice",help:"The starting price for this token. You should set this a little above the expected price of the token. Prices will fall to the fair price. Note that if there's enough demand, they can also increase from this price.",label:"Starting Price",errors:v,children:(0,i.jsx)(l.II,Z({type:"number",min:0,step:1e-12},n("startPrice")))}),(0,i.jsx)(E.H,{id:"minPrice",help:"The minimum possible price for this token, if nobody buys during the bootstrapping interval. The wider the range between starting price and minimum price, the more rapidly the price will fall. It is reccommended to keep these numbers within 5x of each other.",label:"Minimum Price",errors:v,children:(0,i.jsx)(l.II,Z({type:"number",min:0,step:1e-12},n("minPrice")))}),(0,i.jsx)(H,{}),(0,i.jsx)(E.H,{id:"mintCap",help:"The number of tokens to mint. Note that, depending on the above parameters this liqudity bootstrapping may not sell out",label:"Number of Tokens",errors:v,children:(0,i.jsx)(l.II,Z({type:"number",min:0,step:1e-12},n("mintCap")))}),(0,i.jsx)(E.H,{id:"goLiveDate",help:"The time this LBC will go live, in your browser's local timezone",label:"Launch Date",errors:v,children:(0,i.jsx)(l.II,Z({type:"datetime-local"},n("goLiveDate")))}),(0,i.jsx)(O.M,{fees:b.LBC_CURVE_FEES}),Q&&(0,i.jsx)(h.bZ,{status:"error",children:Q.toString()}),(0,i.jsx)(c.zx,{type:"submit",alignSelf:"flex-end",colorScheme:"primary",isLoading:w||Y,loadingText:F?"Awaiting Approval":"Loading",children:"Create LBC"})]})})}))]})},Y=function(){return(0,i.jsx)(r.Y,{title:"New LBC",children:(0,i.jsx)(X,{})})},Q=Y}},function(e){e.O(0,[774,888,179],(function(){return n=88157,e(e.s=n);var n}));var n=e.O();_N_E=n}]);