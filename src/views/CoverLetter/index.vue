<script setup>
   import { inject } from '@vue/runtime-core'

   /*
      extract the about section from the "sections" key in the json file
      containing the data
   */
   const { sections: { coverletter }} = inject('infos')
</script>

<template>
<article class="format lg:format-lg bg-coverletter">
 <h2>Thư xin việc</h2>
 <p class="lead" v-for="content, k in coverletter.content" :key="`content-${ k }`">
    {{ content }}
 </p>
</article>
</template>
