import { ref, computed } from "vue";
import { defineStore } from "pinia";

export interface BaseBeverageType {
  id: string;
  name: string;
  color: string;
}

export interface CreamerType {
  id: string;
  name: string;
  color: string;
}

export interface SyrupType {
  id: string;
  name: string;
  color: string;
}

export const useBeverageStore = defineStore("beverage", () => {
  const temps = ["Hot", "Cold"];
  const bases: BaseBeverageType[] = [
    { id: "b1", name: "Black Tea", color: "#8B4513" },
    { id: "b2", name: "Green Tea", color: "#C8E6C9" },
    { id: "b3", name: "Coffee", color: "#6F4E37" },
  ];
  const creamers: CreamerType[] = [
    { id: "c1", name: "No Cream", color: "transparent" },
    { id: "c2", name: "Milk", color: "AliceBlue" },
    { id: "c3", name: "Cream", color: "#F5F5DC" },
    { id: "c4", name: "Half & Half", color: "#FFFACD" },
  ];
  const syrups: SyrupType[] = [
    { id: "s1", name: "No Syrup", color: "#c6c6c6" },
    { id: "s2", name: "Vanilla", color: "#FFEFD5" },
    { id: "s3", name: "Caramel", color: "#DAA520" },
    { id: "s4", name: "Hazelnut", color: "#6B4423" },
  ];

  // State for selections (to be added in next steps)

  // Array to hold saved beverage recipes
  const beverages = ref<any[]>([]); // Will type in next steps
  const beverageName = ref("");

  // State for selected beverage
  const selectedBeverageId = ref<string | null>(null);

  // Action to select and show a beverage
  function showBeverage(beverageId: string) {
    selectedBeverageId.value = beverageId;
    // Will update selection state in next steps
  }

  // Action to create and save a beverage recipe
  function makeBeverage() {
    if (!beverageName.value.trim()) return;
    const newBeverage = {
      id: Date.now().toString(),
      name: beverageName.value,
      // base, creamer, syrup, temp will be added in next steps
    };
    beverages.value.push(newBeverage);
    beverageName.value = "";
  }

  return {
    temps,
    bases,
    creamers,
    syrups,
    beverageName,
    beverages,
    selectedBeverageId,
    makeBeverage,
    showBeverage,
  };
});
