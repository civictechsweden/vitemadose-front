import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.promise.js";import"core-js/modules/es.array.slice.js";var _templateObject,_templateObject2;function _taggedTemplateLiteralLoose(e,t){return t||(t=e.slice(0)),e.raw=t,e}function asyncGeneratorStep(e,t,n,r,o,a,s){try{var c=e[a](s),i=c.value}catch(u){return void n(u)}c.done?t(i):Promise.resolve(i).then(r,o)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function s(e){asyncGeneratorStep(a,r,o,s,c,"next",e)}function c(e){asyncGeneratorStep(a,r,o,s,c,"throw",e)}s(void 0)}))}}function _inheritsLoose(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}System.register(["./index-legacy.5bd4d560.js","./vendor-legacy.068dccb3.js"],(function(e){"use strict";var t,n,r,o,a,s,c,i,u,p,m,d;return{setters:[function(e){t=e.L,n=e.S,r=e.R,o=e.l,a=e.a,s=e.b,c=e.h,i=e.C,u=e.c,p=e.d,m=e.p,d=e.e},function(){}],execute:function(){var l=Object.defineProperty,f=Object.getOwnPropertyDescriptor,v=function(e,t,n,r){for(var o,a=r>1?void 0:r?f(t,n):t,s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r?o(t,n,a):o(a))||a);return r&&a&&l(t,n,a),a},h=e("VmdHomeView",function(e){function t(){var t;return(t=e.apply(this,arguments)||this).recuperationCommunesEnCours=!1,t.statsLieu=void 0,t}_inheritsLoose(t,e);var i=t.prototype;return i.onSearch=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var c,i,u,p,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c="chronodose.fr"===window.location.hostname?"chronodose":"standard",!n.isByDepartement(t.detail)){e.next=6;break}i=t.detail.departement,r.navigateToRendezVousAvecDepartement(i.code_departement,o(i),c),e.next=15;break;case 6:return u=t.detail.commune,e.next=9,a.current.departementsDisponibles();case 9:if(p=e.sent,m=p.find((function(e){return e.code_departement===u.codeDepartement}))){e.next=14;break}return console.error("Can't find departement matching code "+u.codeDepartement),e.abrupt("return");case 14:r.navigateToRendezVousAvecCommune("distance",m.code_departement,o(m),u.code,u.codePostal,s(u),c);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i.render=function(){return c(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(['\n            <div class="searchAppointment">\n                <div class="searchAppointment-title h1">\n                  <slot name="main-title"></slot>\n                </div>\n\n                <div class="searchAppointment-form">\n                    <div class="searchAppointmentForm-fields">\n                          <vmd-search\n                            @on-search="','"\n                          />\n                    </div>\n                </div>\n            </div>\n\n            <div class="platforms mt-5">\n                <h2 class="text-gray-600 text-center mb-5 h5"><strong>Jag Vill Ha Vaccin!</strong> hämtar vaccinmottagningar från 1177.se och vaccintider från många olika bokningsplattformar<br>\n                <strong>OBS!</strong> Tjänsten visar varken alla mottagningar eller alla vaccintider. Den ersätter inte ett manuellt sök.\n                </h2>\n            </div>\n\n            <slot name="about"></slot>\n        '])),this.onSearch.bind(this))},i.connectedCallback=function(){var t=_asyncToGenerator(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.prototype.connectedCallback.call(this),t.next=3,a.current.statsLieux();case 3:this.statsLieu=t.sent;case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),t}(t));h.styles=[i,u,p(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n            :host {\n                display: block;\n            }\n        "])))],v([m({type:Array,attribute:!1})],h.prototype,"recuperationCommunesEnCours",2),v([m({type:Array,attribute:!1})],h.prototype,"statsLieu",2),h=e("VmdHomeView",v([d("vmd-home")],h))}}}));