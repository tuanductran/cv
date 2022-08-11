<script setup>
   import { inject } from '@vue/runtime-core'

   /*
      extract the about section from the "sections" key in the json file
      containing the data
   */
   const { sections: { coverletter }} = inject('infos')
</script>

<template>
<div class="modal modal-bottom sm:modal-middle" id="view_coverletter">
  <div class="modal-box bg-coverletter">
    <h3 class="font-bold text-lg">Thư xin việc</h3>
    <div class="divider"></div>
    <p class="my-4" v-for="frontend, k in coverletter.frontend" :key="`frontend-${ k }`">
      {{ frontend }}
    </p>
    <div class="divider"></div>
    <div class="modal-action">
     <a href="#" class="btn btn-block bg-vnodesign vnodesign-border-color !text-white" id="hide__modal">Đóng</a>
    </div>
  </div>
</div>
</template>
