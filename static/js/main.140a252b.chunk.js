(this["webpackJsonpanxious-notes"]=this["webpackJsonpanxious-notes"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"These are test notes","symbol":"2020_0821","keywords":"2020_0821"},{"title":"Some other test notes","symbol":"2021_0403","keywords":"2021_0403"}]')},function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),i=n(1),s=n(2),u=n(4),l=n(3),m=(n(14),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("header",{className:"component-header"},r.a.createElement("img",{src:"//res.cloudinary.com/quantumart/image/upload/w_1400,f_auto/QA001/2020_0514.jpg",width:"64",alt:""}),"Anxious Pleasures: Notes",r.a.createElement("img",{src:"//res.cloudinary.com/quantumart/image/upload/w_1400,f_auto/QA001/2020_0418.jpg",width:"64",alt:""}))}}]),n}(a.PureComponent)),p=(n(15),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){e.props.textChange(t)},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"component-search-input"},r.a.createElement("div",null,r.a.createElement("input",{onChange:this.handleChange})))}}]),n}(a.PureComponent)),h=n(7),d=n.n(h),f=(n(16),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){this.props.symbol.codePointAt(0).toString(16);var e="//res.cloudinary.com/quantumart/image/upload/w_1400,f_auto/QA001/".concat(this.props.symbol,".jpg");return r.a.createElement("div",{className:"component-emoji-result-row copy-to-clipboard","data-clipboard-text":this.props.symbol},r.a.createElement("img",{alt:this.props.symbol,src:e}),r.a.createElement("span",{className:"title"},this.props.symbol+": "+this.props.title))}}]),n}(a.PureComponent)),b=(n(17),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.clipboard=new d.a(".copy-to-clipboard")}},{key:"componentWillUnmount",value:function(){this.clipboard.destroy()}},{key:"render",value:function(){return r.a.createElement("div",{className:"component-emoji-results"},this.props.emojiData.map((function(e){return r.a.createElement(f,{key:e.title,symbol:e.symbol,title:e.title})})))}}]),n}(a.PureComponent)),y=n(8);function j(e,t){return y.filter((function(t){return!!t.title.toLowerCase().includes(e.toLowerCase())||!!t.keywords.includes(e)})).slice(0,t)}var v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleSearchChange=function(e){a.setState({filteredEmoji:j(e.target.value,20)})},a.state={filteredEmoji:j("",20)},a}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement(p,{textChange:this.handleSearchChange}),r.a.createElement(b,{emojiData:this.state.filteredEmoji}))}}]),n}(a.PureComponent);n(18),n(19);c.a.render(r.a.createElement(v,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.140a252b.chunk.js.map