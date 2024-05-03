(function(){"use strict";var t={1961:function(t,e,n){var a=n(5130),i=n(6768);function o(t,e,n,a,o,r){const s=(0,i.g2)("search-bar"),l=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(s,{onNewRandom:e[0]||(e[0]=t=>r.getRandom()),onNewLang:e[1]||(e[1]=t=>{this.lang=t})}),(0,i.bF)(l,{pokemonList:o.pokemonList,lang:o.lang},null,8,["pokemonList","lang"])],64)}n(4114);var r=n(4232);const s=(0,i.Lk)("img",{src:"pokeball.png",alt:""},null,-1),l={action:""},p={class:"form-control"},u=(0,i.Lk)("label",{for:"tipo"},"Tipo",-1),c=["value"],h={class:"form-control"},m=(0,i.Lk)("label",{for:"idioma"},"Idioma",-1),g=["value"];function y(t,e,n,o,y,d){return(0,i.uX)(),(0,i.CE)("nav",null,[s,(0,i.Lk)("button",{onClick:e[0]||(e[0]=t=>d.newRandom())},"Recargar Aleatorios"),(0,i.Lk)("form",l,[(0,i.Lk)("div",p,[u,(0,i.bo)((0,i.Lk)("select",{name:"tipo","onUpdate:modelValue":e[1]||(e[1]=t=>y.type=t)},[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(y.types,(t=>((0,i.uX)(),(0,i.CE)("option",{value:t},(0,r.v_)(t.toUpperCase()),9,c)))),256))],512),[[a.u1,y.type]]),(0,i.Lk)("button",{onClick:e[2]||(e[2]=(...t)=>d.searchType&&d.searchType(...t))},"Buscar")])]),(0,i.Lk)("div",h,[m,(0,i.bo)((0,i.Lk)("select",{name:"idioma","onUpdate:modelValue":e[3]||(e[3]=t=>y.lang=t)},[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(y.langs,(t=>((0,i.uX)(),(0,i.CE)("option",{value:t},(0,r.v_)(t),9,g)))),256))],512),[[a.u1,y.lang]])])])}var d={data(){return{type:"",types:[],langs:[],lang:"en"}},async created(){this.types=await this.$api.getTypes(),this.langs=await this.$api.getLanguages(),this.$watch((()=>this.lang),((t,e)=>{this.$emit("newLang",t)}))},methods:{newRandom(){this.$router.push("/"),this.$emit("newRandom")},searchType(){""!=this.type?this.$router.push(`/${this.type}`):alert("Seleccione un tipo válido.")}}},f=n(1241);const v=(0,f.A)(d,[["render",y]]);var k=v;function L(t,e,n,a,o,r){const s=(0,i.g2)("pokemon-card");return(0,i.uX)(),(0,i.CE)("main",null,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.pokemonList,(t=>((0,i.uX)(),(0,i.Wv)(s,{id:t.id,name:t.name,sprite:t.sprites.front_default},null,8,["id","name","sprite"])))),256))])}const b=["src","alt"],w={class:"name-container"};function $(t,e,n,a,o,s){return(0,i.uX)(),(0,i.CE)("section",{onClick:e[0]||(e[0]=e=>t.$router.push(`./visualizar/${n.id}`))},[(0,i.Lk)("img",{src:n.sprite,alt:`${n.name} sprite`},null,8,b),(0,i.Lk)("div",w,[(0,i.Lk)("h1",null,(0,r.v_)(n.id)+". "+(0,r.v_)(n.name),1)])])}var T={props:["id","name","sprite"]};const C=(0,f.A)(T,[["render",$]]);var B=C,E={props:["pokemonList"],components:{PokemonCard:B}};const _=(0,f.A)(E,[["render",L]]);var X=_,x={name:"App",async created(){this.$watch((()=>this.$route.params),((t,e)=>{this.tipo=this.$route.params.tipo,this.tipo&&this.getByType()})),this.tipo=this.$route.params.tipo,this.tipo?this.getByType():this.getRandom()},data(){return{pokemonList:[],tipo:void 0,lang:"en"}},components:{SearchBar:k,SearchResult:X},methods:{async getByType(){this.pokemonList=[];let t=await this.$api.getType(this.tipo);t.forEach((async t=>{let e=await this.$api.getByUrl(t.pokemon.url);this.pokemonList.push(e)}))},async getRandom(){this.pokemonList=[];while(this.pokemonList.length<5){let t=await this.$api.getRandomPokemon();this.pokemonList.includes(t)||this.pokemonList.push(t)}}}};const j=(0,f.A)(x,[["render",o]]);var R=j,A=n(1387);const F={key:0,class:"pokemon-view"},O=["src","alt"],P={class:"type-card-container"},I={class:"abilities-container"};function U(t,e,n,a,o,s){const l=(0,i.g2)("type-card"),p=(0,i.g2)("ability-card");return o.pokemon?((0,i.uX)(),(0,i.CE)("div",F,[(0,i.Lk)("h1",null,(0,r.v_)(o.pokemon.id)+". "+(0,r.v_)(o.pokemon.name.toUpperCase()),1),(0,i.Lk)("img",{src:o.pokemon.sprites.front_default,alt:`${o.pokemon.name} sprite`},null,8,O),(0,i.Lk)("div",P,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(o.pokemon.types,(t=>((0,i.uX)(),(0,i.Wv)(l,{type:t,lang:n.lang},null,8,["type","lang"])))),256))]),(0,i.Lk)("div",I,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(o.abilityList,(t=>((0,i.uX)(),(0,i.Wv)(p,{ability:t,lang:n.lang},null,8,["ability","lang"])))),256))])])):(0,i.Q3)("",!0)}const K={class:"ability"},N={class:"name-container"};function M(t,e,n,a,o,s){return(0,i.uX)(),(0,i.CE)("div",K,[(0,i.Lk)("div",N,[(0,i.Lk)("h1",null,(0,r.v_)(s.filterNameByLang(n.ability)),1)]),(0,i.Lk)("p",null,(0,r.v_)(s.getAbilityText(n.ability)),1)])}var S={props:["ability","lang"],methods:{getAbilityText(t){return this.getFlavorTextByLang(t.flavor_text_entries)},getFlavorTextByLang(t){if(void 0!=this.filterByLang(t))return this.filterByLang(t).flavor_text},filterByLang(t){let e=t.filter((t=>t.language.name==this.lang));return e[0]},filterNameByLang(t){let e=t.names;return e=e.filter((t=>t.language.name==this.lang)),e.length>0?e[0].name:e.filter((t=>"en"==t.language.name))[0].name},getLanguageList(t){let e=[];return t.flavor_text_entries.forEach((t=>{let n=t.language.name;e.includes(n)||e.push(n)})),e}}};const W=(0,f.A)(S,[["render",M]]);var z=W;function V(t,e,n,a,o,s){return(0,i.uX)(),(0,i.CE)("span",{class:"type-card",onClick:e[0]||(e[0]=e=>t.$router.push(`/${n.type.type.name}`))},(0,r.v_)(o.translatedType),1)}var Q={props:["type","lang"],async created(){this.getTranslatedType(),this.$watch((()=>this.lang),((t,e)=>{this.getTranslatedType()}))},data(){return{translatedType:void 0}},methods:{async getTranslatedType(){let t=await this.$api.getByUrl(this.type.type.url);this.translatedType=this.filterNamesByLang(t.names)},filterNamesByLang(t){let e=t.filter((t=>t.language.name==this.lang))[0],n=e.name;return n||(n=t.filter((t=>"en"==t.language.name))[0].name),console.log(n),n}}};const q=(0,f.A)(Q,[["render",V]]);var D=q,G={props:["lang"],components:{AbilityCard:z,TypeCard:D},data(){return{id:0,pokemon:void 0,abilityList:[]}},async created(){this.id=this.$route.params.id,this.pokemon=await this.$api.getPokemonById(this.id),this.pokemon.abilities.forEach((async t=>{let e=await this.$api.getByUrl(t.ability.url);this.abilityList.push(e)}))}};const H=(0,f.A)(G,[["render",U]]);var J=H;const Y=(0,A.aE)({history:(0,A.Bt)(),routes:[{path:"/:tipo?",component:X},{path:"/visualizar/:id",component:J}]});var Z=Y;const tt="https://pokeapi.co/api/v2/",et={async getPokemonById(t){if(t<1026&&t>0){let e=await fetch(`${tt}/pokemon/${t}`),n=await e.json();return n}},async getLanguages(){let t=await fetch(`${tt}/language`),e=await t.json(),n=[];return e.results.forEach((t=>{n.push(t.name)})),n=n.filter((t=>"cs"!=t&&"pt-BR"!=t&&"roomaji"!=t)),n},async getRandomPokemon(){let t=Math.floor(1026*Math.random()+1),e=this.getPokemonById(t);return e},async getByUrl(t){let e=await fetch(t),n=await e.json();return n},async getTypes(){let t=await fetch(`${tt}/type`),e=await t.json(),n=[];return e.results.forEach((t=>{n.push(t.name)})),n},async getType(t){let e=await fetch(`${tt}/type/${t}/?limit=20`),n=await e.json();return n.pokemon},async getPokemonByType(t){let e=await fetch(`${tt}/type/${t}`),n=await e.json(),a=[];return n.pokemons.forEach((t=>{a.push(t.url)})),a}};var nt=et;const at=(0,a.Ef)(R);at.use(Z),at.config.globalProperties.$api=nt,Z.isReady().then((()=>{at.mount("#app")}))}},e={};function n(a){var i=e[a];if(void 0!==i)return i.exports;var o=e[a]={exports:{}};return t[a].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,a,i,o){if(!a){var r=1/0;for(u=0;u<t.length;u++){a=t[u][0],i=t[u][1],o=t[u][2];for(var s=!0,l=0;l<a.length;l++)(!1&o||r>=o)&&Object.keys(n.O).every((function(t){return n.O[t](a[l])}))?a.splice(l--,1):(s=!1,o<r&&(r=o));if(s){t.splice(u--,1);var p=i();void 0!==p&&(e=p)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[a,i,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,o,r=a[0],s=a[1],l=a[2],p=0;if(r.some((function(e){return 0!==t[e]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)var u=l(n)}for(e&&e(a);p<r.length;p++)o=r[p],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(u)},a=self["webpackChunkpokedex_tech_test"]=self["webpackChunkpokedex_tech_test"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(1961)}));a=n.O(a)})();
//# sourceMappingURL=app.e47e6fc0.js.map