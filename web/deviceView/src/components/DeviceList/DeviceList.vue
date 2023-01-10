<template>
  <ul>
    <li
      v-for="device in devices"
      :key="device.id"
      class="p-4 border-b border-b-gray-500 hover:cursor-pointer hover:bg-slate-300 transition-colors"
      @click="this.$emit('setActive', device)"
    >
      {{ device.name }}
    </li>
  </ul>
</template>

<script>
export default {
  props: ['devices'],
}
</script>
