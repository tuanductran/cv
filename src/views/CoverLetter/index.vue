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
  <div class="modal-box">
    <h3 class="font-bold text-lg">Thư xin việc</h3>
    <div class="divider"></div>
    <p class="py-4 text-color-body dark:text-white"  v-for="content, k in coverletter.content" :key="`content-${ k }`">
      {{ content }}
    </p>
    <div class="divider"></div>
    <div class="modal-action">
     <a href="#" class="btn" id="hide__modal">Đóng!</a>
    </div>
  </div>
</div>
</template>
