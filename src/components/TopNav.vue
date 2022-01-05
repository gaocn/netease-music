<template>
  <div class="topNav">
    <div class="topLeft">
      <span class="iconfont icon-liebiao_ setting"></span>
    </div>
    <div class="topCenter">
      <span class="navBtn">我的</span>
      <span class="navBtn active">发现</span>
      <span class="navBtn">云村</span>
      <span class="navBtn">视频</span>
    </div>
    <div class="topLeft">
      <span class="iconfont icon-wxbsousuotuiguang search"></span>
    </div>
  </div>
</template>
<style lang="less" scoped>
.topNav {
  width: 7.5rem;
  height: 1rem;
  display: flex; /* 水平对齐 */
  justify-content: space-between; /* 均匀排列每个元素首个元素放置于起点，末尾元素放置于终点 */
  align-items: center; /* 竖直居中*/
  padding: 0 0.5rem; /* 设置内边距 */
  .icon {
    width: 0.5rem;
    height: 0.5rem;
  }
  .search {
    width: 0.45rem;
    height: 0.45rem;
  }
  .topCenter {
    width: 4.5rem;
    /*设置水平平均分布*/
    display: flex;
    justify-content: space-around;
    .active {
      font-weight: bold;
    }
  }
}
</style>
