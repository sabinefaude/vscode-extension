// @ts-nocheck
<template>
  <div class="flex w-full h-full">
    <div class="border-r border-gray-500">
      <DeviceList
        :devices="devices"
        @set-active="handleSelected"
      />
    </div>
    <div class="flex-grow">
      <DeviceInfo
        v-if="selectedItem"
        :item="selectedItem"
      />
      <InfoTable v-if="filteredFirmware" :firmware="filteredFirmware" />
    </div>
  </div>
</template>

<script>
import importData from './assets/database.json';
import DeviceInfo from './components/DeviceInfo/DeviceInfo.vue';
import DeviceList from './components/DeviceList/DeviceList.vue';
import InfoTable from './components/InfoTable/InfoTable.vue';

export default {
  components: { DeviceList, DeviceInfo, InfoTable },
  data() {
    return {
      selectedItem: undefined,
      devices: importData.devices,
      firmware: importData.firmware,
      filteredFirmware: undefined,
    };
  },
  methods: {
    handleSelected(item) {
      this.selectedItem = item;

      this.filteredFirmware = this.firmware.filter(version => version.compatiblePartNumbers.includes(item.partNumber))
    }
  }
};
</script>
