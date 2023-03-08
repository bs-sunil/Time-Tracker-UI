"use strict";(self.webpackChunkreact_project=self.webpackChunkreact_project||[]).push([[390],{4390:function(e,t,a){a.r(t),a.d(t,{default:function(){return Pe}});var n=a(1413),r=a(4165),i=a(5861),l=a(885),o=a(2791),c=a(7660),s=a(9076),d=a(4423),u=a(6880),p=a(8472),h=a(6015),v=a(286),f=a(2982),x=a(4515),m=a(180),Z=a(8946),g=a(7949),j=a(8548),y=a(7247),b=a(5814),w=a(9434),S=a(6153),N=a(184);var C=function(e){var t=(0,o.useState)([]),a=(0,l.Z)(t,2),n=a[0],s=a[1],u=(0,o.useState)(""),p=(0,l.Z)(u,2),h=p[0],v=p[1],C=(0,o.useState)([]),A=(0,l.Z)(C,2),D=(A[0],A[1],(0,d.Z)()),I=(0,w.v9)((function(e){return e.allActivities})),k=(0,w.I0)(),T=I.activities;function P(){return M.apply(this,arguments)}function M(){return(M=(0,i.Z)((0,r.Z)().mark((function e(){var t,a,n,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("activity/allactivity");case 3:null!==(t=e.sent).data.data?(a=(0,S.H)(t.data.data),k(a)):(n=(0,S.N0)(t.data.message),k(n)),s(t.data.data),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),i=(0,S.N0)(e.t0.message),k(i);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var z=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var a,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={ActivityId:t},e.prev=1,e.next=4,c.Z.patch("activity/UpdatedById",a);case 4:(n=e.sent).data.code&&P(),200==n.data.code?D("success",n.data.message):206==n.data.code&&D("warning",n.data.message),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){P()}),[]),(0,o.useEffect)((function(){v(e.searchValue);n.map((function(e){return{p:e.ProjectName}})),n.filter((function(e){return e.ProjectName.includes(h)}))}),[e.searchValue]);var W=(0,f.Z)(T.map((function(e){return{id:e.ActivityGuID,activityId:e.ActivityGuID,project:e.ProjectName,activityGroup:e.ActivityName,description:e.ActivityDescription,date:e.CreatedOn.split("T")[0],pending:Number(e.ActivityStatusID)}})));(0,o.useEffect)((function(){e.handledCsv(W)}),[W]);var R=[{field:"activityId",headerName:"Activity Id",width:210,headerAlign:"center",align:"center"},{field:"project",headerName:"Project",width:170,headerAlign:"center",align:"center"},{field:"activityGroup",headerName:"ActivityGroup",width:140,headerAlign:"center",align:"center"},{field:"description",headerName:"Description",width:350,headerAlign:"center",align:"center"},{field:"date",headerName:"Date",width:150,headerAlign:"center",align:"center"},{field:"status",type:"actions",headerName:"Status",width:100,headerAlign:"center",align:"center",cellClassName:"actions",getActions:function(e){return 1===e.row.pending?[(0,N.jsx)(x.u,{icon:(0,N.jsx)("span",{className:"span1",children:(0,N.jsx)(j.Z,{color:"warning"})}),label:"Edit",className:"textPrimary",color:"inherit"}),(0,N.jsx)(x.u,{icon:(0,N.jsx)("span",{className:"span1",children:(0,N.jsx)(j.Z,{color:"warning"})}),label:"Edit",className:"textPrimary",color:"inherit"})]:2===e.row.pending||3===e.row.pending?[(0,N.jsx)(x.u,{icon:(0,N.jsx)("span",{className:"span2",children:(0,N.jsx)(Z.Z,{color:"success"})}),label:"Delete",className:"textPrimary",color:"inherit"}),(0,N.jsx)(x.u,{icon:(0,N.jsx)("span",{className:"span1",children:(0,N.jsx)(j.Z,{color:"warning"})}),label:"Edit",className:"textPrimary",color:"inherit"})]:4===e.row.pending?[(0,N.jsx)(x.u,{icon:(0,N.jsx)("span",{className:"span2",children:(0,N.jsx)(Z.Z,{color:"success"})}),label:"Delete",className:"textPrimary",color:"inherit"}),(0,N.jsx)(x.u,{icon:(0,N.jsx)("span",{className:"span2",children:(0,N.jsx)(Z.Z,{color:"success"})}),label:"Delete",className:"textPrimary",color:"inherit"})]:5===e.row.pending?[(0,N.jsx)(x.u,{icon:(0,N.jsx)("span",{className:"span3",children:(0,N.jsx)(g.Z,{color:"error"})}),label:"Delete",className:"textPrimary",color:"inherit"}),(0,N.jsx)(x.u,{icon:(0,N.jsx)("span",{className:"span3",children:(0,N.jsx)(g.Z,{color:"error"})}),label:"Delete",className:"textPrimary",color:"inherit"})]:[(0,N.jsx)(x.u,{icon:(0,N.jsx)("span",{className:"span2",children:(0,N.jsx)(Z.Z,{color:"success"})}),label:"Delete",className:"textPrimary",color:"inherit"}),(0,N.jsx)(x.u,{icon:(0,N.jsx)("span",{className:"span3",children:(0,N.jsx)(g.Z,{color:"error"})}),label:"Delete",className:"textPrimary",color:"inherit"})]}},{field:"actions",type:"actions",headerName:"Actions",headerAlign:"center",width:70,cellClassName:"actions",getActions:function(e){var t=e.id;return[(0,N.jsx)(x.u,{icon:(0,N.jsx)(b.Z,{title:"Click On for delete",children:(0,N.jsx)(y.Z,{color:"error"})}),label:"Delete",className:"textPrimary",onClick:function(){return z(t)},color:"inherit"})]}}];return(0,N.jsx)("div",{style:{height:400,width:"100%"},children:(0,N.jsx)(m._,{columns:R,rows:W})})},A=a(5584),D=a(5702),I=a(7205),k=a(5145),T=a(9823),P=a(4565),M=a(4942),z=a(3366),W=a(7462),R=a(8182),F=a(4419),G=a(2065),O=a(2842),E=a(9853),L=a(5873),B=a(6863),V=a(5878),H=a(1217);function Y(e){return(0,H.Z)("MuiToggleButton",e)}var U=(0,V.Z)("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge"]),_=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],q=(0,B.ZP)(O.Z,{name:"MuiToggleButton",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t["size".concat((0,E.Z)(a.size))]]}})((function(e){var t,a,n=e.theme,r=e.ownerState,i="standard"===r.color?n.palette.text.primary:n.palette[r.color].main;return n.vars&&(i="standard"===r.color?n.vars.palette.text.primary:n.vars.palette[r.color].main,a="standard"===r.color?n.vars.palette.text.primaryChannel:n.vars.palette[r.color].mainChannel),(0,W.Z)({},n.typography.button,{borderRadius:(n.vars||n).shape.borderRadius,padding:11,border:"1px solid ".concat((n.vars||n).palette.divider),color:(n.vars||n).palette.action.active},r.fullWidth&&{width:"100%"},(t={},(0,M.Z)(t,"&.".concat(U.disabled),{color:(n.vars||n).palette.action.disabled,border:"1px solid ".concat((n.vars||n).palette.action.disabledBackground)}),(0,M.Z)(t,"&:hover",{textDecoration:"none",backgroundColor:n.vars?"rgba(".concat(n.vars.palette.text.primaryChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,G.Fq)(n.palette.text.primary,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}),(0,M.Z)(t,"&.".concat(U.selected),{color:i,backgroundColor:n.vars?"rgba(".concat(a," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,G.Fq)(i,n.palette.action.selectedOpacity),"&:hover":{backgroundColor:n.vars?"rgba(".concat(a," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,G.Fq)(i,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?"rgba(".concat(a," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,G.Fq)(i,n.palette.action.selectedOpacity)}}}),t),"small"===r.size&&{padding:7,fontSize:n.typography.pxToRem(13)},"large"===r.size&&{padding:15,fontSize:n.typography.pxToRem(15)})})),$=o.forwardRef((function(e,t){var a=(0,L.Z)({props:e,name:"MuiToggleButton"}),n=a.children,r=a.className,i=a.color,l=void 0===i?"standard":i,o=a.disabled,c=void 0!==o&&o,s=a.disableFocusRipple,d=void 0!==s&&s,u=a.fullWidth,p=void 0!==u&&u,h=a.onChange,v=a.onClick,f=a.selected,x=a.size,m=void 0===x?"medium":x,Z=a.value,g=(0,z.Z)(a,_),j=(0,W.Z)({},a,{color:l,disabled:c,disableFocusRipple:d,fullWidth:p,size:m}),y=function(e){var t=e.classes,a=e.fullWidth,n=e.selected,r=e.disabled,i=e.size,l=e.color,o={root:["root",n&&"selected",r&&"disabled",a&&"fullWidth","size".concat((0,E.Z)(i)),l]};return(0,F.Z)(o,Y,t)}(j);return(0,N.jsx)(q,(0,W.Z)({className:(0,R.Z)(y.root,r),disabled:c,focusRipple:!d,ref:t,onClick:function(e){v&&(v(e,Z),e.defaultPrevented)||h&&h(e,Z)},onChange:h,value:Z,ownerState:j,"aria-pressed":f},g,{children:n}))}));a(8457);function J(e,t){return void 0!==t&&void 0!==e&&(Array.isArray(t)?t.indexOf(e)>=0:e===t)}function K(e){return(0,H.Z)("MuiToggleButtonGroup",e)}var Q=(0,V.Z)("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]),X=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],ee=(0,B.ZP)("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[(0,M.Z)({},"& .".concat(Q.grouped),t.grouped),(0,M.Z)({},"& .".concat(Q.grouped),t["grouped".concat((0,E.Z)(a.orientation))]),t.root,"vertical"===a.orientation&&t.vertical,a.fullWidth&&t.fullWidth]}})((function(e){var t=e.ownerState,a=e.theme;return(0,W.Z)({display:"inline-flex",borderRadius:(a.vars||a).shape.borderRadius},"vertical"===t.orientation&&{flexDirection:"column"},t.fullWidth&&{width:"100%"},(0,M.Z)({},"& .".concat(Q.grouped),(0,W.Z)({},"horizontal"===t.orientation?(0,M.Z)({"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0}},"&.".concat(Q.selected," + .").concat(Q.grouped,".").concat(Q.selected),{borderLeft:0,marginLeft:0}):(0,M.Z)({"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}},"&.".concat(Q.selected," + .").concat(Q.grouped,".").concat(Q.selected),{borderTop:0,marginTop:0}))))})),te=o.forwardRef((function(e,t){var a=(0,L.Z)({props:e,name:"MuiToggleButtonGroup"}),n=a.children,r=a.className,i=a.color,l=void 0===i?"standard":i,c=a.disabled,s=void 0!==c&&c,d=a.exclusive,u=void 0!==d&&d,p=a.fullWidth,h=void 0!==p&&p,v=a.onChange,f=a.orientation,x=void 0===f?"horizontal":f,m=a.size,Z=void 0===m?"medium":m,g=a.value,j=(0,z.Z)(a,X),y=(0,W.Z)({},a,{disabled:s,fullWidth:h,orientation:x,size:Z}),b=function(e){var t=e.classes,a=e.orientation,n=e.fullWidth,r=e.disabled,i={root:["root","vertical"===a&&"vertical",n&&"fullWidth"],grouped:["grouped","grouped".concat((0,E.Z)(a)),r&&"disabled"]};return(0,F.Z)(i,K,t)}(y),w=function(e,t){if(v){var a,n=g&&g.indexOf(t);g&&n>=0?(a=g.slice()).splice(n,1):a=g?g.concat(t):[t],v(e,a)}},S=function(e,t){v&&v(e,g===t?null:t)};return(0,N.jsx)(ee,(0,W.Z)({role:"group",className:(0,R.Z)(b.root,r),ref:t,ownerState:y},j,{children:o.Children.map(n,(function(e){return o.isValidElement(e)?o.cloneElement(e,{className:(0,R.Z)(b.grouped,e.props.className),onChange:u?S:w,selected:void 0===e.props.selected?J(e.props.value,g):e.props.selected,size:e.props.size||Z,fullWidth:h,color:e.props.color||l,disabled:e.props.disabled||s}):null}))}))})),ae=a(4162),ne=a(508),re=a(7924),ie=a(1898),le=a(6571),oe=a(7892),ce=a.n(oe),se=a(9911),de=a(2016),ue=a(7792),pe=a(5590),he=a(2419),ve=a(185),fe=a(503),xe=a(231),me={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},Ze="",ge="",je="empty",ye="empty",be="empty";var we=function(e){var t=(0,d.Z)(),a=o.useState(!0),s=(0,l.Z)(a,2),u=s[0],p=s[1],Z=o.useState(!0),g=(0,l.Z)(Z,2),j=g[0],y=g[1],b=o.useState(!0),C=(0,l.Z)(b,2),M=C[0],z=C[1],W=o.useState(!0),R=(0,l.Z)(W,2),F=R[0],G=R[1],O=o.useState("empty"),E=(0,l.Z)(O,2),L=E[0],B=E[1],V=o.useState("empty"),H=(0,l.Z)(V,2),Y=H[0],U=H[1],_=o.useState(""),q=(0,l.Z)(_,2),J=q[0],K=q[1],Q=o.useState("empty"),X=(0,l.Z)(Q,2),ee=X[0],oe=X[1],we=o.useState(""),Se=(0,l.Z)(we,2),Ne=Se[0],Ce=Se[1],Ae=o.useState([]),De=(0,l.Z)(Ae,2),Ie=De[0],ke=De[1],Te=o.useState([]),Pe=(0,l.Z)(Te,2),Me=Pe[0],ze=Pe[1],We=o.useState(!1),Re=(0,l.Z)(We,2),Fe=(Re[0],Re[1],o.useState([])),Ge=(0,l.Z)(Fe,2),Oe=Ge[0],Ee=Ge[1],Le=o.useState([]),Be=(0,l.Z)(Le,2),Ve=Be[0],He=Be[1],Ye=o.useState(""),Ue=(0,l.Z)(Ye,2),_e=(Ue[0],Ue[1],o.useState("")),qe=(0,l.Z)(_e,2),$e=qe[0],Je=qe[1],Ke=o.useState([]),Qe=(0,l.Z)(Ke,2),Xe=Qe[0],et=Qe[1],tt=o.useState(0),at=(0,l.Z)(tt,2),nt=(at[0],at[1],o.useState("")),rt=(0,l.Z)(nt,2),it=rt[0],lt=rt[1],ot=o.useState(!1),ct=(0,l.Z)(ot,2),st=ct[0],dt=ct[1],ut=o.useState(""),pt=(0,l.Z)(ut,2),ht=pt[0],vt=pt[1],ft=o.useState(!1),xt=(0,l.Z)(ft,2),mt=xt[0],Zt=xt[1],gt=o.useState(""),jt=(0,l.Z)(gt,2),yt=(jt[0],jt[1],o.useState("#2196f3")),bt=(0,l.Z)(yt,2),wt=(bt[0],bt[1]),St=o.useState(!1),Nt=(0,l.Z)(St,2),Ct=Nt[0],At=Nt[1],Dt=o.useState(!1),It=(0,l.Z)(Dt,2),kt=It[0],Tt=It[1],Pt=o.useState(!1),Mt=(0,l.Z)(Pt,2),zt=Mt[0],Wt=Mt[1],Rt=o.useState(!1),Ft=(0,l.Z)(Rt,2),Gt=Ft[0],Ot=Ft[1],Et=o.useState(!1),Lt=(0,l.Z)(Et,2),Bt=Lt[0],Vt=Lt[1],Ht=o.useState(""),Yt=(0,l.Z)(Ht,2),Ut=Yt[0],_t=Yt[1],qt=function(){0==Xe.length?(console.log("true"),Vt(!0)):(console.log("false"),Vt(!1))},$t=function(e){""===e.target.value?(Ot(!0),_t("Please Give The Description")):(Ot(!1),_t(""))},Jt=(0,w.v9)((function(e){return e.allActivities})),Kt=(0,w.I0)();function Qt(){return(Qt=(0,i.Z)((0,r.Z)().mark((function e(){var t,a,n,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("activity/allactivity");case 3:null!==(t=e.sent).data.data?(a=(0,S.H)(t.data.data),Kt(a)):(n=(0,S.N0)(t.data.message),Kt(n)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),i=(0,S.N0)(e.t0.message),Kt(i);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}(0,w.v9)((function(e){return e.allMembers})),(0,w.I0)(),Jt.activities;var Xt=function(){console.log($e),console.log(Ne),p(""==$e||""==Ne||0!=st||0!=mt)},ea=o.useState(""),ta=(0,l.Z)(ea,2),aa=(ta[0],ta[1],o.useState(ce()("".concat((new Date).toISOString())))),na=(0,l.Z)(aa,2),ra=na[0],ia=na[1],la=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("activity/allMilestone/".concat(it));case 3:t=e.sent,z(!1),G(!1),He(t.data.data),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),oa=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("activity/activityGroupList");case 3:t=e.sent,ke(t.data.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),ca=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("activity/allMembers/".concat(it));case 3:t=e.sent,ze(t.data.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();function sa(){return da.apply(this,arguments)}function da(){return(da=(0,i.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("activity/allProject");case 3:t=e.sent,Ee(t.data.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var ua=[{field:"name",headerName:"Name",width:180,headerAlign:"center",align:"center"},{field:"billable",headerName:"Billable",width:180,headerAlign:"center",align:"center"},{field:"efforts",headerName:"Efforts",width:180,headerAlign:"center",align:"center"},{field:"actions",type:"actions",headerName:"Actions",headerAlign:"center",width:180,cellClassName:"actions",getActions:function(e){var t=e.id;return[(0,N.jsx)(x.u,{icon:(0,N.jsx)(fe.Z,{}),label:"Delete",className:"textPrimary",onClick:function(){return function(e){var t=Xe.filter((function(t){return e!==t.id}));et(t),0==t.length&&Vt(!0)}(t)},color:"inherit"})]}}],pa=o.useState(!1),ha=(0,l.Z)(pa,2),va=ha[0],fa=ha[1],xa=function(){return fa(!1)},ma=o.useState("no"),Za=(0,l.Z)(ma,2),ga=Za[0],ja=Za[1],ya=o.useState("min"),ba=(0,l.Z)(ya,2),wa=ba[0],Sa=ba[1],Na=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t,a,n,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("activity/fullname/".concat(Ne));case 2:t=e.sent,a=t.data.data[0].FullName,n={id:Ne,name:a,billable:ga,efforts:"".concat($e," ").concat(wa)},i=[].concat((0,f.Z)(Xe),[n]),et(i),Ze="",Ce(""),Je(""),ge="",xa();case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ca=function(){0!==Xe.length&&"empty"!=L&&"empty"!=Y&&""!=J?y(!1):y(!0)};return o.useEffect((function(){"empty"!==L&&(la(),ca())}),[L]),o.useEffect((function(){sa(),oa()}),[]),o.useEffect((function(){Ce(Ze),Xt()}),[Ne]),o.useEffect((function(){Je(ge),Xt()}),[$e]),(0,N.jsxs)(v.Z,{sx:{display:"flex",minHeight:1e3,flexWrap:"wrap",justifyContent:"center",flexBasis:1e3},elevation:3,children:[(0,N.jsx)("div",{className:"HeadLine",style:{width:"80%",color:"whitesmoke",paddingTop:"1%"},children:(0,N.jsx)("h3",{children:"Add Activity"})}),(0,N.jsx)("hr",{style:{width:"80%",position:"relative",right:"10%"}}),(0,N.jsxs)("div",{style:{width:"80%"},children:[(0,N.jsxs)(ae.Z,{direction:"row",spacing:"60%",style:{marginTop:"2%"},children:[(0,N.jsx)("label",{htmlFor:"",children:"Project"}),(0,N.jsx)("label",{htmlFor:"",children:"MilesStone"})]}),(0,N.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"2%"},children:[(0,N.jsxs)(ie.Z,{sx:{minWidth:"35%"},error:Ct,children:[(0,N.jsx)(ne.Z,{id:"demo-simple-select-".concat(Ct?"error":"autowidth","-label"),children:"Projects"}),(0,N.jsx)(k.Z,{labelId:"demo-simple-select-".concat(Ct?"error":"autowidth","-label"),id:"demo-simple-select-".concat(Ct?"error":"autowidth"),value:L,onChange:function(e){var t;je=(t=e).target.value,B(t.target.value),sa(),lt(e.target.value),Ca()},onClose:function(e){"empty"==je&&void 0===e.target.value?(console.log(Ct),At(!0)):At(!1)},autoWidth:!0,label:"Projets",children:Oe.map((function(e){return(0,N.jsx)(D.Z,{value:e.ProjectGuID,children:e.ProjectName},e.ProjectGuID)}))}),Ct&&(0,N.jsx)(re.Z,{children:"InValid Input"})]}),(0,N.jsxs)(ie.Z,{sx:{minWidth:"35%"},error:kt,children:[(0,N.jsx)(ne.Z,{id:"demo-simple-select-".concat(kt?"error":"autowidth","-label"),children:"MileStone"}),(0,N.jsx)(k.Z,{labelId:"demo-simple-select-".concat(kt?"error":"autowidth","-label"),id:"demo-simple-select-".concat(kt?"error":"autowidth"),value:Y,disabled:M,onChange:function(e){!function(e){ye=e.target.value,U(e.target.value)}(e),Ca()},onClose:function(e){"empty"==ye&&void 0===e.target.value?Tt(!0):Tt(!1)},autoWidth:!0,label:"MileStone",children:Ve.map((function(e){return(0,N.jsx)(D.Z,{value:e.ProjectMilestoneGuID,children:e.MilestoneName},e.ProjectMilestoneGuID)}))}),kt&&(0,N.jsx)(re.Z,{children:"InValid Input"})]})]}),(0,N.jsxs)(ae.Z,{direction:"row",spacing:"53%",style:{marginTop:"2%"},children:[(0,N.jsx)("label",{htmlFor:"",children:"Activity Group"}),(0,N.jsx)("label",{htmlFor:"",children:"Activity Date"})]}),(0,N.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"2%"},children:[(0,N.jsxs)(ie.Z,{sx:{minWidth:"35%"},error:zt,children:[(0,N.jsx)(ne.Z,{id:"demo-simple-select-".concat(zt?"error":"autowidth","-label"),children:"ActivityGroup Details"}),(0,N.jsx)(k.Z,{labelId:"demo-simple-select-".concat(zt?"error":"autowidth","-label"),id:"demo-simple-select-".concat(zt?"error":"autowidth"),value:ee,onChange:function(e){!function(e){be=e.target.value,oe(e.target.value)}(e),Ca()},onClose:function(e){"empty"==be&&void 0===e.target.value?Wt(!0):Wt(!1)},autoWidth:!0,label:"ActivityGroup Details",children:Ie.map((function(e){return(0,N.jsx)(D.Z,{value:e.ActivityGroupID,children:e.ActivityName},e.ActivityGroupID)}))}),zt&&(0,N.jsx)(re.Z,{children:"InValid Input"})]}),(0,N.jsx)(ie.Z,{style:{minWidth:"35%"},children:(0,N.jsx)(le._,{dateAdapter:ue.y,children:(0,N.jsxs)("div",{children:[(0,N.jsx)(de.$,{inputFormat:"MM/DD/YYYY",value:ra,disableFuture:!0,onChange:function(e){ia(e)},renderInput:function(e){return(0,N.jsx)(se.Z,(0,n.Z)((0,n.Z)({},e),{},{fullWidth:!0}))}}),"  "]})})})]}),(0,N.jsx)(ae.Z,{direction:"row",spacing:0,style:{marginTop:"2%"},children:"Activity Description"}),(0,N.jsx)(ae.Z,{direction:"row",spacing:0,style:{marginTop:"2%"},children:(0,N.jsx)(se.Z,{id:"Description",label:"Description",inputProps:{maxLength:2e3},value:J,onChange:function(e){K(e.target.value),Ca(),$t(e)},onClick:$t,multiline:!0,rows:4,error:Gt,fullWidth:!0,helperText:Ut})}),(0,N.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"4%"},children:[(0,N.jsx)("label",{htmlFor:"",children:"Activity Effort"}),(0,N.jsx)(pe.Z,{color:"primary","aria-label":"add",onClick:function(){return fa(!0)},children:(0,N.jsx)(he.Z,{})})]}),(0,N.jsx)(ae.Z,{direction:"row",spacing:0,style:{marginTop:"4%"},children:(0,N.jsxs)("div",{style:{minHeight:200,width:"100%"},children:[Bt&&(0,N.jsxs)("span",{style:{color:"red"},children:[(0,N.jsx)(A.Z,{}),"Please Add Atleast 1 Member"]}),(0,N.jsx)(m._,{rows:Xe,columns:ua,onStateChange:Ca,hideFooterPagination:!0,hideFooterSelectedRowCount:!0})]})}),(0,N.jsxs)(ae.Z,{spacing:2,direction:"row",style:{marginTop:"6%",marginBottom:"4%",marginLeft:"37%"},children:[(0,N.jsx)(I.Z,{variant:"contained",style:{width:"20%"},disabled:j,onClick:function(){if(y(!0),null!=ra){var a={ProjectGuID:it,ActivityGroupID:ee,ActivityDescription:J,ActivityStatusID:1,CreatedOn:new Date(ra.format()).toISOString().slice(0,19).replace("T"," "),Milestone:Y,Users:Xe.map((function(e){return{userId:e.id,Billable:"yes"===e.billable,Effort:Number(e.efforts.split(" ")[0]),EffortUnit:"hour"===e.efforts.split(" ")[0]?"H":"M"}}))};c.Z.post("activity/addActivity",a).then((function(e){200==e.data.code&&(!function(){Qt.apply(this,arguments)}(),200==e.data.code?t("success","Success"):206==e.data.code&&t("warning",e.data.message))})).catch((function(e){}))}e.handleClosAddActivity()},children:"Save"}),(0,N.jsx)(I.Z,{variant:"contained",style:{width:"20%"},onClick:e.handleClosAddActivity,children:"Cancel"})]})]}),(0,N.jsx)("div",{children:(0,N.jsx)(ve.Z,{open:va,onClose:function(){xa(),qt()},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,N.jsxs)(h.Z,{sx:me,children:[(0,N.jsxs)(ae.Z,{direction:"row",spacing:25,style:{marginLeft:"-20%"},children:[(0,N.jsx)(P.Z,{sx:{flex:"1 1 100%"},variant:"h5",justifyContent:"center",id:"tableTitle",component:"div",className:"addActivity",children:"Add Effort"}),(0,N.jsx)(I.Z,{variant:"text",size:"medium",color:"inherit",onClick:xa,children:(0,N.jsx)(T.Z,{})})]}),(0,N.jsx)("hr",{}),(0,N.jsxs)(ae.Z,{direction:"row",spacing:4,style:{marginTop:"6%",marginLeft:"-1%"},children:[(0,N.jsx)("label",{htmlFor:"",className:"lbl1",style:{marginLeft:"-1%"},children:"\xa0Name"}),(0,N.jsxs)(ie.Z,{error:!!mt,children:[(0,N.jsx)(ne.Z,{id:"demo-simple-select-".concat(mt?"error":"autowidth","-label"),children:"Members"}),(0,N.jsx)(k.Z,{labelId:"demo-simple-select-".concat(mt?"error":"autowidth","-label"),id:"demo-simple-select-".concat(mt?"error":"autowidth"),value:Ne,onChange:function(e){!function(e){(0,xe.V7)(e.target.value),Ze=e.target.value,Ce(e.target.value),Xt()}(e),Xt(),function(e){var t=e.target.value;-1!==Xe.findIndex((function(e){return e.id===t}))?(Zt(!0),wt("#f44336")):(Zt(!1),wt("#2196f3"))}(e)},sx:{minWidth:257},autoWidth:!0,disabled:F,label:"Members",error:mt,children:Me.map((function(e){return(0,N.jsx)(D.Z,{value:e.UserGuID,children:e.FullName},e.UserGuID)}))}),mt&&(0,N.jsx)(re.Z,{children:"Member Already Added"})]})]}),(0,N.jsxs)(ae.Z,{direction:"row",spacing:2,style:{marginTop:"6%",marginLeft:"-1%"},children:[(0,N.jsx)("label",{htmlFor:"",className:"lbl1",children:"Billable"}),(0,N.jsxs)(te,{color:"primary",value:ga,exclusive:!0,placeholder:"Enter Your Efforts",onChange:function(e,t){ja(t)},"aria-label":"Platform",fullWidth:!0,sx:{height:"50px"},className:"billable",children:[(0,N.jsx)($,{value:"yes",children:"Yes"}),(0,N.jsx)($,{value:"no",children:"No"})]})]}),(0,N.jsxs)(ae.Z,{direction:"row",spacing:2,style:{marginTop:"6%"},children:[(0,N.jsx)("label",{htmlFor:"",className:"lbl1",children:"Efforts"}),(0,N.jsx)(se.Z,{id:"outlined-basic",type:"number",label:"Effort",size:"small",value:$e,error:st,helperText:ht,onChange:function(e){var t;ge=(t=e).target.value,Je(t.target.value),function(e){Number(e.target.value)>1e3?(dt(!0),vt("Not Valid")):(dt(!1),vt(""))}(e)},variant:"outlined",sx:{height:"10px",marginLeft:"10px"}}),(0,N.jsxs)(te,{color:"primary",value:wa,exclusive:!0,onChange:function(e,t){Sa(t)},"aria-label":"Platform",fullWidth:!0,className:"effort",sx:{height:"8px"},children:[(0,N.jsx)($,{value:"min",children:"Min"}),(0,N.jsx)($,{value:"hour",children:"Hour"})]})]}),(0,N.jsx)(ae.Z,{direction:"row",spacing:6,style:{marginTop:"8%",marginLeft:"25%"},children:(0,N.jsxs)(ae.Z,{spacing:2,direction:"row",children:[(0,N.jsx)(I.Z,{variant:"contained",style:{width:"100%"},disabled:u,onClick:function(){Na(),Vt(!1)},children:"Save"}),(0,N.jsx)(I.Z,{variant:"contained",style:{width:"100%"},onClick:function(){xa(),qt()},children:"Cancel"})]})})]})})})]})},Se=a(5560),Ne=a(8254),Ce=a(3215),Ae=a(3353),De=a(5403),Ie=a(6746),ke=(new Date).toISOString().slice(0,19).replace("T"," "),Te=(new Date).toISOString().slice(0,19).replace("T"," "),Pe=function(){var e=(0,d.Z)(),t=(0,o.useState)([]),a=(0,l.Z)(t,2),f=a[0],x=a[1],m=(0,o.useState)(""),Z=(0,l.Z)(m,2),g=Z[0],j=(Z[1],(0,o.useState)(!1)),y=(0,l.Z)(j,2),b=y[0],A=y[1],T=(0,o.useState)(!1),P=(0,l.Z)(T,2),M=P[0],z=P[1],W=(0,o.useState)(!1),R=(0,l.Z)(W,2),F=R[0],G=R[1],O=o.useRef(null),E=o.useState(ce()("".concat((new Date).toISOString()))),L=(0,l.Z)(E,2),B=L[0],V=L[1],H=o.useState(ce()("".concat((new Date).toISOString()))),Y=(0,l.Z)(H,2),U=Y[0],_=Y[1],q=o.useState(""),$=(0,l.Z)(q,2),J=($[0],$[1],o.useState("")),K=(0,l.Z)(J,2),Q=(K[0],K[1],o.useState("")),X=(0,l.Z)(Q,2),ee=(X[0],X[1],o.useState("empty")),te=(0,l.Z)(ee,2),ae=(te[0],te[1],o.useState([])),re=(0,l.Z)(ae,2),oe=re[0],pe=re[1],he=o.useState("empty"),ve=(0,l.Z)(he,2),fe=(ve[0],ve[1],o.useState([])),xe=(0,l.Z)(fe,2),me=xe[0],Ze=xe[1],ge=(0,w.v9)((function(e){return e.allActivities})),je=(0,w.I0)(),ye=ge.activities,be=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("activity/activityGroupList");case 3:t=e.sent,Ze(t.data.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();function Pe(){return(Pe=(0,i.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("activity/allProject");case 3:t=e.sent,pe(t.data.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var Me=(0,o.useState)(!1),ze=(0,l.Z)(Me,2);ze[0],ze[1];function We(){return Re.apply(this,arguments)}function Re(){return(Re=(0,i.Z)((0,r.Z)().mark((function t(){var a,n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("activity/allactivity");case 3:a=t.sent,x(a.data.data),200==a.data.code?(n=(0,S.H)(a.data.data),je(n)):200==a.data.code&&e("warning",a.data.message),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}var Fe=function(e,t){1==F&&t.length>0?c.Z.get("".concat(s.N.baseApiURL,"activity/allFilterActivity?").concat(e,"=").concat(t)).then((function(e){if(200===e.data.code){console.log(e.data.data);var t=(0,S.H)(e.data.data);je(t),console.log(ye)}})).catch((function(e){(0,u.S3)(e)})):0!=F&&0!=t.length||We()};return o.useEffect((function(){!function(){Pe.apply(this,arguments)}(),be()}),[]),o.useEffect((function(){var e,t,a,n;console.log(ke),console.log(Te),M&&(console.log(ke),console.log(Te),e="StartDate",t=ke,a="EndDate",n=Te,c.Z.get("".concat(s.N.baseApiURL,"activity/allFilterActivity?").concat(e,"=").concat(t,"&").concat(a,"=").concat(n)).then((function(e){if(200===e.data.code){console.log(e.data.data);var t=(0,S.H)(e.data.data);je(t),console.log(ye)}})).catch((function(e){(0,u.S3)(e)})))}),[B,U]),(0,N.jsx)("div",{className:"common-top",children:(0,N.jsx)("div",{style:{marginTop:"0%"},children:(0,N.jsxs)(h.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",flexWrap:"wrap","& > :not(style)":{m:1,width:"95%"}},children:[(0,N.jsxs)("div",{style:{marginTop:"1%",display:"flex",flexDirection:"row-reverse"},children:[(0,N.jsx)("span",{style:{display:"inline-block",margin:"0px 0px 0px 20px"},children:(0,N.jsx)(p.CSVLink,{data:f,filename:"my-file.csv",style:{textDecoration:"none"},target:"_blank",children:(0,N.jsx)(I.Z,{variant:"outlined",startIcon:(0,N.jsx)(Se.Z,{}),children:"Export CSV"})})}),(0,N.jsx)("span",{style:{display:"inline-block",margin:"0px 0px 0px auto"},children:(0,N.jsx)(I.Z,{variant:"outlined",onClick:function(){G(0==F),F&&(z(!1),We(),ke=(new Date).toISOString().slice(0,19).replace("T"," "),Te=(new Date).toISOString().slice(0,19).replace("T"," "),V(ke),_(Te))},startIcon:(0,N.jsx)(Ce.Z,{}),children:"filter"})}),(0,N.jsx)("span",{style:{display:"inline-block",margin:"0px 0px 0px 0px"},children:(0,N.jsx)(I.Z,{variant:"contained",startIcon:(0,N.jsx)(Ae.Z,{}),onClick:function(){A(!0),setTimeout((function(){var e;null===(e=O.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),500)},children:"New Activity"})})]}),F&&(0,N.jsx)("div",{children:(0,N.jsx)(v.Z,{elevation:3,style:{margin:"0px 25px 10px 30px"},children:(0,N.jsxs)("div",{style:{width:"100%",display:"flex",justifyContent:"space-evenly"},children:[(0,N.jsx)(se.Z,{sx:{width:"50%"},label:"Search...",id:"fullWidth",onChange:function(e){Fe("Pname",e.target.value)},InputProps:{startAdornment:(0,N.jsx)(Ne.Z,{position:"start",children:(0,N.jsx)(De.Z,{})})}}),(0,N.jsxs)(ie.Z,{sx:{ml:1,minWidth:120},children:[(0,N.jsx)(ne.Z,{id:"demo-dialog-select-label",children:"Projects"}),(0,N.jsxs)(k.Z,{labelId:"demo-dialog-select-label",id:"demo-dialog-select",onChange:function(e){Fe("ProjectName",e.target.value)},placeholder:"Projects",input:(0,N.jsx)(Ie.Z,{label:"Projects"}),children:[(0,N.jsx)(D.Z,{value:""}),oe.map((function(e){return(0,N.jsx)(D.Z,{value:e.ProjectName,children:e.ProjectName},e.ProjectGuID)}))]})]}),(0,N.jsxs)(ie.Z,{sx:{ml:1,minWidth:120},children:[(0,N.jsx)(ne.Z,{id:"demo-dialog-select-label",children:"Activity"}),(0,N.jsxs)(k.Z,{labelId:"demo-dialog-select-label",id:"demo-dialog-select",onChange:function(e){Fe("ActivityName",e.target.value)},input:(0,N.jsx)(Ie.Z,{label:"Activity"}),children:[(0,N.jsx)(D.Z,{value:""}),me.map((function(e){return(0,N.jsx)(D.Z,{value:e.ActivityName,children:e.ActivityName},e.ActivityGroupID)}))]})]}),(0,N.jsx)(ie.Z,{sx:{ml:1,minWidth:120},children:(0,N.jsx)(le._,{dateAdapter:ue.y,children:(0,N.jsxs)("div",{children:[(0,N.jsx)(de.$,{inputFormat:"MM/DD/YYYY",label:"Start Date",value:B,disableFuture:!0,onChange:function(e){var t;null!=(t=e)&&(ke=new Date(t.format()).toISOString().slice(0,19).replace("T"," ")),V(t),z(!0)},renderInput:function(e){return(0,N.jsx)(se.Z,(0,n.Z)({},e))}}),"  "]})})}),(0,N.jsx)(h.Z,{sx:{mx:2,paddingTop:2},children:" to "}),(0,N.jsx)(ie.Z,{sx:{minWidth:120},children:(0,N.jsx)(le._,{dateAdapter:ue.y,children:(0,N.jsxs)("div",{children:[(0,N.jsx)(de.$,{label:"End Date",inputFormat:"MM/DD/YYYY",value:U,disableFuture:!0,onChange:function(e){var t;null!=(t=e)&&(Te=new Date(t.format()).toISOString().slice(0,19).replace("T"," ")),_(t),z(!0)},renderInput:function(e){return(0,N.jsx)(se.Z,(0,n.Z)({},e))}}),"  "]})})})]})})}),(0,N.jsx)(v.Z,{elevation:3,sx:{flexBasis:400},children:(0,N.jsx)(C,{searchValue:g,handledCsv:function(e){x(e)}})}),(0,N.jsx)("div",{id:"section-1",ref:O,children:b&&(0,N.jsx)(we,{handleClosAddActivity:function(){A(!1)}})})]})})})}},4423:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(2791),r=a(1659),i=function(){var e=(0,n.useContext)(r.I).setToaster;return function(t,a){e({type:t,text:a})}}},2419:function(e,t,a){var n=a(4836);t.Z=void 0;var r=n(a(5649)),i=a(184),l=(0,r.default)((0,i.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.Z=l},8548:function(e,t,a){var n=a(4836);t.Z=void 0;var r=n(a(5649)),i=a(184),l=(0,r.default)((0,i.jsx)("circle",{cx:"12",cy:"12",r:"10"}),"Brightness1");t.Z=l},8946:function(e,t,a){var n=a(4836);t.Z=void 0;var r=n(a(5649)),i=a(184),l=(0,r.default)((0,i.jsx)("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"CheckCircleOutline");t.Z=l},9823:function(e,t,a){var n=a(4836);t.Z=void 0;var r=n(a(5649)),i=a(184),l=(0,r.default)((0,i.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.Z=l},7247:function(e,t,a){var n=a(4836);t.Z=void 0;var r=n(a(5649)),i=a(184),l=(0,r.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=l},503:function(e,t,a){var n=a(4836);t.Z=void 0;var r=n(a(5649)),i=a(184),l=(0,r.default)((0,i.jsx)("path",{d:"M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"}),"DeleteOutlined");t.Z=l},7949:function(e,t,a){var n=a(4836);t.Z=void 0;var r=n(a(5649)),i=a(184),l=(0,r.default)((0,i.jsx)("path",{d:"M21.19 21.19 2.81 2.81 1.39 4.22l2.27 2.27C2.61 8.07 2 9.96 2 12c0 5.52 4.48 10 10 10 2.04 0 3.93-.61 5.51-1.66l2.27 2.27 1.41-1.42zm-10.6-4.59-4.24-4.24 1.41-1.41 2.83 2.83.18-.18 1.41 1.41-1.59 1.59zm3-5.84-7.1-7.1C8.07 2.61 9.96 2 12 2c5.52 0 10 4.48 10 10 0 2.04-.61 3.93-1.66 5.51L15 12.17l2.65-2.65-1.41-1.41-2.65 2.65z"}),"Unpublished");t.Z=l}}]);
//# sourceMappingURL=390.18be98dc.chunk.js.map