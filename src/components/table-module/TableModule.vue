<template>
  <el-table :data="data">
    <el-table-column
      v-for="heading, index in headings"
      :key="heading.value + index"
      :prop="heading.value"
      :label="heading.label"
    >
      <template #default="scope">
        <slot :name="heading.value" :row="scope.row">
          <el-image
            v-if="heading.isImage"
            :src="scope.row[heading.value]"
          />
          <template v-else-if="heading.isDate">
            {{ `Date ${scope.row[heading.value]}` }}
          </template>
          <template v-else>
            {{ scope.row[heading.value] }}
          </template>
        </slot>
      </template>
    </el-table-column>
    <el-table-column label="Actions">
      <template #default="scope">
        <slot name="actions" :row="scope.row" />
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
export interface IHeading {
  label: string
  value: string
  isImage?: boolean
  isDate?: boolean
}

defineProps<{
  data: any[]
  headings: IHeading[]
}>()
</script>
