"use strict";(self.webpackChunkreact_project=self.webpackChunkreact_project||[]).push([[701],{8701:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var s=a(885),n=a(2388),o=a(2791),r=a(6880),c=a(9076),i=a(5772),d=a(4423),u=a(184),p=function(){var e=(0,d.Z)(),t=(0,o.useState)(Math.floor(16777215*Math.random()*1e6).toString(16)),a=(0,s.Z)(t,1)[0],p=(0,i.s0)();return(0,o.useEffect)((function(){var t={authType:"mscode",authKey:(0,r.uz)("code"),state:{agent_type:"web",caller:"web",ondemandpage:"/main/dashboard",redirect_uri:"".concat(c.N.redirectUrl),scope:"".concat(c.N.scopeForSignIn),uniqueid:a}};sessionStorage.setItem("unique_id",a),n.Z.post("".concat(c.N.baseApiURL,"auth/v1/signin"),t).then((function(t){if(200===t.data.code){sessionStorage.setItem("access_token",t.data.data.access_token),sessionStorage.setItem("exp_timestamp",t.data.data.exp),sessionStorage.setItem("refresh_token",t.data.data.refresh_token);var a=JSON.parse(atob(t.data.data.access_token.split(".")[1]));sessionStorage.setItem("emp_name",a.emp_name),sessionStorage.setItem("roles",a.roles),sessionStorage.setItem("UserId",a.sub),p((0,r.Lo)())}else 206===t.data.code&&(e("warning",t.data.message),p("/"))})).catch((function(e){p((0,r.S3)(e))}))}),[]),(0,u.jsxs)("div",{className:"loader",children:[(0,u.jsx)("div",{}),(0,u.jsx)("div",{}),(0,u.jsx)("div",{}),(0,u.jsx)("div",{})]})}},4423:function(e,t,a){a.d(t,{Z:function(){return o}});var s=a(2791),n=a(1659),o=function(){var e=(0,s.useContext)(n.I).setToaster;return function(t,a){e({type:t,text:a})}}}}]);
//# sourceMappingURL=701.3af3354d.chunk.js.map