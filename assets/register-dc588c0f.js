import{_ as c,a as m,m as p,q as _,c as u,b as o,w as f,n as a,p as l,g as i,e as v,f as g,F as h,h as n,i as b,o as w}from"./index-328c3d65.js";const k={name:"login",data(){return{form_data:{first_name:"",last_name:"",email:"",phone_number:"",password:"",c_password:""}}},computed:{...m({hasToken:"token/hasToken"})},methods:{...p({register:"token/register"})},mounted(){this.hasToken&&_.push({name:"home"})}},x=n('<div class="breadcrumbs"><div class="container"><div class="row align-items-center"><div class="col-lg-6 col-md-6 col-12"><div class="breadcrumbs-content"><h1 class="page-title">Login</h1></div></div><div class="col-lg-6 col-md-6 col-12"><ul class="breadcrumb-nav"><li><a href="index.html"><i class="lni lni-home"></i> Home</a></li><li>Login</li></ul></div></div></div></div>',1),y={class:"account-login section"},V={class:"container"},N={class:"row"},F={class:"col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12"},T={class:"card-body"},L=n('<div class="title"><h3>Create Account</h3><p>You can login using your social media account or email address.</p></div><div class="social-login"><div class="row"><div class="col-lg-4 col-md-4 col-12"><a class="btn facebook-btn" href="javascript:void(0)"><i class="lni lni-facebook-filled"></i> Facebook login </a></div><div class="col-lg-4 col-md-4 col-12"><a class="btn twitter-btn" href="javascript:void(0)"><i class="lni lni-twitter-original"></i> Twitter login </a></div><div class="col-lg-4 col-md-4 col-12"><a class="btn google-btn" href="javascript:void(0)"><i class="lni lni-google"></i> Google login </a></div></div></div><div class="alt-option"><span>Or</span></div>',3),U={class:"form-group input-group"},j=o("label",{for:""}," First Name ",-1),C={class:"form-group input-group"},P=o("label",{for:""},"Last Name",-1),A={class:"form-group input-group"},B=o("label",{for:""},"Email",-1),E={class:"form-group input-group"},G=o("label",{for:"password"}," Password ",-1),M={class:"form-group input-group"},R=o("label",{for:"password"}," Confirm Password ",-1),S=o("div",{class:"d-flex flex-wrap justify-content-end bottom-content"},[o("a",{class:"lost-pass",href:""}," Forgot password? ")],-1),q=o("div",{class:"button"},[o("button",{type:"submit",class:"btn"}," Register ")],-1),D={class:"outer-link"};function H(r,s,O,Y,t,z){const d=b("router-link");return w(),u(h,null,[x,o("div",y,[o("div",V,[o("div",N,[o("div",F,[o("form",{class:"card login-form",onSubmit:s[5]||(s[5]=f(e=>r.register(t.form_data),["prevent"]))},[o("div",T,[L,o("div",U,[j,a(o("input",{class:"form-control",type:"text","onUpdate:modelValue":s[0]||(s[0]=e=>t.form_data.first_name=e),name:"first_name",placeholder:"First Name"},null,512),[[l,t.form_data.first_name]])]),o("div",C,[P,a(o("input",{class:"form-control",type:"text","onUpdate:modelValue":s[1]||(s[1]=e=>t.form_data.last_name=e),name:"last_name",placeholder:"Last Name"},null,512),[[l,t.form_data.last_name]])]),o("div",A,[B,a(o("input",{class:"form-control",type:"email","onUpdate:modelValue":s[2]||(s[2]=e=>t.form_data.email=e),name:"email",placeholder:"Email"},null,512),[[l,t.form_data.email]])]),o("div",E,[G,a(o("input",{class:"form-control",type:"password","onUpdate:modelValue":s[3]||(s[3]=e=>t.form_data.password=e),name:"password",placeholder:"Password"},null,512),[[l,t.form_data.password]])]),o("div",M,[R,a(o("input",{class:"form-control",type:"password","onUpdate:modelValue":s[4]||(s[4]=e=>t.form_data.c_password=e),name:"c_password",placeholder:"Repeat Password "},null,512),[[l,t.form_data.c_password]])]),S,q,o("p",D,[i(" Already have an account? "),v(d,{to:{name:"login"}},{default:g(()=>[i(" Login ")]),_:1})])])],32)])])])])],64)}const J=c(k,[["render",H]]);export{J as default};
