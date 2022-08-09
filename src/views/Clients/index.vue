<script setup>
   import { inject } from "@vue/runtime-core"
   
   import ClientThumbnail from './ClientThumbnail/index.vue'
   import ClientDetails from './ClientDetails/index.vue'

   const { sections: { intro, clients }} = inject('infos')
</script>

<template>
   <section id="clients">
      <section-content title="Khách Hàng">
         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
           <div class="card w-full bg-white bg-client vnodesign-border" v-for="client, k in clients" :key="k">
                <client-thumbnail :client="client"/>
                <client-details :client="client"/>
           </div>
         </div>
      </section-content>
   </section>
</template>
