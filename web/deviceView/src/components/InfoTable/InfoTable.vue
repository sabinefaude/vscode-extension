<template>
  <div class="px-8">
    <table class="w-full border-collapse">
      <thead>
        <tr>
          <th>Version</th>
          <th>Release date</th>
          <th>Download URL</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="version in firmware" :key="version.version">
          <td>{{ version.version }}</td>
          <td> 27.09.2022</td>
          <td>{{ version.downloadUrl }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    props: ['firmware'],
}
</script>

<style scoped>
table, th, td {
  @apply border border-gray-500;
}

th {
  @apply bg-gray-300;
}

td {
  @apply px-2;
}
</style>