"use strict";(self.webpackChunkreact_project=self.webpackChunkreact_project||[]).push([[707],{6707:function(e,t,n){n.r(t),n.d(t,{default:function(){return H}});var a=n(2982),i=n(885),l=n(2791),s=n(6015),r=n(7205),o=n(1286),c=n(1770),d=n(3215),u=n(3353),x=n(5403),h=n(1413),p=n(5803),f=n(286),m=n(3811),j=n(6094),v=n(9911),Z=n(1898),g=n(5145),y=n(5702),b=n(7924),C=n(508),S=n(7660),w=n(9076),N=n(4423),R=n(6880),U=n(8777),I=n.n(U),E=n(184),z=function(e){var t=e.costcenters,n=e.roles,a=e.entity,o=e.UaddOem,c=e.getAppUsers,d=l.useState([]),u=(0,i.Z)(d,2),U=u[0],z=u[1],L=l.useState(""),M=(0,i.Z)(L,2),A=M[0],F=M[1],k=l.useState(""),P=(0,i.Z)(k,2),T=P[0],V=P[1],D=l.useState(""),O=(0,i.Z)(D,2),B=O[0],q=O[1],W=l.useState(""),G=(0,i.Z)(W,2),_=G[0],H=G[1],$=l.useState(""),J=(0,i.Z)($,2),K=J[0],Q=J[1],X=l.useState(""),Y=(0,i.Z)(X,2),ee=Y[0],te=Y[1],ne=l.useState(!0),ae=(0,i.Z)(ne,2),ie=ae[0],le=ae[1],se=(0,N.Z)(),re=l.useState(!1),oe=(0,i.Z)(re,2),ce=oe[0],de=oe[1],ue=l.useState(""),xe=(0,i.Z)(ue,2),he=xe[0],pe=xe[1],fe=l.useState(!1),me=(0,i.Z)(fe,2),je=me[0],ve=me[1],Ze=l.useState(""),ge=(0,i.Z)(Ze,2),ye=ge[0],be=ge[1],Ce=l.useState(!1),Se=(0,i.Z)(Ce,2),we=Se[0],Ne=Se[1],Re=l.useState(""),Ue=(0,i.Z)(Re,2),Ie=Ue[0],Ee=Ue[1],ze=l.useState(!1),Le=(0,i.Z)(ze,2),Me=Le[0],Ae=Le[1],Fe=l.useState(!0),ke=(0,i.Z)(Fe,2),Pe=ke[0],Te=ke[1],Ve=U.map((function(e){return{value:e.id,label:e.userPrincipalName}})),De=t.map((function(e){return{value:e.CostCenterID,label:e.CostCenterName}})),Oe=n.filter((function(e){return e.RoleName.toLowerCase().includes("oem")})).map((function(e){return{value:e.RoleID,label:e.RoleName}})),Be=function(){Te(!0===(we||je||ce)||""==A||""==B||""==K||""==ee||""==_)};(0,l.useEffect)((function(){Be()}),[A,K,ee,_]);var qe=(0,E.jsx)("div",{style:{width:"95%",margin:"30px auto"},children:(0,E.jsx)(f.Z,{elevation:3,sx:{width:"100%",alignContent:"center",margin:"20px auto"},children:(0,E.jsxs)(s.Z,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[(0,E.jsxs)("div",{children:[(0,E.jsx)("div",{style:{padding:"2px 4px",display:"flex",justifyContent:"center",width:"auto",margin:"20px auto"},children:(0,E.jsx)(f.Z,{component:"form",sx:{p:"2px 4px",display:"flex",width:"auto",height:"auto"},children:(0,E.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly"},children:[(0,E.jsx)(m.Z,{sx:{p:"10px",margin:"20px auto"},"aria-label":"menu",children:(0,E.jsx)(p.Z,{})}),(0,E.jsx)("div",{style:{width:"80%"},children:(0,E.jsx)(j.Z,{defaultValue:"",value:A,loading:Me,onChange:function(e){var t;F(e),t=e,q(""),U.filter((function(e){e.id===t.value&&q(e.displayName)})),Be()},inputValue:T,onInputChange:function(e){V(e),function(e){if(e.length>1){Ae(!0);var t={search:e};S.Z.post("".concat(w.N.baseApiURL,"appuser/search"),t).then((function(e){200===e.data.code?(z(e.data[0]),Ae(!1)):204===e.data.code&&se("warning",e.data.message)})).catch((function(e){(0,R.S3)(e)}))}}(e)},autoComplete:!0,includeInputInList:!0,options:Ve,isOptionEqualToValue:function(e,t){return e.valueOf===t.valueOf},renderInput:function(e){return(0,E.jsx)(v.Z,(0,h.Z)((0,h.Z)({required:!0},e),{},{label:"Search User",variant:"standard",id:"standard-search"}))}})}),(0,E.jsx)(m.Z,{type:"button",sx:{p:"10px"},"aria-label":"search",children:(0,E.jsx)(x.Z,{})})]})})}),(0,E.jsx)("br",{}),(0,E.jsx)("br",{}),(0,E.jsxs)("div",{style:{display:"block",fontSize:"18px"},children:[(0,E.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"},children:[(0,E.jsxs)("div",{style:{display:"flex"},children:[(0,E.jsx)(C.Z,{sx:{fontSize:"18px",mt:"15px"},children:"Full Name:\xa0 "}),(0,E.jsx)(v.Z,{required:!0,value:B,id:"outlined-required",label:"Name",helperText:"Enter the Full Name",size:"small",onChange:Be})]}),(0,E.jsxs)("div",{style:{display:"flex"},children:[(0,E.jsx)(C.Z,{sx:{fontSize:"18px",mt:"15px"},children:"Mobile Number:\xa0 "}),(0,E.jsx)(v.Z,{id:"outlined-req",label:"Phone",defaultValue:"",size:"small",onChange:function(e){var t;t=e.target.value,I().isLength(t,{min:10,max:13})&&I().isMobilePhone(t)?(de(!1),pe("")):(de(!0),pe("Please Enter the valid Mobile Number")),Be(),H(e.target.value)},error:ce,helperText:he})]})]}),(0,E.jsx)("br",{}),(0,E.jsx)("br",{}),(0,E.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"},children:[(0,E.jsxs)("div",{style:{marginBottom:40,marginLeft:47,display:"flex"},children:[(0,E.jsx)(C.Z,{sx:{fontSize:"18px",mt:"15px"},children:"Role:\xa0 "}),(0,E.jsxs)(Z.Z,{sx:{display:"flex",justifyContent:"space-around",width:"25ch"},error:je,children:[(0,E.jsx)(C.Z,{children:"Select *"}),(0,E.jsx)(g.Z,{labelId:"demo-simple-select-error-label",id:"demo-simple-select-error",defaultValue:"",label:"Select *",size:"small",onOpen:function(){""===ee&&(ve(!0),be("Please Select the Role"))},onChange:function(e){var t;(t=e.target.value)>0&&(te(t),ve(!1),be("")),Be()},children:Oe.map((function(e){return(0,E.jsx)(y.Z,{value:e.value,children:e.label},e.value)}))}),(0,E.jsx)(b.Z,{children:ye})]})]}),(0,E.jsxs)("div",{style:{marginBottom:40,marginLeft:40,display:"flex"},children:[(0,E.jsx)(C.Z,{sx:{fontSize:"18px",mt:"15px"},children:"Cost Center:\xa0 "}),(0,E.jsxs)(Z.Z,{sx:{display:"flex",justifyContent:"space-around",width:"25ch"},error:we,children:[(0,E.jsx)(C.Z,{children:"Select *"}),(0,E.jsx)(g.Z,{labelId:"demo-simple-select-error-label",id:"demo-simple-select-error",defaultValue:"",label:"Select *",size:"small",onOpen:function(){""===K&&(Ne(!0),Ee("Please Select the Cost Center"))},onChange:function(e){var t;Be(),(t=e.target.value)>0&&(Q(t),Ne(!1),Ee(""))},children:De.map((function(e){return(0,E.jsx)(y.Z,{value:e.value,children:e.label},e.value)}))}),(0,E.jsx)(b.Z,{children:Ie})]})]})]})]})]}),(0,E.jsx)("br",{}),(0,E.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[(0,E.jsx)(r.Z,{variant:"contained",style:{marginBottom:"30px",marginRight:"65px"},disabled:we||je||ce||Pe,onClick:function(e){e.preventDefault();var t={UserPrincipleName:Ve[0].label,FullName:B,UserEntity:a,RoleID:ee,CostCenterID:K,Mobile:_};S.Z.post("".concat(w.N.baseApiURL,"appuser"),t).then((function(e){if(200===e.data.code)return se("success",e.data.message),e.data;204===e.data.code&&se("warning",e.data.message)})).catch((function(e){(0,R.S3)(e)})),o(!0),le(!1),c()},children:"Save"}),(0,E.jsx)(r.Z,{variant:"contained",onClick:function(){le(!1),o(!1),de(!1)},style:{marginBottom:"30px"},children:"Cancel"})]})]})})});return ie?qe:(0,E.jsx)("div",{})},L=n(5590),M=n(185),A=n(4565),F=n(2419),k=n(180),P=n(1598),T=n(5772),V=function(e){var t=e.roles,n=e.entity,o=e.UaddClient,c=e.getAppUsers,d=l.useState(!1),u=(0,i.Z)(d,2),U=u[0],z=u[1],V=l.useState([]),D=(0,i.Z)(V,2),O=D[0],B=D[1],q=l.useState([]),W=(0,i.Z)(q,2),G=W[0],_=W[1],H=l.useState(""),$=(0,i.Z)(H,2),J=$[0],K=$[1],Q=l.useState(!1),X=(0,i.Z)(Q,2),Y=X[0],ee=X[1],te=l.useState([]),ne=(0,i.Z)(te,2),ae=ne[0],ie=ne[1],le=l.useState(""),se=(0,i.Z)(le,2),re=se[0],oe=se[1],ce=l.useState(""),de=(0,i.Z)(ce,2),ue=de[0],xe=de[1],he=l.useState(""),pe=(0,i.Z)(he,2),fe=pe[0],me=pe[1],je=l.useState(""),ve=(0,i.Z)(je,2),Ze=ve[0],ge=ve[1],ye=l.useState(""),be=(0,i.Z)(ye,2),Ce=be[0],Se=be[1],we=l.useRef(null),Ne=l.useState(""),Re=(0,i.Z)(Ne,2),Ue=Re[0],Ie=Re[1],Ee=(0,N.Z)(),ze=l.useState(!1),Le=(0,i.Z)(ze,2),Me=Le[0],Ae=Le[1],Fe=l.useState(""),ke=(0,i.Z)(Fe,2),Pe=ke[0],Te=ke[1],Ve=l.useState(!1),De=(0,i.Z)(Ve,2),Oe=De[0],Be=De[1],qe=l.useState(""),We=(0,i.Z)(qe,2),Ge=We[0],_e=We[1],He=l.useState(!1),$e=(0,i.Z)(He,2),Je=$e[0],Ke=($e[1],l.useState(!1)),Qe=(0,i.Z)(Ke,2),Xe=Qe[0],Ye=Qe[1],et=l.useState(!0),tt=(0,i.Z)(et,2),nt=tt[0],at=tt[1],it=l.useState(!0),lt=(0,i.Z)(it,2),st=lt[0],rt=lt[1],ot=l.useState(!1),ct=(0,i.Z)(ot,2),dt=ct[0],ut=ct[1],xt=function(){return ut(!0)},ht=function(){return ut(!1)},pt=l.useState(!1),ft=(0,i.Z)(pt,2),mt=ft[0],jt=ft[1],vt=l.useState(!1),Zt=(0,i.Z)(vt,2),gt=Zt[0],yt=Zt[1],bt=l.useState(!1),Ct=(0,i.Z)(bt,2),St=Ct[0],wt=Ct[1],Nt=l.useState(""),Rt=(0,i.Z)(Nt,2),Ut=Rt[0],It=Rt[1],Et=l.useState(""),zt=(0,i.Z)(Et,2),Lt=zt[0],Mt=zt[1],At=l.useState(""),Ft=(0,i.Z)(At,2),kt=Ft[0],Pt=Ft[1],Tt=l.useState(!1),Vt=(0,i.Z)(Tt,2),Dt=Vt[0],Ot=Vt[1],Bt=l.useState(!0),qt=(0,i.Z)(Bt,2),Wt=qt[0],Gt=(qt[1],(0,T.s0)());l.useEffect((function(){S.Z.get("".concat(w.N.baseApiURL,"clients/client/NameAndId")).then((function(e){200===e.data.code?B(e.data.data):204===e.data.code&&Ee("warning",e.data.message)})).catch((function(e){(0,R.S3)(e)}))}),[]);var _t=O.map((function(e){return{value:e.ClientGuID,label:e.ClientName}})),Ht=function(e){S.Z.get("".concat(w.N.baseApiURL,"clients/contacts/client/").concat(e)).then((function(e){200===e.data.code?_(e.data.data):204===e.data.code&&Ee("warning",e.data.message)})).catch((function(e){(0,R.S3)(e)})),ee(!0),setTimeout((function(){var e;null===(e=we.current)||void 0===e||e.scrollIntoView({behaviour:"Smooth"})}),800)};(0,l.useEffect)((function(){""!==J&&Ht(J)}),[Dt]);var $t=(0,a.Z)(G.map((function(e){return{id:e.ContactGuID,fullName:e.FullName,email:e.UserPrincipleName,mobile:e.Mobile}}))),Jt=[{field:"fullName",headerName:"Full Name",width:260},{field:"email",headerName:"Email",width:285},{field:"mobile",headerName:"Mobile",width:210},{field:"actions",type:"actions",headerName:"Actions",width:210,cellClassName:"actions",getActions:function(e){var t=e.id;return[(0,E.jsx)(r.Z,{onClick:function(){z(!0),setTimeout((function(){var e;null===(e=we.current)||void 0===e||e.scrollIntoView({behaviour:"Smooth"})}),500),Kt(t)},children:"Select"})]}}],Kt=function(e){Ie(e)},Qt=ae.map((function(e){return{value:e.id,label:e.userPrincipalName}})),Xt=t.filter((function(e){return e.RoleName.toLowerCase().includes("client")})).map((function(e){return{value:e.RoleID,label:e.RoleName}})),Yt=function(){rt(!0===(Je||Oe||Me)||""==re||""==fe||""==Ce||""==Ze)};(0,l.useEffect)((function(){Yt()}),[re,Ce,Ze,fe]);var en=(0,E.jsx)("div",{style:{width:"85%",margin:"20px auto",paddingBottom:"30px"},children:(0,E.jsx)(f.Z,{elevation:4,style:{width:"100%",alignContent:"center",margin:"20px auto",paddingBottom:"20px"},children:(0,E.jsxs)(s.Z,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"22ch"}},noValidate:!0,autoComplete:"off",children:[(0,E.jsx)("div",{style:{padding:"2px 4px",display:"flex",justifyContent:"center",width:"auto",height:"100px",margin:"20px auto"},children:(0,E.jsx)(f.Z,{component:"form",sx:{p:"2px 4px",display:"flex",width:"auto",height:"auto"},children:(0,E.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly"},children:[(0,E.jsx)("div",{children:(0,E.jsx)(m.Z,{sx:{p:"10px",margin:"20px auto"},"aria-label":"menu",children:(0,E.jsx)(p.Z,{})})}),(0,E.jsx)("div",{style:{width:"250px"},children:(0,E.jsx)(j.Z,{loading:Xe,value:re,defaultValue:"",onChange:function(e){var t;oe(e),t=e,me(""),ae.filter((function(e){e.id===t.value&&me(e.displayName)})),Yt()},inputValue:ue,onInputChange:function(e){xe(e),function(e){if(e.length>1){Ye(!0);var t={search:e};S.Z.post("".concat(w.N.baseApiURL,"appuser/search"),t).then((function(e){200===e.data.code?(ie(e.data[0]),Ye(!1)):204===e.data.code&&Ee("warning",e.data.message)})).catch((function(e){(0,R.S3)(e)}))}}(e)},autoComplete:!0,includeInputInList:!0,options:Qt,isOptionEqualToValue:function(e,t){return e.valueOf===t.valueOf},renderInput:function(e){return(0,E.jsx)(v.Z,(0,h.Z)((0,h.Z)({sx:{width:"250px"},required:!0},e),{},{label:"Search User",variant:"standard",id:"standard-search"}))}})}),(0,E.jsx)("div",{style:{margin:"20px 0px 10px 10px"},children:(0,E.jsx)(m.Z,{type:"button",children:(0,E.jsx)(x.Z,{})})})]})})}),(0,E.jsx)("br",{}),(0,E.jsx)("br",{}),(0,E.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"},children:[(0,E.jsxs)("div",{style:{display:"flex"},children:[(0,E.jsx)(C.Z,{sx:{fontSize:"16px",mt:"15px"},children:"Full Name:\xa0 "}),(0,E.jsx)(v.Z,{required:!0,value:fe,sx:{width:"30px"},id:"outlined-required",label:"Name",helperText:"Enter the Full Name",size:"small",onChange:Yt})]}),(0,E.jsxs)("div",{style:{display:"flex"},children:[(0,E.jsx)(C.Z,{sx:{fontSize:"16px",mt:"15px"},children:"Mobile Number:\xa0 "}),(0,E.jsx)(v.Z,{id:"outlined-req",label:"Phone",size:"small",defaultValue:"",onChange:function(e){var t;t=e.target.value,I().isLength(t,{min:10,max:13})&&I().isMobilePhone(t)?(Ae(!1),Te("")):(Ae(!0),Te("Please Enter the valid Mobile Number")),Yt(),ge(e.target.value)},error:Me,helperText:Pe})]})]}),(0,E.jsx)("br",{}),(0,E.jsx)("br",{}),(0,E.jsx)("div",{style:{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"},children:(0,E.jsxs)("div",{style:{marginBottom:40,marginLeft:47,display:"flex"},children:[(0,E.jsx)(C.Z,{sx:{fontSize:"16px",mt:"15px"},children:"Role:\xa0 "}),(0,E.jsxs)(Z.Z,{sx:{display:"flex",justifyContent:"space-around",width:"22ch"},error:Oe,children:[(0,E.jsx)(C.Z,{id:"demo-simple-select-error",children:"Select *"}),(0,E.jsx)(g.Z,{labelId:"demo-simple-select-error-label",id:"demo-simple-select-error",defaultValue:"",label:"Select *",size:"small",onOpen:function(){""===Ce&&(Be(!0),_e("Please Select the Role"))},onChange:function(e){var t;(t=e.target.value)>0&&(Se(t),Be(!1),_e("")),Yt()},children:Xt.map((function(e){return(0,E.jsx)(y.Z,{value:e.value,children:e.label},e.value)}))}),(0,E.jsx)(b.Z,{children:Ge})]})]})}),(0,E.jsx)("br",{}),(0,E.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[(0,E.jsx)(r.Z,{variant:"contained",style:{marginBottom:"30px",marginRight:"50px"},disabled:Me||Je||Oe||st,onClick:function(e){e.preventDefault();var t={UserPrincipleName:Qt[0].label,FullName:fe,UserEntity:n,RoleID:Ce,Mobile:Ze,ClientGuID:J,ContactGuID:Ue};S.Z.post("".concat(w.N.baseApiURL,"appuser"),t).then((function(e){if(200===e.data.code)return Ee("success",e.data.message),e.data;204===e.data.code&&Ee("warning",e.data.message)})).catch((function(e){(0,R.S3)(e)})),z(!1),o(!0),c()},children:"Save"}),(0,E.jsx)(r.Z,{variant:"contained",onClick:function(){z(!1),Ae(!1),o(!1)},style:{marginBottom:"30px"},children:"Cancel"})]})]})})});return(0,E.jsxs)(E.Fragment,{children:[nt&&(0,E.jsx)(f.Z,{elevation:3,sx:{width:"95%",height:"auto",alignContent:"center",margin:"2% auto"},children:(0,E.jsx)(s.Z,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"},height:"auto"},noValidate:!0,autoComplete:"off",children:(0,E.jsxs)("div",{children:[(0,E.jsx)("br",{}),(0,E.jsxs)("div",{style:{textAlign:"center"},children:[(0,E.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,E.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",margin:"3% 4%"},children:[(0,E.jsx)(v.Z,{id:"outlined-select-Cost-Center",select:!0,defaultValue:"",label:"Select Client",size:"small",helperText:"Please select the Client",onChange:function(e){K(e.target.value),Ht(e.target.value)},children:_t.map((function(e){return(0,E.jsx)(y.Z,{value:e.value,children:e.label},e.value)}))}),(0,E.jsx)(r.Z,{variant:"contained",startIcon:(0,E.jsx)(F.Z,{}),onClick:function(){Gt("/management/client",{state:Wt})},style:{width:"40%",height:"45%",margin:"3%"},children:"New Client"})]}),(0,E.jsx)("div",{children:(0,E.jsx)(r.Z,{onClick:function(){ee(!1),at(!1)},startIcon:(0,E.jsx)(P.Z,{fontSize:"small"})})})]}),(0,E.jsx)("br",{}),(0,E.jsx)("div",{children:Y&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(L.Z,{color:"primary","aria-label":"add",sx:{position:"relative",left:"40%"},onClick:xt,children:(0,E.jsx)(F.Z,{})}),(0,E.jsx)("div",{ref:we,children:(0,E.jsx)(s.Z,{sx:{height:300,width:"85%",alignContent:"center",margin:"3px auto 20px",paddingBottom:"25px","& .actions":{color:"text.secondary"},"& .textPrimary":{color:"text.primary"}},children:(0,E.jsx)(k._,{sx:{alignContent:"center"},rows:$t,getRowHeight:function(){return"auto"},columns:Jt,editMode:"row"})})})]})}),U&&(0,E.jsx)("div",{ref:we,children:en})]})]})})}),(0,E.jsx)(M.Z,{open:dt,onClose:ht,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,E.jsx)(s.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:500,bgcolor:"background.paper",boxShadow:24,p:4,padding:"30px 75px 30px 75px"},children:(0,E.jsxs)(s.Z,{textAlign:"center",children:[(0,E.jsx)(A.Z,{variant:"h4",mb:4,color:"secondary",textAlign:"center",children:"Add Contact"}),(0,E.jsx)(A.Z,{variant:"h6",component:"span",children:"Name:\xa0"}),(0,E.jsx)(v.Z,{id:"outlined-basic",label:"Name",variant:"outlined",autoFocus:!0,required:!0,size:"small",error:mt,helperText:mt?"Empty Field!":"",onChange:function(e){!function(e){jt(""==e),It(e)}(e.target.value)}}),(0,E.jsx)("br",{}),(0,E.jsx)("br",{}),(0,E.jsx)(A.Z,{variant:"h6",component:"span",children:"Email:\xa0"}),(0,E.jsx)(v.Z,{id:"outlined-basic",label:"Email",variant:"outlined",required:!0,size:"small",error:gt,helperText:gt?"Empty Field!":"",onChange:function(e){!function(e){e&&""!=e&&/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(e)?yt(!1):yt(!0),Mt(e)}(e.target.value)}}),(0,E.jsx)("br",{}),(0,E.jsx)("br",{}),(0,E.jsx)(A.Z,{variant:"h6",component:"span",children:"Mobile:\xa0"}),(0,E.jsx)(v.Z,{id:"outlined-basic",label:"Mobile",variant:"outlined",required:!0,size:"small",error:St,helperText:St?"Empty Field!":"",onChange:function(e){var t;(t=e.target.value)&&/^[0]?[789]\d{9}$/.test(t)?wt(!1):wt(!0),Pt(t)}}),(0,E.jsx)("br",{}),(0,E.jsx)(A.Z,{variant:"h6",component:"p",sx:{color:"red"}}),(0,E.jsx)("br",{}),(0,E.jsx)(r.Z,{variant:"contained",onClick:function(e){!function(e){e.preventDefault();var t={UserPrincipleName:Lt,FullName:Ut,Mobile:kt};S.Z.post("".concat(w.N.baseApiURL,"clients/contacts/").concat(J),t).then((function(e){if(200===e.data.code)return Ee("success",e.data.message),Ot(!0),e.data;204===e.data.code&&Ee("warning",e.data.message)})).catch((function(e){(0,R.S3)(e)})),ht()}(e),ht()},sx:{margin:"6px"},children:"Save"}),(0,E.jsx)("span",{children:(0,E.jsx)(r.Z,{variant:"contained",onClick:ht,children:"Cancel"})})]})})})]})},D=n(2900),O=n(3492),B=n(120),q=n(6321),W=n(4265),G=n(1330),_=n(4515),H=function(){var e=l.useState({}),t=(0,i.Z)(e,2),n=t[0],h=(t[1],l.useState(!1)),p=(0,i.Z)(h,2),j=p[0],U=p[1],L=l.useState(!1),M=(0,i.Z)(L,2),F=M[0],T=M[1],H=l.useState(!1),$=(0,i.Z)(H,2),J=$[0],K=$[1],Q=l.useState([]),X=(0,i.Z)(Q,2),Y=X[0],ee=X[1],te=l.useState({}),ne=(0,i.Z)(te,2),ae=ne[0],ie=ne[1],le=l.useState([]),se=(0,i.Z)(le,2),re=se[0],oe=se[1],ce=l.useState([]),de=(0,i.Z)(ce,2),ue=de[0],xe=de[1],he=l.useState(!1),pe=(0,i.Z)(he,2),fe=pe[0],me=pe[1],je=l.useState(!1),ve=(0,i.Z)(je,2),Ze=ve[0],ge=ve[1],ye=l.useState(""),be=(0,i.Z)(ye,2),Ce=be[0],Se=be[1],we=l.useState(""),Ne=(0,i.Z)(we,2),Re=Ne[0],Ue=Ne[1],Ie=l.useState(""),Ee=(0,i.Z)(Ie,2),ze=Ee[0],Le=Ee[1],Me=l.useState(!1),Ae=(0,i.Z)(Me,2),Fe=Ae[0],ke=Ae[1],Pe=l.useState(""),Te=(0,i.Z)(Pe,2),Ve=Te[0],De=Te[1],Oe=l.useRef(null),Be=l.useState(!1),qe=(0,i.Z)(Be,2),We=qe[0],Ge=qe[1],_e=l.useState(!1),He=(0,i.Z)(_e,2),$e=He[0],Je=He[1],Ke=l.useState(""),Qe=(0,i.Z)(Ke,2),Xe=Qe[0],Ye=(Qe[1],l.useState([])),et=(0,i.Z)(Ye,2),tt=et[0],nt=et[1],at=l.useState([]),it=(0,i.Z)(at,2),lt=it[0],st=it[1],rt=(0,N.Z)(),ot=l.useState(!1),ct=(0,i.Z)(ot,2),dt=ct[0],ut=ct[1],xt=l.useState(""),ht=(0,i.Z)(xt,2),pt=ht[0],ft=ht[1],mt=l.useState(!1),jt=(0,i.Z)(mt,2),vt=jt[0],Zt=jt[1],gt=l.useState(""),yt=(0,i.Z)(gt,2),bt=yt[0],Ct=yt[1],St=l.useState(!1),wt=(0,i.Z)(St,2),Nt=wt[0],Rt=wt[1],Ut=l.useState(""),It=(0,i.Z)(Ut,2),Et=It[0],zt=It[1],Lt=l.useState(!0),Mt=(0,i.Z)(Lt,2),At=Mt[0],Ft=Mt[1],kt=function(){S.Z.get("".concat(w.N.baseApiURL,"appuser")).then((function(e){200===e.data.code?ee(e.data.data):204===e.data.code&&rt("warning",e.data.message)})).catch((function(e){(0,R.S3)(e)}))};l.useEffect((function(){kt()}),[Fe,We,$e,fe]),l.useEffect((function(){S.Z.get("".concat(w.N.baseApiURL,"costcenter")).then((function(e){200===e.data.code?oe(e.data.data):204===e.data.code&&rt("warning",e.data.message)})).catch((function(e){(0,R.S3)(e)})),S.Z.get("".concat(w.N.baseApiURL,"role")).then((function(e){200===e.data.code?xe(e.data.data):204===e.data.code&&rt("warning",e.data.message)})).catch((function(e){(0,R.S3)(e)}))}),[Ze,F,J]);var Pt=re.map((function(e){return{value:e.CostCenterID,label:e.CostCenterName}})),Tt=ue.map((function(e){return{value:e.RoleID,label:e.RoleName}}));var Vt=lt.map((function(e){return{value:e.ClientName,label:e.ClientName}})),Dt=tt.map((function(e){return{value:e.UserEntity,label:e.UserEntity}})),Ot=function(e,t){1==fe&&t.length>0?S.Z.get("".concat(w.N.baseApiURL,"appuser?").concat(e,"=").concat(t)).then((function(e){200===e.data.code?ee(e.data.data):204===e.data.code&&rt("warning",e.data.message)})).catch((function(e){(0,R.S3)(e)})):0!=fe&&0!=t.length||kt()},Bt=(0,a.Z)(Y.filter((function(e){return e.FullName.toLowerCase().startsWith(Xe.toLowerCase())})).map((function(e){return{id:e.UserGuID,entity:e.UserEntity,fullName:e.FullName,email:e.UserPrincipleName,clientName:e.ClientName,role:e.RoleName,login:e.IsLoginEnabled}}))),qt=function(){Ft(!0===(Nt||vt||dt||Nt)||""==ze||""==Ce)};l.useEffect((function(){qt()}),[Re,ze,Ce]);var Wt=[{field:"entity",headerName:"Entity",width:120},{field:"fullName",headerName:"Full Name",width:210},{field:"email",headerName:"Email",width:255},{field:"clientName",headerName:"Client Name",width:230},{field:"role",headerName:"Role",width:120},{field:"actions",type:"actions",headerName:"Actions",width:200,cellClassName:"actions",getActions:function(e){return[(0,E.jsx)(D.Z,{value:"bottom",sx:{paddingRight:"20px"},control:(0,E.jsx)(c.Z,{color:"primary",defaultChecked:e.row.login,onChange:function(t){return function(e,t){var n={IsLoginEnabled:t?1:0};S.Z.patch("".concat(w.N.baseApiURL,"usermaster/").concat(e),n).then((function(e){200===e.data.code?rt("success",e.data.message):204===e.data.code&&rt("warning",e.data.message)})).catch((function(e){(0,R.S3)(e)}))}(e.id,t.target.checked)}}),label:"Login",labelPlacement:"bottom"}),(0,E.jsx)(_.u,{icon:(0,E.jsx)(o.Z,{}),label:"Edit",className:"textPrimary",onClick:(t=e.id,function(){U(!1),T(!1),K(!1),ge(!0),S.Z.get("".concat(w.N.baseApiURL,"appuser/").concat(t)).then((function(e){200===e.data.code?ie(e.data.data[0]):204===e.data.code&&rt("warning",e.data.message)})).catch((function(e){(0,R.S3)(e)})),setTimeout((function(){var e;null===(e=Oe.current)||void 0===e||e.scrollIntoView({behaviour:"Smooth"})}),500)}),color:"inherit"})];var t}}],Gt=(0,E.jsx)("div",{style:{width:"95%",margin:"30px auto"},children:(0,E.jsx)(f.Z,{elevation:3,sx:{width:"100%",alignContent:"center",margin:"20px auto"},children:(0,E.jsxs)(s.Z,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[(0,E.jsxs)("div",{children:[(0,E.jsx)("div",{style:{padding:"2px 4px",display:"flex",justifyContent:"center",width:"auto",height:"100px",margin:"20px auto"},children:(0,E.jsx)(f.Z,{component:"form",sx:{p:"2px 40px",display:"flex",width:"auto",height:"auto"},children:(0,E.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"},children:[(0,E.jsx)(C.Z,{sx:{fontSize:"18px",mt:"20px"},children:"Email:\xa0"}),(0,E.jsx)(A.Z,{variant:"h6",sx:{mt:"17px"},children:null===ae||void 0===ae?void 0:ae.UserPrincipleName})]})})}),(0,E.jsx)("br",{}),(0,E.jsx)("br",{}),(0,E.jsxs)("div",{style:{display:"block",fontSize:"18px"},children:[(0,E.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"},children:[(0,E.jsxs)("div",{style:{display:"flex"},children:[(0,E.jsx)(C.Z,{sx:{fontSize:"18px",mt:"15px"},children:"Full Name:\xa0 "}),(0,E.jsx)(Z.Z,{children:(0,E.jsx)(v.Z,{id:"outlined-read-only-input",value:null===ae||void 0===ae?void 0:ae.FullName,size:"small"})})]}),(0,E.jsxs)("div",{style:{display:"flex"},children:[(0,E.jsx)(C.Z,{sx:{fontSize:"18px",mt:"15px"},children:"Mobile Number:\xa0 "}),(0,E.jsx)(Z.Z,{children:(0,E.jsx)(v.Z,{id:"filled-multiline-static",defaultValue:null===ae||void 0===ae?void 0:ae.Mobile,onChange:function(e){var t;t=e.target.value,I().isLength(t,{min:10,max:13})&&I().isMobilePhone(t)?(ut(!1),ft("")):(ut(!0),ft("Please Enter the valid Mobile Number")),qt(),Se(e.target.value)},error:dt,helperText:pt,size:"small"})})]})]}),(0,E.jsx)("br",{}),(0,E.jsx)("br",{}),(0,E.jsx)("br",{}),(0,E.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"},children:[(0,E.jsxs)("div",{style:{marginBottom:40,marginLeft:47,display:"flex"},children:[(0,E.jsx)(C.Z,{sx:{fontSize:"18px",mt:"15px"},children:"Role:\xa0 "}),(0,E.jsxs)(Z.Z,{sx:{display:"flex",justifyContent:"space-around",width:"25ch"},error:vt,children:[(0,E.jsx)(C.Z,{id:"demo-simple-select-error",children:"Select *"}),(0,E.jsxs)(g.Z,{labelId:"demo-simple-select-error-label",id:"demo-simple-select-error",defaultValue:"",label:"Select *",size:"small",onOpen:function(){""===ze&&(Zt(!0),Ct("Please Select the Role"))},onChange:function(e){qt(),Le(e.target.value),e.target.value>0&&(Zt(!1),Ct(""),"OEM"===(null===ae||void 0===ae?void 0:ae.UserEntity)&&Rt(!0))},children:[(0,E.jsx)(y.Z,{disabled:!0,value:"",children:(0,E.jsx)("em",{children:ae.RoleName})}),Tt.map((function(e){return(0,E.jsx)(y.Z,{value:e.value+"",children:e.label},e.value)}))]}),(0,E.jsx)(b.Z,{children:bt})]})]}),(0,E.jsx)("div",{children:function(){if("OEM"===(null===ae||void 0===ae?void 0:ae.UserEntity))return(0,E.jsxs)("div",{style:{marginBottom:40,marginLeft:40,display:"flex"},children:[(0,E.jsx)(C.Z,{sx:{fontSize:"18px",mt:"15px"},children:"Cost Center:\xa0 "}),(0,E.jsxs)(Z.Z,{sx:{display:"flex",justifyContent:"space-around",width:"25ch"},error:Nt,children:[(0,E.jsx)(C.Z,{id:"demo-simple-select-error",children:"Select *"}),(0,E.jsxs)(g.Z,{labelId:"demo-simple-select-error-label",id:"demo-simple-select-error",label:"Select *",size:"small",onOpen:function(){""===Re?(Rt(!0),zt("Please Select the Cost Center")):"0"===Re&&(Rt(!1),zt(""))},onClose:function(){return Ft(!1)},onChange:function(e){var t;qt(),(t=e.target.value)>0&&(Ue(t),Rt(!1),zt(""))},children:[(0,E.jsx)(y.Z,{disabled:!0,value:"",children:(0,E.jsx)("em",{children:ae.CostCenterName})}),Pt.map((function(e){return(0,E.jsx)(y.Z,{value:e.value+"",children:e.label},e.value+"")}))]}),(0,E.jsx)(b.Z,{children:Et})]})]})}()})]})]})]}),(0,E.jsx)("br",{}),(0,E.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[(0,E.jsx)(r.Z,{variant:"contained",style:{marginBottom:"50px",marginRight:"65px"},disabled:dt||Nt||vt||At,onClick:function(e){return function(e,t){var n;t.preventDefault(),n="Client"===ae.UserEntity?{RoleID:ze,Mobile:Ce}:{RoleID:ze,CostCenterID:Re,Mobile:Ce},ge(!1),S.Z.patch("".concat(w.N.baseApiURL,"appuser/").concat(e),n).then((function(e){200===e.data.code?(rt("success",e.data.message),ke(!0)):204===e.data.code&&rt("warning",e.data.message)})).catch((function(e){(0,R.S3)(e)})),ke(!1)}(null===ae||void 0===ae?void 0:ae.UserGuID.toLowerCase(),e)},children:"Update"}),(0,E.jsx)(r.Z,{variant:"contained",onClick:function(){ge(!1),ut(!1),Zt(!1),Rt(!1),Le(""),Ue(""),Se("")},style:{marginBottom:"50px"},children:"Cancel"})]})]})})});return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)("div",{className:"common-top",style:{display:"flex",justifyContent:"space-between"},children:[(0,E.jsx)(r.Z,{variant:"contained",startIcon:(0,E.jsx)(u.Z,{}),style:{position:"relative",left:"30px"},onClick:function(){ge(!1),U(!0),setTimeout((function(){var e;null===(e=Oe.current)||void 0===e||e.scrollIntoView({behaviour:"Smooth"})}),500)},children:"Add User"}),(0,E.jsx)(r.Z,{variant:"outlined",onClick:function(){me(!0),S.Z.get("".concat(w.N.baseApiURL,"usermaster")).then((function(e){200===e.data.code?nt(e.data.data):204===e.data.code&&rt("warning",e.data.message)})).catch((function(e){(0,R.S3)(e)})),S.Z.get("".concat(w.N.baseApiURL,"clients/client/NameAndId")).then((function(e){200===e.data.code?st(e.data.data):204===e.data.code&&rt("warning",e.data.message)})).catch((function(e){(0,R.S3)(e)}))},startIcon:(0,E.jsx)(d.Z,{}),style:{position:"relative",right:"30px"},children:"Filter"})]}),fe&&(0,E.jsx)("div",{children:(0,E.jsxs)(f.Z,{elevation:3,sx:{width:"95%",display:"flex",justifyContent:"space-between",margin:"20px auto"},children:[(0,E.jsxs)("div",{style:{display:"flex",width:"50%"},children:[(0,E.jsx)(m.Z,{type:"button",sx:{p:"10px"},"aria-label":"search",children:(0,E.jsx)(x.Z,{})}),(0,E.jsx)(v.Z,{className:"drop",fullWidth:!0,label:"Search User by Full Name...",id:"standard-basic",onChange:function(e){Ot("fullName",e.target.value)}})]}),(0,E.jsxs)(f.Z,{sx:{width:"50%",display:"flex",justifyContent:"space-evenly"},children:[(0,E.jsx)("div",{style:{position:"relative",top:10,left:10},children:(0,E.jsx)(v.Z,{select:!0,className:"drop",sx:{width:"130px"},label:"User Entity",size:"small",onChange:function(e){Ot("UserEntity",e.target.value)},children:Dt.map((function(e){return(0,E.jsx)(y.Z,{value:e.label+"",children:e.label},"UserEntity")}))})}),(0,E.jsx)("div",{style:{position:"relative",top:10,left:10},children:(0,E.jsx)(v.Z,{select:!0,label:"Client Name",className:"drop",sx:{width:"130px"},size:"small",onChange:function(e){Ot("ClientName",e.target.value)},children:Vt.map((function(e){return(0,E.jsx)(y.Z,{value:e.label+"",children:e.label},"ClientName")}))})}),(0,E.jsx)("div",{style:{position:"relative",top:10,left:10,right:40},children:(0,E.jsx)(v.Z,{select:!0,label:"Role",className:"drop",sx:{width:"130px"},size:"small",onChange:function(e){Ot("RoleName",e.target.value)},children:Tt.map((function(e){return(0,E.jsx)(y.Z,{value:e.label+"",children:e.label},"RoleName")}))})}),(0,E.jsx)("div",{style:{position:"relative",top:15,left:20,right:60},children:(0,E.jsx)(r.Z,{onClick:function(){return me(!1)},startIcon:(0,E.jsx)(P.Z,{fontSize:"small"})})})]})]})}),(0,E.jsx)(f.Z,{elevation:3,sx:{width:"95%",height:"400",alignContent:"center",margin:"10px auto"},children:(0,E.jsx)(s.Z,{sx:{height:500,width:"100%",alignContent:"center","& .actions":{color:"text.secondary"},"& .textPrimary":{color:"text.primary"}},children:(0,E.jsx)(k._,{rows:Bt,getRowHeight:function(){return"auto"},columns:Wt,editMode:"row",rowModesModel:n,components:{Toolbar:function(){return(0,E.jsx)(W.D,{children:(0,E.jsx)(G.Zh,{style:{marginLeft:"20px"},printOptions:{disableToolbarButton:!0}})})}}})})}),Ze&&(0,E.jsxs)("div",{ref:Oe,children:[Gt," "]}),(0,E.jsx)("div",{style:{width:"95%",position:"relative",top:10,left:30},children:j&&(0,E.jsxs)(f.Z,{elevation:3,sx:{width:"100%",height:"40",padding:"30px",display:"flex",justifyContent:"space-between"},children:[(0,E.jsx)("div",{children:(0,E.jsx)(Z.Z,{children:(0,E.jsx)(O.Z,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",onChange:function(e,t){var n;"OEM"===(n=t)?T(!0):"Client"===n?(T(!1),K(!0)):K(!1)},sx:{display:"flex",justifyContent:"flex-start",margin:"5px 10px"},children:(0,E.jsxs)("div",{ref:Oe,style:{display:"flex",justifyContent:"flex-start"},children:[(0,E.jsx)(B.Z,{id:"demo-row-radio-buttons-group-label",sx:{margin:"10px 20px 10px 10px"},children:"Select Entity:\xa0\xa0\xa0\xa0"}),(0,E.jsx)(D.Z,{value:"OEM",control:(0,E.jsx)(q.Z,{onChange:function(e){De(e.target.value),setTimeout((function(){var e;null===(e=Oe.current)||void 0===e||e.scrollIntoView({behaviour:"Smooth"})}),500)}}),sx:{marginRight:"30px"},label:"OEM"}),(0,E.jsx)(D.Z,{value:"Client",control:(0,E.jsx)(q.Z,{onChange:function(e){De(e.target.value),setTimeout((function(){var e;null===(e=Oe.current)||void 0===e||e.scrollIntoView({behaviour:"Smooth"})}),500)}}),label:"Client"})]})})})}),(0,E.jsx)("div",{style:{position:"relative",left:"30px",top:"0px"},children:(0,E.jsx)(r.Z,{onClick:function(){return U(!1)},startIcon:(0,E.jsx)(P.Z,{fontSize:"small"})})})]})}),F?(0,E.jsxs)("div",{ref:Oe,children:["  ",(0,E.jsx)(z,{costcenters:re,roles:ue,entity:Ve,UaddOem:function(e){Ge(e)},getAppUsers:kt})]}):J?(0,E.jsx)("div",{ref:Oe,children:(0,E.jsx)(V,{roles:ue,entity:Ve,UaddClient:function(e){Je(e),console.log(e),console.log($e)},getAppUsers:kt})}):(0,E.jsx)("div",{})]})}},4423:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(2791),i=n(1659),l=function(){var e=(0,a.useContext)(i.I).setToaster;return function(t,n){e({type:t,text:n})}}}}]);
//# sourceMappingURL=707.3984373b.chunk.js.map