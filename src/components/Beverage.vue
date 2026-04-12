<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />
    <Contents>
      <template v-slot:top>
        <Creamer />
      </template>
      <template v-slot:mid>
        <Syrup />
      </template>
      <template v-slot:bottom>
        <Base />
      </template>
    </Contents>
  </Mug>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";

export default defineComponent({
  name: "Beverage",
  components: {
    Contents,
    Mug,
    Syrup,
    Base,
    Creamer,
    Hot,
    Cold,
  },
  props: {
    isIced: {
      type: Boolean,
      required: true,
    },
  },
});
</script>
