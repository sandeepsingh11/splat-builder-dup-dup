import{S as Al,i as Wl,s as Pl,k as p,q as P,a as w,y as be,l as _,m as k,r as H,h,c as y,z as ke,n as e,M as re,b as q,D as l,A as $e,g as G,f as We,d as W,H as _l,B as Ie,v as Pe,e as Nl,u as Hl,K as pl}from"../chunks/index.deb332b0.mjs";import{S as Tl,E as Ul,a as al}from"../chunks/EffectStat.bbc1f758.mjs";import{L as jl}from"../chunks/LeannyService.17f58d9c.mjs";function Dl(r,t,n){const a=r.slice();return a[11]=t[n],a}function Vl(r,t,n){const a=r.slice();return a[14]=t[n],a}function Sl(r,t,n){const a=r.slice();return a[17]=t[n],a[19]=n,a}function Rl(r){let t,n,a=r[17]+"",u,I;return{c(){t=p("p"),n=P("No "),u=P(a),I=P(" gears yet...")},l(i){t=_(i,"P",{});var o=k(t);n=H(o,"No "),u=H(o,a),I=H(o," gears yet..."),o.forEach(h)},m(i,o){q(i,t,o),l(t,n),l(t,u),l(t,I)},p:pl,i:pl,o:pl,d(i){i&&h(t)}}}function ql(r){var Ee,J,Q,we,ie,ye,Le,Y,x,Ne;let t,n=r[17]+"",a,u,I,i,o,f,v,L,V,B,E,g,T,m,c,d,$,z,X;return i=new Tl({props:{itemList:r[0].userGearsSorted[r[19]],selectedItemId:(Ee=r[1][r[19]])==null?void 0:Ee.id,selectedItemName:(J=r[1][r[19]])==null?void 0:J.name,itemType:r[17]}}),i.$on("searchSelectChanged",r[5]),g=new al({props:{skill:{number:1,id:(Q=r[1][r[19]])==null?void 0:Q.skill1.name,name:(we=r[1][r[19]])==null?void 0:we.skill1.localizedName,isMain:!0}}}),m=new al({props:{skill:{number:2,id:(ie=r[1][r[19]])==null?void 0:ie.skill2.name,name:(ye=r[1][r[19]])==null?void 0:ye.skill2.localizedName,isMain:!1}}}),d=new al({props:{skill:{number:3,id:(Le=r[1][r[19]])==null?void 0:Le.skill3.name,name:(Y=r[1][r[19]])==null?void 0:Y.skill3.localizedName,isMain:!1}}}),z=new al({props:{skill:{number:4,id:(x=r[1][r[19]])==null?void 0:x.skill4.name,name:(Ne=r[1][r[19]])==null?void 0:Ne.skill4.localizedName,isMain:!1}}}),{c(){t=p("label"),a=P(n),u=P(" gear"),I=w(),be(i.$$.fragment),o=w(),f=p("div"),v=p("img"),B=w(),E=p("div"),be(g.$$.fragment),T=w(),be(m.$$.fragment),c=w(),be(d.$$.fragment),$=w(),be(z.$$.fragment),this.h()},l(s){t=_(s,"LABEL",{for:!0,class:!0});var D=k(t);a=H(D,n),u=H(D," gear"),D.forEach(h),I=y(s),ke(i.$$.fragment,s),o=y(s),f=_(s,"DIV",{class:!0});var Z=k(f);v=_(Z,"IMG",{src:!0,alt:!0,class:!0}),Z.forEach(h),B=y(s),E=_(s,"DIV",{class:!0});var C=k(E);ke(g.$$.fragment,C),T=y(C),ke(m.$$.fragment,C),c=y(C),ke(d.$$.fragment,C),$=y(C),ke(z.$$.fragment,C),C.forEach(h),this.h()},h(){var s,D;e(t,"for","gear-"+r[17]+"-id"),e(t,"class","block"),re(v.src,L="/gears/"+((s=r[1][r[19]])==null?void 0:s.name)+".png")||e(v,"src",L),e(v,"alt",V=(D=r[1][r[19]])==null?void 0:D.localizedName),e(v,"class","gear-img mx-auto"),e(f,"class","p-4"),e(E,"class","flex justify-evenly items-baseline")},m(s,D){q(s,t,D),l(t,a),l(t,u),q(s,I,D),$e(i,s,D),q(s,o,D),q(s,f,D),l(f,v),q(s,B,D),q(s,E,D),$e(g,E,null),l(E,T),$e(m,E,null),l(E,c),$e(d,E,null),l(E,$),$e(z,E,null),X=!0},p(s,D){var Ve,Se,le,te,Ge,ne,ze,Me,F,K,ge,ce;const Z={};D&1&&(Z.itemList=s[0].userGearsSorted[s[19]]),D&2&&(Z.selectedItemId=(Ve=s[1][s[19]])==null?void 0:Ve.id),D&2&&(Z.selectedItemName=(Se=s[1][s[19]])==null?void 0:Se.name),i.$set(Z),(!X||D&2&&!re(v.src,L="/gears/"+((le=s[1][s[19]])==null?void 0:le.name)+".png"))&&e(v,"src",L),(!X||D&2&&V!==(V=(te=s[1][s[19]])==null?void 0:te.localizedName))&&e(v,"alt",V);const C={};D&2&&(C.skill={number:1,id:(Ge=s[1][s[19]])==null?void 0:Ge.skill1.name,name:(ne=s[1][s[19]])==null?void 0:ne.skill1.localizedName,isMain:!0}),g.$set(C);const ee={};D&2&&(ee.skill={number:2,id:(ze=s[1][s[19]])==null?void 0:ze.skill2.name,name:(Me=s[1][s[19]])==null?void 0:Me.skill2.localizedName,isMain:!1}),m.$set(ee);const De={};D&2&&(De.skill={number:3,id:(F=s[1][s[19]])==null?void 0:F.skill3.name,name:(K=s[1][s[19]])==null?void 0:K.skill3.localizedName,isMain:!1}),d.$set(De);const oe={};D&2&&(oe.skill={number:4,id:(ge=s[1][s[19]])==null?void 0:ge.skill4.name,name:(ce=s[1][s[19]])==null?void 0:ce.skill4.localizedName,isMain:!1}),z.$set(oe)},i(s){X||(G(i.$$.fragment,s),G(g.$$.fragment,s),G(m.$$.fragment,s),G(d.$$.fragment,s),G(z.$$.fragment,s),X=!0)},o(s){W(i.$$.fragment,s),W(g.$$.fragment,s),W(m.$$.fragment,s),W(d.$$.fragment,s),W(z.$$.fragment,s),X=!1},d(s){s&&h(t),s&&h(I),Ie(i,s),s&&h(o),s&&h(f),s&&h(B),s&&h(E),Ie(g),Ie(m),Ie(d),Ie(z)}}}function Gl(r){let t,n,a,u,I;const i=[ql,Rl],o=[];function f(v,L){return v[0].userGearsSorted[v[19]].length>0?0:1}return n=f(r),a=o[n]=i[n](r),{c(){t=p("div"),a.c(),u=w(),this.h()},l(v){t=_(v,"DIV",{class:!0});var L=k(t);a.l(L),u=y(L),L.forEach(h),this.h()},h(){e(t,"class","w-full pb-6")},m(v,L){q(v,t,L),o[n].m(t,null),l(t,u),I=!0},p(v,L){let V=n;n=f(v),n===V?o[n].p(v,L):(Pe(),W(o[V],1,1,()=>{o[V]=null}),We(),a=o[n],a?a.p(v,L):(a=o[n]=i[n](v),a.c()),G(a,1),a.m(t,u))},i(v){I||(G(a),I=!0)},o(v){W(a),I=!1},d(v){v&&h(t),o[n].d()}}}function zl(r){let t,n,a=r[3],u=[];for(let i=0;i<a.length;i+=1)u[i]=Bl(Dl(r,a,i));const I=i=>W(u[i],1,1,()=>{u[i]=null});return{c(){for(let i=0;i<u.length;i+=1)u[i].c();t=Nl()},l(i){for(let o=0;o<u.length;o+=1)u[o].l(i);t=Nl()},m(i,o){for(let f=0;f<u.length;f+=1)u[f].m(i,o);q(i,t,o),n=!0},p(i,o){if(o&8){a=i[3];let f;for(f=0;f<a.length;f+=1){const v=Dl(i,a,f);u[f]?(u[f].p(v,o),G(u[f],1)):(u[f]=Bl(v),u[f].c(),G(u[f],1),u[f].m(t.parentNode,t))}for(Pe(),f=a.length;f<u.length;f+=1)I(f);We()}},i(i){if(!n){for(let o=0;o<a.length;o+=1)G(u[o]);n=!0}},o(i){u=u.filter(Boolean);for(let o=0;o<u.length;o+=1)W(u[o]);n=!1},d(i){_l(u,i),i&&h(t)}}}function Ml(r){let t,n;return t=new Ul({props:{effect:r[14]}}),{c(){be(t.$$.fragment)},l(a){ke(t.$$.fragment,a)},m(a,u){$e(t,a,u),n=!0},p(a,u){const I={};u&8&&(I.effect=a[14]),t.$set(I)},i(a){n||(G(t.$$.fragment,a),n=!0)},o(a){W(t.$$.fragment,a),n=!1},d(a){Ie(t,a)}}}function Bl(r){let t,n,a,u,I,i,o=r[11].name+"",f,v,L,V,B,E=r[11].effects,g=[];for(let m=0;m<E.length;m+=1)g[m]=Ml(Vl(r,E,m));const T=m=>W(g[m],1,1,()=>{g[m]=null});return{c(){t=p("div"),n=p("img"),I=w(),i=p("h5"),f=P(o),v=w(),L=p("div");for(let m=0;m<g.length;m+=1)g[m].c();V=w(),this.h()},l(m){t=_(m,"DIV",{class:!0});var c=k(t);n=_(c,"IMG",{src:!0,alt:!0,width:!0}),I=y(c),i=_(c,"H5",{});var d=k(i);f=H(d,o),d.forEach(h),c.forEach(h),v=y(m),L=_(m,"DIV",{class:!0});var $=k(L);for(let z=0;z<g.length;z+=1)g[z].l($);V=y($),$.forEach(h),this.h()},h(){re(n.src,a="/skills/"+r[11].name+".png")||e(n,"src",a),e(n,"alt",u=r[11].name),e(n,"width","32px"),e(t,"class","flex justify-start items-center gap-1 mt-4"),e(L,"class","grid grid-cols-2 gap-2 items-end")},m(m,c){q(m,t,c),l(t,n),l(t,I),l(t,i),l(i,f),q(m,v,c),q(m,L,c);for(let d=0;d<g.length;d+=1)g[d].m(L,null);l(L,V),B=!0},p(m,c){if((!B||c&8&&!re(n.src,a="/skills/"+m[11].name+".png"))&&e(n,"src",a),(!B||c&8&&u!==(u=m[11].name))&&e(n,"alt",u),(!B||c&8)&&o!==(o=m[11].name+"")&&Hl(f,o),c&8){E=m[11].effects;let d;for(d=0;d<E.length;d+=1){const $=Vl(m,E,d);g[d]?(g[d].p($,c),G(g[d],1)):(g[d]=Ml($),g[d].c(),G(g[d],1),g[d].m(L,V))}for(Pe(),d=E.length;d<g.length;d+=1)T(d);We()}},i(m){if(!B){for(let c=0;c<E.length;c+=1)G(g[c]);B=!0}},o(m){g=g.filter(Boolean);for(let c=0;c<g.length;c+=1)W(g[c]);B=!1},d(m){m&&h(t),m&&h(v),m&&h(L),_l(g,m)}}}function Zl(r){let t,n,a,u,I,i,o,f,v,L,V,B,E,g,T,m,c,d,$,z,X,Ee,J,Q,we,ie,ye,Le,Y,x,Ne,s,D,Z,C,ee,De,oe,Ve,Se,le,te,Ge,ne,ze,Me,F,K,ge,ce,rl,Te,he,ue,Ce,il,ol,de,nl,fe,U,He,Ue,cl,pe,j,je,Re,ul,R,qe,Ze,dl,_e,Ae,fl,ml,se,ve=r[4],S=[];for(let b=0;b<ve.length;b+=1)S[b]=Gl(Sl(r,ve,b));const Cl=b=>W(S[b],1,1,()=>{S[b]=null});de=new Tl({props:{itemList:r[0].weapons,itemType:"weapon",selectedItemId:r[2].id,selectedItemName:r[2].name}}),de.$on("searchSelectChanged",r[5]);let M=r[3].length>0&&zl(r);return{c(){t=p("form"),n=p("div"),a=p("h2"),u=P("Create Loadout"),I=w(),i=p("div"),o=p("div"),f=p("label"),v=P("Loadout title:"),L=w(),V=p("input"),B=w(),E=p("div"),g=p("label"),T=P("Loadout description:"),m=w(),c=p("textarea"),d=w(),$=p("div"),z=p("label"),X=P("Game mode:"),Ee=w(),J=p("div"),Q=p("input"),we=w(),ie=p("label"),ye=P("Rainmaker"),Le=w(),Y=p("div"),x=p("input"),Ne=w(),s=p("label"),D=P("Clam Blitz"),Z=w(),C=p("div"),ee=p("input"),De=w(),oe=p("label"),Ve=P("Splat Zones"),Se=w(),le=p("div"),te=p("input"),Ge=w(),ne=p("label"),ze=P("Tower Control"),Me=w(),F=p("div"),K=p("div");for(let b=0;b<S.length;b+=1)S[b].c();ge=w(),ce=p("input"),rl=w(),Te=p("div"),he=p("div"),ue=p("div"),Ce=p("h4"),il=P("Weapon stats:"),ol=w(),be(de.$$.fragment),nl=w(),fe=p("div"),U=p("img"),cl=w(),pe=p("div"),j=p("img"),ul=w(),R=p("img"),dl=w(),_e=p("div"),Ae=p("h4"),fl=P("Loadout stats:"),ml=w(),M&&M.c(),this.h()},l(b){t=_(b,"FORM",{action:!0,method:!0,class:!0});var N=k(t);n=_(N,"DIV",{class:!0});var O=k(n);a=_(O,"H2",{class:!0});var A=k(a);u=H(A,"Create Loadout"),A.forEach(h),O.forEach(h),I=y(N),i=_(N,"DIV",{class:!0});var me=k(i);o=_(me,"DIV",{class:!0});var Fe=k(o);f=_(Fe,"LABEL",{for:!0,class:!0});var gl=k(f);v=H(gl,"Loadout title:"),gl.forEach(h),L=y(Fe),V=_(Fe,"INPUT",{type:!0,name:!0,id:!0,class:!0}),Fe.forEach(h),B=y(me),E=_(me,"DIV",{class:!0});var Ke=k(E);g=_(Ke,"LABEL",{for:!0,class:!0});var vl=k(g);T=H(vl,"Loadout description:"),vl.forEach(h),m=y(Ke),c=_(Ke,"TEXTAREA",{name:!0,id:!0,class:!0}),k(c).forEach(h),Ke.forEach(h),d=y(me),$=_(me,"DIV",{class:!0});var ae=k($);z=_(ae,"LABEL",{for:!0,class:!0});var bl=k(z);X=H(bl,"Game mode:"),bl.forEach(h),Ee=y(ae),J=_(ae,"DIV",{});var Oe=k(J);Q=_(Oe,"INPUT",{type:!0,name:!0,class:!0}),we=y(Oe),ie=_(Oe,"LABEL",{for:!0});var kl=k(ie);ye=H(kl,"Rainmaker"),kl.forEach(h),Oe.forEach(h),Le=y(ae),Y=_(ae,"DIV",{});var Xe=k(Y);x=_(Xe,"INPUT",{type:!0,name:!0,class:!0}),Ne=y(Xe),s=_(Xe,"LABEL",{for:!0});var $l=k(s);D=H($l,"Clam Blitz"),$l.forEach(h),Xe.forEach(h),Z=y(ae),C=_(ae,"DIV",{});var Je=k(C);ee=_(Je,"INPUT",{type:!0,name:!0,class:!0}),De=y(Je),oe=_(Je,"LABEL",{for:!0});var Il=k(oe);Ve=H(Il,"Splat Zones"),Il.forEach(h),Je.forEach(h),Se=y(ae),le=_(ae,"DIV",{});var Qe=k(le);te=_(Qe,"INPUT",{type:!0,name:!0,class:!0}),Ge=y(Qe),ne=_(Qe,"LABEL",{for:!0});var El=k(ne);ze=H(El,"Tower Control"),El.forEach(h),Qe.forEach(h),ae.forEach(h),me.forEach(h),Me=y(N),F=_(N,"DIV",{class:!0});var Ye=k(F);K=_(Ye,"DIV",{});var xe=k(K);for(let hl=0;hl<S.length;hl+=1)S[hl].l(xe);ge=y(xe),ce=_(xe,"INPUT",{type:!0,class:!0}),xe.forEach(h),rl=y(Ye),Te=_(Ye,"DIV",{});var wl=k(Te);he=_(wl,"DIV",{class:!0});var el=k(he);ue=_(el,"DIV",{});var Be=k(ue);Ce=_(Be,"H4",{});var yl=k(Ce);il=H(yl,"Weapon stats:"),yl.forEach(h),ol=y(Be),ke(de.$$.fragment,Be),nl=y(Be),fe=_(Be,"DIV",{id:!0,class:!0});var ll=k(fe);U=_(ll,"IMG",{id:!0,class:!0,src:!0,alt:!0,width:!0,height:!0}),cl=y(ll),pe=_(ll,"DIV",{class:!0});var tl=k(pe);j=_(tl,"IMG",{id:!0,src:!0,alt:!0,class:!0,width:!0,height:!0}),ul=y(tl),R=_(tl,"IMG",{id:!0,src:!0,alt:!0,class:!0,width:!0,height:!0}),tl.forEach(h),ll.forEach(h),Be.forEach(h),dl=y(el),_e=_(el,"DIV",{});var sl=k(_e);Ae=_(sl,"H4",{});var Ll=k(Ae);fl=H(Ll,"Loadout stats:"),Ll.forEach(h),ml=y(sl),M&&M.l(sl),sl.forEach(h),el.forEach(h),wl.forEach(h),Ye.forEach(h),N.forEach(h),this.h()},h(){e(a,"class","text-2xl font-bold text-center"),e(n,"class","mb-8"),e(f,"for","loadout-title"),e(f,"class","block"),e(V,"type","text"),e(V,"name","loadout-title"),e(V,"id","loadout-title"),e(V,"class","w-full rounded focus:ring-primary-400 focus:border-primary-400"),e(o,"class","mb-4"),e(g,"for","loadout-desc"),e(g,"class","block"),e(c,"name","loadout-desc"),e(c,"id","loadout-desc"),e(c,"class","w-full rounded focus:ring-primary-400 focus:border-primary-400"),e(E,"class","row-start-2 mb-4 md:mb-0"),e(z,"for","mode"),e(z,"class","block"),e(Q,"type","checkbox"),e(Q,"name","loadout-mode-rm"),Q.value="1",e(Q,"class","rounded-sm text-secondary-700 focus:ring-primary-400"),e(ie,"for","loadout-mode-rm"),e(x,"type","checkbox"),e(x,"name","loadout-mode-cb"),x.value="1",e(x,"class","rounded-sm text-secondary-700 focus:ring-primary-400"),e(s,"for","loadout-mode-cb"),e(ee,"type","checkbox"),e(ee,"name","loadout-mode-sz"),ee.value="1",e(ee,"class","rounded-sm text-secondary-700 focus:ring-primary-400"),e(oe,"for","loadout-mode-sz"),e(te,"type","checkbox"),e(te,"name","loadout-mode-tc"),te.value="1",e(te,"class","rounded-sm text-secondary-700 focus:ring-primary-400"),e(ne,"for","loadout-mode-tc"),e($,"class","row-span-2"),e(i,"class","grid grid-cols-1 md:grid-cols-2 gap-x-4 mb-4"),e(ce,"type","submit"),ce.value="Create",e(ce,"class","p-2 bg-transparent text-primary-700 rounded-md border border-primary-700 mb-2 cursor-pointer transition-colors hover:bg-primary-500 hover:text-white hover:border-primary-500"),e(U,"id","weapon-img"),e(U,"class","justify-self-center"),re(U.src,He="/weapon_flat/Path_Wst_"+r[2].id+".png")||e(U,"src",He),e(U,"alt",Ue=r[2].name),e(U,"width","128px"),e(U,"height","128px"),e(j,"id","sub-img"),re(j.src,je="/subspe/Wsb_"+r[2].subId+"00.png")||e(j,"src",je),e(j,"alt",Re=r[2].subName),e(j,"class","justify-self-center"),e(j,"width","64px"),e(j,"height","64px"),e(R,"id","special-img"),re(R.src,qe="/subspe/Wsp_"+r[2].specialId+"00.png")||e(R,"src",qe),e(R,"alt",Ze=r[2].specialName),e(R,"class","justify-self-center"),e(R,"width","64px"),e(R,"height","64px"),e(pe,"class","grid grid-cols-2 items-center gap-x-2"),e(fe,"id","weapon-container"),e(fe,"class","grid grid-cols-1 grid-cols-2 gap-x-4"),e(he,"class","mb-6"),e(F,"class","grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"),e(t,"action",""),e(t,"method","post"),e(t,"class","w-full md:w-3/4 lg:w-2/3 px-4 md:px-0 md:mx-auto")},m(b,N){q(b,t,N),l(t,n),l(n,a),l(a,u),l(t,I),l(t,i),l(i,o),l(o,f),l(f,v),l(o,L),l(o,V),l(i,B),l(i,E),l(E,g),l(g,T),l(E,m),l(E,c),l(i,d),l(i,$),l($,z),l(z,X),l($,Ee),l($,J),l(J,Q),l(J,we),l(J,ie),l(ie,ye),l($,Le),l($,Y),l(Y,x),l(Y,Ne),l(Y,s),l(s,D),l($,Z),l($,C),l(C,ee),l(C,De),l(C,oe),l(oe,Ve),l($,Se),l($,le),l(le,te),l(le,Ge),l(le,ne),l(ne,ze),l(t,Me),l(t,F),l(F,K);for(let O=0;O<S.length;O+=1)S[O].m(K,null);l(K,ge),l(K,ce),l(F,rl),l(F,Te),l(Te,he),l(he,ue),l(ue,Ce),l(Ce,il),l(ue,ol),$e(de,ue,null),l(ue,nl),l(ue,fe),l(fe,U),l(fe,cl),l(fe,pe),l(pe,j),l(pe,ul),l(pe,R),l(he,dl),l(he,_e),l(_e,Ae),l(Ae,fl),l(_e,ml),M&&M.m(_e,null),se=!0},p(b,[N]){if(N&51){ve=b[4];let A;for(A=0;A<ve.length;A+=1){const me=Sl(b,ve,A);S[A]?(S[A].p(me,N),G(S[A],1)):(S[A]=Gl(me),S[A].c(),G(S[A],1),S[A].m(K,ge))}for(Pe(),A=ve.length;A<S.length;A+=1)Cl(A);We()}const O={};N&1&&(O.itemList=b[0].weapons),N&4&&(O.selectedItemId=b[2].id),N&4&&(O.selectedItemName=b[2].name),de.$set(O),(!se||N&4&&!re(U.src,He="/weapon_flat/Path_Wst_"+b[2].id+".png"))&&e(U,"src",He),(!se||N&4&&Ue!==(Ue=b[2].name))&&e(U,"alt",Ue),(!se||N&4&&!re(j.src,je="/subspe/Wsb_"+b[2].subId+"00.png"))&&e(j,"src",je),(!se||N&4&&Re!==(Re=b[2].subName))&&e(j,"alt",Re),(!se||N&4&&!re(R.src,qe="/subspe/Wsp_"+b[2].specialId+"00.png"))&&e(R,"src",qe),(!se||N&4&&Ze!==(Ze=b[2].specialName))&&e(R,"alt",Ze),b[3].length>0?M?(M.p(b,N),N&8&&G(M,1)):(M=zl(b),M.c(),G(M,1),M.m(_e,null)):M&&(Pe(),W(M,1,1,()=>{M=null}),We())},i(b){if(!se){for(let N=0;N<ve.length;N+=1)G(S[N]);G(de.$$.fragment,b),G(M),se=!0}},o(b){S=S.filter(Boolean);for(let N=0;N<S.length;N+=1)W(S[N]);W(de.$$.fragment,b),W(M),se=!1},d(b){b&&h(t),_l(S,b),Ie(de),M&&M.d()}}}function Fl(r,t,n){let{data:a}=t;const u=new jl;let I=a.skillBubbles,i=a.selectedHeadGear,o=a.selectedClothesGear,f=a.selectedShoesGear,v=[i,o,f];const L=["head","clothes","shoes"];let V=a.selectedWeapon,B=u.calc(I,V.id);function E(g){const T=g.detail;let m;if((T.type==="head"||T.type==="clothes"||T.type==="shoes")&&(m=a.userGears.find(c=>c.id===T.selectedId)),T.type==="head"){if(i=m,i)for(let c=0;c<4;c++){const d=c%4,$=d===0?"skill1":d===1?"skill2":d===3?"skill3":"skill4";I[c]={number:c+1,id:i[$].name,name:i[$].localizedName,isMain:d===0}}}else if(T.type==="clothes"){if(o=m,o)for(let c=4;c<8;c++){const d=c%4,$=d===0?"skill1":d===1?"skill2":d===3?"skill3":"skill4";I[c]={number:c+1,id:o[$].name,name:o[$].localizedName,isMain:d===0}}}else if(T.type==="shoes"){if(f=m,f)for(let c=8;c<12;c++){const d=c%4,$=d===0?"skill1":d===1?"skill2":d===3?"skill3":"skill4";I[c]={number:c+1,id:f[$].name,name:f[$].localizedName,isMain:d===0}}}else if(T.type==="weapon"){const c=a.weapons.find(d=>d.id===T.selectedId);c&&n(2,V=c)}n(1,v=[i,o,f]),n(3,B=u.calc(I,V.id))}return r.$$set=g=>{"data"in g&&n(0,a=g.data)},[a,v,V,B,L,E]}class Jl extends Al{constructor(t){super(),Wl(this,t,Fl,Zl,Pl,{data:0})}}export{Jl as default};
