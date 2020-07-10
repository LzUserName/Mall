import Vue from "vue"
import Router from "vue-router"  
import Home from "./page/home"
import Index from "./page/index"
import Product from"./page/product"
import Detail from "./page/detail"
import Cart from "./page/cart"
import Order from "./page/order"
import OrderList from "./page/orderList"
import OrderConfim from "./page/orderConfim"
import OrderPay from "./page/orderPay"
import AliPay from "./page/aliPay"


Vue.use(Router)

export default new Router({
	routes:[{
		path:"/",
		name:"home",
		component:Home,
		redirect:"/index",
		children:[{
			path:"/index",
			name:"index",
			component:Index
		},
		{
			path:"/product/:id",
			name:"product",
			component:Product
		},{
			path:"/detail/:id",
			name:"detail",
			component:Detail
		}]
		
	},
	{
		path:"/cart",
		name:"cart",
		component:Cart
	},{
		path:"order",
		name:"order",
		component:Order,
		children:[{
			path:"/orderList",
			name:"orderList",
			component:OrderList
		},{
			path:"/orderConfim",
			name:"orderConfim",
			component:OrderConfim
		},{
			path:"/orderPay",
			name:"orderPay",
			component:OrderPay
		},{
			path:"/alipay",
			name:"alipay",
			component:AliPay
		}]
	}]
})