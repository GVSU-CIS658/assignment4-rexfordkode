import { computed, ref } from "vue";
import { defineStore } from "pinia";
import basesData from "../data/bases.json";
import creamersData from "../data/creamers.json";
import syrupsData from "../data/syrups.json";
import temperaturesData from "../data/tempretures.json";

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

export interface BeverageRecipe {
  id: string;
  name: string;
  base: string;
  creamer: string;
  syrup: string;
  temp: string;
}

export const useBeverageStore = defineStore(
  "beverage",
  () => {
    const temps = [...temperaturesData];
    const currentTemp = ref(temps[0]);
    const bases: BaseBeverageType[] = [...basesData];
    const creamers: CreamerType[] = [...creamersData];
    const syrups: SyrupType[] = [...syrupsData];

    const selectedBase = ref(bases[0].name);
    const selectedCreamer = ref(creamers[0].name);
    const selectedSyrup = ref(syrups[0].name);

    const beverages = ref<BeverageRecipe[]>([]);
    const beverageName = ref("");
    const selectedBeverageId = ref<string | null>(null);

    const selectedBaseData = computed(
      () => bases.find((base) => base.name === selectedBase.value) ?? bases[0],
    );
    const selectedCreamerData = computed(
      () =>
        creamers.find((creamer) => creamer.name === selectedCreamer.value) ??
        creamers[0],
    );
    const selectedSyrupData = computed(
      () =>
        syrups.find((syrup) => syrup.name === selectedSyrup.value) ?? syrups[0],
    );

    function showBeverage(beverageId: string) {
      selectedBeverageId.value = beverageId;
      const found = beverages.value.find((b) => b.id === beverageId);
      if (found) {
        selectedBase.value = found.base;
        selectedCreamer.value = found.creamer;
        selectedSyrup.value = found.syrup;
        currentTemp.value = found.temp;
      }
    }

    function makeBeverage() {
      if (!beverageName.value.trim()) return;

      const newBeverage: BeverageRecipe = {
        id: Date.now().toString(),
        name: beverageName.value.trim(),
        base: selectedBase.value,
        creamer: selectedCreamer.value,
        syrup: selectedSyrup.value,
        temp: currentTemp.value,
      };

      beverages.value.push(newBeverage);
      selectedBeverageId.value = newBeverage.id;
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
      currentTemp,
      selectedBase,
      selectedCreamer,
      selectedSyrup,
      selectedBaseData,
      selectedCreamerData,
      selectedSyrupData,
      makeBeverage,
      showBeverage,
    };
  },
  {
    persist: {
      storage: sessionStorage,
      pick: [
        "beverages",
        "selectedBeverageId",
        "selectedBase",
        "selectedCreamer",
        "selectedSyrup",
        "currentTemp",
      ],
    },
  },
);
