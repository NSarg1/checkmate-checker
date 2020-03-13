(this["webpackJsonpreact-project-sample"]=this["webpackJsonpreact-project-sample"]||[]).push([[0],{18:function(t,e,a){t.exports=a(29)},23:function(t,e,a){},29:function(t,e,a){"use strict";a.r(e);var i=a(0),s=a.n(i),n=a(5),c=a.n(n),r=(a(23),a(2)),o=a(4),l=a(1),u=a(3),h=a(10),f=a(11),b=function(){function t(e,a,i){Object(h.a)(this,t),this.state=JSON.parse(JSON.stringify(e)),this.positions=Object(l.a)({},a),this.isProtected=Object(l.a)({},i),this.attackZone=1,this.king=10,this.queen=20,this.horse=30,this.bishop=40,this.blackKing=50}return Object(f.a)(t,[{key:"checkIsMate",value:function(){for(var t=this.blackKing,e=Object(u.a)(this.positions[t],2),a=e[0],i=e[1],s=this.isProtected[t],n=Object(r.a)(this.state),c=[],o=a-1;o<=a+1;o++)if(n[o])for(var l=i-1;l<=i+1;l++)(n[o][l]||0===n[o][l])&&c.push(n[o][l]);return c.includes(0)?"This isn't mate":c.includes(0)||!1!==s?"White wins.":"This is stalemate. Nobody wins"}},{key:"isNotBlocking",value:function(t,e,a){var i=this.state[t][e];return i<10||i===a||(50===i?(this.isProtected=Object(l.a)({},this.isProtected,Object(o.a)({},i,!0)),!0):(this.isProtected=Object(l.a)({},this.isProtected,Object(o.a)({},i,!0)),!1))}},{key:"queenZone",value:function(t,e,a){var i=[t,this.blackKing];this.bishopZone(t,e,a);t:for(var s=e;s>=0;s--)for(var n=a;n<8;n++)if(n===a){if(!this.isNotBlocking(s,n,t))break t;if(i.includes(this.state[s][n]))continue;this.state[s][n]=this.attackZone}t:for(var c=e;c<8;c++)for(var r=a;r<8;r++)if(r===a){if(!this.isNotBlocking(c,r,t))break t;if(i.includes(this.state[c][r]))continue;this.state[c][r]=this.attackZone}for(var o=a-1;o>=0&&this.isNotBlocking(e,o,t);o--)50!==this.state[e][o]&&(this.state[e][o]=this.attackZone);for(var l=a+1;l<8&&this.isNotBlocking(e,l,t);l++)50!==this.state[e][l]&&(this.state[e][l]=this.attackZone)}},{key:"bishopZone",value:function(t,e,a){var i=e+a,s=e-a,n=[t,this.blackKing];t:for(var c=e;c>=0;c--)for(var r=a;r<8;r++)if(c+r===i){if(!this.isNotBlocking(c,r,t))break t;if(n.includes(this.state[c][r]))continue;this.state[c][r]=this.attackZone}t:for(var o=e;o>=0;o--)for(var l=a;l>=0;l--)if(o-l===s){if(!this.isNotBlocking(o,l,t))break t;if(n.includes(this.state[o][l]))continue;this.state[o][l]=this.attackZone}t:for(var u=e;u<8;u++)for(var h=a;h<8;h++)if(u-h===s){if(!this.isNotBlocking(u,h,t))break t;if(n.includes(this.state[u][h]))continue;this.state[u][h]=this.attackZone}t:for(var f=e;f<8;f++)for(var b=a;b>=0;b--)if(f+b===i){if(!this.isNotBlocking(f,b,t))break t;if(n.includes(this.state[f][b]))continue;this.state[f][b]=this.attackZone}}},{key:"kingZone",value:function(t,e,a){for(var i=[t,this.blackKing],s=e-1;s<=e+1;s++)for(var n=a-1;n<=a+1;n++)!this.state[s]||n<0||n>7||i.includes(this.state[s][n])||this.isNotBlocking(s,n,t)&&(this.state[s][n]=this.attackZone)}},{key:"horseZone",value:function(t,e,a){for(var i=[t,this.blackKing],s=a-1,n=a-2,c=a+1,r=a+2,o=e-2;o<=e+2;o++)this.state[o]&&(o!==e+2&&o!==e-2||(s>=0&&this.isNotBlocking(o,s,t)&&!i.includes(this.state[o][s])&&(this.state[o][s]=this.attackZone),c<=7&&this.isNotBlocking(o,c,t)&&!i.includes(this.state[o][c])&&(this.state[o][c]=this.attackZone)),o!==e-1&&o!==e+1||(n>=0&&this.isNotBlocking(o,n,t)&&!i.includes(this.state[o][n])&&(this.state[o][n]=this.attackZone),r<=7&&this.isNotBlocking(o,r,t)&&!i.includes(this.state[o][r])&&(this.state[o][r]=this.attackZone)))}},{key:"runAll",value:function(){this.queenZone.apply(this,[this.queen].concat(Object(r.a)(this.positions[this.queen]))),this.bishopZone.apply(this,[this.bishop].concat(Object(r.a)(this.positions[this.bishop]))),this.kingZone.apply(this,[this.king].concat(Object(r.a)(this.positions[this.king]))),this.horseZone.apply(this,[this.horse].concat(Object(r.a)(this.positions[this.horse])))}}]),t}(),m=a(6),k=m.a.div((function(t){var e=t.activeFigure,a=t.elm;return"\n\ttransform: ".concat(e===a?"scale(1.2)":"",";\n\tbackground-size: cover;\n\tbackground-position: center;\n   ")})),d=function(t){var e=t.elm,a=t.selectActiveFigure,i=t.activeFigure,n=["chess-figure","chess-figure--".concat(e),"chess-figure--outside"];return s.a.createElement(k,{className:n.join(" "),activeFigure:i,elm:e,onClick:a.bind(void 0,e)})},v=m.a.li((function(t){var e=t.activeFigure,a=t.figuresProtected,i=t.item;return"\n   background-color:".concat(1===i?"rgba(255, 0, 0, 0.200)":a[i]&&50===i?"rgba(255, 0, 0, 0.500)":a[i]?"rgba(0, 184, 0, 0.350)":"",";\n   &:hover {\n     background-color: ").concat(e?"rgba(255, 208, 0, 0.250)":"",";\n   }\n   \n   ")})),g=m.a.div((function(t){return"\n\t\n\tbackground-size: cover;\n\tbackground-position: center;\n   "})),p=function(t){var e=t.state,a=t.setFigures,i=t.figuresProtected,n=t.activeFigure;return s.a.createElement("div",{className:"chess-board"},s.a.createElement("div",{className:"chess-board__part-1"}),s.a.createElement("div",{className:"chess-board__part-2"}),s.a.createElement("div",{className:"chess-board__cell-container"},e.map((function(t,e){return s.a.createElement("ul",{key:e,className:"chess-board__row"},t.map((function(t,c){return s.a.createElement(v,{figuresProtected:i,item:t,activeFigure:n,key:"".concat(e,"-").concat(c),onClick:function(i){return function(t,e,i,s){a(e,i,s,{x:t.clientX,y:t.clientY})}(i,e,c,t)},className:"chess-board__cell"},t>9?s.a.createElement(g,{className:"\n\t\t\t\t\t\t\t\t\t\tchess-figure \n\t\t\t\t\t\t\t\t\t\tchess-board__cell-figure  \n\t\t\t\t\t\t\t\t\t\tchess-figure--".concat(t)}):null)})))}))))},O=a(15),j=a(16),N=function(t){var e=t.className,a=t.children,i=Object(j.a)(t,["className","children"]);return s.a.createElement("button",Object.assign({},i,{className:e?"ns-btn ".concat(e):"ns-btn"}),a)},E={enter:700,exit:500},y=function(t){var e=t.show,a=t.closeModal,i=t.mateStatus;return c.a.createPortal(s.a.createElement(O.a,{mountOnEnter:!0,unmountOnExit:!0,in:e,timeout:E},(function(t){var e=["modal","entering"===t?"modal--open":"exiting"===t?"modal--closed":null];return s.a.createElement("div",{className:e.join(" ")},s.a.createElement("h1",{className:"mate-checker__status"},i),s.a.createElement("div",null,s.a.createElement(N,{className:"ns-btn--black",onClick:a},"Reset positions")))})),document.getElementById("root"))},_=function(){var t=Array(8).fill(Array(8).fill(0)),e={10:null,20:null,30:null,40:null,50:null},a={10:!1,20:!1,30:!1,40:!1,50:!1},n=Object(i.useState)(t),c=Object(u.a)(n,2),h=c[0],f=c[1],m=Object(i.useState)(!1),k=Object(u.a)(m,2),v=k[0],g=k[1],O=Object(i.useState)(""),j=Object(u.a)(O,2),E=j[0],_=j[1],Z=Object(i.useState)(a),B=Object(u.a)(Z,2),P=B[0],S=B[1],F=Object(i.useState)(e),w=Object(u.a)(F,2),A=w[0],x=w[1],J=Object(i.useState)(""),K=Object(u.a)(J,2),M=K[0],q=K[1],C=function(t){_(t===E?"":t)};return s.a.createElement("div",{className:"mate-checker"},s.a.createElement("div",{className:"mate-checker__main"},s.a.createElement("div",{className:"mate-checker__container"},s.a.createElement("div",{className:"mate-checker__left-side"},s.a.createElement("div",{className:"mate-checker__btn"},s.a.createElement(N,{className:"ns-btn--black",onClick:function(){if(!v){var t=new b(h,A,P);Object.values(A).map((function(t){return t})).includes(null)?alert("Please set all figures"):!function(t,e){var a=Object(r.a)(t),i=a[0],s=a[1],n=Object(r.a)(e),c=n[0],o=n[1];return!(Math.abs(i-c)<=1&&Math.abs(s-o)<=1)}(A[10],A[50])?alert("You can't set two kings next to each other"):(t.runAll(),f(t.state),S((function(e){return Object(l.a)({},e,{},t.isProtected)})),q(t.checkIsMate()),g(!0))}}},"Submit")),s.a.createElement("div",{className:"mate-checker__figures"},Object.keys(A).map((function(t){return A[t]?s.a.createElement("div",{key:t}):s.a.createElement(d,{activeFigure:E,selectActiveFigure:C,figuresPositions:A,key:t,elm:+t})})))),s.a.createElement(p,{state:h,activeFigure:E,setFigures:function(t,e,a){if(!v){var i=JSON.stringify(h),s=JSON.parse(i);if(!E){if(!a)return;return x((function(t){return Object(l.a)({},t,Object(o.a)({},a,null))})),s[t][e]=0,f(s)}s[t][e]>9?alert("This field has already occupied"):(x((function(a){return Object(l.a)({},a,Object(o.a)({},E,[t,e]))})),s[t][e]=E,f(s),_(""))}},figuresProtected:P}),s.a.createElement(y,{show:v,mateStatus:M,closeModal:function(){f(t),x(e),S(a),g(!1)}}))))};var Z=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(_,null))};c.a.render(s.a.createElement(Z,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.0223ba33.chunk.js.map