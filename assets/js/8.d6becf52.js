(window.webpackJsonp=window.webpackJsonp||[]).push([[8,57],{155:function(t,e,i){},157:function(t,e,i){},160:function(t,e,i){},165:function(t,e,i){var n,a,s,o,r,l;i(153),i(109),i(33),i(20),i(166),i(69);var c={},h="https://cafemaker.wakingsands.com/i/060000/060561.png";function d(t){t(window.YZWF.eorzeaMap)}function f(){r.remove(),s=null}function u(t){if((a=t).getRegion().then((function(t){for(var e=0;e<t.length;e++)for(var i=0;i<t[e].maps.length;i++){var n=t[e].maps[i],a=n.name;c[a]||(c[a]=n.key),n.subName&&(a=n.name+","+n.subName),c[a]||(c[a]=n.key)}window.YZWF.loadMap=p})),l=$(['<section class="erozea-map-outer">','<div class="eorzea-map-glass"></div>','<div class="eorzea-map-move-handler"></div>','<div class="eorzea-map-close-button">关闭</div>','<div class="eorzea-map-inner"></div>','<div class="eorzea-map-resize-handler"></div>',"</section>"].join("")),window.innerWidth<500)l.css({top:"20%",left:0,width:"100%",height:"80%"}),l.addClass("eorzea-map-fixed-window");else{if(localStorage&&localStorage.YZWFEorzeaMapPos){var e=localStorage.YZWFEorzeaMapPos.split(",");2===e.length&&l.css({top:e[0]+"px",left:e[1]+"px"})}if(localStorage&&localStorage.YZWFEorzeaMapSize){var i=localStorage.YZWFEorzeaMapSize.split(",");2===i.length&&l.css({width:i[0]+"px",height:i[1]+"px"})}r=l.find(".eorzea-map-move-handler"),h=l,v(r,{down:function(){},move:function(t){var e="("+t.diffX+"px, "+t.diffY+"px, 0)";h.css({transform:"translate3d"+e})},up:function(){var t=h.position();h.css({top:t.top,left:t.left,transform:"none"}),localStorage&&(localStorage.YZWFEorzeaMapPos=t.top+","+t.left)}}),function(t,e){var i,a;v(t,{down:function(){i=e.height(),a=e.width()},move:function(t){e.height(i+t.diffY),e.width(a+t.diffX)},up:function(t){n.invalidateSize(),localStorage&&(localStorage.YZWFEorzeaMapSize=a+t.diffX+","+(i+t.diffY))}})}(l.find(".eorzea-map-resize-handler"),l)}var r,h;l.find(".eorzea-map-close-button").click(g),l.appendTo("body"),t.create(l.find(".eorzea-map-inner")[0]).then((function(t){l.css({display:"none",visibility:"visible"}),n=t,s&&(p.apply(this,s),f())})).catch((function(t){throw o=t,s&&(alert("地图加载失败，原因："+t.message),f()),t}))}function p(t,e,i,a){if(!t&&e&&(t=c[e]),t)return l.show(),n.loadMapKey(t).then((function(){i&&a&&m(n,i,a,!0)})).catch((function(t){console.error(t)}));alert("没有找到地图: "+e+"，请检查拼写或地图名字")}function m(t,e,i,n){var s=a.simpleMarker(e,i,h,t.mapInfo);s.addTo(t),t.markers.push(s),n&&setTimeout((function(){t.setView(t.mapToLatLng2D(e,i),-1)}),0)}function g(){l.hide()}function v(t,e){var i,n,a=!1;t.on("mousedown pointerdown touchdown",(function(t){t.preventDefault(),a=!0,i=t.clientX,n=t.clientY,e.down({startX:i,startY:n})})),$(window).on("mousemove pointermove touchmove",(function(t){if(a){t.preventDefault();var s=t.clientX-i,o=t.clientY-n;e.move({diffX:s,diffY:o})}})),$(window).on("mouseup pointerup touchup",(function(t){if(a){a=!1,t.preventDefault();var s=t.clientX-i,o=t.clientY-n;e.up({diffX:s,diffY:o})}}))}"undefined"!=typeof window&&(window.YZWF=window.YZWF||{},window.YZWF.mapSettedUp=window.YZWF.mapSettedUp||!1,window.YZWF.mapSettedUp||(d(u),$("body").on("click",".eorzea-map-trigger",(function(){var t=$(this).data("map-id"),e=$(this).data("map-name"),i=$(this).data("map-x"),a=$(this).data("map-y");n?p(t,e,i,a):function(t,e){if(r||(r=$('<div class="eorzea-map-loading"><div class="ff14-loading"></div><div class="eorzea-map-loading-text"></div></div>')).click((function(){f()})),o){if(!confirm("地图加载失败，是否重试？"))return;d(u)}r.find(".eorzea-map-loading-text").text("正在加载 "+t.text()+" 的地图…"),r.appendTo("body"),s=e}($(this),[t,e,i,a])})),$("body").on("click",".eorzea-map-group-show-all",(function(){var t=$(this).parents(".eorzea-map-group");if(t.length){var e=t.find(".eorzea-map-trigger"),i="",a=[];e.each((function(){i=$(this).data("map-name"),a.push([$(this).data("map-x"),$(this).data("map-y")])})),p(null,i).then((function(){for(var t=0;t<a.length;t++)m(n,a[t][0],a[t][1])}))}else alert("没有找到坐标组；或许是模板使用不正确？")})),window.YZWF.mapSettedUp=!0))},168:function(t,e,i){"use strict";var n=i(155);i.n(n).a},169:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));i(108),i(158);function n(t){var e=""+(t=parseInt(t));t<10?e="00000"+t:t<100?e="0000"+t:t<1e3?e="000"+t:t<1e4?e="00"+t:t<1e5&&(e="0"+t);var i=e.substring(0,3)+"000";return"https://cafemaker.wakingsands.com/i/".concat(i,"/").concat(e,".png")}},174:function(t,e,i){"use strict";i.r(e);i(164),i(165);var n={},a=(i(168),i(31)),s=Object(a.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"full-height",attrs:{id:"root"}},[this._t("default")],2)}),[],!1,null,null,null);e.default=s.exports},175:function(t,e,i){"use strict";i(47),i(20),i(110);var n={inject:["getPhotoSwipe","gotoId"],data:function(){return{slotKeys:["default"]}},methods:{handleClick:function(t){for(var e=t.target;e;){if("A"===e.tagName){this.handleClickLink(e,t);break}if("IMG"===e.tagName){this.handleClickImg(e,t);break}e=e.parentElement}},handleClickLink:function(t,e){if(t.origin===location.origin&&t.pathname===location.pathname&&t.search===location.search){var i=t.hash,n="";i&&(n=decodeURIComponent(i.slice(1))),this.gotoId(n),e.preventDefault(),e.stopPropagation()}},handleClickImg:function(t,e){if(!t.classList.contains("no-zoom")){var i=t.src;this.getPhotoSwipe().openSingle(i,t)}},updateSlotKeys:function(){this.$page&&this.$page.frontmatter&&this.$page.frontmatter.slots?this.slotKeys=this.$page.frontmatter.slots:this.slotKeys=["default"]}},watch:{$page:function(){this.updateSlotKeys()}},created:function(){this.updateSlotKeys()}},a=(i(177),i(31)),s=Object(a.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content-container"},[i("div",{staticClass:"content-container-inner",on:{"!click":function(e){return t.handleClick(e)}}},[t._t("default"),t._v(" "),t._l(t.slotKeys,(function(t){return i("Content",{key:t,attrs:{"slot-key":t}})}))],2)])}),[],!1,null,null,null);e.a=s.exports},177:function(t,e,i){"use strict";var n=i(157);i.n(n).a},178:function(t,e,i){"use strict";var n=i(160);i.n(n).a},180:function(t,e,i){},181:function(t,e,i){},184:function(t,e,i){},185:function(t,e,i){},186:function(t,e,i){},187:function(t,e,i){},214:function(t,e,i){"use strict";i.r(e);var n=i(175),a=i(169),s={components:{ContentContainer:n.a},computed:{bannerSrc:function(){return Object(a.a)(this.instance.banner)},instance:function(){return this.$page.frontmatter.instance}}},o=i(31),r=Object(o.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ContentContainer",[i("div",[i("div",{staticClass:"ui breadcrumb"},[i("a",{staticClass:"section"},[t._v("副本")]),t._v(" "),i("i",{staticClass:"right angle icon divider"}),t._v(" "),i("a",{staticClass:"section"},[t._v("4人")]),t._v(" "),i("i",{staticClass:"right angle icon divider"}),t._v(" "),i("a",{staticClass:"section"},[t._v("1-49级")]),t._v(" "),i("i",{staticClass:"right angle icon divider"}),t._v(" "),i("div",{staticClass:"active section"},[t._v("[15]天然要害沙斯塔夏溶洞")])]),t._v(" "),i("p")])])],1)}),[],!1,null,null,null);e.default=r.exports},215:function(t,e,i){"use strict";i.r(e);var n={props:{src:String}},a=(i(178),i(31)),s=Object(a.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"webframe-container"},[e("iframe",{ref:"iframe",attrs:{src:this.src,noborder:""}})])}),[],!1,null,"c20e6da0",null);e.default=s.exports},217:function(t,e,i){"use strict";var n=i(180);i.n(n).a},218:function(t,e,i){"use strict";var n=i(181);i.n(n).a},240:function(t,e,i){"use strict";var n=i(184);i.n(n).a},241:function(t,e,i){"use strict";var n=i(185);i.n(n).a},242:function(t,e,i){"use strict";var n=i(186);i.n(n).a},247:function(t,e,i){"use strict";var n=i(187);i.n(n).a},620:function(t,e,i){"use strict";i.r(e);i(16),i(69);var n=i(174),a=i(214),s=i(215),o=(i(153),i(173),i(117),i(179),{main:[{title:"",children:[{href:"/",title:"首页"}]},{title:"入坑准备",children:[{href:"/before/pay.htm",title:"收费方式及福利"},{href:"/before/world.htm",title:"游戏背景介绍"},{href:"/before/char.htm",title:"下载选服与捏人"},{href:"/before/job.htm",title:"职业选择"}]},{title:"新人指南",children:[{href:"/basic/core.htm",title:"新人必知"},{href:"/basic/item.htm",title:"道具与背包"},{href:"/basic/equip.htm",title:"装备介绍"},{href:"/basic/battle.htm",title:"战斗与副本",folder:"battle"},{href:"/basic/battle.htm",title:"概览",belongsTo:"battle",indent:1},{href:"/basic/battle-mech.htm",title:"战斗机制",belongsTo:"battle",indent:1},{href:"/basic/dungeon.htm",title:"副本介绍",belongsTo:"battle",indent:1},{href:"/basic/dummy.htm",title:"木桩&木人",belongsTo:"battle",indent:1},{href:"/basic/levelup.htm",title:"练级指南"},{href:"/basic/config.htm",title:"常用设置及热键"},{href:"/basic/quest.htm",title:"任务分类及重要支线"},{href:"/basic/map.htm",title:"地图移动与飞行"}]},{title:"进阶指南",children:[{href:"/advanced/glossary.htm",title:"黑话缩略语词典"},{href:"/advanced/macro-intro.htm",title:"宏指南",folder:"macro"},{href:"/advanced/macro-intro.htm",title:"概览",belongsTo:"macro",indent:1},{href:"/advanced/macrology-1.htm",title:"宏学上 宏基础",belongsTo:"macro",indent:1},{href:"/advanced/macrology-2.htm",title:"宏学中 宏进阶",belongsTo:"macro",indent:1},{href:"/advanced/macrology-3.htm",title:"宏学下 宏拾遗",belongsTo:"macro",indent:1},{href:"/duty/",title:"副本攻略"},{href:"/advanced/currency.htm",title:"货币系统"},{href:"/basic/bis.htm",title:"毕业装备"}]},{title:"战斗玩法",children:[{href:"/topic/battle.htm",title:"休闲赚钱"},{href:"/topic/hunt.htm",title:"怪物狩猎"},{href:"/topic/raid.htm",title:"挑战副本"},{href:"/topic/pvp.htm",title:"PVP"},{href:"/topic/shine.htm",title:"发光武器",folder:"shine"},{href:"/topic/shine.htm",title:"概览",belongsTo:"shine",indent:1},{href:"/topic/relic.htm",title:"上古、黄道武器(古武)",belongsTo:"shine",indent:1},{href:"/topic/anima.htm",title:"元灵武器(魂武)",belongsTo:"shine",indent:1},{href:"/topic/eureka-weapon.htm",title:"禁地兵装(优武)",belongsTo:"shine",indent:1},{href:"/topic/resistance.htm",title:"义军武器(女王之刃)",belongsTo:"shine",indent:1},{href:"/job/bluemage.htm",title:"青魔法师"}]},{title:"特殊战斗区域",children:[{href:"/topic/dd.htm",title:"深层迷宫"},{href:"/topic/eureka.htm",title:"禁地优雷卡",folder:"eureka"},{href:"/topic/eureka.htm",title:"基本情报",belongsTo:"eureka",indent:1},{href:"/topic/eureka/anemos.htm",title:"常风之地",belongsTo:"eureka",indent:1},{href:"/topic/eureka/pagos.htm",title:"恒冰之地",belongsTo:"eureka",indent:1},{href:"/topic/eureka/pyros.htm",title:"涌火之地",belongsTo:"eureka",indent:1},{href:"/topic/eureka/hydatos.htm",title:"丰水之地",belongsTo:"eureka",indent:1},{href:"/topic/eureka-weapon.htm",title:"优雷卡武器",belongsTo:"eureka",indent:1},{href:"/topic/bozjan.htm",title:"南方博兹雅战线"}]},{title:"休闲玩法及日常",children:[{href:"/topic/daily.htm",title:"每日/每周任务"},{href:"/topic/story.htm",title:"剧情任务"},{href:"/topic/goldsaucer.htm",title:"金碟游乐场",folder:"goldsaucer"},{href:"/topic/goldsaucer.htm",title:"概览",belongsTo:"goldsaucer",indent:1},{href:"/topic/gs-gate.htm",title:"机遇临门",belongsTo:"goldsaucer",indent:1},{href:"/topic/gs-minigame.htm",title:"迷你小游戏",belongsTo:"goldsaucer",indent:1},{href:"/topic/gs-cactpot.htm",title:"仙人彩",belongsTo:"goldsaucer",indent:1},{href:"/topic/gs-fashion.htm",title:"时尚品鉴",belongsTo:"goldsaucer",indent:1},{href:"/topic/triple-triad.htm",title:"九宫幻卡",belongsTo:"goldsaucer",indent:1},{href:"/topic/gs-race.htm",title:"陆行鸟竞赛",belongsTo:"goldsaucer",indent:1},{href:"/topic/gs-mahjong.htm",title:"多玛方城战",belongsTo:"goldsaucer",indent:1},{href:"/topic/gs-minion.htm",title:"萌宠之王",belongsTo:"goldsaucer",indent:1},{href:"/topic/relax.htm",title:"休闲活动"}]},{title:"其他玩法系统",children:[{href:"/topic/craft.htm",title:"能工巧匠（制作）",folder:"craft"},{href:"/topic/craft.htm",title:"概览",belongsTo:"craft",indent:1},{href:"/topic/craft-action.htm",title:"技能介绍",belongsTo:"craft",indent:1},{href:"/topic/craft-levelup.htm",title:"练级指南",belongsTo:"craft",indent:1},{href:"/topic/gather.htm",title:"大地使者（采集）",folder:"gather"},{href:"/topic/gather.htm",title:"概览",belongsTo:"gather",indent:1},{href:"/topic/gather-levelup.htm",title:"练级指南",belongsTo:"gather",indent:1},{href:"/topic/fisher.htm",title:"钓鱼指南",belongsTo:"gather",indent:1},{href:"/topic/ocean-fishing.htm",title:"海钓手册",belongsTo:"gather",indent:1},{href:"/advanced/retainer.htm",title:"雇员系统"},{href:"/advanced/grandCompany.htm",title:"大国防联军"},{href:"/advanced/fate.htm",title:"临危受命（FATE）"}]},{title:"界面指南",children:[{title:"基础指南",href:"/ui/how.htm"},{title:"掌握UI",href:"/ui/know.htm"},{title:"常见问题",href:"/ui/faq.htm"},{title:"装备和道具",href:"/ui/equipment.htm"},{title:"买入卖出",href:"/ui/item.htm"},{title:"玩家交流",href:"/ui/communication.htm"},{title:"神典石",href:"/ui/currency.htm"},{title:"战斗界面",href:"/ui/battle.htm"}]},{title:"其他",children:[{href:"/topic/other.htm",title:"周边衍生"},{href:"/basic/international.htm",title:"国际服专题"}]},{title:"职业专题",children:[{title:"职业介绍",href:"/job/"},{title:"骑士（剑术师）",href:"/job/paladin.htm",img:"/images/jobs/paladin.png"},{title:"战士（斧术师）",href:"/job/warrior.htm",img:"/images/jobs/warrior.png"},{title:"暗黑骑士",href:"/job/darkknight.htm",img:"/images/jobs/darkknight.png"},{title:"绝枪战士",href:"/job/gunbreaker.htm",img:"/images/jobs/gunbreaker.png"},{title:"武僧（格斗家）",href:"/job/monk.htm",img:"/images/jobs/monk.png"},{title:"龙骑士（枪术师）",href:"/job/dragoon.htm",img:"/images/jobs/dragoon.png"},{title:"忍者（双剑师）",href:"/job/ninja.htm",img:"/images/jobs/ninja.png"},{title:"武士",href:"/job/samurai.htm",img:"/images/jobs/samurai.png"},{title:"吟游诗人（弓箭手）",href:"/job/bard.htm",img:"/images/jobs/bard.png"},{title:"机工士",href:"/job/machinist.htm",img:"/images/jobs/machinist.png"},{title:"舞者",href:"/job/dancer.htm",img:"/images/jobs/dancer.png"},{title:"黑魔法师（咒术师）",href:"/job/blackmage.htm",img:"/images/jobs/blackmage.png"},{title:"召唤师（秘术师）",href:"/job/summoner.htm",img:"/images/jobs/summoner.png"},{title:"赤魔法师",href:"/job/redmage.htm",img:"/images/jobs/redmage.png"},{title:"青魔法师",href:"/job/bluemage.htm",img:"/images/jobs/bluemage.png"},{title:"白魔法师（幻术师）",href:"/job/whitemage.htm",img:"/images/jobs/whitemage.png"},{title:"学者（秘术师）",href:"/job/scholar.htm",img:"/images/jobs/scholar.png"},{title:"占星术士",href:"/job/astrologian.htm",img:"/images/jobs/astrologian.png"}]},{title:"常用网站",externalChildren:[{title:"国服官网",href:"http://ff.sdo.com"},{title:"NGA 玩家社区(FF14板)",href:"https://bbs.nga.cn/thread.php?fid=-362960"},{title:"最终幻想XIV中文维基",href:"https://ff14.huijiwiki.com"},{title:"素素攻略站",href:"https://www.ffxiv.cn/"},{title:"水晶驿站",href:"https://riesa.gitee.io/crystal/"}]}]}),r={props:{value:{type:Boolean,default:!1}},data:function(){return{showMenu:!1,toc:o.main,expandedTitles:[],loadImage:!1}},mounted:function(){this.expandedTitles=[this.currentTitle1],this.showMenu=this.value,this.loadImage=!0},computed:{currentTitle1:function(){var t=this;return this.toc.findIndex((function(e){return e.children&&e.children.find((function(e){return e&&e.href===t.$page.path}))}))},currentTitle2:function(){var t=this,e=this.toc[this.currentTitle1];return e&&e.children&&e.children.findIndex((function(e){return e&&e.href===t.$page.path}))}},methods:{toggleExpand:function(t){var e=this.expandedTitles.indexOf(t);e>=0?this.expandedTitles.splice(e,1):this.expandedTitles.push(t)},setExpand:function(t,e){this.expandedTitles.indexOf(t)>=0!==e&&this.toggleExpand(t)},isActive:function(t,e){if(t!==this.currentTitle1)return!1;var i=this.toc[t]&&this.toc[t].children[e],n=this.toc[t]&&this.toc[t].children[this.currentTitle2];return!!i&&(!!n&&(i.href===this.$page.path||!(!i.folder||i.folder!==n.belongsTo)))},isVisible:function(t,e){if(t!==this.currentTitle1)return!1;var i=this.toc[t]&&this.toc[t].children[e];if(!i.belongsTo)return!0;var n=this.toc[t]&&this.toc[t].children[this.currentTitle2];return!!i&&(!!n&&(i.belongsTo===n.belongsTo||i.belongsTo===n.folder))}},watch:{currentTitle1:function(t,e){this.setExpand(t,!0)},"$page.path":function(){this.showMenu=!1},showMenu:function(t){this.$emit("input",t)},value:function(t){this.showMenu=t}}},l=(i(217),i(31)),c=Object(l.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nav-container"},[i("div",{staticClass:"menus",class:{show:t.showMenu}},[i("div",{staticClass:"ui vertical inverted menu menu-list"},t._l(t.toc,(function(e,n){return i("div",{key:n,staticClass:"item header",class:{expand:t.expandedTitles.indexOf(n)>=0||!e.title}},[e.title?i("div",{staticClass:"title",on:{click:function(e){return e.stopPropagation(),t.toggleExpand(n)}}},[t._v("\n          "+t._s(e.title)+" "),i("i",{staticClass:"caret down icon expand-icon"})]):t._e(),t._v(" "),i("div",{staticClass:"menu"},[t._l(e.children,(function(e,a){return i("router-link",{key:a,staticClass:"item",class:{active:t.isActive(n,a),"with-img":e.img,"indent-1":1===e.indent,"has-children":e.folder,visible:t.isVisible(n,a)},attrs:{to:e.href}},[e.img&&t.loadImage?i("img",{attrs:{src:t.$withBase(e.img)}}):t._e(),t._v(" "),e.img&&!t.loadImage?i("img",{staticClass:"img-placeholder",attrs:{src:"data:,"}}):t._e(),t._v(" "),e.img&&!t.loadImage?i("link",{attrs:{rel:"preload",href:t.$withBase(e.img),as:"image"}}):t._e(),t._v(" "),i("span",[t._v(t._s(e.title))])])})),t._v(" "),t._l(e.externalChildren,(function(e,n){return i("a",{key:n,staticClass:"item",attrs:{href:e.href,target:"_blank",rel:"noopenner noreferer"}},[t._v("\n            "+t._s(e.title)+"\n          ")])}))],2)])})),0)]),t._v(" "),i("div",{staticClass:"toggle-button",class:{"menu-show":t.showMenu}},[i("button",{staticClass:"ui large green circular icon button",on:{click:function(e){e.preventDefault(),t.showMenu=!t.showMenu}}},[i("i",{staticClass:"icon chevron right"})])])])}),[],!1,null,null,null).exports,h={data:function(){return{shouldShow:!1}},methods:{dismiss:function(){this.shouldShow=!1,localStorage.whatsNew="search-inside",window.ma&&window.ma.trackEvent("WhatsNew","dismiss","search-inside"),window._hmt&&window._hmt.push(["_trackEvent","WhatsNew","dismiss","search-inside"])}},mounted:function(){}},d=(i(218),Object(l.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.shouldShow,expression:"shouldShow"}],staticClass:"container"},[e("div",{staticClass:"ui tertiary orange inverted segment"},[e("div",{staticClass:"msg"},[this._v("\n      本站现已支持\n      "),e("router-link",{attrs:{to:"/search.htm"}},[this._v("站内搜索")]),this._v("\n      ！点击左上角的搜索按钮即可搜索《新大陆见闻录》全站内容。\n    ")],1),this._v(" "),e("i",{staticClass:"icon close",on:{click:this.dismiss}})])])}),[],!1,null,"8b0706fe",null).exports),f=(i(47),i(20),i(110),i(219)),u=i.n(f),p={inject:["gotoId"],data:function(){return{showQr:!1,showToc:!1,dataUrl:""}},methods:{scrollToTop:function(){this.gotoId("")},headClicked:function(){this.$page.headers?this.showToc=!this.showToc:this.gotoId("")},handleClick:function(t){for(var e=t.target;e;){if("A"===e.tagName){this.handleClickLink(e,t);break}e=e.parentElement}},handleClickLink:function(t,e){if(t.origin===location.origin&&t.pathname===location.pathname&&t.search===location.search){var i=t.hash,n="";i&&(n=decodeURIComponent(i.slice(1))),this.gotoId(n),this.showToc=!1,e.preventDefault(),e.stopPropagation()}}},watch:{showQr:function(t){var e=this;t?u.a.toDataURL(location.origin+this.$withBase(this.$page.path)+"?utm_source=self&utm_medium=qrcode",{width:320,margin:2},(function(t,i){t||(e.dataUrl=i)})):this.dataUrl=""},$page:function(){this.showToc=!1}}},m=(i(240),Object(l.a)(p,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nav-top"},[i("div",{staticClass:"ui inverted menu"},[i("a",{staticClass:"item icon-item hide-large",attrs:{href:"javascript:;"},on:{click:function(e){return e.preventDefault(),t.$emit("barClicked")}}},[i("i",{staticClass:"bars icon"})]),t._v(" "),i("router-link",{staticClass:"item icon-item",attrs:{to:"/"}},[i("i",{staticClass:"home angle icon"})]),t._v(" "),i("router-link",{staticClass:"item icon-item",attrs:{to:"/search.htm"}},[i("i",{staticClass:"search icon"})]),t._v(" "),i("a",{staticClass:"item page-title",attrs:{href:"javascript:;"},on:{click:t.headClicked}},[t.$page.headers?i("i",{staticClass:"caret icon",class:{right:!t.showToc,down:t.showToc}}):t._e(),t._v(" "),i("span",{staticClass:"hide-large"},[t._v(t._s(t.$page.title))]),t._v(" "),i("div",{staticClass:"hide-small"},[t._v("\n        "+t._s(t.$page.headers?"章节目录":t.$page.title)+"\n      ")])]),t._v(" "),i("div",{staticClass:"right menu"},[i("a",{staticClass:"item icon-item hide-small",attrs:{href:"javascript:;"},on:{click:function(e){return e.preventDefault(),t.scrollToTop(e)}}},[i("i",{staticClass:"up angle icon"})]),t._v(" "),i("a",{staticClass:"item icon-item hide-small",attrs:{href:"javascript:;"},on:{mouseenter:function(e){t.showQr=!0},mouseleave:function(e){t.showQr=!1}}},[i("i",{staticClass:"qrcode icon"})])])],1),t._v(" "),t.showQr?i("div",{staticClass:"qr-container"},[i("div",[i("img",{attrs:{src:t.dataUrl}})]),t._v(" "),i("p",[t._v("\n      使用手机扫描二维码，即可在手机上阅读本文。如遇微信无法打开，请使用自带浏览器或谷歌浏览器。\n    ")])]):t._e(),t._v(" "),t.showToc&&t.$page.headers?i("div",{staticClass:"toc-container",on:{"!click":function(e){return t.handleClick(e)}}},[i("div",{staticClass:"toc"},[i("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.$page.title)+" ")]),t._v(" "),i("TOC")],1)]):t._e()])}),[],!1,null,null,null).exports),g={computed:{historyLink:function(){return"https://github.com/thewakingsands/novice-network/blame/master/docs/"+this.$page.relativePath},editLink:function(){return"https://github.com/thewakingsands/novice-network/edit/master/docs/"+this.$page.relativePath},sourceLink:function(){return"https://raw.githubusercontent.com/thewakingsands/novice-network/master/docs/"+this.$page.relativePath},feedbackLink:function(){return"https://i.duotai.net/forms/zxjg2/wh956yns?url="+this.$page.relativePath}}},v=(i(241),Object(l.a)(g,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer-container"},[i("div",{staticClass:"colored-footer"},[i("div",{staticClass:"status-line"},[i("a",{attrs:{target:"_blank",rel:"noopener noreferer",href:t.historyLink}},[t._v("\n        修订历史\n      ")]),t._v("\n      |\n      "),i("a",{attrs:{target:"_blank",rel:"noopener noreferer",href:t.editLink}},[t._v("\n        编辑本页\n      ")]),t._v("\n      |\n      "),i("a",{attrs:{target:"_blank",rel:"noopener noreferer",href:t.feedbackLink}},[t._v("\n        反馈问题\n      ")]),t._v("\n      |\n      "),i("router-link",{attrs:{to:"/about"}},[t._v(" 关于&捐赠 ")])],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)]),t._v(" "),i("div",{staticClass:"copyright-line copyright-se"},[t._v("\n      FINAL FANTASY XIV © 2010 - 2020 SQUARE ENIX CO., LTD. All Rights\n      Reserved.\n      "),i("router-link",{attrs:{to:"/takedown"}},[t._v("\n        Reporting Copyright Infringement(版权投诉)\n      ")])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"status-line"},[this._v("\n      《新大陆见闻录》是"),e("a",{attrs:{href:"https://ffcafe.org/",target:"_blank"}},[this._v("肥肥咖啡")]),this._v("的一个子项目，欢迎"),e("a",{attrs:{href:"https://ffcafe.org/join-us/"}},[this._v("加入我们")]),this._v("！\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://github.com/thewakingsands/novice-network/actions/workflows/pages.yml",rel:"noopener noreferer",target:"_blank"}},[e("img",{attrs:{src:"https://github.com/thewakingsands/novice-network/actions/workflows/pages.yml/badge.svg",referrerpolicy:"no-referrer"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://vuepress.vuejs.org/",rel:"noopener noreferer",target:"_blank"}},[e("img",{attrs:{src:"https://img.shields.io/badge/generator-VuePress-46b683",referrerpolicy:"no-referrer"}})])}],!1,null,null,null).exports),_=(i(70),i(71),i(170),i(108),i(24),i(51),i(52),{data:function(){return{next:{title:"",href:""},prev:{title:"",href:""}}},created:function(){this.updatePager()},methods:{updatePager:function(){var t=this;this.prev={title:"",href:""},this.next={title:"",href:""};var e=[],i=!0,n=!1,a=void 0;try{for(var s,r=o.main[Symbol.iterator]();!(i=(s=r.next()).done);i=!0){var l=s.value;e=e.concat(l.children&&l.children.filter((function(t){return!t.belongsTo})))}}catch(t){n=!0,a=t}finally{try{i||null==r.return||r.return()}finally{if(n)throw a}}var c=e.findIndex((function(e){return e&&e.href===t.$page.path}));if(c>=0){var h=e[c+1],d=e[c-1];this.next=h||{title:"",href:""},this.prev=d||{title:"",href:""}}}},watch:{$page:function(){this.updatePager()}}}),b=(i(242),Object(l.a)(_,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-pager"},[t.prev.href?i("div",{staticClass:"left"},[i("router-link",{attrs:{to:t.prev.href}},[i("i",{staticClass:"caret left icon"}),t._v(" "+t._s(t.prev.title)+"\n    ")])],1):t._e(),t._v(" "),t.next.href?i("div",{staticClass:"right"},[i("router-link",{attrs:{to:t.next.href}},[i("i",{staticClass:"caret right icon"}),t._v(" "+t._s(t.next.title)+"\n    ")])],1):i("div",{staticClass:"back right"},[t._m(0)]),t._v(" "),i("div",{staticClass:"clear"})])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"javascript:history.back();"}},[e("span",[this._v("◀ 返回")])])}],!1,null,null,null).exports),w=i(175),k=(i(243),i(244),i(245)),C=i.n(k),T=i(246),$=i.n(T),y={data:function(){return{instance:null}},methods:{openSingle:function(t,e){if(this.instance)try{this.instance.destroy()}catch(t){}var i=1024,n=1024;if(e&&e.naturalWidth)i=e.naturalWidth,n=e.naturalHeight;else{var a=new Image(t);a.src=t,a.removeAttribute("width"),a.removeAttribute("height"),i=a.naturalWidth||a.width,n=a.naturalHeight||a.height}var s=new C.a(this.$refs.container,$.a,[{src:t,w:2*i||1e3,h:2*n||1e3}],{index:0,history:!1});s.init(),i&&n||(a.onload=a.onloadedmetadata=function(){i===a.width&&n===a.height||(i=s.items[0].width=a.naturalWidth||a.width,n=s.items[0].height=a.naturalHeight||a.height,s.invalidateCurrItems(),s.updateSize(!0))}),this.instance=s}}},j=Object(l.a)(y,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"container",staticClass:"pswp",attrs:{tabindex:"-1",role:"dialog","aria-hidden":"true"}},[e("div",{staticClass:"pswp__bg"}),this._v(" "),this._m(0)])}),[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pswp__scroll-wrap"},[i("div",{staticClass:"pswp__container"},[i("div",{staticClass:"pswp__item"}),t._v(" "),i("div",{staticClass:"pswp__item"}),t._v(" "),i("div",{staticClass:"pswp__item"})]),t._v(" "),i("div",{staticClass:"pswp__ui pswp__ui--hidden"},[i("div",{staticClass:"pswp__top-bar"},[i("div",{staticClass:"pswp__counter"}),t._v(" "),i("button",{staticClass:"pswp__button pswp__button--close",attrs:{title:"关闭（Esc）"}}),t._v(" "),i("button",{staticClass:"pswp__button pswp__button--fs",attrs:{title:"全屏"}}),t._v(" "),i("button",{staticClass:"pswp__button pswp__button--zoom",attrs:{title:"缩放"}}),t._v(" "),i("div",{staticClass:"pswp__preloader"},[i("div",{staticClass:"pswp__preloader__icn"},[i("div",{staticClass:"pswp__preloader__cut"},[i("div",{staticClass:"pswp__preloader__donut"})])])])]),t._v(" "),i("div",{staticClass:"pswp__share-modal pswp__share-modal--hidden pswp__single-tap"},[i("div",{staticClass:"pswp__share-tooltip"})]),t._v(" "),i("button",{staticClass:"pswp__button pswp__button--arrow--left",attrs:{title:"上一张（左箭头）"}}),t._v(" "),i("button",{staticClass:"pswp__button pswp__button--arrow--right",attrs:{title:"下一张（右箭头）"}}),t._v(" "),i("div",{staticClass:"pswp__caption"},[i("div",{staticClass:"pswp__caption__center"})])])])}],!1,null,null,null).exports,x={data:function(){return{showMenu:!1,showAd:!1}},components:{Root:n.default,NavMenu:c,ContentContainer:w.a,NavTop:m,Footer:v,Pager:b,PhotoSwipe:j,Duty:a.default,WebFrame:s.default,WhatsNew:d},provide:function(){return{getPhotoSwipe:this.getPhotoSwipe,gotoId:this.gotoId}},mounted:function(){var t=this;i.e(93).then(i.t.bind(null,619,7)).then((function(t){return t.initTooltip()})),this.$beforeHook=this.$router.beforeEach((function(e,i,n){t.showAd=!1,n()})),this.$afterHook=this.$router.afterEach((function(e,i){t.showAd=!0})),this.showAd=!0},beforeDestroy:function(){this.$beforeHook&&this.$beforeHook(),this.$afterHook&&this.$afterHook()},methods:{getPhotoSwipe:function(){return this.$refs.photoSwipe},gotoId:function(t){var e=0;if(t){var i=document.getElementById(t);if(!i){if(!(i=document.getElementsByName(t)))return;i=i[0]}i.classList.add("scroll-focus"),setTimeout((function(){i&&i.classList.remove("scroll-focus")}),3e3),e=i.offsetTop-45}var n=document.scrollingElement||window;try{n.scrollTo({top:e,behavior:"smooth"})}catch(t){n.scrollTop=e}}},watch:{showAd:function(t){t&&setTimeout((function(){try{(adsbygoogle=window.adsbygoogle||[]).push({})}catch(t){console.warn("ads error",t)}}),200)}}},S=(i(247),Object(l.a)(x,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Root",{staticClass:"root-container",class:t.$page.frontmatter.className},[i("div",{staticClass:"main-container full-height"},[i("div",{staticClass:"content-outer full-height",class:{fullscreen:!!t.$page.frontmatter.webframe}},[i("div",{staticClass:"content-inner full-height"},[i("NavTop",{on:{barClicked:function(e){t.showMenu=!t.showMenu}}}),t._v(" "),t._t("default",[t.$page.frontmatter.instance?i("Duty"):t.$page.frontmatter.webframe?i("WebFrame",{attrs:{src:t.$page.frontmatter.webframe}}):i("div",[i("WhatsNew"),t._v(" "),t.$page.frontmatter.noTopPager?t._e():i("Pager"),t._v(" "),i("ContentContainer"),t._v(" "),i("Pager")],1),t._v(" "),t.showAd&&!t.$page.frontmatter.webframe?i("div",{staticClass:"yaofan"},[i("div",{staticClass:"yaofan-inner"},[i("div",{staticClass:"yaofan-bg"},[i("p",[t._v("\n                  为平衡建站成本，本站《新大陆见闻录》在此处设有广告。"),i("br"),t._v("\n                  如果你愿意取消对本站的广告屏蔽，这将是对我们莫大的支持。"),i("br"),t._v("\n                  当然，你也可以通过\n                  "),i("router-link",{attrs:{to:"/about"}},[t._v(" 捐赠")]),t._v("\n                  来支持我们。\n                ")],1)]),t._v(" "),i("ins",{staticClass:"adsbygoogle yaofan-ad",staticStyle:{display:"block"},attrs:{"data-ad-client":"ca-pub-8304225030161579","data-ad-slot":"3871755301"}})])]):t._e(),t._v(" "),t.$page.frontmatter.webframe?t._e():i("Footer")])],2)]),t._v(" "),i("div",{staticClass:"nav-menu"},[i("NavMenu",{model:{value:t.showMenu,callback:function(e){t.showMenu=e},expression:"showMenu"}})],1)]),t._v(" "),i("PhotoSwipe",{ref:"photoSwipe"})],1)}),[],!1,null,null,null));e.default=S.exports}}]);