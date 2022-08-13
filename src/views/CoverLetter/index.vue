<script setup>
   import { inject } from '@vue/runtime-core'

   /*
      extract the about section from the "sections" key in the json file
      containing the data
   */
   const { sections: { coverletter }} = inject('infos')
</script>

<template>
<section id="coverletter">
    <section-content title="Thư xin việc">
      <div class="block p-6 bg-white bg-coverletter rounded-lg vnodesign-border">
          <!-- Cover Letter information -->
          <p class="font-normal" v-for="content, k in coverletter.content" :key="`content-${ k }`">
              {{ content }}
          </p>
      </div>
     </section-content>
   </section>
</template>
