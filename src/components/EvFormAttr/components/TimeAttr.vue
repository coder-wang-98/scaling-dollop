<template>
  <el-form-item
    prop="prop.editable"
    label="可输入"
  >
    <el-switch v-model="curFormItem.prop.editable">
    </el-switch>
  </el-form-item>
  <el-form-item
    prop="prop.clearable"
    label="可清空"
  >
    <el-switch v-model="curFormItem.prop.clearable">
    </el-switch>
  </el-form-item>
  <el-form-item
    prop="prop.arrowControl"
    label="是否使用箭头进行时间选择"
  >
    <el-switch v-model="curFormItem.prop.arrowControl">
    </el-switch>
  </el-form-item>
  <el-form-item
    prop="prop.isRange"
    label="时间范围选择"
  >
    <el-switch v-model="curFormItem.prop.isRange">
    </el-switch>
  </el-form-item>
  <el-form-item
    prop="prop.format"
    label="展示格式"
  >
    <el-input v-model="curFormItem.prop.format">
    </el-input>
  </el-form-item>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useFormDesignStore } from '@/store/formDesign'

const store = useFormDesignStore()
const { curFormItem } = storeToRefs(store)
</script>
<style scoped lang='scss'>
</style>