<script setup>
   import { inject } from '@vue/runtime-core'

   /*
      extract the about section from the "sections" key in the json file
      containing the data
   */
   const { sections: { coverletter }} = inject('infos')
</script>

<template>
<div class="modal" id="view_coverletter">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Thư xin việc</h3>
    <p class="py-4 text-color-body dark:text-white"  v-for="content, k in coverletter.content" :key="`content-${ k }`">
      {{ content }}
    </p>
    <div class="modal-action">
     <a href="#" class="btn">Đóng!</a>
    </div>
  </div>
</div>
</template>
