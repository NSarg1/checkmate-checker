(this["webpackJsonpreact-project-sample"]=this["webpackJsonpreact-project-sample"]||[]).push([[0],{18:function(t,e,i){t.exports=i(29)},23:function(t,e,i){},29:function(t,e,i){"use strict";i.r(e);var a=i(0),s=i.n(a),n=i(4),c=i.n(n),r=(i(23),i(6)),o=i(3),l=i(2),u=i(1),h=i(10),f=i(11),k=function(){function t(e,i,a){var s=this;Object(h.a)(this,t),this.checkIsMate=function(){for(var t=s.blackKing,e=Object(u.a)(s.positions[t],2),i=e[0],a=e[1],n=s.isProtected[t],c=Object(r.a)(s.state),o=[],l=i-1;l<=i+1;l++)if(console.log("_board[i]",l),c[l])for(var h=a-1;h<=a+1;h++)(c[l][h]||0===c[l][h])&&o.push(c[l][h]);return console.log(o),o.includes(0)?"This isn't mate":o.includes(0)||!1!==n?"White wins.":"This is stalemate. Nobody wins"},this.state=JSON.parse(JSON.stringify(e)),this.positions=Object(l.a)({},i),this.isProtected=Object(l.a)({},a),this.attackZone=1,this.king=10,this.queen=20,this.horse=30,this.bishop=40,this.blackKing=50}return Object(f.a)(t,[{key:"isNotBlocking",value:function(t,e,i){var a=this.state[t][e];return a<10||a===i||(50===a?(this.isProtected=Object(l.a)({},this.isProtected,Object(o.a)({},a,!0)),!0):(this.isProtected=Object(l.a)({},this.isProtected,Object(o.a)({},a,!0)),!1))}},{key:"queenZone",value:function(){var t=this.queen,e=Object(u.a)(this.positions[t],2),i=e[0],a=e[1],s=i+a,n=i-a,c=[t,this.blackKing];t:for(var r=i;r>=0;r--)for(var o=a;o<8;o++)if(r+o===s){if(!this.isNotBlocking(r,o,t))break t;if(c.includes(this.state[r][o]))continue;this.state[r][o]=this.attackZone}t:for(var l=i;l>=0;l--)for(var h=a;h<8;h++)if(h===a){if(!this.isNotBlocking(l,h,t))break t;if(c.includes(this.state[l][h]))continue;this.state[l][h]=this.attackZone}t:for(var f=i;f>=0;f--)for(var k=a;k>=0;k--)if(f-k===n){if(!this.isNotBlocking(f,k,t))break t;if(c.includes(this.state[f][k]))continue;this.state[f][k]=this.attackZone}t:for(var b=i;b<8;b++)for(var m=a;m<8;m++)if(b-m===n){if(!this.isNotBlocking(b,m,t))break t;if(c.includes(this.state[b][m]))continue;this.state[b][m]=this.attackZone}t:for(var v=i;v<8;v++)for(var d=a;d<8;d++)if(d===a){if(!this.isNotBlocking(v,d,t))break t;if(c.includes(this.state[v][d]))continue;this.state[v][d]=this.attackZone}t:for(var g=i;g<8;g++)for(var N=a;N>=0;N--)if(g+N===s){if(!this.isNotBlocking(g,N,t))break t;if(c.includes(this.state[g][N]))continue;this.state[g][N]=this.attackZone}for(var O=a-1;O>=0&&this.isNotBlocking(i,O,t);O--)50!==this.state[i][O]&&(this.state[i][O]=this.attackZone);for(var j=a+1;j<8&&this.isNotBlocking(i,j,t);j++)50!==this.state[i][j]&&(this.state[i][j]=this.attackZone)}},{key:"bishopZone",value:function(){var t=this.bishop,e=Object(u.a)(this.positions[t],2),i=e[0],a=e[1],s=i+a,n=i-a,c=[t,this.blackKing];t:for(var r=i;r>=0;r--)for(var o=a;o<8;o++)if(r+o===s){if(!this.isNotBlocking(r,o,t))break t;if(c.includes(this.state[r][o]))continue;this.state[r][o]=this.attackZone}t:for(var l=i;l>=0;l--)for(var h=a;h>=0;h--)if(l-h===n){if(!this.isNotBlocking(l,h,t))break t;if(c.includes(this.state[l][h]))continue;this.state[l][h]=this.attackZone}t:for(var f=i;f<8;f++)for(var k=a;k<8;k++)if(f-k===n){if(!this.isNotBlocking(f,k,t))break t;if(c.includes(this.state[f][k]))continue;this.state[f][k]=this.attackZone}t:for(var b=i;b<8;b++)for(var m=a;m>=0;m--)if(b+m===s){if(!this.isNotBlocking(b,m,t))break t;if(c.includes(this.state[b][m]))continue;this.state[b][m]=this.attackZone}}},{key:"kingZone",value:function(){for(var t=this.king,e=Object(u.a)(this.positions[t],2),i=e[0],a=e[1],s=[t,this.blackKing],n=i-1;n<=i+1;n++)for(var c=a-1;c<=a+1;c++)!this.state[n]||c<0||c>7||s.includes(this.state[n][c])||this.isNotBlocking(n,c,t)&&(this.state[n][c]=this.attackZone)}},{key:"horseZone",value:function(){for(var t=this.horse,e=Object(u.a)(this.positions[t],2),i=e[0],a=e[1],s=[t,this.blackKing],n=a-1,c=a-2,r=a+1,o=a+2,l=i-2;l<=i+2;l++)this.state[l]&&(l!==i+2&&l!==i-2||(n>=0&&this.isNotBlocking(l,n,t)&&s.includes(this.state[l][a])&&(this.state[l][n]=this.attackZone),r<=7&&this.isNotBlocking(l,r,t)&&s.includes(this.state[l][a])&&(this.state[l][r]=this.attackZone)),l!==i-1&&l!==i+1||(c>=0&&this.isNotBlocking(l,c,t)&&s.includes(this.state[l][a])&&(this.state[l][c]=this.attackZone),o<=7&&this.isNotBlocking(l,o,t)&&s.includes(this.state[l][a])&&(this.state[l][o]=this.attackZone)))}},{key:"runAll",value:function(){this.queenZone(),this.bishopZone(),this.kingZone(),this.horseZone()}}]),t}(),b=i(5),m=b.a.div((function(t){var e=t.activeFigure,i=t.elm;return"\n   \ttransform: ".concat(e===i?"scale(1.2)":"",";\n\tbackground-size: cover;\n\tbackground-position: center;\n   ")})),v=function(t){var e=t.elm,i=t.selectActiveFigure,a=t.activeFigure,n=["chess-figure","chess-figure--".concat(e),"chess-figure--outside"];return s.a.createElement(m,{className:n.join(" "),activeFigure:a,elm:e,onClick:i.bind(void 0,e)})},d=b.a.li((function(t){var e=t.activeFigure,i=t.figuresProtected,a=t.item;return"\n   background-color:".concat(1===a?"rgba(255, 0, 0, 0.200)":i[a]&&50===a?"rgba(255, 0, 0, 0.500)":i[a]?"rgba(0, 184, 0, 0.350)":"",";\n   &:hover {\n     background-color: ").concat(e?"rgba(255, 208, 0, 0.250)":"",";\n   }\n   \n   ")})),g=b.a.div((function(t){return"\n\t\n\tbackground-size: cover;\n\tbackground-position: center;\n   "})),N=function(t){var e=t.state,i=t.setFigures,a=t.figuresProtected,n=t.activeFigure;return s.a.createElement("div",{className:"chess-board"},s.a.createElement("div",{className:"chess-board__part-1"}),s.a.createElement("div",{className:"chess-board__part-2"}),s.a.createElement("div",{className:"chess-board__cell-container"},e.map((function(t,e){return s.a.createElement("ul",{key:e,className:"chess-board__row"},t.map((function(t,c){return s.a.createElement(d,{figuresProtected:a,item:t,activeFigure:n,key:"".concat(e,"-").concat(c),onClick:function(a){return function(t,e,a,s){i(e,a,s,{x:t.clientX,y:t.clientY})}(a,e,c,t)},className:"chess-board__cell"},t>9?s.a.createElement(g,{className:"\n\t\t\t\t\t\t\t\t\t\tchess-figure \n\t\t\t\t\t\t\t\t\t\tchess-board__cell-figure  \n\t\t\t\t\t\t\t\t\t\tchess-figure--".concat(t)}):null)})))}))))},O=i(15),j=i(16),p=function(t){var e=t.className,i=t.children,a=Object(j.a)(t,["className","children"]);return s.a.createElement("button",Object.assign({},a,{className:e?"ns-btn ".concat(e):"ns-btn"}),i)},E={enter:700,exit:500},Z=function(t){var e=t.show,i=t.closeModal,a=t.mateStatus;return c.a.createPortal(s.a.createElement(O.a,{mountOnEnter:!0,unmountOnExit:!0,in:e,timeout:E},(function(t){var e=["modal","entering"===t?"modal--open":"exiting"===t?"modal--closed":null];return console.log(t),s.a.createElement("div",{className:e.join(" ")},s.a.createElement("h1",{className:"mate-checker__status"},a),s.a.createElement("div",null,s.a.createElement(p,{className:"ns-btn--black",onClick:i},"Reset positions")))})),document.getElementById("root"))},_=function(){var t=Array(8).fill(Array(8).fill(0)),e={10:null,20:null,30:null,40:null,50:null},i={10:!1,20:!1,30:!1,40:!1,50:!1},n=Object(a.useState)(t),c=Object(u.a)(n,2),h=c[0],f=c[1],b=Object(a.useState)(!1),m=Object(u.a)(b,2),d=m[0],g=m[1],O=Object(a.useState)(""),j=Object(u.a)(O,2),E=j[0],_=j[1],y=Object(a.useState)(i),B=Object(u.a)(y,2),P=B[0],S=B[1],F=Object(a.useState)(e),w=Object(u.a)(F,2),A=w[0],x=w[1],J=Object(a.useState)(""),K=Object(u.a)(J,2),M=K[0],q=K[1],C=function(t){_(t===E?"":t)};return s.a.createElement("div",{className:"mate-checker"},s.a.createElement("div",{className:"mate-checker__main"},s.a.createElement("div",{className:"mate-checker__container"},s.a.createElement("div",{className:"mate-checker__left-side"},s.a.createElement("div",{className:"mate-checker__btn"},s.a.createElement(p,{className:"ns-btn--black",onClick:function(){if(!d){var t=new k(h,A,P);Object.values(A).map((function(t){return t})).includes(null)?alert("Please set all figures"):!function(t,e){var i=Object(r.a)(t),a=i[0],s=i[1],n=Object(r.a)(e),c=n[0],o=n[1];return!(Math.abs(a-c)<=1&&Math.abs(s-o)<=1)}(A[10],A[50])?alert("You can't set two kings next to each other"):(t.runAll(),f(t.state),S((function(e){return Object(l.a)({},e,{},t.isProtected)})),q(t.checkIsMate()),g(!0))}}},"Submit")),s.a.createElement("div",{className:"mate-checker__figures"},Object.keys(A).map((function(t){return A[t]?s.a.createElement("div",{key:t}):s.a.createElement(v,{activeFigure:E,selectActiveFigure:C,figuresPositions:A,key:t,elm:+t})})))),s.a.createElement(N,{state:h,activeFigure:E,setFigures:function(t,e,i){if(!d){var a=JSON.stringify(h),s=JSON.parse(a);if(!E){if(!i)return;return x((function(t){return Object(l.a)({},t,Object(o.a)({},i,null))})),s[t][e]=0,f(s)}s[t][e]>9?alert("This field has already occupied"):(x((function(i){return Object(l.a)({},i,Object(o.a)({},E,[t,e]))})),s[t][e]=E,f(s),_(""))}},figuresProtected:P}),s.a.createElement(Z,{show:d,mateStatus:M,closeModal:function(){f(t),x(e),S(i),g(!1)}}))))};var y=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(_,null))};c.a.render(s.a.createElement(y,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.7b7924f8.chunk.js.map