<template>
  <div class="my-5">
    <h4>Carrito de compras</h4>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Item</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Acción</th>
          <th scope="col">Total</th>
          <th scope="col text-center">-</th>
        </tr>
      </thead>
      <tbody id="items">
        <Item v-for="item in shoppingCart" :key="item.id" :item="item" />
      </tbody>
      <tfoot>
        <tr id="footer-carrito">
          <th
            scope="row"
            colspan="5"
            v-if="Object.keys(shoppingCart).length === 0"
          >
            Carrito vacío - comience a comprar!
          </th>
          <Footer v-else />
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import Item from "@/components/Item";
import Footer from "@/components/Footer";
export default {
  name: "ShoppingCart",
  components: {
    Item,
    Footer,
  },
  setup() {
    const store = useStore();
    const shoppingCart = computed(() => store.state.shoppingCart);

    return { shoppingCart };
  },
};
</script>

<style lang="scss"></style>
