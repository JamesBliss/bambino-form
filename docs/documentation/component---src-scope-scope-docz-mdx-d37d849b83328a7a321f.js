(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{209:function(e,t,n){"use strict";n.r(t);n(19),n(9),n(11),n(2),n(21);var r=n(222),a=n(212),o=n(244),c=n(259),l=n(260),i=n(252),u=n(280),p=n(324),b=(n(211),n(43),n(13),n(407));function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach(function(t){d(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(e){var t=e.path,n=e.children,o=Object(a.useContext)(b.a),c=o.scopePath,l=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(o,["scopePath"]),i=t;return c&&(i="number"==typeof t?"["+t+"]":"."+t),Object(r.a)(b.a.Provider,{value:m({},l,{scopePath:c.concat(i)})},n)},O=f;f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"Scope",filename:"src/Scope/Scope.js"}}),f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"Scope",filename:"src/Scope/Scope.js"}});var h=n(243);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"_frontmatter",function(){return y}),n.d(t,"default",function(){return _});var y={},S={_frontmatter:y},g=c.a;function _(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(o.a)(g,j({},S,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h1",{id:"scope"},"Scope"),Object(o.a)("p",null,"The ",Object(o.a)("inlineCode",{parentName:"p"},"<Scope />")," component is a magical component which allows you to nest fields!"),Object(o.a)("h2",{id:"props"},"Props"),Object(o.a)(l.b,{of:O,mdxType:"Props"}),Object(o.a)("h2",{id:"basic-usage"},"Basic usage"),Object(o.a)(l.a,{__position:1,__code:'<Form onSubmit={data => alert(JSON.stringify(data, null, 2))}>\n  <Input name="name" placeholder="Name" />\n  <br />\n  <Scope path="child">\n    <Input name="child_field" placeholder="Child field" />\n  </Scope>\n  <br />\n  {/* This is required because docz doesn\'t support form submission 🤦‍ */}\n  <Context.Consumer>\n    {({ handleSubmit }) => (\n      <button onClick={e => handleSubmit(e)}>Submit name </button>\n    )}\n  </Context.Consumer>\n</Form>',__scope:{props:n,DefaultLayout:c.a,Playground:l.a,Props:l.b,object:i.object,string:i.string,Form:u.a,Context:p.a,Scope:O,Input:h.a},mdxType:"Playground"},Object(o.a)(u.a,{onSubmit:function(e){return alert(JSON.stringify(e,null,2))},mdxType:"Form"},Object(o.a)(h.a,{name:"name",placeholder:"Name",mdxType:"Input"}),Object(o.a)("br",null),Object(o.a)(O,{path:"child",mdxType:"Scope"},Object(o.a)(h.a,{name:"child_field",placeholder:"Child field",mdxType:"Input"})),Object(o.a)("br",null),Object(o.a)(p.a.Consumer,null,function(e){var t=e.handleSubmit;return Object(o.a)("button",{onClick:function(e){return t(e)}},"Submit name ")}))),Object(o.a)("h2",{id:"usage-with-arrays"},"Usage with arrays!"),Object(o.a)(l.a,{__position:2,__code:'<Form onSubmit={data => alert(JSON.stringify(data, null, 2))}>\n  <Input name="name" placeholder="Name" />\n  <br />\n  <Scope path="child">\n    <Input name="child_field" placeholder="Child field" />\n    <Scope path="child_array">\n      <Scope path={0}>\n        <br />\n        <Input name="child_array_field" placeholder="Child array field" />\n      </Scope>\n      <Scope path={1}>\n        <br />\n        <Input name="child_array_field" placeholder="Child array field" />\n      </Scope>\n    </Scope>\n  </Scope>\n  <br />\n  {/* This is required because docz doesn\'t support form submission 🤦‍ */}\n  <Context.Consumer>\n    {({ handleSubmit }) => (\n      <button onClick={e => handleSubmit(e)}>Submit name </button>\n    )}\n  </Context.Consumer>\n</Form>',__scope:{props:n,DefaultLayout:c.a,Playground:l.a,Props:l.b,object:i.object,string:i.string,Form:u.a,Context:p.a,Scope:O,Input:h.a},mdxType:"Playground"},Object(o.a)(u.a,{onSubmit:function(e){return alert(JSON.stringify(e,null,2))},mdxType:"Form"},Object(o.a)(h.a,{name:"name",placeholder:"Name",mdxType:"Input"}),Object(o.a)("br",null),Object(o.a)(O,{path:"child",mdxType:"Scope"},Object(o.a)(h.a,{name:"child_field",placeholder:"Child field",mdxType:"Input"}),Object(o.a)(O,{path:"child_array",mdxType:"Scope"},Object(o.a)(O,{path:0,mdxType:"Scope"},Object(o.a)("br",null),Object(o.a)(h.a,{name:"child_array_field",placeholder:"Child array field",mdxType:"Input"})),Object(o.a)(O,{path:1,mdxType:"Scope"},Object(o.a)("br",null),Object(o.a)(h.a,{name:"child_array_field",placeholder:"Child array field",mdxType:"Input"})))),Object(o.a)("br",null),Object(o.a)(p.a.Consumer,null,function(e){var t=e.handleSubmit;return Object(o.a)("button",{onClick:function(e){return t(e)}},"Submit name ")}))))}_.isMDXComponent=!0},243:function(e,t,n){"use strict";n(211),n(20),n(43),n(13),n(9),n(11),n(2),n(21),n(19);var r=n(222),a=n(212),o=n.n(a),c=n(281);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var b=function(e){var t=e.name,n=e.label,a=e.multiline,b=e.schema,s=e.value,m=p(e,["name","label","multiline","schema","value"]),d=o.a.useRef(null),f=Object(c.a)({name:t,ref:d,schema:b,value:s}),O=f.error,h=f.fieldName,j=f.defaultValue,y=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){u(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},m,{},p(f,["error","fieldName","defaultValue"]),{defaultValue:j,ref:d});return Object(r.a)(o.a.Fragment,null,n&&Object(r.a)("label",{className:"form__label",htmlFor:h},n),a?Object(r.a)("textarea",l({className:"form__textarea"},y)):Object(r.a)("input",l({className:"form__input"},y)),O&&Object(r.a)("span",{className:"form__error"},O))};b.defaultProps={label:null,placeholder:"",multiline:!1,schema:null,value:null},t.a=b,b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"InputField",filename:"src/Input/Input.js"}}),b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"InputField",filename:"src/Input/Input.js"}})}}]);
//# sourceMappingURL=component---src-scope-scope-docz-mdx-d37d849b83328a7a321f.js.map