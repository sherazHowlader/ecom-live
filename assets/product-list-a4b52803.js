import{_ as h,m as u,a as f,c as i,b as l,F as n,r,h as t,g as c,o as a,t as e,w as p,d as v,e as _,f as m,i as g}from"./index-5a712ce4.js";const b={name:"product-list",methods:{...u({addToCart:"cart/addToCart",loadCategoryWiseProduct:"product/categoryProduct"})},computed:{...f({category_products:"product/category_products"})},mounted(){this.loadCategoryWiseProduct(this.$route.params.slug)}},k=t('<div class="breadcrumbs"><div class="container"><div class="row align-items-center"><div class="col-lg-6 col-md-6 col-12"><div class="breadcrumbs-content"><h1 class="page-title">Shop List</h1></div></div><div class="col-lg-6 col-md-6 col-12"><ul class="breadcrumb-nav"><li><a href="index.html"><i class="lni lni-home"></i> Home</a></li><li><a href="index.html">Shop</a></li><li>Shop</li></ul></div></div></div></div>',1),y={class:"product-grids section"},x={class:"container"},C={class:"row"},D=l("div",{class:"col-lg-3 col-12"},[l("div",{class:"product-sidebar"},[l("div",{class:"single-widget search"},[l("h3",null,"Search Product"),l("form",{action:"#"},[l("input",{type:"text",placeholder:"Search Here..."}),l("button",{type:"submit"},[l("i",{class:"lni lni-search-alt"})])])]),l("div",{class:"single-widget"},[l("h3",null,"All Categories"),l("ul",{class:"list"},[l("li",null,[l("a",{href:"product-grids.html"},"Computers & Accessories "),l("span",null,"(1138)")]),l("li",null,[l("a",{href:"product-grids.html"},"Smartphones & Tablets"),l("span",null,"(2356)")]),l("li",null,[l("a",{href:"product-grids.html"},"TV, Video & Audio"),l("span",null,"(420)")]),l("li",null,[l("a",{href:"product-grids.html"},"Cameras, Photo & Video"),l("span",null,"(874)")]),l("li",null,[l("a",{href:"product-grids.html"},"Headphones"),l("span",null,"(1239)")]),l("li",null,[l("a",{href:"product-grids.html"},"Wearable Electronics"),l("span",null,"(340)")]),l("li",null,[l("a",{href:"product-grids.html"},"Printers & Ink"),l("span",null,"(512)")])])]),l("div",{class:"single-widget range"},[l("h3",null,"Price Range"),l("input",{type:"range",class:"form-range",name:"range",step:"1",min:"100",max:"10000",value:"10",onchange:"rangePrimary.value=value"}),l("div",{class:"range-inner"},[l("label",null,"$"),l("input",{type:"text",id:"rangePrimary",placeholder:"100"})])]),l("div",{class:"single-widget condition"},[l("h3",null,"Filter by Price"),l("div",{class:"form-check"},[l("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault1"}),l("label",{class:"form-check-label",for:"flexCheckDefault1"}," $50 - $100L (208) ")]),l("div",{class:"form-check"},[l("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault2"}),l("label",{class:"form-check-label",for:"flexCheckDefault2"}," $100L - $500 (311) ")]),l("div",{class:"form-check"},[l("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault3"}),l("label",{class:"form-check-label",for:"flexCheckDefault3"}," $500 - $1,000 (485) ")]),l("div",{class:"form-check"},[l("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault4"}),l("label",{class:"form-check-label",for:"flexCheckDefault4"}," $1,000 - $5,000 (213) ")])]),l("div",{class:"single-widget condition"},[l("h3",null,"Filter by Brand"),l("div",{class:"form-check"},[l("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault11"}),l("label",{class:"form-check-label",for:"flexCheckDefault11"}," Apple (254) ")]),l("div",{class:"form-check"},[l("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault22"}),l("label",{class:"form-check-label",for:"flexCheckDefault22"}," Bosh (39) ")]),l("div",{class:"form-check"},[l("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault33"}),l("label",{class:"form-check-label",for:"flexCheckDefault33"}," Canon Inc. (128) ")]),l("div",{class:"form-check"},[l("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault44"}),l("label",{class:"form-check-label",for:"flexCheckDefault44"}," Dell (310) ")]),l("div",{class:"form-check"},[l("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault55"}),l("label",{class:"form-check-label",for:"flexCheckDefault55"}," Hewlett-Packard (42) ")]),l("div",{class:"form-check"},[l("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault66"}),l("label",{class:"form-check-label",for:"flexCheckDefault66"}," Hitachi (217) ")]),l("div",{class:"form-check"},[l("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault77"}),l("label",{class:"form-check-label",for:"flexCheckDefault77"}," LG Electronics (310) ")]),l("div",{class:"form-check"},[l("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault88"}),l("label",{class:"form-check-label",for:"flexCheckDefault88"}," Panasonic (74) ")])])])],-1),w={class:"col-lg-9 col-12"},P={class:"product-grids-head"},$=l("div",{class:"product-grid-topbar"},[l("div",{class:"row align-items-center"},[l("div",{class:"col-lg-7 col-md-8 col-12"},[l("div",{class:"product-sorting"},[l("label",{for:"sorting"},"Sort by:"),l("select",{class:"form-control",id:"sorting"},[l("option",null,"Popularity"),l("option",null,"Low - High Price"),l("option",null,"High - Low Price"),l("option",null,"Average Rating"),l("option",null,"A - Z Order"),l("option",null,"Z - A Order")]),l("h3",{class:"total-show-product"},[c("Showing: "),l("span",null,"1 - 12 items")])])]),l("div",{class:"col-lg-5 col-md-4 col-12"},[l("nav",null,[l("div",{class:"nav nav-tabs",id:"nav-tab",role:"tablist"},[l("button",{class:"nav-link",id:"nav-grid-tab","data-bs-toggle":"tab","data-bs-target":"#nav-grid",type:"button",role:"tab","aria-controls":"nav-grid","aria-selected":"true"},[l("i",{class:"lni lni-grid-alt"})]),l("button",{class:"nav-link active",id:"nav-list-tab","data-bs-toggle":"tab","data-bs-target":"#nav-list",type:"button",role:"tab","aria-controls":"nav-list","aria-selected":"false"},[l("i",{class:"lni lni-list"})])])])])])],-1),S={class:"tab-content",id:"nav-tabContent"},j={class:"tab-pane fade",id:"nav-grid",role:"tabpanel","aria-labelledby":"nav-grid-tab"},A={class:"row"},L={class:"single-product"},V={class:"product-image"},H=["src"],F=l("div",{class:"button"},[l("button",{type:"submit",class:"btn"},[l("i",{class:"lni lni-cart"}),c(" Add to Cart ")])],-1),T={class:"product-info"},B={class:"category"},N={class:"title"},R=["href"],E=t('<ul class="review"><li><i class="lni lni-star-filled"></i></li><li><i class="lni lni-star-filled"></i></li><li><i class="lni lni-star-filled"></i></li><li><i class="lni lni-star-filled"></i></li><li><i class="lni lni-star"></i></li><li><span>4.0 Review(s)</span></li></ul>',1),W={class:"price"},G={key:0},I={class:"discount-price"},O={key:1},Z=t('<div class="row"><div class="col-12"><div class="pagination left"><ul class="pagination-list"><li><a href="javascript:void(0)">1</a></li><li class="active"><a href="javascript:void(0)">2</a></li><li><a href="javascript:void(0)">3</a></li><li><a href="javascript:void(0)">4</a></li><li><a href="javascript:void(0)"><i class="lni lni-chevron-right"></i></a></li></ul></div></div></div>',1),M={class:"tab-pane show active fade",id:"nav-list",role:"tabpanel","aria-labelledby":"nav-list-tab"},q={class:"row"},z=["onSubmit"],J={class:"single-product"},K={class:"product-image"},Q=["src"],U={key:0,class:"sale-tag"},X=l("div",{class:"button"},[l("button",{type:"submit",class:"btn"},[l("i",{class:"lni lni-cart"}),c(" Add to Cart ")])],-1),Y={class:"product-info"},ll={class:"category"},sl={class:"title"},el=t('<ul class="review"><li><i class="lni lni-star-filled"></i></li><li><i class="lni lni-star-filled"></i></li><li><i class="lni lni-star-filled"></i></li><li><i class="lni lni-star-filled"></i></li><li><i class="lni lni-star"></i></li><li><span>4.0 Review(s)</span></li></ul>',1),il={class:"price"},al={key:0},cl={class:"discount-price"},tl={key:1},ol=t('<div class="row"><div class="col-12"><div class="pagination left"><ul class="pagination-list"><li><a href="javascript:void(0)">1</a></li><li class="active"><a href="javascript:void(0)">2</a></li><li><a href="javascript:void(0)">3</a></li><li><a href="javascript:void(0)">4</a></li><li><a href="javascript:void(0)"><i class="lni lni-chevron-right"></i></a></li></ul></div></div></div>',1);function nl(o,rl,dl,hl,ul,fl){const d=g("router-link");return a(),i(n,null,[k,l("section",y,[l("div",x,[l("div",C,[D,l("div",w,[l("div",P,[$,l("div",S,[l("div",j,[l("div",A,[(a(!0),i(n,null,r(o.category_products,s=>(a(),i("div",{class:"col-lg-4 col-md-6 col-12",key:s.id},[l("div",L,[l("div",V,[l("img",{src:s.image,alt:"#"},null,8,H),F]),l("div",T,[l("span",B,e(s.category_name)+" ff",1),l("h4",N,[l("a",{href:"/product/"+s.slug},e(s.name),9,R)]),E,l("div",W,[s.discount_price?(a(),i("span",G,[c(" ৳ "+e(s.discount_price)+" ",1),l("span",I," ৳ "+e(s.regular_price),1)])):(a(),i("span",O," ৳ "+e(s.regular_price),1))])])])]))),128))]),Z]),l("div",M,[l("div",q,[(a(!0),i(n,null,r(o.category_products,s=>(a(),i("div",{class:"col-lg-3 col-md-6 col-12",key:s.id},[l("form",{onSubmit:p(pl=>o.addToCart(s),["prevent"])},[l("div",J,[l("div",K,[l("img",{src:s.image,alt:"#"},null,8,Q),s.discount_price?(a(),i("span",U," -"+e(parseFloat((s.regular_price-s.discount_price)/s.regular_price*100).toFixed())+"% ",1)):v("",!0),X]),l("div",Y,[l("span",ll,e(s.category_name),1),l("h4",sl,[_(d,{to:"/product/"+s.slug},{default:m(()=>[c(e(s.name),1)]),_:2},1032,["to"])]),el,l("div",il,[s.discount_price?(a(),i("span",al,[c(" ৳ "+e(s.discount_price)+" ",1),l("span",cl," ৳ "+e(s.regular_price),1)])):(a(),i("span",tl," ৳ "+e(s.regular_price),1))])])])],40,z)]))),128))]),ol])])])])])])])],64)}const _l=h(b,[["render",nl]]);export{_l as default};
