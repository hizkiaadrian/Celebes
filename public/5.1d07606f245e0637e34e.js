(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"13Ib":function(t,e,i){"use strict";i.r(e),i.d(e,"AdminModule",(function(){return j}));var a=i("PCNd"),n=i("tyNb"),c=i("fXoL"),o=i("wZkO");let r=(()=>{class t{constructor(t){this.router=t,this.dashboardTitle="Admin Portal"}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(c.Mb(n.b))},t.\u0275cmp=c.Gb({type:t,selectors:[["app-admin-dashboard"]],decls:6,vars:3,consts:[["mat-tab-nav-bar",""],["mat-tab-link","",3,"routerLink","active"]],template:function(t,e){1&t&&(c.Sb(0,"h1"),c.Ac(1),c.Rb(),c.Sb(2,"nav",0),c.Sb(3,"a",1),c.Ac(4,"Employees"),c.Rb(),c.Rb(),c.Nb(5,"router-outlet")),2&t&&(c.Bb(1),c.Bc(e.dashboardTitle),c.Bb(2),c.kc("routerLink","list-of-employees")("active",e.router.url.endsWith("list-of-employees")))},directives:[o.b,n.d,o.a,n.f],styles:[""]}),t})();var s=i("2pJz"),l=i("AytR"),b=i("tk/3");let p=(()=>{class t{constructor(t){this.httpClient=t,this.getAllUsers=()=>this.httpClient.get(l.a.backendUrl+"/admin/get-all-users"),this.getUserById=t=>this.httpClient.get(`${l.a.backendUrl}/admin/get-user/${t}`),this.approveUser=t=>this.httpClient.patch(`${l.a.backendUrl}/admin/approve-user/${t}`,{}),this.updateJobTitle=(t,e)=>this.httpClient.patch(`${l.a.backendUrl}/admin/update-job-title/${t}`,{jobTitle:e})}}return t.\u0275fac=function(e){return new(e||t)(c.Wb(b.b))},t.\u0275prov=c.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=i("qUOr"),d=i("MutI"),m=i("ofXK"),f=i("f0Cb"),h=i("FKr1"),g=i("TU8p");function v(t,e){if(1&t){const t=c.Tb();c.Sb(0,"mat-list-option",5),c.ac("click",(function(){c.rc(t);const i=e.$implicit;return c.ec(2).viewEmployeeDetails(i._id)})),c.Sb(1,"div",6),c.Ac(2),c.Rb(),c.Sb(3,"div",6),c.Ac(4),c.Rb(),c.Rb()}if(2&t){const t=e.$implicit;c.Bb(2),c.Bc(t.name),c.Bb(2),c.Bc(t.jobTitle||t.role)}}function k(t,e){if(1&t){const t=c.Tb();c.Sb(0,"mat-list-option",7),c.ac("click",(function(){c.rc(t);const i=e.$implicit;return c.ec(2).viewEmployeeDetails(i._id)})),c.Sb(1,"div",6),c.Ac(2),c.Rb(),c.Sb(3,"div",6),c.Ac(4),c.Rb(),c.Rb()}if(2&t){const t=e.$implicit;c.Eb("need-approval",!t.approved),c.kc("matBadge",t.approved?null:"*"),c.Bb(2),c.Bc(t.name),c.Bb(2),c.Bc(t.jobTitle||t.role)}}function y(t,e){if(1&t&&(c.Sb(0,"mat-selection-list",1),c.Sb(1,"div",2),c.Ac(2,"Managers"),c.Rb(),c.zc(3,v,5,2,"mat-list-option",3),c.Nb(4,"mat-divider"),c.Sb(5,"div",2),c.Ac(6,"Employees"),c.Rb(),c.zc(7,k,5,5,"mat-list-option",4),c.Rb()),2&t){const t=c.ec();c.kc("multiple",!1),c.Bb(3),c.kc("ngForOf",t.managers),c.Bb(4),c.kc("ngForOf",t.employees)}}let S=(()=>{class t{constructor(t,e){this.employeeService=t,this.router=e,this.viewEmployeeDetails=t=>{this.router.navigate(["adminDashboard/employee-details/"+t])}}ngOnInit(){this.employeeService.getAllUsers().subscribe(t=>{this.users=t.users,this.managers=this.users.filter(t=>t.role!==s.a.Employee),this.employees=this.users.filter(t=>t.role===s.a.Employee)})}}return t.\u0275fac=function(e){return new(e||t)(c.Mb(p),c.Mb(n.b))},t.\u0275cmp=c.Gb({type:t,selectors:[["app-list-of-employees"]],decls:1,vars:1,consts:[[3,"multiple",4,"appLoading"],[3,"multiple"],["mat-subheader",""],[3,"click",4,"ngFor","ngForOf"],["matBadgeColor","warn",3,"need-approval","matBadge","click",4,"ngFor","ngForOf"],[3,"click"],["mat-line",""],["matBadgeColor","warn",3,"matBadge","click"]],template:function(t,e){1&t&&c.zc(0,y,8,3,"mat-selection-list",0),2&t&&c.kc("appLoading",!e.users)},directives:[u.a,d.f,d.d,m.l,f.a,d.c,h.l,g.a],styles:[".need-approval[_ngcontent-%COMP%]{background-color:rgba(255,0,0,.4)}.need-approval[_ngcontent-%COMP%]:hover{background-color:rgba(255,0,0,.6)}"]}),t})();var B=i("FH4G"),R=i("gx82"),M=i("dNgK"),T=i("XiUz"),w=i("Wp6s"),A=i("bTqV"),C=i("3Pt+"),O=i("kmnG"),x=i("qFsG"),P=i("NFeN");function U(t,e){if(1&t){const t=c.Tb();c.Sb(0,"button",15),c.ac("click",(function(){return c.rc(t),c.ec(2).approveUser()})),c.Ac(1,"Approve"),c.Rb()}}function I(t,e){if(1&t){const t=c.Tb();c.Sb(0,"button",16),c.ac("click",(function(){return c.rc(t),c.ec(2).updateJobTitle()})),c.Ac(1,"Submit changes"),c.Rb()}if(2&t){const t=c.ec(2);c.kc("disabled",t.newJobTitle===t.user.jobTitle)}}function L(t,e){1&t&&c.Nb(0,"div")}function J(t,e){if(1&t){const t=c.Tb();c.Sb(0,"div",1),c.Sb(1,"mat-card",2),c.Sb(2,"div",1),c.Sb(3,"mat-card-header",3),c.Nb(4,"img",4),c.Sb(5,"mat-card-title"),c.Ac(6),c.Rb(),c.Sb(7,"mat-card-subtitle"),c.Ac(8),c.Rb(),c.Rb(),c.Sb(9,"div",5),c.zc(10,U,2,0,"button",6),c.zc(11,I,2,1,"button",7),c.Sb(12,"a",8),c.ac("click",(function(){return c.rc(t),c.ec().goBack()})),c.Ac(13,"Back"),c.Rb(),c.Rb(),c.Rb(),c.Nb(14,"mat-divider"),c.Sb(15,"mat-card-content"),c.Sb(16,"form",9),c.Sb(17,"mat-form-field"),c.Sb(18,"mat-label"),c.Ac(19,"Job title"),c.Rb(),c.Sb(20,"input",10),c.ac("ngModelChange",(function(e){return c.rc(t),c.ec().newJobTitle=e})),c.Rb(),c.Sb(21,"mat-icon",11),c.ac("click",(function(){c.rc(t);const e=c.ec();return e.jobTitleReadonly=!e.jobTitleReadonly})),c.Ac(22,"edit"),c.Rb(),c.Rb(),c.Sb(23,"mat-form-field"),c.Sb(24,"mat-label"),c.Ac(25,"Email"),c.Rb(),c.Nb(26,"input",12),c.Rb(),c.Sb(27,"mat-form-field"),c.Sb(28,"mat-label"),c.Ac(29,"Date of birth"),c.Rb(),c.Nb(30,"input",13),c.Rb(),c.Sb(31,"mat-form-field"),c.Sb(32,"mat-label"),c.Ac(33,"Address"),c.Rb(),c.Nb(34,"input",13),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.zc(35,L,1,0,"div",14),c.Rb()}if(2&t){const t=c.ec();c.Bb(4),c.kc("src",t.profilePicUrl||"./assets/default_avatar.png",c.sc),c.Bb(2),c.Bc(t.user.name),c.Bb(2),c.Bc(t.user.role),c.Bb(2),c.kc("ngIf",!t.user.approved),c.Bb(1),c.kc("ngIf",t.user.approved),c.Bb(9),c.kc("ngModel",t.newJobTitle)("readonly",t.jobTitleReadonly),c.Bb(6),c.kc("value",t.user.email),c.Bb(4),c.kc("value",t.dateOfBirthInputString),c.Bb(4),c.kc("value",t.user.address||"Not set yet"),c.Bb(1),c.kc("appLoading",t.isSubmitting)}}const N=[{path:"employee-details/:id",component:(()=>{class t{constructor(t,e,i,a,n){this.location=t,this.activatedRoute=e,this.employeeService=i,this.imagesService=a,this.snackBar=n,this.isSubmitting=!1,this.jobTitleReadonly=!0,this.goBack=()=>this.location.back(),this.approveUser=()=>{this.isSubmitting=!0,this.employeeService.approveUser(this.id).subscribe(t=>{this.snackBar.open(t.msg,"",{panelClass:[t.success?"success-snackbar":"error-snackbar"]})}),this.goBack()},this.updateJobTitle=()=>{this.isSubmitting=!0,this.employeeService.updateJobTitle(this.id,this.newJobTitle).subscribe(t=>{this.snackBar.open(t.msg,"",{panelClass:[t.success?"success-snackbar":"error-snackbar"]}),t.success&&this.goBack()})}}ngOnInit(){this.id=this.activatedRoute.snapshot.paramMap.get("id"),this.employeeService.getUserById(this.id).subscribe(t=>{t.success?(this.user=t.user,this.dateOfBirthInputString=null===this.user.dateOfBirth?"Not set yet":new B.a(this.user.dateOfBirth).displayDate(),this.user.profilePicUrl&&(this.profilePicUrl=this.imagesService.getProfilePicture(this.user.profilePicUrl)),this.newJobTitle=t.user.jobTitle):this.snackBar.open(t.msg,"",{panelClass:["error-snackbar"]})})}}return t.\u0275fac=function(e){return new(e||t)(c.Mb(m.i),c.Mb(n.a),c.Mb(p),c.Mb(R.a),c.Mb(M.b))},t.\u0275cmp=c.Gb({type:t,selectors:[["app-employee-detail"]],decls:1,vars:1,consts:[["fxLayout","column","fxLayoutAlign","start center",4,"appLoading"],["fxLayout","column","fxLayoutAlign","start center"],["fxFlex",""],["fxLayoutAlign","center center"],["mat-card-avatar","","alt","Profile pic",1,"profile-pic",3,"src"],["fxLayoutGap","20px",1,"buttons"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],["mat-raised-button","","color","primary",3,"disabled","click",4,"ngIf"],["mat-stroked-button","","color","warn",3,"click"],["fxLayout","column","fxLayoutGap","10px"],["matInput","","name","newJobTitle",3,"ngModel","readonly","ngModelChange"],["matSuffix","",1,"edit",3,"click"],["matInput","","type","text","readonly","",3,"value"],["matInput","","readonly","",3,"value"],[4,"appLoading"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","primary",3,"disabled","click"]],template:function(t,e){1&t&&c.zc(0,J,36,11,"div",0),2&t&&c.kc("appLoading",!e.user)},directives:[u.a,T.c,T.b,w.a,T.a,w.d,w.b,w.g,w.f,T.d,m.m,A.a,f.a,w.c,C.x,C.r,C.s,O.d,O.g,x.b,C.c,C.q,C.t,P.a,O.h,A.b],styles:[".profile-pic[_ngcontent-%COMP%]{width:100px;height:100px}.buttons[_ngcontent-%COMP%]{margin:20px 0}mat-card[_ngcontent-%COMP%]{width:500px}mat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{background-color:#000;object-fit:cover}mat-card-content[_ngcontent-%COMP%]{margin:20px 40px}input[_ngcontent-%COMP%]:-moz-read-only{color:#a7a1a1}input[_ngcontent-%COMP%]:read-only{color:#a7a1a1}.edit[_ngcontent-%COMP%]{cursor:pointer}"]}),t})()},{path:"",component:r,children:[{path:"list-of-employees",component:S},{path:"",pathMatch:"full",redirectTo:"list-of-employees"},{path:"**",component:i("QdL7").a}]}];let _=(()=>{class t{}return t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({factory:function(e){return new(e||t)},imports:[[n.e.forChild(N)],n.e]}),t})(),j=(()=>{class t{static forRoot(){return{ngModule:t}}}return t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({factory:function(e){return new(e||t)},imports:[[a.a.forRoot(),_]]}),t})()}}]);