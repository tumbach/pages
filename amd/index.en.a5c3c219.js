var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},r={},a=t.parcelRequired050;null==a&&((a=function(t){if(t in e)return e[t].exports;if(t in r){var a=r[t];delete r[t];var n={id:t,exports:{}};return e[t]=n,a.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){r[t]=e},t.parcelRequired050=a),(0,a.register)("fequM",function(t,e){t.exports,t.exports=function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e,r,a,n=/^\s+/,i=/\s+$/;function o(e,r){if(r=r||{},(e=e||"")instanceof o)return e;if(!(this instanceof o))return new o(e,r);var a,s,h,l,f,u,c,d,g,p,b,v,m,y,_,w,M,A,C,H,F=(s={r:0,g:0,b:0},h=1,l=null,f=null,u=null,c=!1,d=!1,"string"==typeof(a=e)&&(a=function(t){t=t.replace(n,"").replace(i,"").toLowerCase();var e,r=!1;if(x[t])t=x[t],r=!0;else if("transparent"==t)return{r:0,g:0,b:0,a:0,format:"name"};return(e=q.rgb.exec(t))?{r:e[1],g:e[2],b:e[3]}:(e=q.rgba.exec(t))?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=q.hsl.exec(t))?{h:e[1],s:e[2],l:e[3]}:(e=q.hsla.exec(t))?{h:e[1],s:e[2],l:e[3],a:e[4]}:(e=q.hsv.exec(t))?{h:e[1],s:e[2],v:e[3]}:(e=q.hsva.exec(t))?{h:e[1],s:e[2],v:e[3],a:e[4]}:(e=q.hex8.exec(t))?{r:E(e[1]),g:E(e[2]),b:E(e[3]),a:E(e[4])/255,format:r?"name":"hex8"}:(e=q.hex6.exec(t))?{r:E(e[1]),g:E(e[2]),b:E(e[3]),format:r?"name":"hex"}:(e=q.hex4.exec(t))?{r:E(e[1]+""+e[1]),g:E(e[2]+""+e[2]),b:E(e[3]+""+e[3]),a:E(e[4]+""+e[4])/255,format:r?"name":"hex8"}:!!(e=q.hex3.exec(t))&&{r:E(e[1]+""+e[1]),g:E(e[2]+""+e[2]),b:E(e[3]+""+e[3]),format:r?"name":"hex"}}(a)),"object"==t(a)&&(L(a.r)&&L(a.g)&&L(a.b)?(g=a.r,p=a.g,b=a.b,s={r:255*k(g,255),g:255*k(p,255),b:255*k(b,255)},c=!0,d="%"===String(a.r).substr(-1)?"prgb":"rgb"):L(a.h)&&L(a.s)&&L(a.v)?(l=R(a.s),f=R(a.v),v=a.h,m=l,y=f,v=6*k(v,360),m=k(m,100),y=k(y,100),_=Math.floor(v),w=v-_,M=y*(1-m),A=y*(1-w*m),C=y*(1-(1-w)*m),s={r:255*[y,A,M,M,C,y][H=_%6],g:255*[C,y,y,A,M,M][H],b:255*[M,M,C,y,y,A][H]},c=!0,d="hsv"):L(a.h)&&L(a.s)&&L(a.l)&&(l=R(a.s),u=R(a.l),s=function(t,e,r){var a,n,i;function o(t,e,r){return(r<0&&(r+=1),r>1&&(r-=1),r<1/6)?t+(e-t)*6*r:r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t}if(t=k(t,360),e=k(e,100),r=k(r,100),0===e)a=n=i=r;else{var s=r<.5?r*(1+e):r+e-r*e,h=2*r-s;a=o(h,s,t+1/3),n=o(h,s,t),i=o(h,s,t-1/3)}return{r:255*a,g:255*n,b:255*i}}(a.h,l,u),c=!0,d="hsl"),a.hasOwnProperty("a")&&(h=a.a)),h=S(h),{ok:c,format:a.format||d,r:Math.min(255,Math.max(s.r,0)),g:Math.min(255,Math.max(s.g,0)),b:Math.min(255,Math.max(s.b,0)),a:h});this._originalInput=e,this._r=F.r,this._g=F.g,this._b=F.b,this._a=F.a,this._roundA=Math.round(100*this._a)/100,this._format=r.format||F.format,this._gradientType=r.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=F.ok}function s(t,e,r){var a,n,i=Math.max(t=k(t,255),e=k(e,255),r=k(r,255)),o=Math.min(t,e,r),s=(i+o)/2;if(i==o)a=n=0;else{var h=i-o;switch(n=s>.5?h/(2-i-o):h/(i+o),i){case t:a=(e-r)/h+(e<r?6:0);break;case e:a=(r-t)/h+2;break;case r:a=(t-e)/h+4}a/=6}return{h:a,s:n,l:s}}function h(t,e,r){var a,n=Math.max(t=k(t,255),e=k(e,255),r=k(r,255)),i=Math.min(t,e,r),o=n-i;if(n==i)a=0;else{switch(n){case t:a=(e-r)/o+(e<r?6:0);break;case e:a=(r-t)/o+2;break;case r:a=(t-e)/o+4}a/=6}return{h:a,s:0===n?0:o/n,v:n}}function l(t,e,r,a){var n=[H(Math.round(t).toString(16)),H(Math.round(e).toString(16)),H(Math.round(r).toString(16))];return a&&n[0].charAt(0)==n[0].charAt(1)&&n[1].charAt(0)==n[1].charAt(1)&&n[2].charAt(0)==n[2].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function f(t,e,r,a){return[H(F(a)),H(Math.round(t).toString(16)),H(Math.round(e).toString(16)),H(Math.round(r).toString(16))].join("")}function u(t,e){e=0===e?0:e||10;var r=o(t).toHsl();return r.s-=e/100,r.s=C(r.s),o(r)}function c(t,e){e=0===e?0:e||10;var r=o(t).toHsl();return r.s+=e/100,r.s=C(r.s),o(r)}function d(t){return o(t).desaturate(100)}function g(t,e){e=0===e?0:e||10;var r=o(t).toHsl();return r.l+=e/100,r.l=C(r.l),o(r)}function p(t,e){e=0===e?0:e||10;var r=o(t).toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(-(255*(e/100))))),r.g=Math.max(0,Math.min(255,r.g-Math.round(-(255*(e/100))))),r.b=Math.max(0,Math.min(255,r.b-Math.round(-(255*(e/100))))),o(r)}function b(t,e){e=0===e?0:e||10;var r=o(t).toHsl();return r.l-=e/100,r.l=C(r.l),o(r)}function v(t,e){var r=o(t).toHsl(),a=(r.h+e)%360;return r.h=a<0?360+a:a,o(r)}function m(t){var e=o(t).toHsl();return e.h=(e.h+180)%360,o(e)}function y(t,e){if(isNaN(e)||e<=0)throw Error("Argument to polyad must be a positive number");for(var r=o(t).toHsl(),a=[o(t)],n=360/e,i=1;i<e;i++)a.push(o({h:(r.h+i*n)%360,s:r.s,l:r.l}));return a}function _(t){var e=o(t).toHsl(),r=e.h;return[o(t),o({h:(r+72)%360,s:e.s,l:e.l}),o({h:(r+216)%360,s:e.s,l:e.l})]}function w(t,e,r){e=e||6,r=r||30;var a=o(t).toHsl(),n=360/r,i=[o(t)];for(a.h=(a.h-(n*e>>1)+720)%360;--e;)a.h=(a.h+n)%360,i.push(o(a));return i}function M(t,e){e=e||6;for(var r=o(t).toHsv(),a=r.h,n=r.s,i=r.v,s=[],h=1/e;e--;)s.push(o({h:a,s:n,v:i})),i=(i+h)%1;return s}o.prototype={isDark:function(){return 128>this.getBrightness()},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},getLuminance:function(){var t,e,r,a=this.toRgb();return t=a.r/255,.2126*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.7152*((e=a.g/255)<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.0722*((r=a.b/255)<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))},setAlpha:function(t){return this._a=S(t),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var t=h(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=h(this._r,this._g,this._b),e=Math.round(360*t.h),r=Math.round(100*t.s),a=Math.round(100*t.v);return 1==this._a?"hsv("+e+", "+r+"%, "+a+"%)":"hsva("+e+", "+r+"%, "+a+"%, "+this._roundA+")"},toHsl:function(){var t=s(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=s(this._r,this._g,this._b),e=Math.round(360*t.h),r=Math.round(100*t.s),a=Math.round(100*t.l);return 1==this._a?"hsl("+e+", "+r+"%, "+a+"%)":"hsla("+e+", "+r+"%, "+a+"%, "+this._roundA+")"},toHex:function(t){return l(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){var e,r,a,n,i;return e=this._r,r=this._g,a=this._b,n=this._a,i=[H(Math.round(e).toString(16)),H(Math.round(r).toString(16)),H(Math.round(a).toString(16)),H(F(n))],t&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*k(this._r,255))+"%",g:Math.round(100*k(this._g,255))+"%",b:Math.round(100*k(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+Math.round(100*k(this._r,255))+"%, "+Math.round(100*k(this._g,255))+"%, "+Math.round(100*k(this._b,255))+"%)":"rgba("+Math.round(100*k(this._r,255))+"%, "+Math.round(100*k(this._g,255))+"%, "+Math.round(100*k(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(A[l(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var e="#"+f(this._r,this._g,this._b,this._a),r=e,a=this._gradientType?"GradientType = 1, ":"";if(t){var n=o(t);r="#"+f(n._r,n._g,n._b,n._a)}return"progid:DXImageTransform.Microsoft.gradient("+a+"startColorstr="+e+",endColorstr="+r+")"},toString:function(t){var e=!!t;t=t||this._format;var r=!1,a=this._a<1&&this._a>=0;return!e&&a&&("hex"===t||"hex6"===t||"hex3"===t||"hex4"===t||"hex8"===t||"name"===t)?"name"===t&&0===this._a?this.toName():this.toRgbString():("rgb"===t&&(r=this.toRgbString()),"prgb"===t&&(r=this.toPercentageRgbString()),("hex"===t||"hex6"===t)&&(r=this.toHexString()),"hex3"===t&&(r=this.toHexString(!0)),"hex4"===t&&(r=this.toHex8String(!0)),"hex8"===t&&(r=this.toHex8String()),"name"===t&&(r=this.toName()),"hsl"===t&&(r=this.toHslString()),"hsv"===t&&(r=this.toHsvString()),r||this.toHexString())},clone:function(){return o(this.toString())},_applyModification:function(t,e){var r=t.apply(null,[this].concat([].slice.call(e)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(g,arguments)},brighten:function(){return this._applyModification(p,arguments)},darken:function(){return this._applyModification(b,arguments)},desaturate:function(){return this._applyModification(u,arguments)},saturate:function(){return this._applyModification(c,arguments)},greyscale:function(){return this._applyModification(d,arguments)},spin:function(){return this._applyModification(v,arguments)},_applyCombination:function(t,e){return t.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(w,arguments)},complement:function(){return this._applyCombination(m,arguments)},monochromatic:function(){return this._applyCombination(M,arguments)},splitcomplement:function(){return this._applyCombination(_,arguments)},triad:function(){return this._applyCombination(y,[3])},tetrad:function(){return this._applyCombination(y,[4])}},o.fromRatio=function(e,r){if("object"==t(e)){var a={};for(var n in e)e.hasOwnProperty(n)&&("a"===n?a[n]=e[n]:a[n]=R(e[n]));e=a}return o(e,r)},o.equals=function(t,e){return!!t&&!!e&&o(t).toRgbString()==o(e).toRgbString()},o.random=function(){return o.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},o.mix=function(t,e,r){r=0===r?0:r||50;var a=o(t).toRgb(),n=o(e).toRgb(),i=r/100;return o({r:(n.r-a.r)*i+a.r,g:(n.g-a.g)*i+a.g,b:(n.b-a.b)*i+a.b,a:(n.a-a.a)*i+a.a})},o.readability=function(t,e){var r=o(t),a=o(e);return(Math.max(r.getLuminance(),a.getLuminance())+.05)/(Math.min(r.getLuminance(),a.getLuminance())+.05)},o.isReadable=function(t,e,r){var a,n,i,s,h,l=o.readability(t,e);switch(h=!1,(n=((a=(a=r)||{level:"AA",size:"small"}).level||"AA").toUpperCase(),i=(a.size||"small").toLowerCase(),"AA"!==n&&"AAA"!==n&&(n="AA"),"small"!==i&&"large"!==i&&(i="small"),s={level:n,size:i}).level+s.size){case"AAsmall":case"AAAlarge":h=l>=4.5;break;case"AAlarge":h=l>=3;break;case"AAAsmall":h=l>=7}return h},o.mostReadable=function(t,e,r){var a,n,i,s,h=null,l=0;n=(r=r||{}).includeFallbackColors,i=r.level,s=r.size;for(var f=0;f<e.length;f++)(a=o.readability(t,e[f]))>l&&(l=a,h=o(e[f]));return o.isReadable(t,h,{level:i,size:s})||!n?h:(r.includeFallbackColors=!1,o.mostReadable(t,["#fff","#000"],r))};var x=o.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},A=o.hexNames=function(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[t[r]]=r);return e}(x);function S(t){return(isNaN(t=parseFloat(t))||t<0||t>1)&&(t=1),t}function k(t,e){"string"==typeof(r=t)&&-1!=r.indexOf(".")&&1===parseFloat(r)&&(t="100%");var r,a,n="string"==typeof(a=t)&&-1!=a.indexOf("%");return(t=Math.min(e,Math.max(0,parseFloat(t))),n&&(t=parseInt(t*e,10)/100),1e-6>Math.abs(t-e))?1:t%e/parseFloat(e)}function C(t){return Math.min(1,Math.max(0,t))}function E(t){return parseInt(t,16)}function H(t){return 1==t.length?"0"+t:""+t}function R(t){return t<=1&&(t=100*t+"%"),t}function F(t){return Math.round(255*parseFloat(t)).toString(16)}var q=(r="[\\s|\\(]+("+(e="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+e+")[,|\\s]+("+e+")\\s*\\)?",a="[\\s|\\(]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")\\s*\\)?",{CSS_UNIT:new RegExp(e),rgb:RegExp("rgb"+r),rgba:RegExp("rgba"+a),hsl:RegExp("hsl"+r),hsla:RegExp("hsla"+a),hsv:RegExp("hsv"+r),hsva:RegExp("hsva"+a),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function L(t){return!!q.CSS_UNIT.exec(t)}return o}()});var n={};n=function(t){"use strict";var e=t&&"object"==typeof t&&"default"in t?t:{default:t},r={r:256,g:256,b:256,a:1},a={h:360,s:1,v:1,a:1};function n(t,e,r){var a={};for(var n in t)t.hasOwnProperty(n)&&(a[n]=0===r?0:(e[n]-t[n])/r);return a}function i(t,e,r,a){var n={};for(var i in e)e.hasOwnProperty(i)&&(n[i]=t[i]*r+e[i],n[i]=n[i]<0?n[i]+a[i]:1!==a[i]?n[i]%a[i]:n[i]);return n}function o(t,a,o){for(var s=t.color.toRgb(),h=n(s,a.color.toRgb(),o),l=[t.color],f=1;f<o;f++){var u=i(h,s,f,r);l.push(e.default(u))}return l}function s(t,r,s,h){var l,f,u=t.color.toHsv(),c=r.color.toHsv();if(0===u.s||0===c.s)return o(t,r,s);if("boolean"==typeof h)l=h;else{var d=u.h<c.h&&c.h-u.h<180||u.h>c.h&&u.h-c.h>180;l="long"===h&&d||"short"===h&&!d}var g=n(u,c,s),p=[t.color];f=u.h<=c.h&&!l||u.h>=c.h&&l?c.h-u.h:l?360-c.h+u.h:360-u.h+c.h,g.h=Math.pow(-1,l?1:0)*Math.abs(f)/s;for(var b=1;b<s;b++){var v=i(g,u,b,a);p.push(e.default(v))}return p}function h(t,e){var r=t.length;if(isNaN(e=parseInt(e,10))||e<2)throw Error("Invalid number of steps (< 2)");if(e<r)throw Error("Number of steps cannot be inferior to number of stops");for(var a=[],n=1;n<r;n++){var i=(e-1)*(t[n].pos-t[n-1].pos);a.push(Math.max(1,Math.round(i)))}for(var o=1,s=r-1;s--;)o+=a[s];for(;o!==e;)if(o<e){var h=Math.min.apply(null,a);a[a.indexOf(h)]++,o++}else{var l=Math.max.apply(null,a);a[a.indexOf(l)]--,o--}return a}function l(t,r,a,o){if(r<0||r>1)throw Error("Position must be between 0 and 1");for(var s,h,l=0,f=t.length;l<f-1;l++)if(r>=t[l].pos&&r<t[l+1].pos){s=t[l],h=t[l+1];break}s||(s=h=t[t.length-1]);var u=i(n(s.color[a](),h.color[a](),(h.pos-s.pos)*100),s.color[a](),(r-s.pos)*100,o);return e.default(u)}var f=function(){function t(t){if(t.length<2)throw Error("Invalid number of stops (< 2)");var r=void 0!==t[0].pos,a=t.length,n=-1,i=!1;this.stops=t.map(function(t,o){var s=void 0!==t.pos;if(r^s)throw Error("Cannot mix positionned and not posionned color stops");if(s){var h=void 0!==t.color;if(!h&&(i||0===o||o===a-1))throw Error("Cannot define two consecutive position-only stops");if(i=!h,(t={color:h?e.default(t.color):null,colorLess:!h,pos:t.pos}).pos<0||t.pos>1)throw Error("Color stops positions must be between 0 and 1");if(t.pos<n)throw Error("Color stops positions are not ordered");n=t.pos}else t={color:e.default(void 0!==t.color?t.color:t),pos:o/(a-1)};return t}),0!==this.stops[0].pos&&(this.stops.unshift({color:this.stops[0].color,pos:0}),a++),1!==this.stops[a-1].pos&&this.stops.push({color:this.stops[a-1].color,pos:1})}var n=t.prototype;return n.reverse=function(){var e=[];return this.stops.forEach(function(t){e.push({color:t.color,pos:1-t.pos})}),new t(e.reverse())},n.loop=function(){var e=[],r=[];return this.stops.forEach(function(t){e.push({color:t.color,pos:t.pos/2})}),this.stops.slice(0,-1).forEach(function(t){r.push({color:t.color,pos:1-t.pos/2})}),new t(e.concat(r.reverse()))},n.rgb=function(t){var e=this,r=h(this.stops,t),a=[];this.stops.forEach(function(t,r){t.colorLess&&(t.color=o(e.stops[r-1],e.stops[r+1],2)[1])});for(var n=0,i=this.stops.length;n<i-1;n++){var s=o(this.stops[n],this.stops[n+1],r[n]);a.splice.apply(a,[a.length,0].concat(s))}return a.push(this.stops[this.stops.length-1].color),a},n.hsv=function(t,e){var r=this,a=h(this.stops,t),n=[];this.stops.forEach(function(t,a){t.colorLess&&(t.color=s(r.stops[a-1],r.stops[a+1],2,e)[1])});for(var i=0,o=this.stops.length;i<o-1;i++){var l=s(this.stops[i],this.stops[i+1],a[i],e);n.splice.apply(n,[n.length,0].concat(l))}return n.push(this.stops[this.stops.length-1].color),n},n.css=function(t,e){t=t||"linear",e=e||("linear"===t?"to right":"ellipse at center");var r=t+"-gradient("+e;return this.stops.forEach(function(t){r+=", "+(t.colorLess?"":t.color.toRgbString()+" ")+100*t.pos+"%"}),r+=")"},n.rgbAt=function(t){return l(this.stops,t,"toRgb",r)},n.hsvAt=function(t){return l(this.stops,t,"toHsv",a)},t}();return function(t){if(1==arguments.length){if(!Array.isArray(arguments[0]))throw Error('"stops" is not an array');t=arguments[0]}else t=Array.prototype.slice.call(arguments);return new f(t)}}(a("fequM"));class i{#t=!1;#e=performance.now();constructor({audio:t,canvas:e}={}){this.audioElement=t??document.querySelector("audio"),this.canvasElement=e??document.getElementById("yaebal"),this.drawingType="Linear",this.secondsToShow=10,this.stepsPerSecond=24,this.fftSize=1024,this.gradientOptions=[{color:"#000",pos:0},{color:"#006",pos:.1},{color:"#f0f",pos:1}],this.gradientValues=i.calculateGradient(this.gradientOptions),this.canvas=i.initCanvas(this.canvasElement),this.bufferCanvas=i.initCanvas(document.createElement("canvas")),this.canvasContext=this.canvas.getContext("2d"),this.bufferCanvasContext=this.bufferCanvas.getContext("2d"),this.stepHeight=Math.ceil(this.canvas.height/this.secondsToShow/this.stepsPerSecond)}static calculateGradient(t){var e;let r=((e=n)&&e.__esModule?e.default:e)(...t),a=[];for(let t=0;t<256;t++)a[t]=r.rgbAt(t/256);return a}static initCanvas(t){return t.width=window.innerWidth,t.height=window.innerHeight,t}initSong(){let t,e;if(this.#t)return!0;try{window.AudioContext=window.AudioContext||window.webkitAudioContext,t=new AudioContext}catch(t){return!1}e=t.createMediaElementSource(this.audioElement),this.analyser=t.createAnalyser(),this.gainNode=t.createGain(),this.analyser.minDecibels=-84,this.analyser.maxDecibels=-36,this.analyser.fftSize=this.fftSize;let r=Math.ceil(this.analyser.frequencyBinCount/1.073);return this.dataArray=new Uint8Array(r),e.connect(this.analyser),this.analyser.connect(this.gainNode),this.gainNode.connect(t.destination),"linear"===this.drawingType.toLocaleLowerCase()&&(this.barWidth=Math.ceil(this.canvas.width/this.dataArray.length)),this.#t=!0,this.draw(),!0}resetSong(){return this.audioElement.paused?this.audioElement.play():this.audioElement.pause()}play(t){return this.audioElement.muted=!1,this.resetSong(this.audioElement),this.initSong(),this.gainNode.gain.value=t?0:1,!0}draw(){this.analyser.getByteFrequencyData(this.dataArray),this.drawCanvas(this.dataArray),this.requestAnimationFrame(()=>this.draw())}requestAnimationFrame(t){let e=performance.now(),r=e-this.#e;this.#e=e,this.stepHeight=Math.ceil(this.canvas.height/this.secondsToShow/1e3*r),setTimeout(t,this.stepsPerSecond)}drawCanvas(t){return this.bufferCanvasContext.drawImage(this.canvas,0,0),this.canvasContext.fillStyle=this.gradientValues[0],this.canvasContext.fillRect(0,0,this.canvas.width,this.stepHeight),this.canvasContext.drawImage(this.bufferCanvas,0,this.stepHeight),this["drawCanvas"+this.drawingType](t)}drawCanvasLinear(t){for(let e=0;e<t.length;e++)t[e]&&(this.canvasContext.fillStyle=this.gradientValues[t[e]],this.canvasContext.fillRect(e*this.barWidth,0,this.barWidth,this.stepHeight))}drawCanvasLog(t){let e=0,r=0;for(let a=0;a<t.length;a++)t[a]&&(this.canvasContext.fillStyle=this.gradientValues[t[a]],r=Math.ceil(Math.log(a+1)/Math.log(t.length)*this.canvas.width-e),this.canvasContext.fillRect(e,0,r,this.stepHeight),e+=r)}}window.Veeze=new i;const o=document.getElementById("trigger");o.addEventListener("click",()=>Veeze.play(0)),o.addEventListener("touch",()=>Veeze.play(0)),document.querySelectorAll(".js").forEach(t=>t.style.display="initial");
//# sourceMappingURL=index.en.a5c3c219.js.map
