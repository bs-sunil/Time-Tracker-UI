"use strict";(self.webpackChunkreact_project=self.webpackChunkreact_project||[]).push([[154],{9154:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var i=t(4165),a=t(5861),r=t(2982),o=t(885),l=t(2791),s=t(7660),c=t(9076),d=t(4515),u=t(4265),h=t(1330),x=t(180),m=t(1286),v=t(4565),p=t(7205),g=t(286),Z=t(9911),f=t(8254),b=t(6015),j=t(185),C=t(3353),y=t(5403),N=t(6557),w=t(7247),S=t(2419),M=t(3746),k=t(5590),z=t(4423),A=t(9102),D=t(5772),F=t(184),E=function(){var e,n,t=(0,D.TH)().state,E=(0,D.s0)(),P=(0,l.useState)([]),I=(0,o.Z)(P,2),V=I[0],R=I[1],L=(0,l.useState)(!1),T=(0,o.Z)(L,2),U=T[0],H=T[1],G=(0,l.useState)(!1),q=(0,o.Z)(G,2),W=q[0],_=q[1],B=(0,l.useState)(!1),$=(0,o.Z)(B,2),O=$[0],J=$[1],K=(0,l.useState)(!1),Q=(0,o.Z)(K,2),X=Q[0],Y=Q[1],ee=(0,l.useState)(!1),ne=(0,o.Z)(ee,2),te=(ne[0],ne[1],(0,l.useState)("")),ie=(0,o.Z)(te,2),ae=ie[0],re=ie[1],oe=(0,l.useState)(""),le=(0,o.Z)(oe,2),se=le[0],ce=le[1],de=(0,l.useState)(),ue=(0,o.Z)(de,2),he=ue[0],xe=ue[1],me=(0,l.useState)(),ve=(0,o.Z)(me,2),pe=ve[0],ge=ve[1],Ze=(0,l.useState)(),fe=(0,o.Z)(Ze,2),be=fe[0],je=fe[1],Ce=(0,l.useState)([]),ye=(0,o.Z)(Ce,2),Ne=ye[0],we=ye[1],Se=(0,l.useState)([]),Me=(0,o.Z)(Se,2),ke=(Me[0],Me[1]),ze=(0,l.useState)({}),Ae=(0,o.Z)(ze,2),De=(Ae[0],Ae[1],(0,l.useState)(!1)),Fe=(0,o.Z)(De,2),Ee=(Fe[0],Fe[1],(0,l.useState)("")),Pe=(0,o.Z)(Ee,2),Ie=Pe[0],Ve=Pe[1],Re=(0,l.useState)([]),Le=(0,o.Z)(Re,2),Te=Le[0],Ue=Le[1],He=(0,l.useState)([]),Ge=(0,o.Z)(He,2),qe=Ge[0],We=Ge[1],_e=(0,l.useState)(!1),Be=(0,o.Z)(_e,2),$e=Be[0],Oe=Be[1],Je=(0,l.useState)(!1),Ke=(0,o.Z)(Je,2),Qe=Ke[0],Xe=Ke[1],Ye=(0,l.useState)(!1),en=(0,o.Z)(Ye,2),nn=en[0],tn=en[1],an=(0,l.useState)(!1),rn=(0,o.Z)(an,2),on=rn[0],ln=rn[1],sn=(0,l.useState)(!1),cn=(0,o.Z)(sn,2),dn=cn[0],un=cn[1],hn=(0,l.useState)(""),xn=(0,o.Z)(hn,2),mn=xn[0],vn=xn[1],pn=(0,l.useState)([]),gn=(0,o.Z)(pn,2),Zn=gn[0],fn=gn[1],bn=(0,l.useState)([]),jn=(0,o.Z)(bn,2),Cn=jn[0],yn=jn[1],Nn=(0,l.useState)([]),wn=(0,o.Z)(Nn,2),Sn=wn[0],Mn=wn[1],kn=(0,l.useState)(!1),zn=(0,o.Z)(kn,2),An=zn[0],Dn=zn[1],Fn=(0,l.useState)([]),En=(0,o.Z)(Fn,2),Pn=En[0],In=En[1];function Vn(e){Oe(""==e),xe(e)}function Rn(e){e&&""!=e&&/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(e)?tn(!1):tn(!0),ge(e)}function Ln(e){e&&/^[0]?[789]\d{9}$/.test(e)?ln(!1):ln(!0),je(e)}(0,l.useEffect)((function(){!0===t&&Dn(!0)}),[]);var Tn=(0,z.Z)();(0,l.useEffect)((function(){s.Z.get("".concat(c.N.baseApiURL,"clients")).then((function(e){if(200===e.status){var n=e.data.data;R((0,r.Z)(n)),console.log(n),console.log(n[0].ClientGuID)}})).catch((function(e){console.log(e)}))}),[Zn,Cn]),l.useEffect((function(){}),[V,Te]);var Un=(0,r.Z)(V.map((function(e){return{id:e.ClientGuID,ClientName:e.ClientName,ClientDescription:e.ClientDescription}}))),Hn=(0,r.Z)(Ne.map((function(e){return console.log(e),{id:"".concat(Math.random()),FullName:"".concat(e.FullName),UserPrincipleName:"".concat(e.UserPrincipleName),Mobile:"".concat(e.Mobile)}}))),Gn=(0,r.Z)(qe.map((function(e){return e.ContactGuID?{id:"".concat(e.ContactGuID),ContactGuID:"".concat(e.ContactGuID),FullName:"".concat(e.FullName),UserPrincipleName:"".concat(e.UserPrincipleName),Mobile:"".concat(e.Mobile)}:{id:"".concat(Math.random()),FullName:"".concat(e.FullName),UserPrincipleName:"".concat(e.UserPrincipleName),Mobile:"".concat(e.Mobile)}}))),qn=[{field:"ClientName",headerName:"ClientName",width:350,headerAlign:"center",align:"center"},{field:"ClientDescription",headerName:"ClientDescription",width:700,headerAlign:"center",align:"center"},{field:"actions",type:"actions",headerName:"Actions",headerAlign:"center",width:180,cellClassName:"actions",getActions:function(e){var n=e.id;return[(0,F.jsx)(d.u,{icon:(0,F.jsx)(m.Z,{}),label:"Edit",className:"textPrimary",onClick:function(){return function(e){var n=e;vn(e),_n(),s.Z.get("".concat(c.N.baseApiURL,"clients/").concat(n)).then((function(e){if(200===e.status){var n=e.data.data;console.log(n),re(n[0].ClientName),ce(n[0].ClientDescription)}})),s.Z.get("".concat(c.N.baseApiURL,"clients/contacts/client/").concat(n)).then((function(e){if(200===e.status){var n=e.data.data;console.log(n),We((0,r.Z)(n))}}))}(n)},color:"secondary"}),(0,F.jsx)(d.u,{icon:(0,F.jsx)(M.Z,{}),label:"View",className:"textPrimary",onClick:function(){return function(e){var n=e;console.log(n),console.log("view is clicked"),Bn(),s.Z.get("".concat(c.N.baseApiURL,"clients/").concat(n)).then((function(e){if(200===e.status){var n=e.data.data;console.log(n),re(n[0].ClientName),ce(n[0].ClientDescription)}})),s.Z.get("".concat(c.N.baseApiURL,"clients/contacts/client/").concat(n)).then((function(e){if(200===e.status){var n=e.data.data;console.log(n),We((0,r.Z)(n))}}))}(n)},color:"secondary"})]}}],Wn=[{field:"FullName",headerName:"Name",width:200,headerAlign:"center",align:"center",editable:!0},{field:"UserPrincipleName",headerName:"Email",width:300,headerAlign:"center",align:"center",editable:!0},{field:"Mobile",headerName:"Mobile",width:200,headerAlign:"center",align:"center",editable:!0},{field:"actions",type:"actions",headerName:"Actions",headerAlign:"center",width:140,cellClassName:"actions",getActions:function(e){return[(0,F.jsx)(d.u,{icon:(0,F.jsx)(m.Z,{}),label:"Edit",className:"textPrimary",onClick:function(){return lt(e.row)},color:"secondary"}),(0,F.jsx)(d.u,{icon:(0,F.jsx)(w.Z,{}),size:"large",label:"Delete",className:"textPrimary",onClick:function(){return st(e.row)},color:"secondary"})]}}],_n=function(){_(!1),J(!0),Y(!1)},Bn=function(){_(!1),J(!1),Y(!0)},$n=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var n,t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:he&&""!=he?""!=pe&&pe?""!=be&&be?(n={ContactGuID:Pn.ContactGuID,UserPrincipleName:pe,FullName:he,Mobile:be},In(n),console.log(Pn),t=qe.filter((function(e){return e.ContactGuID!=Pn.ContactGuID})),We([].concat((0,r.Z)(t),[n])),Mn([].concat((0,r.Z)(t),[n])),Oe(!1),tn(!1),ln(!1),xe(""),ge(""),je("")):(ln(!0),it()):(tn(!0),it()):(Oe(!0),it());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),On={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid blue",boxShadow:24,p:4},Jn=l.useState(!1),Kn=(0,o.Z)(Jn,2),Qn=Kn[0],Xn=Kn[1],Yn=l.useState(!1),et=(0,o.Z)(Yn,2),nt=et[0],tt=et[1],it=function(){return tt(!0)},at=function(){return tt(!1)},rt=function(){return Xn(!0)},ot=function(){return Xn(!1)},lt=function(e){console.log(e),In(e),it()},st=function(e){if(qe){var n=Gn.filter((function(n){return n!==e}));console.log(e),e.Deleted="",Mn([].concat((0,r.Z)(n),[e])),console.log(Sn),We((0,r.Z)(n))}var t=Hn.filter((function(n){return n!==e}));we((0,r.Z)(t))};return(0,F.jsxs)("div",{className:"common-top",children:[(0,F.jsx)(v.Z,{variant:"h4",sx:{display:"flex",justifyContent:"center"},color:"primary",children:"Client Management"}),(0,F.jsxs)("div",{style:{},children:[(0,F.jsxs)("div",{style:{display:"flex",flexDirection:"row-reverse",alignItems:"center",justifyContent:"space-between",marginLeft:"4%"},children:[(0,F.jsx)(p.Z,{variant:"outlined",onClick:function(){H(!U)},startIcon:(0,F.jsx)(N.Z,{}),color:"primary",sx:{marginRight:"1%"},children:"Filter Client"}),(0,F.jsx)(p.Z,{variant:"contained",onClick:function(){_(!0),J(!1),Y(!1)},startIcon:(0,F.jsx)(C.Z,{}),children:"New Client"})]}),U&&(0,F.jsxs)("div",{style:{margin:"1% 0% 0 7%",width:"90%"},children:[(0,F.jsx)(g.Z,{elevation:8,children:(0,F.jsx)(Z.Z,{fullWidth:!0,label:"Search Client Name",id:"fullWidth",InputProps:{startAdornment:(0,F.jsx)(f.Z,{position:"start",children:(0,F.jsx)(y.Z,{})})},onChange:function(e){Ve(e.target.value),console.log("search handle is called"),s.Z.get("".concat(c.N.baseApiURL,"clients?ClientName=").concat(Ie)).then((function(e){if(200===e.status){var n=e.data.data;R((0,r.Z)(n))}}))},autoFocus:!0})}),(0,F.jsx)(p.Z,{startIcon:(0,F.jsx)(A.Z,{fontSize:"large"}),sx:{margin:"-8% 0 0 100%"},onClick:function(){H(!1)}})]}),(0,F.jsx)("div",{style:{height:350,width:"95%",margin:"1% 2% 2% 4%"},children:(0,F.jsx)(g.Z,{elevation:5,children:(0,F.jsx)("div",{style:{height:400,width:"100%"},children:(0,F.jsx)(x._,{columns:qn,rows:Un,components:{Toolbar:function(){return(0,F.jsx)(u.D,{children:(0,F.jsx)(h.Zh,{style:{marginLeft:"20px"}})})}}})})})}),W&&(0,F.jsxs)(b.Z,{sx:{margin:"auto",p:"50px"},children:[(0,F.jsx)(g.Z,{elevation:8,sx:{width:"100%",height:"100%",alignContent:"center",margin:"auto auto",border:"2px solid skyblue",p:"50px"},children:(0,F.jsx)(g.Z,{elevation:10,sx:{width:"100%",height:"70%",alignContent:"center",margin:"auto auto",border:"2px solid skyblue"},children:(0,F.jsxs)(b.Z,{sx:{height:500,width:"100%",alignContent:"center","&.actions":{color:"text.secondary"},"&.textPrimary":{color:"text.primary"}},children:[(0,F.jsx)(v.Z,{variant:"h4",color:"secondary",textAlign:"center",marginTop:"1%",children:"Add Client"}),(0,F.jsxs)("div",{style:{},children:[(0,F.jsxs)("div",{style:{},children:[(0,F.jsxs)(v.Z,{variant:"h6",sx:{margin:"6% 2% 2% 10%"},children:[(0,F.jsx)("span",{style:{color:"red"},children:" *"})," Client Name:"]}),(0,F.jsx)("br",{}),(0,F.jsx)("br",{})," ",(0,F.jsx)("br",{}),(0,F.jsx)("div",{style:{margin:"-8% 2% 2% 10%"},children:(0,F.jsx)(Z.Z,{id:"outlined-basic",label:"Client Name",variant:"outlined",autoFocus:!0,error:Qe,helperText:Qe?"Empty Field!":"",onChange:function(e){var n;n=e.target.value,Xe(""==n),re(n)}})})]}),(0,F.jsxs)("div",{style:{margin:"4% 2% 2% 10%"},children:[(0,F.jsxs)(v.Z,{variant:"h6",component:"span",children:[(0,F.jsx)("span",{style:{color:"red"},children:" *"}),"Client Description:"]}),(0,F.jsx)("br",{}),(0,F.jsx)("br",{}),(0,F.jsx)("br",{}),(0,F.jsx)(b.Z,{component:"form",sx:{"& .MuiTextField-root":{m:5,width:"100%",margin:"4% 4% 0 -5%"}},noValidate:!0,autoComplete:"off",children:(0,F.jsx)("div",{style:{margin:"-8% 2% 2% 4%"},children:(0,F.jsx)(Z.Z,{id:"outlined-multiline-static",label:"Client Description",multiline:!0,rows:4,required:!0,error:dn,helperText:dn?"Empty Field!":"",onChange:function(e){var n;n=e.target.value,un(""==n),ce(n)}})})})]})]})]})})}),(0,F.jsx)("br",{}),(0,F.jsx)("br",{}),(0,F.jsxs)("div",{style:{height:350,width:"75%",marginLeft:"15%"},children:[(0,F.jsx)(k.Z,{color:"primary","aria-label":"add",sx:{margin:"0 0 0 100%"},onClick:rt,children:(0,F.jsx)(S.Z,{})}),(0,F.jsxs)(g.Z,{elevation:8,sx:{width:"100%",height:"104%",alignContent:"center",margin:"auto auto",border:"2px solid skyblue"},children:[(0,F.jsx)(v.Z,{variant:"h4",color:"secondary",textAlign:"center",marginTop:"2%",children:"Add Contacts"}),(0,F.jsx)("div",{style:{height:300,width:"100%"},children:(0,F.jsx)(x._,{columns:Wn,rows:Hn})})]})]}),(0,F.jsx)("br",{}),(0,F.jsx)("br",{}),(0,F.jsx)("br",{}),(0,F.jsx)("br",{}),(0,F.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"1%"},children:[(0,F.jsx)(p.Z,{variant:"contained",color:"secondary",onClick:function(){if(ae&&""!=ae)if(se&&""!=se){var e={ClientName:ae,ClientDescription:se},n=[{ClientDetails:{ClientName:ae,ClientDescription:se},ContactDetails:(0,r.Z)(Ne.map((function(e){return{UserPrincipleName:"".concat(e.UserPrincipleName),FullName:"".concat(e.FullName),Mobile:"".concat(e.Mobile)}})))}];console.log(e),ke([e]),s.Z.post("".concat(c.N.baseApiURL,"clients"),n).then((function(e){200===e.status?(console.log(e),fn([n]),_(!1),Tn("success",e.data.message),An&&(E("/management/user"),Dn(!1))):Tn("warning",e.data.message)})).catch((function(e){console.log(e.message)}))}else un(!0);else Xe(!0)},children:"Save"}),(0,F.jsx)(p.Z,{variant:"contained",color:"secondary",onClick:function(){_(!1),An&&(E("/management/user"),Dn(!1))},children:"Cancel"})]})]}),O&&(0,F.jsxs)(b.Z,{sx:{margin:"auto",p:"50px"},children:[(0,F.jsx)(g.Z,{elevation:8,sx:{width:"100%",height:"100%",alignContent:"center",margin:"auto auto",border:"2px solid skyblue",p:"50px"},children:(0,F.jsx)(g.Z,{elevation:8,sx:{width:"100%",height:"70%",alignContent:"center",margin:"auto auto",border:"2px solid skyblue"},children:(0,F.jsxs)(b.Z,{sx:{height:500,width:"100%",alignContent:"center","&.actions":{color:"text.secondary"},"&.textPrimary":{color:"text.primary"}},children:[(0,F.jsx)(v.Z,{variant:"h4",color:"secondary",textAlign:"center",marginTop:"1%",children:"Edit Client"}),(0,F.jsxs)("div",{style:{},children:[(0,F.jsxs)("div",{style:{},children:[(0,F.jsxs)(v.Z,{variant:"h6",sx:{margin:"6% 2% 2% 10%"},children:[(0,F.jsx)("span",{style:{color:"red"},children:" *"}),"Client Name:"]}),(0,F.jsx)("br",{}),(0,F.jsx)("br",{})," ",(0,F.jsx)("br",{}),(0,F.jsx)("div",{style:{margin:"-8% 2% 2% 10%"},children:(0,F.jsx)(Z.Z,{id:"outlined-basic",label:"Client Name",variant:"outlined",autoFocus:!0,onChange:function(e){re(e.target.value)},value:ae})})]}),(0,F.jsxs)("div",{style:{margin:"4% 2% 2% 10%"},children:[(0,F.jsxs)(v.Z,{variant:"h6",component:"span",children:[(0,F.jsx)("span",{style:{color:"red"},children:" *"})," Client Description:"]}),(0,F.jsx)("br",{}),(0,F.jsx)("br",{}),(0,F.jsx)("br",{}),(0,F.jsx)(b.Z,{component:"form",sx:{"& .MuiTextField-root":{m:5,width:"100%",margin:"4% 4% 0 -5%"}},noValidate:!0,autoComplete:"off",children:(0,F.jsx)("div",{style:{margin:"-8% 2% 2% 4%"},children:(0,F.jsx)(Z.Z,{id:"outlined-multiline-static",label:"Client Description",multiline:!0,rows:4,onChange:function(e){ce(e.target.value)},value:se})})})]})]})]})})}),(0,F.jsx)("br",{}),(0,F.jsx)("br",{}),(0,F.jsxs)("div",{style:{height:350,width:"75%",marginLeft:"15%"},children:[(0,F.jsx)(k.Z,{color:"primary","aria-label":"add",sx:{margin:"0 0 0 100%"},onClick:rt,children:(0,F.jsx)(S.Z,{})}),(0,F.jsxs)(g.Z,{elevation:8,sx:{width:"100%",height:"104%",alignContent:"center",margin:"auto auto",border:"2px solid skyblue"},children:[(0,F.jsx)(v.Z,{variant:"h4",color:"secondary",textAlign:"center",marginTop:"2%",children:"Edit Contacts"}),(0,F.jsx)("div",{style:{height:300,width:"100%"},children:(0,F.jsx)(x._,{columns:Wn,rows:Gn,editMode:"row",experimentalFeatures:{newEditingApi:!0}})})]})]}),(0,F.jsxs)("div",{style:{display:"flex",margin:"7% 0 0 45%"},children:[(0,F.jsx)(p.Z,{variant:"contained",color:"secondary",onClick:function(){var e={ClientName:ae,ClientDescription:se};console.log(Sn),console.log(qe),We((0,r.Z)(qe)),console.log(qe);var n=mn,t=[{ClientDetails:{ClientName:ae,ClientDescription:se},ContactDetails:(0,r.Z)(Sn)}];console.log(t),Ue([e]),console.log(n),console.log(Sn),s.Z.patch("".concat(c.N.baseApiURL,"clients/").concat(n,"/contacts"),t).then((function(e){200===e.status?(console.log(e),yn([t]),J(!1),Tn("success",e.data.message)):Tn("warning",e.data.message)})).catch((function(e){console.log(e.message)}))},sx:{margin:"2%"},children:"Save"}),(0,F.jsx)(p.Z,{variant:"contained",color:"secondary",sx:{margin:"2%"},onClick:function(){J(!1)},children:"Cancel"})]})]}),X&&(0,F.jsxs)(b.Z,{sx:{margin:"auto",p:"50px"},children:[(0,F.jsx)(g.Z,{elevation:8,sx:{width:"100%",height:"100%",alignContent:"center",margin:"auto auto",border:"2px solid skyblue",p:"50px"},children:(0,F.jsx)(g.Z,{elevation:8,sx:{width:"100%",height:"70%",alignContent:"center",margin:"auto auto",border:"2px solid skyblue"},children:(0,F.jsxs)(b.Z,{sx:{height:450,width:"100%",alignContent:"center","&.actions":{color:"text.secondary"},"&.textPrimary":{color:"text.primary"}},children:[(0,F.jsx)(v.Z,{variant:"h4",color:"secondary",textAlign:"center",children:"Client Details"}),(0,F.jsx)("div",{style:{marginTop:"7%"},children:(0,F.jsxs)("div",{style:{width:"50%",marginLeft:"auto",marginRight:"auto"},children:[(0,F.jsxs)("div",{style:{display:"flex",alignItems:"center",paddingRight:"2%"},children:[(0,F.jsx)(v.Z,{variant:"h6",component:"span",color:"primary",children:"Client Name:"}),(0,F.jsx)(v.Z,{variant:"h6",component:"span",children:ae})]}),(0,F.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,F.jsx)(v.Z,{variant:"h6",component:"span",color:"primary",children:"Client Description:"}),(0,F.jsxs)(v.Z,{variant:"h6",children:["\u2002",se]})]})]})})]})})}),(0,F.jsx)("br",{}),(0,F.jsx)("br",{}),(0,F.jsx)("div",{children:(0,F.jsx)("div",{style:{height:350,width:"80%",marginLeft:"10%"},children:(0,F.jsxs)(g.Z,{elevation:8,sx:{width:"100%",height:"100%",alignContent:"center",margin:"auto auto",border:"2px solid skyblue"},children:[(0,F.jsx)(v.Z,{variant:"h4",color:"secondary",textAlign:"center",marginTop:"2%",children:"Contact Details"}),(0,F.jsx)("div",{style:{height:300,width:"100%"},children:(0,F.jsx)(x._,{columns:[{field:"FullName",headerName:"Name",width:250,headerAlign:"center",align:"center"},{field:"UserPrincipleName",headerName:"Email",width:350,headerAlign:"center",align:"center"},{field:"Mobile",headerName:"Mobile",width:250,headerAlign:"center",align:"center"}],rows:Gn})})]})})})]})]}),(0,F.jsx)("div",{children:(0,F.jsx)(j.Z,{open:Qn,onClose:ot,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,F.jsx)(b.Z,{sx:On,children:(0,F.jsxs)(b.Z,{textAlign:"center",children:[(0,F.jsx)(v.Z,{variant:"h4",mb:4,color:"secondary",textAlign:"center",children:"Add Contact"}),(0,F.jsxs)(v.Z,{variant:"h6",component:"span",children:[(0,F.jsx)("span",{style:{color:"red"},children:" *"}),"Name:"]}),(0,F.jsx)(Z.Z,{id:"outlined-basic",label:"Name",variant:"outlined",autoFocus:!0,required:!0,error:$e,helperText:$e?"Empty Field!":"",onChange:function(e){Vn(e.target.value)}}),(0,F.jsx)("br",{}),(0,F.jsx)("br",{}),(0,F.jsxs)(v.Z,{variant:"h6",component:"span",children:[(0,F.jsx)("span",{style:{color:"red"},children:" *"}),"Email:"]}),(0,F.jsx)(Z.Z,{id:"outlined-basic",label:"Email",variant:"outlined",required:!0,error:nn,helperText:nn?"Empty Field! or Not Valid Email Format":"",onChange:function(e){Rn(e.target.value)}}),(0,F.jsx)("br",{}),(0,F.jsx)("br",{}),(0,F.jsxs)(v.Z,{variant:"h6",component:"span",children:[(0,F.jsx)("span",{style:{color:"red"},children:" *"})," Mobile:"]}),(0,F.jsx)(Z.Z,{id:"outlined-basic",label:"Mobile",variant:"outlined",required:!0,error:on,helperText:on?"Empty Field! or Not Valid":"",onChange:function(e){Ln(e.target.value)}}),(0,F.jsx)("br",{}),(0,F.jsx)("br",{}),(0,F.jsx)(p.Z,{variant:"contained",onClick:function(){he&&""!=he?""!=pe&&pe?""!=be&&be?(e={ContactGuID:null,FullName:he,UserPrincipleName:pe,Mobile:be},console.log(e),n={ContactGuID:null,UserPrincipleName:pe,FullName:he,Mobile:be},we([e].concat((0,r.Z)(Ne))),We([n].concat((0,r.Z)(qe))),Mn([].concat((0,r.Z)(qe),[n])),console.log(Ne),console.log(qe),Oe(!1),tn(!1),ln(!1),xe(""),ge(""),je("")):(ln(!0),rt()):(tn(!0),rt()):(Oe(!0),rt()),he&&pe&&be?ot():rt()},sx:{margin:"6px"},children:"Save"}),(0,F.jsx)("span",{children:(0,F.jsx)(p.Z,{variant:"contained",onClick:ot,children:"Cancel"})})]})})})}),(0,F.jsx)("div",{children:(0,F.jsx)(j.Z,{open:nt,onClose:at,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,F.jsx)(b.Z,{sx:On,children:(0,F.jsxs)(b.Z,{textAlign:"center",children:[(0,F.jsx)(v.Z,{variant:"h4",mb:4,color:"secondary",textAlign:"center",children:"Edit Contact"}),(0,F.jsxs)(v.Z,{variant:"h6",component:"span",children:[(0,F.jsx)("span",{style:{color:"red"},children:" *"}),"Name:"]}),(0,F.jsx)(Z.Z,{id:"outlined-basic",label:"Name",variant:"outlined",autoFocus:!0,required:!0,error:$e,helperText:$e?"Empty Field!":"",onChange:function(e){Vn(e.target.value)},defaultValue:Pn.FullName}),(0,F.jsx)("br",{}),(0,F.jsx)("br",{}),(0,F.jsxs)(v.Z,{variant:"h6",component:"span",children:[(0,F.jsx)("span",{style:{color:"red"},children:" *"}),"Email:"]}),(0,F.jsx)(Z.Z,{id:"outlined-basic",label:"Email",variant:"outlined",required:!0,error:nn,helperText:nn?"Empty Field! or Not Valid Email Format":"",onChange:function(e){Rn(e.target.value)},defaultValue:Pn.UserPrincipleName}),(0,F.jsx)("br",{}),(0,F.jsx)("br",{}),(0,F.jsxs)(v.Z,{variant:"h6",component:"span",children:[(0,F.jsx)("span",{style:{color:"red"},children:" *"})," Mobile:"]}),(0,F.jsx)(Z.Z,{id:"outlined-basic",label:"Mobile",variant:"outlined",required:!0,error:on,helperText:on?"Empty Field! or Not Valid":"",onChange:function(e){Ln(e.target.value)},defaultValue:Pn.Mobile}),(0,F.jsx)("br",{}),(0,F.jsx)("br",{}),(0,F.jsx)(p.Z,{variant:"contained",onClick:function(){$n(),he&&pe&&be?at():it()},sx:{margin:"6px"},children:"Save"}),(0,F.jsx)("span",{children:(0,F.jsx)(p.Z,{variant:"contained",onClick:at,children:"Cancel"})})]})})})})]})}},4423:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(2791),a=t(1659),r=function(){var e=(0,i.useContext)(a.I).setToaster;return function(n,t){e({type:n,text:t})}}},2419:function(e,n,t){var i=t(4836);n.Z=void 0;var a=i(t(5649)),r=t(184),o=(0,a.default)((0,r.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");n.Z=o},7247:function(e,n,t){var i=t(4836);n.Z=void 0;var a=i(t(5649)),r=t(184),o=(0,a.default)((0,r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=o},9102:function(e,n,t){var i=t(4836);n.Z=void 0;var a=i(t(5649)),r=t(184),o=(0,a.default)((0,r.jsx)("path",{d:"M3 3v18h18V3H3zm14 12.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"DisabledByDefault");n.Z=o},1286:function(e,n,t){var i=t(4836);n.Z=void 0;var a=i(t(5649)),r=t(184),o=(0,a.default)((0,r.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");n.Z=o},3353:function(e,n,t){var i=t(4836);n.Z=void 0;var a=i(t(5649)),r=t(184),o=(0,a.default)((0,r.jsx)("path",{d:"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"}),"LibraryAdd");n.Z=o},6557:function(e,n,t){var i=t(4836);n.Z=void 0;var a=i(t(5649)),r=t(184),o=(0,a.default)((0,r.jsx)("path",{d:"M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"}),"Tune");n.Z=o},3746:function(e,n,t){var i=t(4836);n.Z=void 0;var a=i(t(5649)),r=t(184),o=(0,a.default)((0,r.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");n.Z=o},5590:function(e,n,t){t.d(n,{Z:function(){return b}});var i=t(4942),a=t(3366),r=t(7462),o=t(2791),l=t(8182),s=t(4419),c=t(2842),d=t(9853),u=t(5873),h=t(5878),x=t(1217);function m(e){return(0,x.Z)("MuiFab",e)}var v=(0,h.Z)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),p=t(6863),g=t(184),Z=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],f=(0,p.ZP)(c.Z,{name:"MuiFab",slot:"Root",shouldForwardProp:function(e){return(0,p.FO)(e)||"classes"===e},overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n[t.variant],n["size".concat((0,d.Z)(t.size))],"inherit"===t.color&&n.colorInherit,n[(0,d.Z)(t.size)],n[t.color]]}})((function(e){var n,t,a=e.theme,o=e.ownerState;return(0,r.Z)({},a.typography.button,(0,i.Z)({minHeight:36,transition:a.transitions.create(["background-color","box-shadow","border-color"],{duration:a.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(a.vars||a).zIndex.fab,boxShadow:(a.vars||a).shadows[6],"&:active":{boxShadow:(a.vars||a).shadows[12]},color:a.vars?a.vars.palette.text.primary:null==(n=(t=a.palette).getContrastText)?void 0:n.call(t,a.palette.grey[300]),backgroundColor:(a.vars||a).palette.grey[300],"&:hover":{backgroundColor:(a.vars||a).palette.grey.A100,"@media (hover: none)":{backgroundColor:(a.vars||a).palette.grey[300]},textDecoration:"none"}},"&.".concat(v.focusVisible),{boxShadow:(a.vars||a).shadows[6]}),"small"===o.size&&{width:40,height:40},"medium"===o.size&&{width:48,height:48},"extended"===o.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===o.variant&&"small"===o.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===o.variant&&"medium"===o.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===o.color&&{color:"inherit"})}),(function(e){var n=e.theme,t=e.ownerState;return(0,r.Z)({},"inherit"!==t.color&&"default"!==t.color&&null!=(n.vars||n).palette[t.color]&&{color:(n.vars||n).palette[t.color].contrastText,backgroundColor:(n.vars||n).palette[t.color].main,"&:hover":{backgroundColor:(n.vars||n).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(n.vars||n).palette[t.color].main}}})}),(function(e){var n=e.theme;return(0,i.Z)({},"&.".concat(v.disabled),{color:(n.vars||n).palette.action.disabled,boxShadow:(n.vars||n).shadows[0],backgroundColor:(n.vars||n).palette.action.disabledBackground})})),b=o.forwardRef((function(e,n){var t=(0,u.Z)({props:e,name:"MuiFab"}),i=t.children,o=t.className,c=t.color,h=void 0===c?"default":c,x=t.component,v=void 0===x?"button":x,p=t.disabled,b=void 0!==p&&p,j=t.disableFocusRipple,C=void 0!==j&&j,y=t.focusVisibleClassName,N=t.size,w=void 0===N?"large":N,S=t.variant,M=void 0===S?"circular":S,k=(0,a.Z)(t,Z),z=(0,r.Z)({},t,{color:h,component:v,disabled:b,disableFocusRipple:C,size:w,variant:M}),A=function(e){var n=e.color,t=e.variant,i=e.classes,a=e.size,o={root:["root",t,"size".concat((0,d.Z)(a)),"inherit"===n?"colorInherit":n]},l=(0,s.Z)(o,m,i);return(0,r.Z)({},i,l)}(z);return(0,g.jsx)(f,(0,r.Z)({className:(0,l.Z)(A.root,o),component:v,disabled:b,focusRipple:!C,focusVisibleClassName:(0,l.Z)(A.focusVisible,y),ownerState:z,ref:n},k,{classes:A,children:i}))}))},8254:function(e,n,t){t.d(n,{Z:function(){return y}});var i=t(4942),a=t(3366),r=t(7462),o=t(2791),l=t(8182),s=t(4419),c=t(9853),d=t(4565),u=t(1211),h=t(529),x=t(6863),m=t(5878),v=t(1217);function p(e){return(0,v.Z)("MuiInputAdornment",e)}var g,Z=(0,m.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),f=t(5873),b=t(184),j=["children","className","component","disablePointerEvents","disableTypography","position","variant"],C=(0,x.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["position".concat((0,c.Z)(t.position))],!0===t.disablePointerEvents&&n.disablePointerEvents,n[t.variant]]}})((function(e){var n=e.theme,t=e.ownerState;return(0,r.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},"filled"===t.variant&&(0,i.Z)({},"&.".concat(Z.positionStart,"&:not(.").concat(Z.hiddenLabel,")"),{marginTop:16}),"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})})),y=o.forwardRef((function(e,n){var t=(0,f.Z)({props:e,name:"MuiInputAdornment"}),i=t.children,x=t.className,m=t.component,v=void 0===m?"div":m,Z=t.disablePointerEvents,y=void 0!==Z&&Z,N=t.disableTypography,w=void 0!==N&&N,S=t.position,M=t.variant,k=(0,a.Z)(t,j),z=(0,h.Z)()||{},A=M;M&&z.variant,z&&!A&&(A=z.variant);var D=(0,r.Z)({},t,{hiddenLabel:z.hiddenLabel,size:z.size,disablePointerEvents:y,position:S,variant:A}),F=function(e){var n=e.classes,t=e.disablePointerEvents,i=e.hiddenLabel,a=e.position,r=e.size,o=e.variant,l={root:["root",t&&"disablePointerEvents",a&&"position".concat((0,c.Z)(a)),o,i&&"hiddenLabel",r&&"size".concat((0,c.Z)(r))]};return(0,s.Z)(l,p,n)}(D);return(0,b.jsx)(u.Z.Provider,{value:null,children:(0,b.jsx)(C,(0,r.Z)({as:v,ownerState:D,className:(0,l.Z)(F.root,x),ref:n},k,{children:"string"!==typeof i||w?(0,b.jsxs)(o.Fragment,{children:["start"===S?g||(g=(0,b.jsx)("span",{className:"notranslate",children:"\u200b"})):null,i]}):(0,b.jsx)(d.Z,{color:"text.secondary",children:i})}))})}))},4515:function(e,n,t){t.d(n,{u:function(){return u}});var i=t(7462),a=t(3366),r=t(2791),o=t(3811),l=t(5702),s=t(5514),c=t(184),d=["label","icon","showInMenu","onClick"],u=r.forwardRef((function(e,n){var t=e.label,u=e.icon,h=e.showInMenu,x=e.onClick,m=(0,a.Z)(e,d);return h?(0,c.jsxs)(l.Z,(0,i.Z)({ref:n},m,{onClick:x,children:[u&&(0,c.jsx)(s.Z,{children:u}),t]})):(0,c.jsx)(o.Z,(0,i.Z)({ref:n,size:"small",role:"menuitem","aria-label":t},m,{onClick:function(e){x&&x(e)},children:r.cloneElement(u,{fontSize:"small"})}))}))},4265:function(e,n,t){t.d(n,{D:function(){return m}});var i=t(7462),a=t(3366),r=t(2791),o=t(8182),l=t(6863),s=t(4419),c=t(3212),d=t(8963),u=t(184),h=["className","children"],x=(0,l.ZP)("div",{name:"MuiDataGrid",slot:"ToolbarContainer",overridesResolver:function(e,n){return n.toolbarContainer}})((function(e){return{display:"flex",alignItems:"center",flexWrap:"wrap",padding:e.theme.spacing(.5,.5,0)}})),m=r.forwardRef((function(e,n){var t=e.className,r=e.children,l=(0,a.Z)(e,h),m=function(e){var n=e.classes;return(0,s.Z)({root:["toolbarContainer"]},c.d,n)}({classes:(0,d.B)().classes});return r?(0,u.jsx)(x,(0,i.Z)({ref:n,className:(0,o.Z)(t,m.root)},l,{children:r})):null}))}}]);
//# sourceMappingURL=154.362612e8.chunk.js.map