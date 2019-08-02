(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{203:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",function(){return b}),t.d(n,"default",function(){return f});t(20),t(9),t(11),t(21),t(42),t(2),t(278),t(229),t(211);var r=t(255),a=t(277),o=t(322),u=t(272),i=t(320),l=t(405),c=t(276);function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var b={},m={_frontmatter:b},p=a.a;function f(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(r.a)(p,s({},m,t,{components:n,mdxType:"MDXLayout"}),Object(r.a)("h1",{id:"context"},"Context"),Object(r.a)("p",null,"The ",Object(r.a)("inlineCode",{parentName:"p"},"<Context />")," offers access to various props without going through other hooks and components. If you want direct access to the context powering the current form this is you go to!"),Object(r.a)("h2",{id:"basic-usage"},"Basic usage"),Object(r.a)(o.a,{__position:0,__code:'<Form onSubmit={_ => _}>\n  <Input\n    name="name"\n    schema={string().required(\'Name is required\')}\n    placeholder="Enter name"\n  />\n  <Context.Consumer>\n    {props => {\n      /* hack so you can see functions 🙈 */\n      Function.prototype.toJSON = function() {\n        return this.toString()\n      }\n      /* rending everything out of the context! */\n      return <pre>{JSON.stringify(props, null, 2)}</pre>\n    }}\n  </Context.Consumer>\n</Form>',__scope:{props:t,DefaultLayout:a.a,Playground:o.a,Props:o.b,object:u.object,string:u.string,Form:i.a,Context:l.a,Input:c.a},mdxType:"Playground"},Object(r.a)(i.a,{onSubmit:function(e){return e},mdxType:"Form"},Object(r.a)(c.a,{name:"name",schema:Object(u.string)().required("Name is required"),placeholder:"Enter name",mdxType:"Input"}),Object(r.a)(l.a.Consumer,null,function(e){return Function.prototype.toJSON=function(){return this.toString()},Object(r.a)("pre",null,JSON.stringify(e,null,2))}))),Object(r.a)("h2",{id:"disable-submit"},"Disable Submit"),Object(r.a)("p",null,"With this contextual power you can do things like disabling the submit if there are errors."),Object(r.a)("p",null,"I'll leave you to come up with me 😅"),Object(r.a)(o.a,{__position:1,__code:'<Form onSubmit={data => alert(JSON.stringify(data, null, 2))}>\n  <Input\n    name="name"\n    schema={string().required(\'Name is required\')}\n    placeholder="Enter name"\n  />\n  <br />\n  {/* This is required because docz doesn\'t support form submission 🤦‍ */}\n  <Context.Consumer>\n    {({ handleSubmit, errors }) => (\n      <button\n        disabled={Object.keys(errors).length}\n        onClick={e => handleSubmit(e)}\n      >\n        Submit full name\n      </button>\n    )}\n  </Context.Consumer>\n</Form>',__scope:{props:t,DefaultLayout:a.a,Playground:o.a,Props:o.b,object:u.object,string:u.string,Form:i.a,Context:l.a,Input:c.a},mdxType:"Playground"},Object(r.a)(i.a,{onSubmit:function(e){return alert(JSON.stringify(e,null,2))},mdxType:"Form"},Object(r.a)(c.a,{name:"name",schema:Object(u.string)().required("Name is required"),placeholder:"Enter name",mdxType:"Input"}),Object(r.a)("br",null),Object(r.a)(l.a.Consumer,null,function(e){var n=e.handleSubmit,t=e.errors;return Object(r.a)("button",{disabled:Object.keys(t).length,onClick:function(e){return n(e)}},"Submit full name")}))))}f.isMDXComponent=!0},276:function(e,n,t){"use strict";t(210),t(19),t(44),t(13),t(9),t(11),t(2),t(21);var r=t(229),a=t(211),o=t.n(a),u=t(321);function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}var s=function(e){var n=e.name,t=e.label,a=e.multiline,s=e.schema,b=e.value,m=c(e,["name","label","multiline","schema","value"]),p=o.a.useRef(null),f=Object(u.a)({name:n,ref:p,schema:s,value:b}),d=f.error,O=f.fieldName,j=f.defaultValue,h=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(t,!0).forEach(function(n){l(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({},m,{},c(f,["error","fieldName","defaultValue"]),{defaultValue:j,fieldName:O,ref:p});return Object(r.a)(o.a.Fragment,null,t&&Object(r.a)("label",{htmlFor:O},t),a?Object(r.a)("textarea",h):Object(r.a)("input",h),d&&Object(r.a)("span",null,d))};s.defaultProps={label:null,multiline:!1,schema:null,value:null},n.a=s,s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"InputField",filename:"src/Input/Input.js"}}),s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"InputField",filename:"src/Input/Input.js"}})}}]);
//# sourceMappingURL=component---dist-context-context-docz-mdx-d55d389a36e445003a5f.js.map