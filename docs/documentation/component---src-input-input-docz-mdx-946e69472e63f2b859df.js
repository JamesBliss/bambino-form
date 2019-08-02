(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{204:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return s}),n.d(t,"default",function(){return b});n(19),n(9),n(11),n(2),n(21),n(222),n(212);var r=n(244),a=n(259),o=n(260),i=n(252),l=n(280),u=n(243);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s={},p={_frontmatter:s},m=a.a;function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.a)(m,c({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.a)("h1",{id:"input"},"Input"),Object(r.a)("p",null,"This exported component is not expected to be your solution within a project but more an example of how to use the library."),Object(r.a)("h2",{id:"props"},"Props"),Object(r.a)(o.b,{of:u.a,mdxType:"Props"}),Object(r.a)("h2",{id:"basic-usage"},"Basic usage"),Object(r.a)(o.a,{__position:1,__code:'<Form onSubmit={_ => _}>\n  <Input\n    name="first_name"\n    placeholder="Enter First Name"\n    label="First name"\n  />\n</Form>',__scope:{props:n,DefaultLayout:a.a,Playground:o.a,Props:o.b,string:i.string,Form:l.a,Input:u.a},mdxType:"Playground"},Object(r.a)(l.a,{onSubmit:function(e){return e},mdxType:"Form"},Object(r.a)(u.a,{name:"first_name",placeholder:"Enter First Name",label:"First name",mdxType:"Input"}))),Object(r.a)("h2",{id:"multiline-usage"},"Multiline usage"),Object(r.a)(o.a,{__position:2,__code:'<Form onSubmit={_ => _}>\n  <Input\n    label="Description"\n    name="description"\n    placeholder="Enter Description"\n    multiline\n  />\n</Form>',__scope:{props:n,DefaultLayout:a.a,Playground:o.a,Props:o.b,string:i.string,Form:l.a,Input:u.a},mdxType:"Playground"},Object(r.a)(l.a,{onSubmit:function(e){return e},mdxType:"Form"},Object(r.a)(u.a,{label:"Description",name:"description",placeholder:"Enter Description",multiline:!0,mdxType:"Input"}))),Object(r.a)("h2",{id:"inline-schema-usage"},"Inline schema usage"),Object(r.a)(o.a,{__position:3,__code:'<Form onSubmit={_ => _}>\n  <Input\n    label="Last Name"\n    name="last_name"\n    placeholder="Enter Last Name"\n    schema={string().required(\'Last name is required\')}\n  />\n</Form>',__scope:{props:n,DefaultLayout:a.a,Playground:o.a,Props:o.b,string:i.string,Form:l.a,Input:u.a},mdxType:"Playground"},Object(r.a)(l.a,{onSubmit:function(e){return e},mdxType:"Form"},Object(r.a)(u.a,{label:"Last Name",name:"last_name",placeholder:"Enter Last Name",schema:Object(i.string)().required("Last name is required"),mdxType:"Input"}))))}b.isMDXComponent=!0},243:function(e,t,n){"use strict";n(211),n(20),n(43),n(13),n(9),n(11),n(2),n(21),n(19);var r=n(222),a=n(212),o=n.n(a),i=n(281);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var p=function(e){var t=e.name,n=e.label,a=e.multiline,p=e.schema,m=e.value,b=s(e,["name","label","multiline","schema","value"]),f=o.a.useRef(null),d=Object(i.a)({name:t,ref:f,schema:p,value:m}),O=d.error,j=d.fieldName,y=d.defaultValue,_=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach(function(t){c(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},b,{},s(d,["error","fieldName","defaultValue"]),{defaultValue:y,ref:f});return Object(r.a)(o.a.Fragment,null,n&&Object(r.a)("label",{className:"form__label",htmlFor:j},n),a?Object(r.a)("textarea",l({className:"form__textarea"},_)):Object(r.a)("input",l({className:"form__input"},_)),O&&Object(r.a)("span",{className:"form__error"},O))};p.defaultProps={label:null,placeholder:"",multiline:!1,schema:null,value:null},t.a=p,p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"InputField",filename:"src/Input/Input.js"}}),p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"InputField",filename:"src/Input/Input.js"}})}}]);
//# sourceMappingURL=component---src-input-input-docz-mdx-946e69472e63f2b859df.js.map