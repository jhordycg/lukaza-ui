<script lang="ts" setup>
import { RouterView } from "vue-router";
import { useOrderStore } from "@/stores/orders";
import ShoppingCartIcon from "@heroicons/vue/24/solid/ShoppingCartIcon";

import "@/style.css";

const ordersStore = useOrderStore();
</script>

<template>
  <header>
    <RouterLink to="/">Home</RouterLink>
    <br />
    <RouterLink to="cart"
      ><div class="relative w-fit">
        <ShoppingCartIcon class="mr-1 w-6" />
        <span
          class="inline-flex absolute -top-2 -right-2 justify-center items-center w-5 h-5 text-xs font-semibold text-white bg-red-500 rounded-full"
        >
          {{ ordersStore.totalOrders }}
        </span>
      </div>
    </RouterLink>
  </header>

  <RouterView />
</template>

<style scoped></style>
