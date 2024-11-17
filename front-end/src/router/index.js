import PageNotFound from "@/pages/PageNotFound.vue";
import ProductDetails from "@/pages/ProductDetails.vue";
import Products from "@/pages/Products.vue";
import ShoppingCart from "@/pages/ShoppingCart.vue";
import Home from "@/pages/Home.vue";
import Pay from "@/pages/Pay.vue";
import OrderConfirm from "@/pages/orderConfirm.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/products",
      name: "products",
      component: Products,
      props: (route) => ({ user: route.params.user }), // Pasar user como prop
    },
    {
      path: "/product/:id",
      name: "product",
      component: ProductDetails,
    },
    {
      path: "/products/cart",
      name: "cart",
      component: ShoppingCart,
      props: (route) => ({ user: route.params.user }), // Pasar user como prop
    },
    {
      path: "/pay",
      name: "pay",
      component: Pay,
      props: (route) => ({ user: route.params.user }), // Pasar user como prop
    },
    {
      path: "/orderConfirm",
      name: "orderConfirm",
      component: OrderConfirm,
      props: (route) => ({ user: route.params.user }), // Pasar user como prop
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: PageNotFound,
    },
  ],
});

export default router;
