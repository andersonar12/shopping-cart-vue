<template lang="html">
  <tr>
    <th scope="row">{{ item.id }}</th>
    <td>{{ item.title }}</td>
    <td>{{ item.cantidad }}</td>
    <td>
      <button class="btn btn-info btn-sm" @click="increase(item)">+</button>
      <button class="btn btn-danger btn-sm" @click="decrease(item.id)">
        -
      </button>
    </td>
    <td>${{ item.precio * item.cantidad }}</td>
    <td>
      <button class="btn btn-warning btn-sm" @click="remove(item.id)">X</button>
    </td>
  </tr>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "item",
  props: ["item"],
  setup() {
    const store = useStore();

    const increase = (item) => store.dispatch("addToShoppingCart", item);
    const decrease = (id) => store.dispatch("decreaseOnShoppingCart", id);
    const remove = (id) => store.commit("removeItem", id);
    return { increase, decrease, remove };
  },
};
</script>

<style scoped lang="scss"></style>
