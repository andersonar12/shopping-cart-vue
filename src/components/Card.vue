<template>
  <div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3 mb-3">
    <div class="card">
      <img :src="product['thumbnailUrl']" alt="" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ product["title"] }}</h5>
        <p class="card-text">
          $ <span>{{ product["precio"] }}</span>
        </p>
        <button class="btn btn-dark" type="button" @click="add(product)">
          Comprar
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";

export default {
  name: "Card",
  props: ["product"],
  setup() {
    const store = useStore();

    const add = (product) => {
      console.log(product);
      store.dispatch("addToShoppingCart", product);
    };

    return { add };
  },
};
</script>
