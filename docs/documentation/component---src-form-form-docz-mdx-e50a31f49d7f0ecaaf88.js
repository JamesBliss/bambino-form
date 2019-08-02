(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{204:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return f}),n.d(t,"default",function(){return p});n(20),n(9),n(11),n(2),n(21),n(214),n(212);var r=n(250),a=n(263),i=n(264),u=n(231),o=n(235),l=n(226),c=n(249);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f={},m={_frontmatter:f},b=a.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.a)(b,s({},m,n,{components:t,mdxType:"MDXLayout"}),Object(r.a)("h1",{id:"form"},"Form"),Object(r.a)("p",null,"The ",Object(r.a)("inlineCode",{parentName:"p"},"<Form />")," component is the most important element of the puzzle, it controls the flow and logic of all that reside within it."),Object(r.a)("p",null,Object(r.a)("inlineCode",{parentName:"p"},"<Form />")," is the place you set a parent schema, initial data set and the sumbit fuction."),Object(r.a)("h2",{id:"props"},"Props"),Object(r.a)(i.b,{of:o.a,mdxType:"Props"}),Object(r.a)("h2",{id:"basic-usage"},"Basic usage"),Object(r.a)(i.a,{__position:1,__code:'<Form onSubmit={data => alert(JSON.stringify(data, null, 2))}>\n  <Input name="name" placeholder="Enter name" />\n  <br />\n  {/* This is required because docz doesn\'t support form submission 🤦‍ */}\n  <Context.Consumer>\n    {({ handleSubmit }) => (\n      <button onClick={e => handleSubmit(e)}>Submit name </button>\n    )}\n  </Context.Consumer>\n</Form>',__scope:{props:n,DefaultLayout:a.a,Playground:i.a,Props:i.b,object:u.object,string:u.string,Form:o.a,Context:l.a,Input:c.a},mdxType:"Playground"},Object(r.a)(o.a,{onSubmit:function(e){return alert(JSON.stringify(e,null,2))},mdxType:"Form"},Object(r.a)(c.a,{name:"name",placeholder:"Enter name",mdxType:"Input"}),Object(r.a)("br",null),Object(r.a)(l.a.Consumer,null,function(e){var t=e.handleSubmit;return Object(r.a)("button",{onClick:function(e){return t(e)}},"Submit name ")}))),Object(r.a)("h2",{id:"initial-values"},"Initial values"),Object(r.a)(i.a,{__position:2,__code:'<Form\n  initialValues={{\n    first_name: \'James\',\n    last_name: \'Bliss\',\n  }}\n  onSubmit={data => alert(JSON.stringify(data, null, 2))}\n>\n  <Input name="first_name" placeholder="Enter first name" />\n  <br />\n  <Input name="last_name" placeholder="Enter last name" />\n  <br />\n  {/* This is required because docz doesn\'t support form submission 🤦‍ */}\n  <Context.Consumer>\n    {({ handleSubmit }) => (\n      <button onClick={e => handleSubmit(e)}>Submit full name </button>\n    )}\n  </Context.Consumer>\n</Form>',__scope:{props:n,DefaultLayout:a.a,Playground:i.a,Props:i.b,object:u.object,string:u.string,Form:o.a,Context:l.a,Input:c.a},mdxType:"Playground"},Object(r.a)(o.a,{initialValues:{first_name:"James",last_name:"Bliss"},onSubmit:function(e){return alert(JSON.stringify(e,null,2))},mdxType:"Form"},Object(r.a)(c.a,{name:"first_name",placeholder:"Enter first name",mdxType:"Input"}),Object(r.a)("br",null),Object(r.a)(c.a,{name:"last_name",placeholder:"Enter last name",mdxType:"Input"}),Object(r.a)("br",null),Object(r.a)(l.a.Consumer,null,function(e){var t=e.handleSubmit;return Object(r.a)("button",{onClick:function(e){return t(e)}},"Submit full name ")}))),Object(r.a)("h2",{id:"schema"},"Schema"),Object(r.a)(i.a,{__position:3,__code:'<Form\n  schema={object().shape({\n    first_name: string().required(\'First name is required\'),\n    last_name: string(),\n  })}\n  onSubmit={data => alert(JSON.stringify(data, null, 2))}\n>\n  <Input name="first_name" placeholder="Enter first name" />\n  <br />\n  <Input name="last_name" placeholder="Enter last name" />\n  <br />\n  {/* This is required because docz doesn\'t support form submission 🤦‍ */}\n  <Context.Consumer>\n    {({ handleSubmit }) => (\n      <button onClick={e => handleSubmit(e)}>Submit full name </button>\n    )}\n  </Context.Consumer>\n</Form>',__scope:{props:n,DefaultLayout:a.a,Playground:i.a,Props:i.b,object:u.object,string:u.string,Form:o.a,Context:l.a,Input:c.a},mdxType:"Playground"},Object(r.a)(o.a,{schema:Object(u.object)().shape({first_name:Object(u.string)().required("First name is required"),last_name:Object(u.string)()}),onSubmit:function(e){return alert(JSON.stringify(e,null,2))},mdxType:"Form"},Object(r.a)(c.a,{name:"first_name",placeholder:"Enter first name",mdxType:"Input"}),Object(r.a)("br",null),Object(r.a)(c.a,{name:"last_name",placeholder:"Enter last name",mdxType:"Input"}),Object(r.a)("br",null),Object(r.a)(l.a.Consumer,null,function(e){var t=e.handleSubmit;return Object(r.a)("button",{onClick:function(e){return t(e)}},"Submit full name ")}))))}p.isMDXComponent=!0},219:function(e,t,n){"use strict";n(211);var r=n(226);t.a=r.a,void 0!==r.a&&r.a&&r.a===Object(r.a)&&Object.isExtensible(r.a)&&Object.defineProperty(r.a,"__filemeta",{configurable:!0,value:{name:"Context",filename:"src/Context/index.js"}}),void 0!==r.a&&r.a&&r.a===Object(r.a)&&Object.isExtensible(r.a)&&Object.defineProperty(r.a,"__filemeta",{configurable:!0,value:{name:"Context",filename:"src/Context/index.js"}})},226:function(e,t,n){"use strict";var r=n(212);t.a=Object(r.createContext)({initialValues:{},errors:{},scopePath:"",registerField:function(){},unregisterField:function(){},getFields:function(){},handleSubmit:function(){},handleFieldValidation:function(){}})},235:function(e,t,n){"use strict";n(211),n(19),n(43),n(11),n(21),n(28),n(61),n(106),n(42),n(2),n(9),n(20),n(213),n(45),n(13);var r=n(284),a=n.n(r),i=(n(285),n(214)),u=n(212),o=n.n(u),l=n(234),c=n.n(l),s=n(231),f=n(286),m=n.n(f),b=n(287),p=n(219);function d(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function O(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function h(e,t,n,r,a,i,u){try{var o=e[i](u),l=o.value}catch(c){return void n(c)}o.done?t(l):Promise.resolve(l).then(r,a)}function y(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var i=e.apply(t,n);function u(e){h(i,r,a,u,o,"next",e)}function o(e){h(i,r,a,u,o,"throw",e)}u(void 0)})}}function v(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach(function(t){x(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F=function e(t){var n={};return Object.keys(t).forEach(function(r){if(void 0!==t[r]){var a=t[r].constructor.name;if("Object"===a)n[r]=Object(s.object)().shape(e(t[r]));else if("Array"===a){var i=Object.keys(t[r]).reduce(function(e,n){return _({},e,{},t[r][n])},{});n[r]=Object(s.array)().of(Object(s.object)().shape(e(_({},i))))}else n[r]=t[r]}}),n},P=function(e){var t=e.initialValues,n=e.children,r=e.schema,u=e.onSubmit,l=e.fieldDebounced,f=v(e,["initialValues","children","schema","onSubmit","fieldDebounced"]),h=o.a.useState([]),g=h[0],x=h[1],P=o.a.useState({}),S=P[0],w=P[1],E=o.a.useState({}),C=E[0],D=E[1];function k(){var e=JSON.parse(JSON.stringify(t)),n={};return g.forEach(function(t){var r=t.name,a=t.ref,i=t.path,u=t.parseValue,o=t.dymanicSchema,l=c.a.pick(i,a);n[r]=o||Object(s.mixed)().notRequired(),e[r]="function"==typeof u?u(l):l}),c.a.object(n),c.a.object(e),{data:e,dymanicSchema:Object(s.object)().shape(F(n))}}function V(){g.forEach(function(e){var t=e.ref,n=e.path,r=e.clearValue;return r?r(t):c.a.set(n,"",t)})}function N(){return(N=y(a.a.mark(function e(t){var n,i,u,o,l,c,f,m;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.name,i=t.value,u=k(),o=u.data,l=u.dymanicSchema,e.prev=2,!(c=r||l)){e.next=7;break}return e.next=7,Object(s.reach)(c,n,o).validate(i);case 7:S[n],f=v(S,[n].map(d)),w(f),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(2),m=_({},S),e.t0.message&&(m[n]=e.t0.message),w(m);case 16:case"end":return e.stop()}},e,null,[[2,11]])}))).apply(this,arguments)}o.a.useEffect(function(){D(JSON.parse(JSON.stringify(t)))},[]);var I=Object(b.useDebouncedCallback)(function(e){!function(e){N.apply(this,arguments)}({name:e.name,value:e.value})},l)[0];function T(){return J.apply(this,arguments)}function J(){return(J=y(a.a.mark(function e(){var t,n,i,o,l,c,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=k(),n=t.data,i=t.dymanicSchema,o=n,l={},e.prev=3,!(c=r||i)){e.next=10;break}return e.next=8,c.validate(n,{abortEarly:!1,stripUnknown:!0,context:{}});case 8:o=c.cast(n,{stripUnknown:!0,context:{}}),l=m()(C,o,{arrayMerge:function(e,t){return t.map(function(t,n){return"string"==typeof t?e.push(t):_({},e[n],{},t)})}});case 10:return w({}),"function"==typeof u&&u(l,{resetForm:V}),e.abrupt("return",{errors:{},data:l,resetForm:V});case 15:if(e.prev=15,e.t0=e.catch(3),s={},e.t0.inner){e.next=20;break}throw e.t0;case 20:return e.t0.inner.forEach(function(e){s[e.path]=e.message}),w(s),e.abrupt("return",{errors:s,data:l,resetForm:V});case 23:case"end":return e.stop()}},e,null,[[3,15]])}))).apply(this,arguments)}function q(e){return A.apply(this,arguments)}function A(){return(A=y(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t&&t.preventDefault(),e.abrupt("return",T());case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}return Object(i.a)(p.a.Provider,{value:{initialValues:t,errors:S,scopePath:"",registerField:function(e){x(function(t){return[].concat(O(t),[e])})},unregisterField:function(e){x(function(t){return t.filter(function(t){return t.name!==e})})},getFields:k,handleFieldValidation:I,handleResetForm:V,handleSubmit:q}},Object(i.a)("form",j({},f,{"data-testid":"form",onSubmit:q}),n))};P.defaultProps={initialValues:{},schema:null,fieldDebounced:10},t.a=P,P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{configurable:!0,value:{name:"Form",filename:"src/Form/Form.js"}}),P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{configurable:!0,value:{name:"Form",filename:"src/Form/Form.js"}})},236:function(e,t,n){"use strict";n(211),n(19);var r=n(212),a=n.n(r),i=n(234),u=n.n(i),o=n(219);function l(e){var t,n=a.a.useContext(o.a),r=n.initialValues,i=n.errors,l=n.scopePath,c=n.unregisterField,s=n.registerField,f=n.handleSubmit,m=n.handleFieldValidation;t=l?"number"==typeof e?l+"["+e+"]":l+"."+e:""+e,a.a.useEffect(function(){return function(){return c(t)}},[t,e]);var b=u.a.pick(t,r),p=i[t];return{fieldName:t,handleSubmit:f,handleFieldValidation:m,registerField:s,defaultValue:b,error:p}}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"useField",filename:"src/useField/useField.js"}}),l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"useField",filename:"src/useField/useField.js"}});var c=l;l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"useField",filename:"src/useField/index.js"}}),l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"useField",filename:"src/useField/index.js"}});var s=function(e){var t=e.name,n=e.ref,r=e.schema,i=e.value,u=e.parseValue,o=void 0===u?null:u,l=e.path,s=void 0===l?"value":l,f=c(t),m=f.fieldName,b=f.handleFieldValidation,p=f.registerField,d=f.defaultValue,j=f.error;return a.a.useEffect(function(){n.current&&p({name:m,ref:n.current,path:s,parseValue:o,dymanicSchema:r})},[n.current,m]),{ref:n,fieldName:m,id:m,name:m,"aria-label":m,defaultValue:d||i,error:j,onChange:function(e){var t=e.target;return b({name:t.name,value:t[s]})},onBlur:function(e){var t=e.target;return b({name:t.name,value:t[s]})}}},f=s;s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"useDefault",filename:"src/useDefault/useDefault.js"}}),s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"useDefault",filename:"src/useDefault/useDefault.js"}});t.a=f;void 0!==f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"useDefault",filename:"src/useDefault/index.js"}}),void 0!==f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"useDefault",filename:"src/useDefault/index.js"}})},249:function(e,t,n){"use strict";n(211),n(19),n(43),n(13),n(9),n(11),n(2),n(21),n(20);var r=n(214),a=n(212),i=n.n(a),u=n(236);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var f=function(e){var t=e.name,n=e.label,a=e.multiline,f=e.schema,m=e.value,b=s(e,["name","label","multiline","schema","value"]),p=i.a.useRef(null),d=Object(u.a)({name:t,ref:p,schema:f,value:m}),j=d.error,O=d.fieldName,h=d.defaultValue,y=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach(function(t){c(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},b,{},s(d,["error","fieldName","defaultValue"]),{defaultValue:h,ref:p});return Object(r.a)(i.a.Fragment,null,n&&Object(r.a)("label",{className:"form__label",htmlFor:O},n),a?Object(r.a)("textarea",o({className:"form__textarea"},y)):Object(r.a)("input",o({className:"form__input"},y)),j&&Object(r.a)("span",{className:"form__error"},j))};f.defaultProps={label:null,placeholder:"",multiline:!1,schema:null,value:null},t.a=f,f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"InputField",filename:"src/Input/Input.js"}}),f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"InputField",filename:"src/Input/Input.js"}})}}]);
//# sourceMappingURL=component---src-form-form-docz-mdx-e50a31f49d7f0ecaaf88.js.map