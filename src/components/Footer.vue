<template lang="html">
  <th scope="row" colspan="2">Total productos</th>
  <td>{{ totalQuantity }}</td>
  <td>
    <button class="btn btn-danger btn-sm" id="vaciar-carrito" @click="clear()">
      vaciar todo
    </button>
  </td>
  <td class="font-weight-bold">
    $ <span>{{ totalPrice }}</span>
  </td>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
export default {
  name: "footer",
  setup() {
    let store = useStore();
    let totalQuantity = computed(() => store.getters.totalQuantity);
    let totalPrice = computed(() => store.getters.totalPrice);
    let clear = () => store.commit("cleanShoppingCart"); //con el "commit" se pueden acceder directamente a los "mutations"  del store
    return { totalQuantity, totalPrice, clear };
  },
};
</script>

<style scoped lang="scss"></style>
