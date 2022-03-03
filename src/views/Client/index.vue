<script setup>
   import { inject, computed } from "@vue/runtime-core"
   
   import ClientThumbnail from './ClientThumbnail/index.vue'
   import ClientDetails from './ClientDetails/index.vue'

   const { sections: { intro, clients }} = inject('infos')
</script>

<template>
   <section id="clients">
      <section-content title="Khách Hàng">
         <div class="xl:grid gap-10 2xl:grid-cols-3">
            <article class="mb-10 md:mb-10 xl:mb-16 2xl:mb-5 last:mb-0" v-for="client, k in clients" :key="k">
               <figure class="grid md:grid-cols-2 2xl:grid-cols-1 md:gap-4 lg:gap-7">
                  <!-- Clients thumbnail -->
                  <client-thumbnail :client="client"/>
                  <!-- Clients details -->
                  <client-details :client="client"/>
               </figure>
            </article>
         </div>
      </section-content>
   </section>
</template>
