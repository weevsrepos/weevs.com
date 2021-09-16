<template>
  <table class="custom--table">
    <tr>
      <th v-for="(column, keyColumn) in columns" :key="keyColumn">
        {{ column.name }}
      </th>
    </tr>

    <tr v-for="(item, itemKey) in items" :key="itemKey">
      <td v-for="(column, itemColumnKey) in columns" :key="itemColumnKey">
        <slot :name="column.key" :data="item" />
        <template v-if="!$slots[column.key]">
          {{ item[[column.key]]}}
        </template>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  props: ['columns', 'items']
}
</script>

<style scoped>

</style>
