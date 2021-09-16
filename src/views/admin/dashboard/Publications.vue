<template>
  <div>
    <section class="d-flex justify-content-between align-center">
      <h1 class="heading-s--medium heading-m--medium mb-8">
        Publications
      </h1>

      <Button type="secondary" text="Create publication" icon="arrow-right"/>
    </section>

    <section>
      <Table class="mt-40"
             :columns="columns"
             :items="items"
      >
        <template #license="{ data }">
          {{ data.license }}
        </template>
      </Table>
    </section>
  </div>
</template>

<script>
import Table from "@/components/Table";
import Button from "@/components/Button";
export default {
  components: {Button, Table},
  data() {
    return {
      columns: [
        { name: 'Company', key: 'company' },
        { name: 'Product', key: 'product' },
        { name: 'Type', key: 'type' },
        { name: 'Cloud', key: 'cloud' },
        { name: 'License', key: 'license' },
        { name: 'Awesome', key: 'awesome' },
      ],
      items: [
        {
          company: 'Kong',
          product: 'Product',
          type: 'SAAS',
          cloud: 'Cloud',
          license: 'Open source'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
