(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(32)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},28:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),o=a.n(r),c=(a(25),a(26),a(12)),s=a(5),i=a(6),m=a(8),u=a(7),p=a(9),d=a(35),b=a(34),h=a(33);a(27),a(28);var g={background:"#000",color:"#fff",textAlign:"center",padding:"10px",marginBottom:"20px"},f=function(){return l.a.createElement("header",{style:g},l.a.createElement("h3",null,"PHONE DIRECTORY"))},E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted"}},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.sub,t=e.id,a=e.name,n=e.phone;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row",style:v},l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-4"},a),l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-4"},n),l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-4"},l.a.createElement("button",{onClick:this.props.delSub.bind(this,t),style:x},"DELETE"))))}}]),t}(n.Component),x={background:"#F18594",color:"rgb(16, 16, 16)",border:"none",padding:"9px 14px",cursor:"pointer",float:"left",position:"relative",top:"-8px",marginLeft:"30%"},v={marginBottom:"10px",marginTop:"10px"},y=E,O=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return this.props.subs.map(function(t){return l.a.createElement(y,{key:t.id,sub:t,delSub:e.props.delSub})})}}]),t}(n.Component),j=a(15),w=a(36),S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={name:"",phone:""},a.handleChange=function(e){a.setState(Object(j.a)({},e.target.name,e.target.value)),console.log(e.target)},a.handleSubmit=function(e){e.preventDefault(),a.props.addSub({name:a.state.name,phone:a.state.phone}),a.setState({name:"",phone:""}),a.props.history.push("/my-app")},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{style:k,to:"/my-app"},"BACK"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("fieldset",null,l.a.createElement("label",null,"Name:"),l.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange})),l.a.createElement("fieldset",null,l.a.createElement("label",null,"Phone:"),l.a.createElement("input",{type:"text",name:"phone",value:this.state.phone,onChange:this.handleChange})),l.a.createElement("p",{style:N},"Subscriber to be added:"),l.a.createElement("p",null," ",l.a.createElement("span",null,"Name:")," ",this.state.name," ",l.a.createElement("br",null),l.a.createElement("span",null,"Phone:"),"  ",this.state.phone),l.a.createElement("p",null," "),l.a.createElement("input",{style:A,type:"submit",value:"Submit"})))))}}]),t}(n.Component),k={color:"#000",textDecoration:"none",padding:"10px 30px",display:"block",width:"50px",textAlign:"center",marginLeft:"40px",marginBottom:"20px"},N={color:"#44607b",fontSize:"1.2em",fontWeight:"500",marginBottom:"0px"},A={color:"#fff",background:"#72BA6F",textDecoration:"none",padding:"12px 19px",display:"block",width:"110px",textAlign:"center",marginLeft:"0px",marginBottom:"30px",border:"0",cursor:"pointer"},B=Object(w.a)(S),C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={subs:[]},a.delSub=function(e){a.setState({subs:Object(c.a)(a.state.subs.filter(function(t){return t.id!=e}))})},a.addSub=function(e){a.sub=e;var t=a.state.subs.length+1;a.sub.id=t,console.log("sub",a.sub),a.setState({subs:[].concat(Object(c.a)(a.state.subs),[a.sub])}),console.log(a.state.subs)},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(d.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"appcontainer"},l.a.createElement(f,null),l.a.createElement(b.a,{exact:!0,path:"/my-app",render:function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{style:D,to:"/add"},"ADD"),l.a.createElement("div",{class:"row"},l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-4 tableHeader"},"Name"),l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-4 tableHeader"},"Phone")),l.a.createElement(O,{subs:e.state.subs,delSub:e.delSub}))}}),l.a.createElement(b.a,{path:"/my-app/add",render:function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement(B,{addSub:e.addSub}))}}))))}}]),t}(n.Component),D={color:"#fff",background:"#72BA6F",textDecoration:"none",padding:"10px 30px",display:"block",width:"50px",textAlign:"center",marginLeft:"40px",marginBottom:"30px"},F=C;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.48559852.chunk.js.map