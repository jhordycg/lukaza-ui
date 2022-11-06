<script lang="ts" setup>
import type { ProductInfoType } from "@/types/ProductInfoType";

const props = defineProps<{ orders: IterableIterator<ProductInfoType> }>();
</script>
<template>
  <li v-for="order in props.orders" :key="order.id" class="p-2">
    <div class="flex items-center space-x-4">
      <div class="flex-shrink-0">
        <img
          class="w-8 h-8 rounded-full"
          :src="order.preview"
          alt="Neil image"
        />
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
          {{ order.name }}
        </p>
        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
          {{ order.amount }} unidades
        </p>
      </div>
      <div
        class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
      >
        {{ order.price * (order.amount ?? 1) }} lukaz
      </div>
    </div>
  </li>
</template>

<style scoped></style>
