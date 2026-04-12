<template>
  <div>
    <Beverage :isIced="beverageStore.currentTemp === 'Cold'" />

    <ul>
      <li>
        <template v-for="temp in beverageStore.temps" :key="temp">
          <label>
            <input type="radio" name="temperature" :id="`r${temp}`" :value="temp" v-model="beverageStore.currentTemp" />
            {{ temp }}
          </label>
        </template>
      </li>

      <li>
        <template v-for="base in beverageStore.bases" :key="base.id">
          <label>
            <input type="radio" name="base" :id="`b${base.id}`" :value="base.name"
              v-model="beverageStore.selectedBase" />
            {{ base.name }}
          </label>
        </template>
      </li>

      <li>
        <template v-for="creamer in beverageStore.creamers" :key="creamer.id">
          <label>
            <input type="radio" name="creamer" :id="`c${creamer.id}`" :value="creamer.name"
              v-model="beverageStore.selectedCreamer" />
            {{ creamer.name }}
          </label>
        </template>
      </li>

      <li>
        <template v-for="syrup in beverageStore.syrups" :key="syrup.id">
          <label>
            <input type="radio" name="syrup" :id="`s${syrup.id}`" :value="syrup.name"
              v-model="beverageStore.selectedSyrup" />
            {{ syrup.name }}
          </label>
        </template>
      </li>
    </ul>

    <input id="beverage-name" type="text" placeholder="Beverage Name" v-model="beverageStore.beverageName" />
    <button @click="beverageStore.makeBeverage">🍺 Make Beverage</button>
  </div>

  <div id="beverage-container" style="margin-top: 20px">
    <template v-for="beverage in beverageStore.beverages" :key="beverage.id">
      <label>
        <input type="radio" name="saved-beverage" :value="beverage.id" v-model="beverageStore.selectedBeverageId"
          @change="beverageStore.showBeverage(beverage.id)" />
        {{ beverage.name }}
      </label>
    </template>
  </div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";

const beverageStore = useBeverageStore();
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
}

ul {
  list-style: none;
}

ul li label {
  margin-right: 0.9rem;
}

ul li {
  margin-bottom: 0.8rem;
}

#beverage-container {
  font-size: 16px;
}

#beverage-container label {
  display: block;
  margin-bottom: 1rem;
}
</style>
