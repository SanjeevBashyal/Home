(this.webpackJsonphome=this.webpackJsonphome||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(2),d=n.n(i),j=(n(8),n(9),n(0)),s=function(e){var t=e.designer,n=e.data;return console.log(t),Object(j.jsxs)("div",{className:"calcshow",children:[Object(j.jsx)("p",{children:t}),Object(j.jsxs)("table",{className:"results",border:"1px",children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Parameter"}),Object(j.jsx)("td",{children:"Unit"}),Object(j.jsx)("td",{children:"Dead Load Case"}),Object(j.jsx)("td",{children:"Hoisting Load Case"}),Object(j.jsx)("td",{children:"Full Load Case"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Span(l)"}),Object(j.jsx)("td",{children:"m"}),n.map((function(e){return Object(j.jsx)("td",{children:e.l.toFixed(3)})}))]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Sag(b)"}),Object(j.jsx)("td",{children:"m"}),n.map((function(e){return Object(j.jsx)("td",{children:e.b.toFixed(3)})}))]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Height Difference(h)"}),Object(j.jsx)("td",{children:"m"}),n.map((function(e){return Object(j.jsx)("td",{children:e.h.toFixed(3)})}))]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Modeling Equation"}),Object(j.jsx)("td",{children:"m"}),n.map((function(e){return Object(j.jsx)("td",{children:e.geometry[0]})}))]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"eA"}),Object(j.jsx)("td",{children:"m"}),n.map((function(e){return Object(j.jsx)("td",{children:e.geometry[1].toFixed(3)})}))]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"eB"}),Object(j.jsx)("td",{children:"m"}),n.map((function(e){return Object(j.jsx)("td",{children:e.geometry[2].toFixed(3)})}))]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"fA"}),Object(j.jsx)("td",{children:"m"}),n.map((function(e){return Object(j.jsx)("td",{children:e.geometry[3].toFixed(3)})}))]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"fB"}),Object(j.jsx)("td",{children:"m"}),n.map((function(e){return Object(j.jsx)("td",{children:e.geometry[4].toFixed(3)})}))]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"\ud835\udf03a"}),Object(j.jsx)("td",{children:"\xb0"}),n.map((function(e){return Object(j.jsx)("td",{children:e.geometry[5].toFixed(3)})}))]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"\ud835\udf03b"}),Object(j.jsx)("td",{children:"\xb0"}),n.map((function(e){return Object(j.jsx)("td",{children:e.geometry[6].toFixed(3)})}))]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Load (g)"}),Object(j.jsx)("td",{children:"kN/m"}),n.map((function(e){return Object(j.jsx)("td",{children:e.g.toFixed(3)})}))]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Horizontal Tension (H)"}),Object(j.jsx)("td",{children:"kN"}),n.map((function(e){return Object(j.jsx)("td",{children:e.tension[0].toFixed(3)})}))]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Maximum Tension (T)"}),Object(j.jsx)("td",{children:"kN"}),n.map((function(e){return Object(j.jsx)("td",{children:e.tension[1].toFixed(3)})}))]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Factor of Safety (S)"}),Object(j.jsx)("td",{children:"N/A"}),n.map((function(e){return Object(j.jsx)("td",{children:e.safety.toFixed(3)})}))]})]}),Object(j.jsxs)("h3",{children:["Calculation of Sag for hoisting load (g)=",n[1].g.toFixed(3)," kN/m"]}),Object(j.jsxs)("table",{border:"1px",children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Iteration No."}),Object(j.jsx)("td",{children:"bi"}),Object(j.jsx)("td",{children:"gi"}),Object(j.jsx)("td",{children:"bi+1"}),Object(j.jsx)("td",{children:"gh(gf)-gi"})]}),n[1].biter[0].map((function(e){return Object(j.jsx)("tr",{children:e.map((function(e){return Object(j.jsx)("td",{children:e.toFixed(3)})}))})}))]}),Object(j.jsxs)("h3",{children:["Calculation of Sag for hoisting load (g)=",n[2].g.toFixed(3)," kN/m"]}),Object(j.jsxs)("table",{border:"1px",children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Iteration No."}),Object(j.jsx)("td",{children:"bi"}),Object(j.jsx)("td",{children:"gi"}),Object(j.jsx)("td",{children:"bi+1"}),Object(j.jsx)("td",{children:"gh(gf)-gi"})]}),n[2].biter[0].map((function(e){return Object(j.jsx)("tr",{children:e.map((function(e){return Object(j.jsx)("td",{children:e.toFixed(3)})}))})}))]})]})},l=function(){var e=function(e,n,c,r,i,d,j){var s=c,l=i;if(0==j)return[[[1,s,l,s,0]],s];1==j?s=.93*c:2==j&&(s=1.22*c);var b=t(n,r,c),a=[],h=1,o=d-l;do{var x=[];x.push(h),x.push(s),l=64*e/(3*Math.pow(n,3)*b)*s*(Math.pow(s,2)-Math.pow(c,2))+s/c*i,x.push(l),s=c+(s-c)*(d-i)/(l-i),x.push(s),o=d-l,x.push(o),a.push(x),h+=1}while(Math.abs(o)>.001);return[a,s]},t=function(e,t,n){return e*(1+8/3*Math.pow(n/e,2)+.5*Math.pow(t/e,2))},n=function(e,t,n){var r=4*e/Math.pow(n,2),i=(t-4*e)/n,d=-i/(2*r),j=n-d,s=c(r,i,d),l=s-t,b=180*Math.atan((4*e-t)/n)/Math.PI,a=180*Math.atan((4*e+t)/n)/Math.PI;return[r.toFixed(6)+"x^2"+i.toFixed(6)+"x",d,j,s,l,b,a]},c=function(e,t,n){return e*Math.pow(n,2)+t*n},r=function(e,t,n,c){var r=e*Math.pow(t,2)/(8*n);return[r,r/Math.cos(c*Math.PI/180)]};return Object(j.jsxs)("div",{className:"designerInput",children:[Object(j.jsx)("label",{id:"designerLabel",children:"Designer: "}),Object(j.jsx)("input",{type:"text",id:"designer"}),Object(j.jsxs)("div",{className:"bridgeInput",children:[Object(j.jsx)("label",{children:"RL Bridge Axis Station A: "}),Object(j.jsx)("input",{type:"number",id:"A"}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{children:"RL Bridge Axis Station B: "}),Object(j.jsx)("input",{type:"number",id:"B"}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{children:"Span: "}),Object(j.jsx)("input",{type:"number",id:"Span"}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{children:"Walkway Width: "}),Object(j.jsxs)("select",{name:"Walkway",id:"walkway",children:[Object(j.jsx)("option",{value:"70",children:"70 cm"}),Object(j.jsx)("option",{value:"106",children:"106 cm"})]}),Object(j.jsx)("br",{})]}),Object(j.jsx)("button",{onClick:function(){var t=document.getElementById("designer").value,c=parseFloat(document.getElementById("A").value),i=parseFloat(document.getElementById("B").value),l=parseFloat(document.getElementById("Span").value),b=document.getElementById("walkway").value,a=null;a=l<80?l/20:l/22;var h=i-c,o=function(e,t){if(70==e){if(t<=50)return[2,26,2,26,10.04];if(t<=90)return[2,26,2,32,12.62];if(t<=100)return[2,26,4,26,15.06];if(t<=120)return[2,26,4,32,20.22]}else if(106==e){if(t<=40)return[2,26,2,26,10.04];if(t<=60)return[2,26,2,32,12.62];if(t<=75)return[2,26,4,26,15.06];if(t<=105)return[2,26,4,32,20.22];if(t<=120)return[2,32,4,32,22.8]}}(b,l),x=9.81*o[4]/1e3,u=function(e){var t=null,n=null,c=1;for(c=1;c<=2;c++){var r=null,i=null,d=e[2*c-1];13==d?(r=73,i=103):26==d?(r=292,i=386):32==d?(r=442,i=585):36==d?(r=560,i=740):40==d&&(r=691,i=914),t+=e[2*(c-1)]*r,n+=e[2*(c-1)]*i}return[t,n]}(o),O=u[0],m=u[1],f=function(e,t,n){var c=null;70==e?c=.41:106==e&&(c=.56);var r=t+c,i=null;return n<=50?i=4:n>50&&(i=3+50/n),[r,t,r+i+.6]}(b,x,l),p=[0,1,2],g=200*O,v=1,y=[];for(v=0;v<3;v++){var F={};F.l=l,F.biter=e(g,l,a,h,f[0],f[v],p[v]),F.h=h,F.b=F.biter[1],F.geometry=n(F.b,h,l),F.theta=h>=0?F.geometry[6]:F.geometry[5],F.g=f[v],F.tension=r(F.g,l,F.b,F.theta),F.safety=m/F.tension[1],y.push(F)}d.a.render(Object(j.jsx)(s,{designer:t,data:y}),document.getElementById("bridge"))},children:"Calculate"})]})};var b=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(l,{})})},a=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,d=t.getTTFB;n(e),c(e),r(e),i(e),d(e)}))};d.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),a()},8:function(e,t,n){},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.cc50b63c.chunk.js.map