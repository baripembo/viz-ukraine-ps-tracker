(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{330:function(t,e,r){var content=r(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(40).default)("6476f70f",content,!0,{sourceMap:!1})},331:function(t,e,r){var content=r(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(40).default)("172b43ef",content,!0,{sourceMap:!1})},333:function(t,e,r){"use strict";r(330)},334:function(t,e,r){var n=r(39)(!1);n.push([t.i,".badges{display:flex;justify-content:space-between}.tooltip{margin-bottom:5px;opacity:.9}.tooltip.hidden{opacity:0!important}.tooltip .tooltip-inner{max-width:400px;padding:15px 20px;width:400px}#sankeyChart{height:400px;width:100%}.node rect{cursor:move;fill-opacity:.9;shape-rendering:crispEdges}.node text{pointer-events:none;text-shadow:0 1px 0 #fff}.link{fill:none;stroke:#000;stroke-opacity:.3}.linkHover{stroke-opacity:.5}.linkText{fill:#000;text-shadow:1px 1px 3px #fff;cursor:default;pointer-events:none}@media only screen and (max-width:400px){.tooltip .tooltip-inner{max-width:300px;padding:15px 20px;width:300px}}",""]),t.exports=n},335:function(t,e,r){"use strict";r(331)},336:function(t,e,r){var n=r(39)(!1);n.push([t.i,".chart[data-v-adb39930]{width:100%;height:500px}",""]),t.exports=n},337:function(t,e,r){"use strict";var n=r(20),o=(r(79),r(78),r(8),r(1),r(14),r(366)),l=r(348),c=r(332),d=r.n(c),h={name:"SankeyChart",props:["chartData","params"],data:function(){return{tooltipStatus:"",show:!1,description:"",maximumVisibleItems:10,chart:null,width:10,height:10,selectedLink:0,colors:["#418FDE","#E56A54","#ECA154","#E2E868","#A4D65E","#71DBD4","#9063CD","#D3BC8D","#82B5E9","#EFA497","#F4C799","#C6E69B","#AEEAE6","#418FDE","#E56A54","#ECA154","#E2E868","#A4D65E","#71DBD4","#9063CD","#D3BC8D","#82B5E9","#EFA497","#F4C799"]}},computed:{linkDescription:function(){return this.description},tooltips:function(){return this.$store.state.tooltips},nodes:function(){return this.sankey.nodes},links:function(){return this.sankey.links},maxNodeDepth:function(){var t=this.sankey.nodes.map((function(t){return t.depth}));return Math.max.apply(Math,Object(n.a)(t))},sankey:function(){var t=this.chartData.nodes,e=this.chartData.links,r=Object(l.a)().nodeId((function(t){return t.name})).nodeWidth(20).nodePadding(8).extent([[1,5],[this.width-1,this.height-10]]);return r({nodes:t.map((function(t){return Object.assign({},t)})),links:e.map((function(t){return Object.assign({},t)}))})},sankeyLinkPaths:function(){return Object(l.b)()}},mounted:function(){this.makeChart(),window.addEventListener("resize",this.onResize),this.onResize()},methods:{truncate:function(t){return t.length>50&&(t=t.substr(0,50)+"..."),t},mouseoverLink:function(t){this.selectedLink=t,""!==this.links[t].description&&"[No description]"!==this.links[t].description&&(this.show=!0,this.tooltipStatus="")},mouseleaveLink:function(t){this.tooltipStatus="hidden",this.selectedLink=0},sankeyLinkPath:function(t){return this.sankeyLinkPaths(t)},numberFormatter:function(t){return 0===t?"0":t?d()(t).format("$0,0"):""},labelXPosition:function(link){return this.maxNodeDepth<2?link.source.x1+(link.target.x0-link.source.x1)/2:link.source.x1>this.width/2?link.source.x1+6:link.target.x0-6},labelYPosition:function(link){if(this.maxNodeDepth<2)return(link.y1+link.y0)/2;var t=link.source.x1>this.width/2,e=t?link.y0:link.y1;return e=Math.abs(e-this.height/2)<15&&t?e-15:e},labelAnchor:function(link){return this.maxNodeDepth<2?"middle":link.source.x1>this.width/2?"start":"end"},color:function(t){return"» (unspecified org)"===t.name?"#999":this.colors[t.index]},makeChart:function(){Object(o.a)("#sankeyChart").append("svg").attr("width",this.width).attr("height",this.height)},onResize:function(){this.width=this.$el.offsetWidth,this.height=500}}},f=(r(333),r(41)),m={components:{SankeyChart:Object(f.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"badges"},[r("div",[r("b-badge",{attrs:{variant:"dark"}},[t._v("\n        Donor\n      ")])],1),t._v(" "),r("div",[t.maxNodeDepth>1?r("b-badge",{attrs:{variant:"dark"}},[t._v("\n        Reporting Org\n      ")]):t._e()],1),t._v(" "),r("div",[r("b-badge",{attrs:{variant:"dark"}},[t._v("\n        Recipient\n      ")])],1)]),t._v(" "),r("b-tooltip",{attrs:{"custom-class":""+t.tooltipStatus,show:t.show,target:"flowDetail",noninteractive:""},on:{"update:show":function(e){t.show=e}}},[t._v("\n    "+t._s(t.links[t.selectedLink].description)+"\n  ")]),t._v(" "),r("div",{ref:"sankeyChart",attrs:{id:"sankeyChart"}},[r("svg",{attrs:{width:t.width,height:t.height}},[r("pattern",{attrs:{id:"diagonalHatch",width:"10",height:"10",patternTransform:"rotate(45 0 0)",patternUnits:"userSpaceOnUse"}},[r("line",{staticStyle:{stroke:"black","stroke-width":"1"},attrs:{x1:"0",y1:"0",x2:"0",y2:"10"}})]),t._v(" "),r("g",t._l(t.nodes,(function(e){return r("rect",t._b({key:e.index,staticClass:"node",attrs:{x:e.x0,y:isNaN(e.y0)?0:e.y0,height:isNaN(e.y1)||isNaN(e.y0)?0:Math.max(e.y1-e.y0,0),width:e.x1-e.x0,fill:"» (unspecified org)"==e.name?"url(#diagonalHatch)":t.color(e)}},"rect",t.nodes,!1))})),0),t._v(" "),r("g",t._l(t.links,(function(link){return r("g",t._b({key:link.index,class:t.selectedLink==link.index?"link linkHover":"link",staticStyle:{"mix-blend-mode":"multiply"},attrs:{id:"link-"+link.index}},"g",t.links,!1),[r("linearGradient",{attrs:{id:link.index+"-gradient",x1:link.source.x1,x2:link.target.x0,gradientUnits:"userSpaceOnUse"}},[r("stop",{attrs:{"stop-color":t.color(link.source),offset:"0%"}}),t._v(" "),r("stop",{attrs:{"stop-color":t.color(link.target),offset:"100%"}})],1),t._v(" "),r("path",{attrs:{d:t.sankeyLinkPaths(link),stroke:"url(#"+link.index+"-gradient)","stroke-width":Math.max(1,link.width)},on:{mouseover:function(e){return t.mouseoverLink(link.index)},mouseleave:function(e){return t.mouseleaveLink(link.index)}}})],1)})),0),t._v(" "),r("g",{attrs:{id:"donorName","font-family":"sans-serif","font-size":"12"}},t._l(t.nodes,(function(e){return r("text",t._b({key:e.index,attrs:{x:e.x0<t.width/2?e.x1+6:e.x0-6,y:isNaN(e.y1)||isNaN(e.y1)?0:(e.y1+e.y0)/2,"text-anchor":e.x0<t.width/2?"start":"end",dy:"0.35em"}},"text",t.nodes,!1),[t._v("\n          "+t._s(t.truncate(e.name))+"\n          "),r("title",[t._v(t._s(e.name))])])})),0),t._v(" "),r("g",{attrs:{id:"flowDetail","font-family":"sans-serif","font-size":"12"}},t._l(t.links,(function(link){return r("g",t._b({key:link.index+"-label",staticClass:"linkText",style:t.selectedLink==link.index?"display: block;":"display: none;"},"g",t.links,!1),[r("text",{attrs:{x:t.labelXPosition(link),y:isNaN(link.y0)||isNaN(link.y1)?0:t.labelYPosition(link),width:link.width,dy:"0.35em","text-anchor":t.labelAnchor(link)}},[t._v("\n            USD "+t._s(t.numberFormatter(link.value))+"\n          ")])])})),0)])])],1)}),[],!1,null,null,null).exports},props:["items","params"],data:function(){return{maximumVisibleItems:10}},computed:{reporterNameIndex:function(){return this.$store.state.reporterNameIndex},chartData:function(){var t=this,e=function(t){if(void 0===t)return t;return["USAID redacted this field in accordance with the Principled Exceptions outlined in the Office of Management and Budget Bulletin 12-01.","USAID redacted this field in accordance with the exceptions outlined in the Foreign Aid Transparency and Accountability Act of 2016."].includes(t)?"Redacted":t},r=function(r,n){return"outgoing".includes(n)?"".concat(e(r["#org+name+provider"])||e(t.getOrgName(r["#org+id+reporting"]))||"UNKNOWN"," »"):"".concat(e(r["#org+name+provider"]))},o=function(r,n){return"outgoing".includes(n)?"» ".concat(e(r["#org+name+receiver"])):"".concat(e(t.getOrgName(r["#org+id+reporting"]))," »")},l=Object(n.a)(this.items).sort((function(a,b){return a["#value+total"]>b["#value+total"]?-1:1}));return{nodes:l.reduce((function(summary,t){var e=r(t,t["#x_transaction_direction"]),n=o(t,t["#x_transaction_direction"]);return summary.includes(e)||summary.push(e),summary.includes(n)||summary.push(n),summary}),[]).map((function(t){return{name:t}})),links:l.map((function(t){return{source:r(t,t["#x_transaction_direction"]),target:o(t,t["#x_transaction_direction"]),value:Math.round(t["#value+total"]),description:t["#description"]}}))}}},methods:{getOrgName:function(t){var e=this.reporterNameIndex.filter((function(e){return e["#org+id+reporting"]===t}));return void 0!==e[0]?e[0]["#org+name+reporting"]:""}}},v=(r(335),Object(f.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.chartData.links.length>0?[r("div",{staticClass:"chart"},[r("client-only",[r("sankey-chart",{attrs:{"chart-data":t.chartData,params:t.params}})],1)],1)]:[r("b-alert",{staticClass:"text-muted text-center",attrs:{show:"",variant:"warning"}},[t._v("\n      No flows match the filters you've chosen\n    ")])]],2)}),[],!1,null,"adb39930",null));e.a=v.exports},338:function(t,e,r){"use strict";r(17),r(78),r(79),r(13),r(33),r(34);var n={name:"DataDownloadButton",components:{},props:["type","filterParams","selectedFilterDimension"],data:function(){return{}},computed:{filePath:function(){return"https://data.humdata.org/dataset/ukraine-private-sector-donations-tracker"},isProd:function(){return this.$store.state.isProd}},methods:{downloadAllData:function(){this.$mixpanelTrackLink(this.filePath,"download all data"),window.open(this.filePath)},downloadFilteredData:function(t){var param="*"===this.filterParams[this.selectedFilterDimension]?null:this.filterParams[this.selectedFilterDimension],e=this.selectedFilterDimension.split("#")[1];"flows"===this.type&&e.includes("org")&&(e="org+id");var r="off"!==this.filterParams.humanitarian,n="off"!==this.filterParams.strict,o="flows"===this.type?this.proxyLinkFlows(param,e,r,n):this.proxyLinkTransactions(param,e,r,n);this.$mixpanelTrackLink(o,"download filtered data"),window.open(o)},checkToken:function(t,e,r){if(!e.includes(t))throw new Error("Bad "+r+": "+t+". Expected one of "+String(e))},proxyLinkTransactions:function(t,e,r,n){var o={url:"https://ocha-dap.github.io/hdx-scraper-iati-viz/transactions.csv"};return null!==t&&(this.checkToken(e,["org+id","org+name+receiver","sector"],"selection type"),o.filter01="select",o["select-query01-01"]=e+"="+t),r&&(o.filter02="select",o["select-query02-01"]="indicator+humanitarian=1"),n&&(o.filter03="select",o["select-query03-01"]="indicator+strict=1"),o.filter04="count",o["count-tags04"]="date+month,org+id,org+name,org+type,sector,org+name+receiver,activity+code,x_transaction_type",o["count-header04-01"]="Net money (USD)",o["count-type04-01"]="sum",o["count-pattern04-01"]=o["count-column04-01"]="#value+net",o["count-header04-02"]="Total money (USD)",o["count-type04-02"]="sum",o["count-pattern04-02"]=o["count-column04-02"]="#value+total",o.filter05="select",o["select-query05-01"]="value>0",o.filter06="sort",o["sort-tags06"]="date+month,org+name,x_transaction_type,value+total","https://proxy.hxlstandard.org/data?"+new URLSearchParams(o).toString()},proxyLinkFlows:function(t,e,r){var n={url:"https://ocha-dap.github.io/hdx-scraper-iati-viz/flows.csv"};return null!==t&&(n.filter01="select",n["select-query01-01"]="org+id+reporting="+t),e&&(n.filter02="select",n["select-query02-01"]="indicator+humanitarian=1"),r&&(n.filter03="select",n["select-query03-01"]="indicator+strict=1"),n.filter04="count",n["count-tags04"]="org+id+reporting,org+name+reporting,org+reporting+type,org+id+provider,org+name+provider,org+provider+type,org+id+receiver,org+name+receiver,org+receiver+type,x_transaction_direction",n["count-header04-01"]="Total money (USD)",n["count-type04-01"]="sum",n["count-pattern04-01"]=n["count-column04-01"]="#value+total",n.filter05="select",n["select-query05-01"]="value>0",n.filter06="sort",n["sort-tags06"]="value+total",n["sort-reverse06"]="on","https://proxy.hxlstandard.org/data?"+new URLSearchParams(n).toString()}}},o=r(41),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-dropdown",{staticClass:"download-button",attrs:{id:"downloadDropdown",text:"Download Data",block:"",variant:"outline-dark"},on:{click:function(e){return t.onClick(e)}}},[r("b-dropdown-item",{on:{click:function(e){return t.downloadAllData()}}},[t._v("\n      View data on HDX\n    ")])],1)],1)}),[],!1,null,null,null);e.a=component.exports},345:function(t,e,r){var content=r(358);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(40).default)("3bd18f02",content,!0,{sourceMap:!1})},346:function(t,e,r){var content=r(360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(40).default)("7a369ad4",content,!0,{sourceMap:!1})},347:function(t,e,r){var content=r(362);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(40).default)("2e107364",content,!0,{sourceMap:!1})},357:function(t,e,r){"use strict";r(345)},358:function(t,e,r){var n=r(39)(!1);n.push([t.i,".doughnut-chart[data-v-79283961]{height:180px;width:180px}",""]),t.exports=n},359:function(t,e,r){"use strict";r(346)},360:function(t,e,r){var n=r(39)(!1);n.push([t.i,".summary-table{font-size:14px}.summary-table thead{display:none}.summary-table td{padding:0 8px 0 0;vertical-align:middle}.summary-table td:last-child{padding-right:0;text-align:right}.color-key{height:12px;width:12px}.scroll-list-container{position:relative}.scroll-list{height:170px;width:273px;overflow-y:scroll}.scroll-list .list-breakdown{color:#888;padding-left:10px}.scroll-list-overlay{background:#fff;background:linear-gradient(180deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.8));bottom:0;height:30px;pointer-events:none;position:absolute;width:100%}.scroll-list-footer{display:flex;font-size:14px;justify-content:space-between}",""]),t.exports=n},361:function(t,e,r){"use strict";r(347)},362:function(t,e,r){var n=r(39)(!1);n.push([t.i,'abbr[data-original-title],abbr[title]{text-decoration:none;cursor:auto}.key-figure-container{border-bottom:1px solid #ccc;display:flex;flex-direction:row;margin-bottom:28px;padding:20px 0}.key-figure-num{font-family:"Gotham Book",sans-serif;font-size:42px;line-height:49px}.key-figure-num,.uppercase-format{text-transform:uppercase}@media only screen and (max-width:992px){.iati-viz h2.header .badge.info-icon.badge-pill{width:20px}}',""]),t.exports=n},367:function(t,e,r){"use strict";r.r(e);r(3),r(2),r(4),r(5);var n=r(21),o=r(0),l=r(22),c=r(20),d=(r(63),r(340),r(43),r(13),r(42),r(8),r(1),r(80),r(10),r(192),r(191),r(78),r(79),r(74)),h=r.n(d),f=r(342),m=r.n(f),v=r(332),x=r.n(v),y=r(53),D=r(356),k=r.n(D),_={name:"SummaryDoughnutChart",components:{DoughnutChart:{extends:r(363).a,props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)},watch:{data:function(){this.renderChart(this.data,this.options)}}}},props:["doughnutChartData","colors"],data:function(){return{}},computed:{plugins:function(){return{ChartDataLabels:k.a}},doughnutChartOptions:function(){return{maintainAspectRatio:!1,legend:!1,plugins:{datalabels:{color:function(t){var e=t.dataIndex;return"#EEE"===t.dataset.backgroundColor[e]?"#000":"#FFF"},formatter:function(t,e){return t+"%"}}},tooltips:{callbacks:{label:function(t,data){return data.labels[t.index]+": "+data.datasets[0].data[t.index]+"%"}}}}},chartData:function(){return{datasets:[{borderWidth:0,backgroundColor:this.colors,data:this.doughnutChartData.values}],labels:this.doughnutChartData.labels}}}},w=(r(357),r(41)),F=Object(w.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("DoughnutChart",{staticClass:"doughnut-chart",attrs:{data:t.chartData,options:t.doughnutChartOptions}})],1)}),[],!1,null,"79283961",null).exports,C=r(337),O=r(338),P={name:"RankedList",components:{},filters:{truncate:function(text,t,e){return text.length>t?text.substring(0,t)+e:text}},props:["items","colors","lastUpdatedDate"],data:function(){return{tableFields:[{key:"color",label:"Color"},"item","value"]}}},S=(r(359),Object(w.a)(P,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"scroll-list-container"},[r("div",{staticClass:"scroll-list mt-3"},[r("b-table",{staticClass:"summary-table mb-0",attrs:{borderless:"",small:"",fields:t.tableFields,items:t.items},scopedSlots:t._u([{key:"cell(color)",fn:function(data){return[r("div",{staticClass:"color-key",style:data.index<5?"background-color: "+t.colors[data.index]:"background-color: "+t.colors[5]})]}},{key:"cell(item)",fn:function(data){return[r("abbr",{attrs:{title:data.item.item}},[t._v(t._s(t._f("truncate")(data.item.item,20,"...")))])]}}])})],1),t._v(" "),r("div",{staticClass:"scroll-list-overlay"})]),t._v(" "),r("div",{staticClass:"scroll-list-footer mt-2"},[r("span",{staticClass:"small text-muted"},[t._v(t._s(t.lastUpdatedDate)+" | CBi")]),t._v(" "),r("span",[t._v("(USD)")])])])}),[],!1,null,null,null).exports);function N(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var E={components:{DoughnutChart:F,DownloadDataButton:O.a,SankeyChart:C.a,RankedList:S},data:function(){return{initFilterOption:"#org+id",selectedFilterDimension:"#org+id",selectedFilter:"*",selectedFilterLabel:"",filterOptions:[{text:"By Private Sector Donor",value:"#org+id",label:" private sector donors"},{text:"By Humanitarian Recipient",value:"#org+id+receiver",label:" humanitarian recipients"}],selectedRankingFilter:"#org+id+receiver",rankingFilter:[[{text:"By Humanitarian Recipient",value:"#org+id+receiver"},{text:"By Private Sector Donor",value:"#org+id"}],[{text:"By Private Sector Donor",value:"#org+id"},{text:"By Humanitarian Recipient",value:"#org+id+receiver"}],[{text:"By Humanitarian Recipient",value:"#org+id+receiver"},{text:"By Publishing Org",value:"#org+id"}]],commitmentColors:["#007CE1","#3393E2","#65ABE3","#98C3E4","#CADAE5","#EEE"],spendingColors:["#C6382E","#DC4E44","#F2645A","#F0948F","#EDC4C3","#EEE"],months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],fullData:[],filteredData:[],filterParams:{},flowsActivityCount:0,fullFlowsData:[],filteredFlowsData:[],filterFlowsParams:{},reporterNameIndex:[],receiverNameIndex:[],lastUpdatedDate:"",skippedTransactions:0,loaded:!1}},head:function(){return{title:y.a.head.title+": Dashboard"}},computed:{isBusy:function(){return 0===this.fullData.length},tooltips:function(){return this.$store.state.tooltips},isProd:function(){return this.$store.state.isProd},reportingOrgs:function(){var t=this,e=Object(c.a)(new Set(this.fullData.map((function(t){return t["#org+id"]}))));return e=e.map((function(e){var r={};return r.value=e,r.text=t.getOrgName(e),r})),this.populateSelect(e,"All private sector donors")},receivers:function(){var t=this,e=Object(c.a)(new Set(this.fullData.map((function(t){return t["#org+id+receiver"]}))));return e=e.map((function(e){var r={};return r.value=e,r.text=t.getReceiverName(e),r})),this.populateSelect(e,"All humanitarian recipients")},sectors:function(){var t=Object(c.a)(new Set(this.fullData.map((function(t){return t["#sector"]}))));return t=t.map((function(t){var e={};return e.value=t,e.text=t,e})),this.populateSelect(t,"All sectors")},commitments:function(){return this.filteredData.filter((function(t){return"commitments"===t["#x_transaction_type"]}))},spending:function(){return this.filteredData.filter((function(t){return"spending"===t["#x_transaction_type"]}))},commitmentsRanked:function(){return this.getRankedList(this.commitments)},spendingRanked:function(){return this.getRankedList(this.spending)},donorCount:function(){return Object(c.a)(new Set(this.fullData.map((function(t){return t["#org+id"]})))).length},amountTotal:function(){return this.filteredData.reduce((function(t,e){return t+e["#value+total"]}),0)},recipientCount:function(){return Object(c.a)(new Set(this.fullData.map((function(t){return t["#org+id+receiver"]})))).length},activityCount:function(){return Object(c.a)(new Set(this.filteredData.map((function(t){return t["#activity+code"]})))).length},totalCommitments:function(){return this.getTotal(this.commitments)},totalSpending:function(){return this.getTotal(this.spending)},tagPattern:function(){return"#org+id"===this.selectedFilterDimension&&"*"!==this.selectedFilter?"#value+total":"#value+net"},commitmentsTable:function(){return this.populateList(this.commitmentsRanked)},spendingTable:function(){return this.populateList(this.spendingRanked)},commitmentsDonut:function(){return this.populateDonut(this.totalCommitments,this.commitmentsRanked)},spendingDonut:function(){return this.populateDonut(this.totalSpending,this.spendingRanked)}},mounted:function(){var t=this;this.toggleBodyClass("addClass","index"),this.filterParams={humanitarian:"off",strict:"off",selectedFilter:this.selectedFilterDimension},this.filterParams["#org+id"]="*",this.filterParams["#sector"]="*",this.filterParams["#org+id+receiver"]="*",this.filterParams["#org+id+reporting"]="*";h.a.all([h.a.get("https://raw.githubusercontent.com/OCHA-DAP/hdx-scraper-cbi-viz/gh-pages/ukraine/reporting_orgs.json"),h.a.get("https://raw.githubusercontent.com/OCHA-DAP/hdx-scraper-cbi-viz/gh-pages/ukraine/receiver_orgs.json")]).then(h.a.spread((function(){var e=arguments.length<=0?void 0:arguments[0],r=arguments.length<=1?void 0:arguments[1];t.reporterNameIndex=e.data.data,t.receiverNameIndex=r.data.data,t.$store.commit("setReporterNameIndex",e.data.data),t.$store.commit("setReceiverNameIndex",r.data.data),t.selectedFilterLabel=t.reporterNameIndex.length+" private sector donors",t.$nextTick((function(){"org"in t.$route.query&&(t.filterParams["#org+id"]=t.$route.query.org,t.filterParams["#org+id+reporting"]=t.$route.query.org,t.querySetup("#org+id")),"receiver"in t.$route.query&&(t.filterParams["#org+id+receiver"]=t.$route.query.receiver,t.querySetup("#org+id+receiver")),"sector"in t.$route.query&&(t.filterParams["#sector"]=t.$route.query.sector,t.querySetup("#sector")),"humanitarian"in t.$route.query&&(t.filterParams.humanitarian=t.$route.query.humanitarian),"strict"in t.$route.query&&(t.filterParams.strict=t.$route.query.strict),t.loadData()}))})))},updated:function(){this.createStickyHeader()},destroyed:function(){this.toggleBodyClass("removeClass","index")},methods:{loadData:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=y.a.dev?"":"/viz-ukraine-ps-tracker/",e.next=3,h.a.get(r+"tooltips.csv").then((function(e){return m()().fromString(e.data).then((function(e){t.$store.commit("setTooltips",e)}))}));case 3:return e.next=5,h.a.get("https://raw.githubusercontent.com/OCHA-DAP/hdx-scraper-cbi-viz/gh-pages/ukraine/transactions.json").then((function(e){var r=e.data.metadata,n=new Date(r["#date+run"]),o=t.months[n.getMonth()]+" "+n.getDate()+", "+n.getFullYear();t.lastUpdatedDate=o,t.fullData=e.data.data,t.filteredData=t.filterData()}));case 5:return e.next=7,h.a.get("https://raw.githubusercontent.com/OCHA-DAP/hdx-scraper-cbi-viz/gh-pages/ukraine/flows.json").then((function(e){t.fullFlowsData=e.data.data,t.updateFilteredFlowsData()}));case 7:case"end":return e.stop()}}),e)})))()},urlQuery:function(){var t={};return"*"!==this.filterParams["#org+id"]&&(t.org=this.filterParams["#org+id"]),"*"!==this.filterParams["#org+id+receiver"]&&(t.receiver=this.filterParams["#org+id+receiver"]),"*"!==this.filterParams["#sector"]&&(t.sector=this.filterParams["#sector"]),"off"!==this.filterParams.humanitarian&&(t.humanitarian=this.filterParams.humanitarian),"off"!==this.filterParams.strict&&(t.strict=this.filterParams.strict),t},updateRouter:function(){this.$router.push({name:"index",query:this.urlQuery()})},querySetup:function(t){this.initFilterOption=t,this.selectedFilterDimension=t,this.selectedFilter=this.filterParams[t],this.selectedFilterLabel="#org+id"===t?this.getOrgName(this.selectedFilter):this.getReceiverName(this.selectedFilter);var e=this.rankingFilter[this.getFilterID(t)];this.selectedRankingFilter=e[0].value},numberFormatter:function(t){return 0===t?"0":t?x()(t).format("0,0"):""},currencyFormatter:function(t){return x()(t).format("$0.0a")},onFilterOptionSelect:function(t){this.selectedFilterDimension=t;var e=this.rankingFilter[this.getFilterID(t)];this.selectedRankingFilter=e[0].value,this.filterParams.selectedFilter=this.selectedFilterDimension,this.resetParams(),this.setDefaultFilterLabel(t),this.updateFilteredData(),this.updateFilteredFlowsData(),this.$mixpanelTrackAction("change content","Dashboard Breakdown radio filter",t)},onSelect:function(t){console.log("on select",t),this.selectedFilter=t,this.filterParams[this.selectedFilterDimension]=t,this.filterParams["#org+id+reporting"]="#org+id"===this.selectedFilterDimension?t:"*",this.filterParams["#org+id+receiver"]="#org+id+receiver"===this.selectedFilterDimension?t:"*","*"!==t?this.selectedFilterLabel="#org+id"===this.selectedFilterDimension?this.getOrgName(t):this.getReceiverName(t):this.setDefaultFilterLabel(this.selectedFilterDimension),this.updateFilteredData(),this.updateFilteredFlowsData(),this.$mixpanelTrackAction("change content","Dashboard Breakdown select filter",t)},onToggle:function(t){this.filterParams[t.target.parentElement.id]=t.target.value,this.updateFilteredData(),this.$mixpanelTrackAction("change content","Dashboard Breakdown toggle filter",t.target.parentElement.id+" "+t.target.value)},onQuickFilter:function(t){t.preventDefault(),this.onSelect(t.target.id)},onSelectRanking:function(t){this.$mixpanelTrackAction("change content","Dashboard Ranking select filter",t)},onSelectTimeline:function(t){},setDefaultFilterLabel:function(t){var e=this.filterOptions.filter((function(option){return option.value===t})),r="#org+id"===t?this.donorCount:this.recipientCount;this.selectedFilterLabel=r+" "+e[0].label.toLowerCase()},updateFilteredData:function(){this.filteredData=this.filterData(),this.updateRouter()},filterData:function(){var t=this.fullData,e=this.filterParams,r=this.selectedFilterDimension;return e[r]&&"*"!==e[r]&&(t=t.filter((function(t){return t[r]===e[r]}))),t},updateFilteredFlowsData:function(){this.filteredFlowsData=this.filterFlowsData(),this.updateRouter()},filterFlowsData:function(){var t=this.fullFlowsData.map((function(i){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?N(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):N(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},i)})),e=this.filterParams,r="#org+id"===this.selectedFilterDimension?"#org+id+reporting":"#org+id+receiver";return"*"!==e[r]&&(t=t.filter((function(t){return t[r]===e[r]}))),"off"!==e.humanitarian&&"off"!==e.strict||(t=this.aggregateFlows(t,r)),this.flowsActivityCount=t.length,t=this.formatData(t)},aggregateFlows:function(data,t){return data.reduce((function(e,r){var pattern="#org+id+reporting"===t?"#org+name+receiver":"#org+name+reporting",n=e.find((function(a){return a[t]===r[t]&&a[pattern]===r[pattern]}));return n?n["#value+total"]+=r["#value+total"]:e.push(r),e}),[])},partitionData:function(data){var t=data.reduce((function(t,element){return t["incoming"===element["#x_transaction_direction"]?0:1].push(element),t}),[[],[]]),e=Object(n.a)(t,2),r=e[0],o=e[1];return r=this.formatData(r),o=this.formatData(o),r.concat(o)},formatData:function(t){return t.sort((function(a,b){return a["#value+total"]>b["#value+total"]?-1:1})).slice(0,10)},populateSelect:function(data,t){var e=data.reduce((function(t,e){return t.push({value:e.value,text:e.text}),t}),[]).sort((function(a,b){return a.text.toLowerCase()<b.text.toLowerCase()?-1:1}));return e.unshift({value:"*",text:t}),e},populateList:function(data){var t=this;return data.reduce((function(e,r){return e.push({item:r[0],value:"$"+t.numberFormatter(r[1])}),e}),[]).sort((function(a,b){return b.value-a.value}))},populateDonut:function(t,e){var r=e.length>5?e.slice(0,5):e,n=r.reduce((function(t,e){return t+e[1]}),0);return n<t&&r.push(["Other or unspecified",t-n]),{values:r.reduce((function(e,r){var n=Number((r[1]/t*100).toFixed(1));return e.push(n),e}),[]),labels:r.map((function(t){return t[0]}))}},getOrgName:function(t){return this.reporterNameIndex.filter((function(e){return e["#org+id+reporting"]===t}))[0]["#org+name+reporting"]},getOrgID:function(t){return this.reporterNameIndex.filter((function(e){return e["#org+name+reporting"]===t}))[0]["#org+id+reporting"]},getReceiverName:function(t){return this.receiverNameIndex.filter((function(e){return e["#org+id+receiver"]===t}))[0]["#org+name+receiver"]},getReceiverID:function(t){return this.receiverNameIndex.filter((function(e){return e["#org+name+receiver"]===t}))[0]["#org+id+receiver"]},getCumulativeSeries:function(data){var t=0;return data.reduce((function(e,r){return t+=r,e.push(t),e}),[])},getTotal:function(data){var t=this,e=data.map((function(e){return Number(e[t.tagPattern])}));return e.length>0?e.reduce((function(t,e){return t+e})):0},getRankedList:function(data){var t=this,e=this.selectedRankingFilter,r={},n=Object.entries(data.reduce((function(n,o,l){var c=Number(o[t.tagPattern]),d="#org+id"===e?t.getOrgName(o[e]):t.getReceiverName(o[e]);return o[e].includes("Unspecified")?r[d]=r[d]+c||c:n[d]=n[d]+c||c,n}),{})).sort((function(a,b){return b[1]-a[1]})),o=Object.entries(r)[0];return void 0!==o&&("(Unspecified recipient)"===o[0]&&(o[0]="No recipient specified"),n.push(o)),n},getFilterID:function(){return"#sector"===this.selectedFilterDimension?2:"#org+id+receiver"===this.selectedFilterDimension?1:0},resetParams:function(){this.filterParams["#org+id+reporting"]="*",this.filterParams["#org+id+receiver"]="*",this.filterParams["#org+id"]="*",this.filterParams["#sector"]="*",this.selectedFilter="*"},toggleBodyClass:function(t,e){var r=document.body;"addClass"===t?r.classList.add(e):r.classList.remove(e)},createStickyHeader:function(){var t=document.getElementsByClassName("header-sticky")[0];this.loaded||void 0===t||(this.loaded=!0,new IntersectionObserver((function(t){var e=Object(n.a)(t,1)[0];return e.target.classList.toggle("is-stuck",e.intersectionRatio<1)}),{threshold:[1]}).observe(t))},scrollTo:function(t){var e=this.$refs[t].offsetTop-100;window.scrollTo(0,e)}}},L=E,R=(r(361),Object(w.a)(L,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.isBusy?[r("div",{staticClass:"custom-loader text-center text-secondary my-5"},[r("b-spinner",{staticClass:"align-middle"}),t._v(" "),r("strong",[t._v("Loading...")])],1)]:t._e(),t._v(" "),t.isBusy?t._e():[r("hr",{staticClass:"mt-4 mb-0"}),t._v(" "),r("div",{staticClass:"header-sticky"},[r("div",{staticClass:"container"},[r("h2",[r("b",[t._v(t._s(t.numberFormatter(t.activityCount)))]),t._v(" "),t.activityCount>1||0===t.activityCount?r("span",[t._v("donations")]):r("span",[t._v("donation")]),t._v(" "),"#org+id"===t.selectedFilterDimension?r("span",[t._v("by")]):r("span",[t._v("to")]),t._v(" "),r("b",[t._v(t._s(t.selectedFilterLabel))]),t._v(" totalling "),r("b",[r("span",{staticClass:"uppercase-format"},[t._v(t._s(t.currencyFormatter(t.amountTotal)))])])]),t._v(" "),r("a",{staticClass:"anchor",on:{click:function(e){return t.scrollTo("filters")}}},[t._v("Customize filters")])])]),t._v(" "),r("hr",{staticClass:"mt-0 mb-4"}),t._v(" "),r("b-container",[r("b-row",{ref:"filters"},[r("b-col",{attrs:{cols:"12",lg:"7"}},[r("b-form-group",{attrs:{label:"Filter:"}},[r("b-form-radio",{attrs:{name:"filterOptionGroup",value:t.filterOptions[0].value},on:{change:t.onFilterOptionSelect},model:{value:t.initFilterOption,callback:function(e){t.initFilterOption=e},expression:"initFilterOption"}},[t._v("\n              "+t._s(t.filterOptions[0].text)+"\n            ")]),t._v(" "),r("br"),t._v(" "),r("b-form-radio",{attrs:{name:"filterOptionGroup",value:t.filterOptions[1].value},on:{change:t.onFilterOptionSelect},model:{value:t.initFilterOption,callback:function(e){t.initFilterOption=e},expression:"initFilterOption"}},[t._v("\n              "+t._s(t.filterOptions[1].text)+"\n            ")]),t._v(" "),r("br")],1),t._v(" "),"#org+id"===t.selectedFilterDimension?r("v-select",{staticClass:"filter-select filter-select-org mb-3",attrs:{value:t.selectedFilter,options:t.reportingOrgs,"get-option-key":function(option){return option.value},"get-option-label":function(option){return option.text},reduce:function(option){return option.value}},on:{input:t.onSelect},scopedSlots:t._u([{key:"search",fn:function(e){var n=e.attributes,o=e.events;return[r("input",t._g(t._b({staticClass:"vs__search",attrs:{placeholder:"Type donor name here"}},"input",n,!1),o))]}}],null,!1,563670401)}):t._e(),t._v(" "),"#org+id+receiver"===t.selectedFilterDimension?r("v-select",{staticClass:"filter-select filter-select-receiver mb-3",attrs:{value:t.selectedFilter,options:t.receivers,"get-option-key":function(option){return option.value},"get-option-label":function(option){return option.text},reduce:function(option){return option.value}},on:{input:t.onSelect},scopedSlots:t._u([{key:"search",fn:function(e){var n=e.attributes,o=e.events;return[r("input",t._g(t._b({staticClass:"vs__search",attrs:{placeholder:"Type humanitarian recipient name here"}},"input",n,!1),o))]}}],null,!1,1810304885)}):t._e()],1),t._v(" "),r("b-col",[r("b-row",[r("b-col",{staticClass:"mt-3",attrs:{cols:"12",md:"8"}},[r("DownloadDataButton",{attrs:{type:"transactions","filter-params":t.filterParams,"selected-filter-dimension":t.selectedFilterDimension}})],1)],1)],1)],1),t._v(" "),r("hr",{staticClass:"mt-4 mb-0"})],1),t._v(" "),r("b-container",[r("h2",{staticClass:"header"},[t._v("\n        Overview of Donations\n      ")]),t._v(" "),r("b-row",[r("b-col",{attrs:{cols:"12",lg:"6"}},[r("b-form-select",{staticClass:"form-select px-2 ml-3 mb-3",attrs:{options:t.rankingFilter[t.getFilterID(t.selectedFilterDimension)]},on:{input:t.onSelectRanking},model:{value:t.selectedRankingFilter,callback:function(e){t.selectedRankingFilter=e},expression:"selectedRankingFilter"}})],1)],1),t._v(" "),r("b-row",[r("b-col",[r("div",{staticClass:"key-figure-container"},[r("DoughnutChart",{attrs:{"doughnut-chart-data":t.spendingDonut,colors:t.spendingColors}}),t._v(" "),r("div",{staticClass:"key-figure-breakdown w-lg-100 ml-lg-4 mr-lg-5"},[r("h3",[t._v("\n                Total Paid Donations (USD)\n              ")]),t._v(" "),r("div",{staticClass:"key-figure-num"},[t._v("\n                "+t._s(t.currencyFormatter(t.totalSpending))+"\n              ")]),t._v(" "),r("RankedList",{attrs:{items:t.spendingTable,colors:t.spendingColors,"last-updated-date":t.lastUpdatedDate}})],1)],1)]),t._v(" "),r("b-col",[r("div",{staticClass:"key-figure-container"},[r("DoughnutChart",{attrs:{"doughnut-chart-data":t.commitmentsDonut,colors:t.commitmentColors}}),t._v(" "),r("div",{staticClass:"key-figure-breakdown w-lg-100 mx-lg-4"},[r("h3",[t._v("\n                Total Pledged Donations (USD)\n              ")]),t._v(" "),r("div",{staticClass:"key-figure-num"},[t._v("\n                "+t._s(t.currencyFormatter(t.totalCommitments))+"\n              ")]),t._v(" "),r("RankedList",{attrs:{items:t.commitmentsTable,colors:t.commitmentColors,"last-updated-date":t.lastUpdatedDate}})],1)],1)])],1),t._v(" "),r("h2",{staticClass:"header mt-3"},[t._v("\n        Donation Flows\n      ")]),t._v(" "),r("div",{staticClass:"footnote text-muted"},[t._v("\n        Please note that flows show both paid and pledged transactions and may not show all donations to a given humanitarian recipient.\n      ")]),t._v(" "),r("SankeyChart",{attrs:{items:t.filteredFlowsData,params:t.filterParams}}),t._v(" "),r("div",{staticClass:"small text-muted mt-5 ml-4"},[t._v("\n        "+t._s(t.lastUpdatedDate)+" | CBi\n      ")]),t._v(" "),r("hr")],1)]],2)}),[],!1,null,null,null));e.default=R.exports}}]);