<script setup lang="ts">
import { useOrderStore } from "@/stores/orders";
import { computed } from "vue";
import CartItem from "@/components/CartItem.vue";

const orderStore = useOrderStore();
const orders = computed(() => {
  for (const order in orderStore.orders) {
    console.log(order);
  }
  return orderStore.orders.values();
});
</script>
<template>
  <section class="container p-4 dark:bg-gray-900">
    <h2 class="text-gray-200 text-2xl mb-2">Cart View</h2>
    <div class="divide-gray-200">
      <ul
        v-if="orderStore.orders.size > 0"
        class="divide-y divide-gray-200 dark:divide-gray-700 border-gray-600 border box-border p-2"
      >
        <CartItem :orders="orders" />
      </ul>
      <span v-else class="text-2xl dark:text-white"
        >Tu carrito esta vacío hijo-puta</span
      >
      <button
        type="button"
        class="mt-4 p-2 bg-amber-300 w-full"
        @click="() => orderStore.clear"
      >
        Comprar
      </button>
    </div>
  </section>
</template>
<style scoped></style>
