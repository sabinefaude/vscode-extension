<template>
  <div class="flex justify-between px-8 py-4">
    <div>
      <h1 class="font-bold text-3xl mb-6">{{ item.name }}</h1>
      <dl>
        <div>
          <dt>Part number:</dt>
          <dd>{{ item.partNumber }}</dd>
        </div>
        <div>
          <dt>Communication interface:</dt>
          <dd>{{ item.communicationInterface }}</dd>
        </div>
        <div>
          <dt>Weight:</dt>
          <dd>{{ item.weight }}</dd>
        </div>
      </dl>
    </div>
    <div class="w-52 h-52">
      <img class="object-contain h-48" :src="`./images/${item.id}.png`" :alt="item.name" />
    </div>
  </div>
</template>

<script>
import InfoTable from '../InfoTable/InfoTable.vue';

export default {
    props: ['item'],
    components: { InfoTable }
}
</script>

<style scoped>
dl > div {
  @apply grid grid-cols-3 gap-4 py-2;
}

dt, dd {
  @apply text-sm;
}

dt {
 @apply font-medium text-gray-500;
}

dd {
  @apply col-span-2;
}
</style>