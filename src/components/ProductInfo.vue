<script lang="ts" setup>
import { useOrderStore } from "@/stores/orders";
import { ShoppingCartIcon } from "@heroicons/vue/24/outline";
import type { ProductInfoType } from "@/types/ProductInfoType";

const { addToCart } = useOrderStore();

interface Properties {
  product: ProductInfoType;
}

const props = defineProps<Properties>();
</script>

<template>
  <div class="mx-auto rounded border">
    <div class="h-full aspect-h-8 aspect-w-6">
      <img
        class="object-center"
        alt="image-product"
        :src="props.product.preview"
      />
    </div>
    <hr />
    <div class="p-2 bg-zinc-100 flex p-2 pt-4">
      <div class="w-full">
        <h3 class="font-semibold">{{ props.product.name }}</h3>
        <span class="font-light text-gray-600"
          >{{ props.product.price }} lukaz</span
        >
      </div>
      <button
        class="self-center flex justify-end items-center border p-2 bg-amber-300 text-zinc-900"
        type="button"
        @click="addToCart({ ...props.product })"
      >
        <ShoppingCartIcon class="mr-1 w-6" />
        <span class="hidden md:inline">AGREGAR</span>
      </button>
    </div>
  </div>
</template>
<style scoped></style>
