<template>
  <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 50, 100, 200, 500, 1000]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalSize">
  </el-pagination>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    current: {
      type: Number,
      default: 1
    },
    size: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 0
    }
  },
  computed: {
    currentPage: {
      get: function (){
        return this.current
      },
      set: function (val){
        this.$emit('update:current', val)
      }
    },
    pageSize: {
      get: function (){
        return this.size
      },
      set: function (val) {
        this.$emit('update:size', val)
      }
    },
    totalSize: {
      get: function () {
        return this.total
      }
    }
  },
  data(){
    return{

    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>