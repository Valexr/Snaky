var Oe="snaky";var Me={type:"git",url:"https://github.com/Valexr/snaky"};function v(){}function pe(e){return e()}function Ae(){return Object.create(null)}function L(e){e.forEach(pe)}function I(e){return typeof e=="function"}function T(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Ne(e){return Object.keys(e).length===0}function he(e,...t){if(e==null)return v;let n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function $(e){let t;return he(e,n=>t=n)(),t}function A(e,t,n){e.$$.on_destroy.push(he(t,n))}function qe(e){return e&&I(e.destroy)?e.destroy:v}var Te=!1;function et(){Te=!0}function tt(){Te=!1}function p(e,t){e.appendChild(t)}function b(e,t,n){e.insertBefore(t,n||null)}function g(e){e.parentNode&&e.parentNode.removeChild(e)}function se(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function y(e){return document.createElement(e)}function S(e){return document.createTextNode(e)}function M(){return S(" ")}function fe(){return S("")}function G(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function _(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function le(e){return e===""?null:+e}function nt(e){return Array.from(e.childNodes)}function te(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function ce(e,t){e.value=t??""}function P(e,t,n,i){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function me(e,t){for(let n=0;n<e.options.length;n+=1){let i=e.options[n];if(i.__value===t){i.selected=!0;return}}e.selectedIndex=-1}function Re(e){let t=e.querySelector(":checked")||e.options[0];return t&&t.__value}function R(e,t,n){e.classList[n?"add":"remove"](t)}var ye;function oe(e){ye=e}var ee=[];var De=[],ue=[],je=[],it=Promise.resolve(),_e=!1;function ot(){_e||(_e=!0,it.then(Le))}function re(e){ue.push(e)}var de=new Set,Z=0;function Le(){if(Z!==0)return;let e=ye;do{try{for(;Z<ee.length;){let t=ee[Z];Z++,oe(t),rt(t.$$)}}catch(t){throw ee.length=0,Z=0,t}for(oe(null),ee.length=0,Z=0;De.length;)De.pop()();for(let t=0;t<ue.length;t+=1){let n=ue[t];de.has(n)||(de.add(n),n())}ue.length=0}while(ee.length);for(;je.length;)je.pop()();_e=!1,de.clear(),oe(e)}function rt(e){if(e.fragment!==null){e.update(),L(e.before_update);let t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(re)}}var ae=new Set,Y;function ge(){Y={r:0,c:[],p:Y}}function be(){Y.r||L(Y.c),Y=Y.p}function D(e,t){e&&e.i&&(ae.delete(e),e.i(t))}function z(e,t,n,i){if(e&&e.o){if(ae.has(e))return;ae.add(e),Y.c.push(()=>{ae.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}var Ct=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function ne(e){e&&e.c()}function J(e,t,n,i){let{fragment:o,after_update:l}=e.$$;o&&o.m(t,n),i||re(()=>{let r=e.$$.on_mount.map(pe).filter(I);e.$$.on_destroy?e.$$.on_destroy.push(...r):L(r),e.$$.on_mount=[]}),l.forEach(re)}function W(e,t){let n=e.$$;n.fragment!==null&&(L(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function st(e,t){e.$$.dirty[0]===-1&&(ee.push(e),ot(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function B(e,t,n,i,o,l,r,u=[-1]){let c=ye;oe(e);let s=e.$$={fragment:null,ctx:[],props:l,update:v,not_equal:o,bound:Ae(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:Ae(),dirty:u,skip_bound:!1,root:t.target||c.$$.root};r&&r(s.root);let f=!1;if(s.ctx=n?n(e,t.props||{},(a,d,...h)=>{let C=h.length?h[0]:d;return s.ctx&&o(s.ctx[a],s.ctx[a]=C)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](C),f&&st(e,a)),d}):[],s.update(),f=!0,L(s.before_update),s.fragment=i?i(s.ctx):!1,t.target){if(t.hydrate){et();let a=nt(t.target);s.fragment&&s.fragment.l(a),a.forEach(g)}else s.fragment&&s.fragment.c();t.intro&&D(e.$$.fragment),J(e,t.target,t.anchor,t.customElement),tt(),Le()}oe(c)}var lt;typeof HTMLElement=="function"&&(lt=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let{on_mount:e}=this.$$;this.$$.on_disconnect=e.map(pe).filter(I);for(let t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(e,t,n){this[e]=n}disconnectedCallback(){L(this.$$.on_disconnect)}$destroy(){W(this,1),this.$destroy=v}$on(e,t){if(!I(t))return v;let n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{let i=n.indexOf(t);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!Ne(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}});var q=class{$destroy(){W(this,1),this.$destroy=v}$on(t,n){if(!I(n))return v;let i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{let o=i.indexOf(n);o!==-1&&i.splice(o,1)}}$set(t){this.$$set&&!Ne(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}};var ie=[];function K(e,t=v){let n,i=new Set;function o(u){if(T(e,u)&&(e=u,n)){let c=!ie.length;for(let s of i)s[1](),ie.push(s,e);if(c){for(let s=0;s<ie.length;s+=2)ie[s][0](ie[s+1]);ie.length=0}}}function l(u){o(u(e))}function r(u,c=v){let s=[u,c];return i.add(s),i.size===1&&(n=t(o)||v),u(e),()=>{i.delete(s),i.size===0&&(n(),n=null)}}return{set:o,update:l,subscribe:r}}function ze(e,t,n){return Math.min(Math.max(t,e),n)}function Be(e){return{x:Math.round(Math.random()*(e.width-1)),y:Math.round(Math.random()*(e.height-1))}}function U(e,t){return e.x===t.x&&e.y===t.y}function ct(){let{subscribe:e,set:t,update:n}=K([{x:0,y:0}]),i={Up:{x:0,y:-1},Down:{x:0,y:1},Left:{x:-1,y:0},Right:{x:1,y:0}};return{set:t,subscribe:e,update:n,head:{x:0,y:0},direction:{x:1,y:0},expand:!1,init(){this.head=$(this)[0],this.direction=i.Right},moveHead(){this.head={x:this.head.x+this.direction.x,y:this.head.y+this.direction.y}},moveBody(){this.unshift(this.head),this.expand?this.expand=!1:this.pop()},direct(u){this.direction=i[u]},include(u){return $(this).some(c=>U(c,u))},unshift(u){t([u,...$(this)])},pop(){t($(this).slice(0,-1))}}}var m=ct();function ut(){let{subscribe:e,set:t}=K({x:0,y:0});return{subscribe:e,make(){let n;do n=j.random();while(m.include(n));t(n)},include(n){return U($(this),n)}}}var V=ut();function at(){let{subscribe:e,set:t}=K();return t({width:20,height:20,part:1.5,gap:1.5,cell:15}),{set:t,subscribe:e,random(){return Be($(this))}}}var j=at();function ft(){let{subscribe:e,set:t,update:n}=K();t({state:"",score:0,speed:1});function i(l){n(r=>Object.assign(r,{state:l}))}function o(l){n(r=>Object.assign(r,{score:l}))}return{subscribe:e,state:i,score:o,start(){o(0),i("play"),m.init(),V.make(),we()},pause(){i("pause")},resume(){i("play"),we()},stop(){i("stop"),m.set([{x:0,y:0}])},scoreup(){n(l=>Object.assign(l,{score:l.score+10*l.speed}))},speedup(){n(l=>Object.assign(l,{speed:ze(1,l.speed+1,10)}))}}}var F=ft();function we(){setTimeout(()=>{$(F).state==="play"&&(dt(),we())},450-40*$(F).speed)}function dt(){if(m.moveHead(),m.include(m.head))return F.stop();m.head.y<0?m.head.y=$(j).height-1:m.head.y>=$(j).height?m.head.y=0:m.head.x<0?m.head.x=$(j).width-1:m.head.x>=$(j).width&&(m.head.x=0),m.moveBody(),V.include(m.head)&&(V.make(),m.expand=!0,F.scoreup(),$(m).length%5||F.speedup())}function Pe(e,t,n){let i=e.slice();return i[8]=t[n][0],i[9]=t[n][1],i}function _t(e){let t,n=e[1].state==="pause"?"Resume":"Start",i,o,l,r,u,c=e[1].state!=="pause"&&He(e);return{c(){t=y("button"),i=S(n),o=M(),c&&c.c(),l=fe(),_(t,"class","lg")},m(s,f){b(s,t,f),p(t,i),b(s,o,f),c&&c.m(s,f),b(s,l,f),r||(u=G(t,"click",function(){I(e[1].state==="pause"?F.resume:F.start)&&(e[1].state==="pause"?F.resume:F.start).apply(this,arguments)}),r=!0)},p(s,f){e=s,f&2&&n!==(n=e[1].state==="pause"?"Resume":"Start")&&te(i,n),e[1].state!=="pause"?c?c.p(e,f):(c=He(e),c.c(),c.m(l.parentNode,l)):c&&(c.d(1),c=null)},d(s){s&&g(t),s&&g(o),c&&c.d(s),s&&g(l),r=!1,u()}}}function pt(e){let t,n,i,o,l;return{c(){t=y("button"),t.textContent="Pause",n=M(),i=y("button"),i.textContent="Stop"},m(r,u){b(r,t,u),b(r,n,u),b(r,i,u),o||(l=[G(t,"click",F.pause),G(i,"click",F.stop)],o=!0)},p:v,d(r){r&&g(t),r&&g(n),r&&g(i),o=!1,L(l)}}}function He(e){let t,n,i,o,l,r,u,c,s,f,a,d,h,C,E,X,k,N,Ee,Q=e[3],O=[];for(let w=0;w<Q.length;w+=1)O[w]=Ie(Pe(e,Q,w));return{c(){t=y("fieldset"),n=y("label"),i=S(`Speed
                    `),o=y("input"),l=M(),r=y("label"),u=S(`Snake
                    `),c=y("input"),f=M(),a=y("label"),d=S(`Cell
                    `),h=y("input"),C=M(),E=y("label"),X=S(`Field
                    `),k=y("select");for(let w=0;w<O.length;w+=1)O[w].c();_(o,"type","number"),_(o,"min","1"),_(o,"max","10"),_(o,"maxlength","2"),_(o,"size","3"),_(c,"type","number"),c.value=s=e[0].length,_(c,"min","1"),_(c,"max","10"),_(c,"maxlength","2"),_(c,"size","3"),_(h,"type","number"),_(h,"min","5"),_(h,"max","100"),_(h,"maxlength","2"),_(h,"size","3"),e[2].part===void 0&&re(()=>e[7].call(k))},m(w,H){b(w,t,H),p(t,n),p(n,i),p(n,o),ce(o,e[1].speed),p(t,l),p(t,r),p(r,u),p(r,c),p(t,f),p(t,a),p(a,d),p(a,h),ce(h,e[2].cell),p(t,C),p(t,E),p(E,X),p(E,k);for(let x=0;x<O.length;x+=1)O[x].m(k,null);me(k,e[2].part),N||(Ee=[G(o,"input",e[5]),G(c,"input",e[4]),G(h,"input",e[6]),G(k,"change",e[7])],N=!0)},p(w,H){if(H&2&&le(o.value)!==w[1].speed&&ce(o,w[1].speed),H&1&&s!==(s=w[0].length)&&c.value!==s&&(c.value=s),H&12&&le(h.value)!==w[2].cell&&ce(h,w[2].cell),H&8){Q=w[3];let x;for(x=0;x<Q.length;x+=1){let Se=Pe(w,Q,x);O[x]?O[x].p(Se,H):(O[x]=Ie(Se),O[x].c(),O[x].m(k,null))}for(;x<O.length;x+=1)O[x].d(1);O.length=Q.length}H&12&&me(k,w[2].part)},d(w){w&&g(t),se(O,w),N=!1,L(Ee)}}}function Ie(e){let t,n=e[8]+"",i,o;return{c(){t=y("option"),i=S(n),t.__value=o=e[9],t.value=t.__value},m(l,r){b(l,t,r),p(t,i)},p:v,d(l){l&&g(t)}}}function ht(e){let t;function n(l,r){return l[1].state==="play"?pt:_t}let i=n(e,-1),o=i(e);return{c(){t=y("nav"),o.c(),R(t,"playing",e[1].state==="play")},m(l,r){b(l,t,r),o.m(t,null)},p(l,[r]){i===(i=n(l,r))&&o?o.p(l,r):(o.d(1),o=i(l),o&&(o.c(),o.m(t,null))),r&2&&R(t,"playing",l[1].state==="play")},i:v,o:v,d(l){l&&g(t),o.d()}}}function mt(e,t,n){let i,o,l;A(e,m,a=>n(0,i=a)),A(e,F,a=>n(1,o=a)),A(e,j,a=>n(2,l=a));let r=[["full",1],["half",1.5],["quart",2]];function u(a){i.length<a.target.value?m.unshift({x:a.target.value-1,y:0}):m.pop()}function c(){o.speed=le(this.value),F.set(o)}function s(){l.cell=le(this.value),j.set(l),n(3,r)}function f(){l.part=Re(this),j.set(l),n(3,r)}return[i,o,l,r,u,c,s,f]}var ve=class extends q{constructor(t){super(),B(this,t,mt,ht,T,{})}},Ge=ve;function yt(e){let t,n,i;return{c(){t=y("span"),_(t,"data-x",n=e[0].x),_(t,"data-y",i=e[0].y),_(t,"class","pixel"),R(t,"fill",e[1].some(e[3])),R(t,"apple",U(e[0],e[2]))},m(o,l){b(o,t,l)},p(o,[l]){l&1&&n!==(n=o[0].x)&&_(t,"data-x",n),l&1&&i!==(i=o[0].y)&&_(t,"data-y",i),l&3&&R(t,"fill",o[1].some(o[3])),l&5&&R(t,"apple",U(o[0],o[2]))},i:v,o:v,d(o){o&&g(t)}}}function gt(e,t,n){let i;A(e,V,u=>n(2,i=u));let{pixel:o}=t,{filled:l}=t,r=u=>U(u,o);return e.$$set=u=>{"pixel"in u&&n(0,o=u.pixel),"filled"in u&&n(1,l=u.filled)},[o,l,i,r]}var Fe=class extends q{constructor(t){super(),B(this,t,gt,yt,T,{pixel:0,filled:1})}},We=Fe;function Ue(e,t,n){let i=e.slice();return i[5]=t[n],i[7]=n,i}function Ve(e,t,n){let i=e.slice();return i[5]=t[n],i[9]=n,i}function Xe(e){let t,n;return t=new We({props:{pixel:{x:e[9],y:e[7]},filled:[...e[1],e[2]]}}),{c(){ne(t.$$.fragment)},m(i,o){J(t,i,o),n=!0},p(i,o){let l={};o&6&&(l.filled=[...i[1],i[2]]),t.$set(l)},i(i){n||(D(t.$$.fragment,i),n=!0)},o(i){z(t.$$.fragment,i),n=!1},d(i){W(t,i)}}}function Ye(e){let t,n,i={length:e[0].width},o=[];for(let r=0;r<i.length;r+=1)o[r]=Xe(Ve(e,i,r));let l=r=>z(o[r],1,1,()=>{o[r]=null});return{c(){for(let r=0;r<o.length;r+=1)o[r].c();t=fe()},m(r,u){for(let c=0;c<o.length;c+=1)o[c].m(r,u);b(r,t,u),n=!0},p(r,u){if(u&7){i={length:r[0].width};let c;for(c=0;c<i.length;c+=1){let s=Ve(r,i,c);o[c]?(o[c].p(s,u),D(o[c],1)):(o[c]=Xe(s),o[c].c(),D(o[c],1),o[c].m(t.parentNode,t))}for(ge(),c=i.length;c<o.length;c+=1)l(c);be()}},i(r){if(!n){for(let u=0;u<i.length;u+=1)D(o[u]);n=!0}},o(r){o=o.filter(Boolean);for(let u=0;u<o.length;u+=1)z(o[u]);n=!1},d(r){se(o,r),r&&g(t)}}}function bt(e){let t,n,i,o,l,r={length:e[0].height},u=[];for(let s=0;s<r.length;s+=1)u[s]=Ye(Ue(e,r,s));let c=s=>z(u[s],1,1,()=>{u[s]=null});return{c(){t=y("section");for(let s=0;s<u.length;s+=1)u[s].c();_(t,"id","field"),P(t,"--cols",e[0].width),P(t,"--part",e[0].part),P(t,"--cell",e[0].cell+"px"),P(t,"--gap",e[0].gap+"px"),R(t,"full",e[0].part===1)},m(s,f){b(s,t,f);for(let a=0;a<u.length;a+=1)u[a].m(t,null);i=!0,o||(l=qe(n=e[3].call(null,t)),o=!0)},p(s,[f]){if(f&7){r={length:s[0].height};let a;for(a=0;a<r.length;a+=1){let d=Ue(s,r,a);u[a]?(u[a].p(d,f),D(u[a],1)):(u[a]=Ye(d),u[a].c(),D(u[a],1),u[a].m(t,null))}for(ge(),a=r.length;a<u.length;a+=1)c(a);be()}(!i||f&1)&&P(t,"--cols",s[0].width),(!i||f&1)&&P(t,"--part",s[0].part),(!i||f&1)&&P(t,"--cell",s[0].cell+"px"),(!i||f&1)&&P(t,"--gap",s[0].gap+"px"),(!i||f&1)&&R(t,"full",s[0].part===1)},i(s){if(!i){for(let f=0;f<r.length;f+=1)D(u[f]);i=!0}},o(s){u=u.filter(Boolean);for(let f=0;f<u.length;f+=1)z(u[f]);i=!1},d(s){s&&g(t),se(u,s),o=!1,l()}}}function wt(e,t,n){let i,o,l,r;A(e,F,c=>n(4,i=c)),A(e,j,c=>n(0,o=c)),A(e,m,c=>n(1,l=c)),A(e,V,c=>n(2,r=c));function u(c){let s=new ResizeObserver(([{contentRect:d}])=>{let{width:h,height:C}=d,E=o.cell+o.gap;j.set({width:Math.round(h/E),height:Math.round(C/E),part:o.part,cell:o.cell,gap:o.gap})});s.observe(c),window.onkeydown=d=>f(d),c.onclick=d=>a(d);function f(d){if(i.state==="play")if(d.key.includes("Arrow")){let h=d.key.replace("Arrow","");m.direct(h)}else d.key.includes("Escape")&&(d.preventDefault(),F.pause())}function a(d){if(i.state!=="play")return;let{dataset:h}=d.target;if(Object.keys(h).length){let C=m.direction.x?"y":"x",E=Number(h[C])<m.head[C],N=C==="x"?E?"Left":"Right":E?"Up":"Down";m.direct(N)}}return{destroy(){s.disconnect()}}}return[o,l,r,u]}var ke=class extends q{constructor(t){super(),B(this,t,wt,bt,T,{})}},Je=ke;var Ke='<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"/></svg>';function Ft(e){let t,n,i,o=e[2].score+"",l,r,u,c,s,f,a,d,h,C,E=e[2].speed+"",X;return{c(){t=y("header"),n=y("h3"),i=S("Score: "),l=S(o),r=M(),u=y("h1"),c=y("a"),f=M(),a=S(e[0]),d=M(),h=y("h3"),C=S("Speed: "),X=S(E),_(c,"href",s=e[1].url),_(c,"target","_blank"),_(c,"rel","noreferrer"),_(c,"id","gh"),_(t,"id","scoreboard")},m(k,N){b(k,t,N),p(t,n),p(n,i),p(n,l),p(t,r),p(t,u),p(u,c),c.innerHTML=Ke,p(u,f),p(u,a),p(t,d),p(t,h),p(h,C),p(h,X)},p(k,[N]){N&4&&o!==(o=k[2].score+"")&&te(l,o),N&2&&s!==(s=k[1].url)&&_(c,"href",s),N&1&&te(a,k[0]),N&4&&E!==(E=k[2].speed+"")&&te(X,E)},i:v,o:v,d(k){k&&g(t)}}}function kt(e,t,n){let i;A(e,F,r=>n(2,i=r));let{name:o}=t,{repository:l}=t;return e.$$set=r=>{"name"in r&&n(0,o=r.name),"repository"in r&&n(1,l=r.repository)},[o,l,i]}var $e=class extends q{constructor(t){super(),B(this,t,kt,Ft,T,{name:0,repository:1})}},Qe=$e;function $t(e){let t,n,i,o,l,r,u,c,s,f;return document.title=t=e[0],i=new Qe({props:{name:e[0],repository:e[1]}}),r=new Je({}),s=new Ge({}),{c(){n=M(),ne(i.$$.fragment),o=M(),l=y("main"),ne(r.$$.fragment),u=M(),c=y("footer"),ne(s.$$.fragment)},m(a,d){b(a,n,d),J(i,a,d),b(a,o,d),b(a,l,d),J(r,l,null),b(a,u,d),b(a,c,d),J(s,c,null),f=!0},p(a,[d]){(!f||d&1)&&t!==(t=a[0])&&(document.title=t);let h={};d&1&&(h.name=a[0]),d&2&&(h.repository=a[1]),i.$set(h)},i(a){f||(D(i.$$.fragment,a),D(r.$$.fragment,a),D(s.$$.fragment,a),f=!0)},o(a){z(i.$$.fragment,a),z(r.$$.fragment,a),z(s.$$.fragment,a),f=!1},d(a){a&&g(n),W(i,a),a&&g(o),a&&g(l),W(r),a&&g(u),a&&g(c),W(s)}}}function xt(e,t,n){let{name:i}=t,{repository:o}=t;return e.$$set=l=>{"name"in l&&n(0,i=l.name),"repository"in l&&n(1,o=l.repository)},[i,o]}var xe=class extends q{constructor(t){super(),B(this,t,xt,$t,T,{name:0,repository:1})}},Ze=xe;var Et=new Ze({target:document.body,props:{name:Oe,repository:Me}}),$n=Et;export{$n as default};
