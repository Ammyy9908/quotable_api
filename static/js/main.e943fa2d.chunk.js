(this.webpackJsonpfirstapp=this.webpackJsonpfirstapp||[]).push([[0],{18:function(e,t,a){e.exports=a(41)},41:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),c=a.n(r),m=a(12),o=a(13),s=a(17),i=a(16);function d(){return l.a.createElement("div",null,l.a.createElement("div",{className:"modal",id:"modal-profile",tabIndex:"-1",role:"dialog"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("button",{className:"close","data-dismiss":"modal",type:"button","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7")),l.a.createElement("h5",{className:"modal-title"},"Sumit Kumar"),l.a.createElement("p",null,"Hi, I'm Sumit a Self Taught Programmer....!"),l.a.createElement("div",{className:"text-right mt-20"},l.a.createElement("button",{className:"btn btn-primary","data-dismiss":"modal",type:"button"},"OK"))))))}var u=function(e){return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement("div",{className:"page-wrapper with-navbar"},l.a.createElement("nav",{className:"navbar"},l.a.createElement("a",{href:"/#",className:"navbar-brand"},e.brandname),l.a.createElement("ul",{className:"navbar-nav d-none d-md-flex"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link","data-toggle":"modal","data-target":"modal-profile"},"About Developer"))),l.a.createElement("div",{className:"navbar-content d-md-none ml-auto"},l.a.createElement("div",{className:"dropdown with-arrow"},l.a.createElement("button",{className:"btn","data-toggle":"dropdown",type:"button",id:"navbar-dropdown-toggle-btn-1"},"Menu",l.a.createElement("i",{className:"fa fa-angle-down","aria-hidden":"true"})),l.a.createElement("div",{className:"dropdown-menu dropdown-menu-right w-200","aria-labelledby":"navbar-dropdown-toggle-btn-1"},l.a.createElement("a",{className:"dropdown-item","data-toggle":"modal","data-target":"modal-profile"},"About Developer")))))))},p=a(14),E=a.n(p);var v=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"content"},l.a.createElement("h2",{className:"content-title"},e.name),l.a.createElement("p",{className:"text-muted",style:{fontSize:"20px"}},'"',e.content,'"'),l.a.createElement("button",{className:"btn btn-primary",style:{marginRight:"15px"},onClick:function(e){console.log(e.target.textContent),window.location="https://quitable-api.herokuapp.com/quotes/bytag/".concat(e.target.textContent)}},e.tag),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{className:"btn btn-danger",onClick:function(e){console.log(e.target.parentElement.parentElement.querySelector("p").textContent);var t=e.target.parentElement.parentElement.querySelector("p").textContent;navigator.clipboard.writeText(t).then((function(){E.a.toastAlert("precompiled-alert-1",1500)})).catch((function(e){console.log(e)}))}},"Copy"))))},g=a(15),b=a.n(g);var h=function(e){return l.a.createElement("div",{className:"container-fluid",style:{marginTop:"150px",marginLeft:"25px"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-8"},l.a.createElement("h1",{className:"display-1"},"Quotable"),l.a.createElement("p",{style:{fontSize:"20px"}},e.title),l.a.createElement("br",null),l.a.createElement("a",{className:"btn btn-danger btn-lg",href:"https://quitable-api.herokuapp.com/quotes/"},"Get JSON ",l.a.createElement("i",{className:"fas fa-eye"})))))};var f=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"page-wrapper"},l.a.createElement("div",{className:"sticky-alerts"},l.a.createElement("div",{className:"alert filled alert-primary",id:"precompiled-alert-1"},l.a.createElement("p",{className:"text-muted"},"Quote Copied")))))};function N(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"card p-0"},l.a.createElement("div",{className:"content"},l.a.createElement("h2",{className:"content-title"},"Latest Quote"),l.a.createElement("p",{className:"text-muted"},e.content),l.a.createElement("strong",null,"~ by ",e.name),l.a.createElement("div",{className:"text-right"}))))}function y(e){return l.a.createElement("div",{className:"col-sm-4"},l.a.createElement(v,{id:e._id,key:e._id,name:e.author,content:e.content,tag:e.tag}))}var w=[],x=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={data:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://quitable-api.herokuapp.com/quotes/").then((function(t){var a=t.data;e.setState({data:a}),w.push(a[0].content)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement("div",{className:"content-wrapper"},l.a.createElement(u,{brandname:"Quotable"}),l.a.createElement(h,{title:"A RESTFul Api Which Generates Quotes From Different Famous authors in Different Varities."}),l.a.createElement("div",{className:"container-fluid",style:{marginTop:"150px"}},l.a.createElement(N,{content:0===this.state.data.length?"Please Wait......":this.state.data[this.state.data.length-1].content,name:0===this.state.data.length?"Developer":this.state.data[this.state.data.length-1].author}),l.a.createElement("br",null),l.a.createElement("h1",{style:{fontSize:"25px",marginLeft:"25px"}}," ",0===this.state.data.length?"Please Wait....":"Total Quotes "+String(this.state.data.length)),l.a.createElement("div",{className:"row"},this.state.data.map(y)))))}}]),a}(l.a.Component);c.a.render(l.a.createElement("div",null,l.a.createElement(x,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.e943fa2d.chunk.js.map