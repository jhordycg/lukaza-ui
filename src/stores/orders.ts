import { computed, ref } from "vue";
import { defineStore } from "pinia";
import type { ProductInfoType } from "@/types/ProductInfoType";

export const useOrderStore = defineStore("counter", () => {
  const orders = ref<Map<string, ProductInfoType>>(new Map());
  const totalOrders = computed(() => {
    let total = 0;
    if (!orders.value) return total;
    for (const product of orders.value.values()) {
      total += product.amount ?? 1;
    }
    return total;
  });
  // Functions
  const addToCart = (product: ProductInfoType) => {
    const savedProduct = orders.value.get(product.id);
    if (!savedProduct) {
      product.amount ??= 1;
      orders.value.set(product.id, product);
      return;
    }
    if (savedProduct.amount) {
      savedProduct.amount += product.amount ?? 1;
    }
    orders.value.set(savedProduct.id, savedProduct);
  };

  const clear = () => {
    orders.value.clear();
  };

  return { clear, addToCart, totalOrders, orders };
});
