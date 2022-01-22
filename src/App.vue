<template>
  <div class="container">
    <div class="d-flex align-items-center">
      <h1>Carrito de Compras - Vue</h1>
      <img src="@/assets/logo.png" width="70" class="ms-3" alt="" srcset="" />
    </div>
    <!-- <pre>{{ shoppingCart }}</pre> -->
    <hr />
    <ShoppingCart />
    <div class="row">
      <Card
        v-for="product in products"
        :key="product['id']"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "@vue/runtime-core";
//Components
import Card from "@/components/Card";
import ShoppingCart from "@/components/ShoppingCart";
export default {
  name: "App",
  components: {
    Card,
    ShoppingCart,
  },
  setup() {
    const store = useStore();
    onMounted(() => store.dispatch("fetchData")); //dispatch activa un "action" - con el "dispatch" se pueden disparar los "actions" del store

    //Los "state" se mapean en los "computed()" -> Propiedades computadas
    const products = computed(() => store.state.products);
    // const shoppingCart = computed(() => store.state.shoppingCart);

    return { products };
  },
};
</script>

<style lang="scss"></style>
