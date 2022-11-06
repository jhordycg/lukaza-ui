<script lang="ts" setup>
import type { ProductInfoType } from "@/types/ProductInfoType";
import ProductInfo from "@/components/ProductInfo.vue";

const products: ProductInfoType[] = [
  {
    id: "0",
    name: "TV Samsung",
    price: 500.0,
    preview: "/src/assets/logo.svg",
  },
  {
    id: "1",
    name: "TV LG",
    price: 500.0,
    preview: "/src/assets/logo.svg",
    amount: 1,
  },
  {
    id: "2",
    name: "TV Huawei",
    price: 500.0,
    preview: "/src/assets/logo.svg",
    amount: 1,
  },
  {
    id: "3",
    name: "TV Android",
    price: 500.0,
    preview: "/src/assets/logo.svg",
    amount: 1,
  },
];
</script>
<template>
  <div class="mx-auto container w-full">
    <h2 class="text-3xl font-bold">Store view</h2>
    <ul class="grid grid-cols-2 gap-4 m-4 md:grid-cols-4">
      <li class="block w-full" v-for="product in products" :key="product.id">
        <ProductInfo class="rounded-md border" :product="product" />
      </li>
    </ul>
  </div>
</template>
