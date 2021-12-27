<script setup>
   import { inject } from '@vue/runtime-core'
   import { Carousel, Slide, Pagination } from 'vue3-carousel'
   import 'vue3-carousel/dist/carousel.css'

   const { sections: { testimonials }} = inject('infos')
   
   const breakpoints = {
      320: {
         itemsToShow: 1
      },

      700: {
         itemsToShow: 1.5
      },

      1024: {
         itemsToShow: 2,
         wrapAround: false
      }
   }

   const settings = {
      transition: "600",
      wrapAround: true,
      mouseDrag: true,
      touchDrag: true,
      snapAlign: "center"
   }
</script>

<template>
   <section id="testimonials" class="wrapper">
      <section-content title="Testimonials">
         <carousel
            :settings="settings"
            :breakpoints="breakpoints"
         >
            <!-- Testimonials card -->
            <slide
               v-for="{ fullname, jobtitle, avatar, text } in testimonials"
               class="carousel w-full md:mr-4"
            >
               <div class="lg:flex bg-white dark:bg-gray-800 dark:bg-opacity-70 rounded-lg md:rounded-xl p-6">
                  <!-- Testimonials avatar -->
                  <img
                     class="border-2 border-main-color w-16 h-16 p-1 rounded-full mx-auto"
                     :src="`./assets/testimonials/${ avatar }`"
                     :alt="`${ fullname } photo`" loading="lazy"
                  >
                  <!-- End Testimonials avatar -->
                  
                  <!-- Testimonials Content -->
                  <div class="mt-5 lg:mt-0 text-center lg:text-left lg:ml-10">
                     <!-- Testimonials person name -->
                     <h2 class="font-bold text-3xl">{{ fullname }}</h2>
                     <!-- End Testimonials person name -->

                     <!-- Testimonials person jobtitle -->
                     <strong class="text-main-color text-sm font-semibold">
                        {{ jobtitle }}
                     </strong>
                     <!-- End Testimonials person jobtitle -->

                     <!-- Testimonials person comment -->
                     <p class="mt-4 text-sm xl:text-lg leading-relaxed text-color-body dark:text-white">
                        <i class="text-gray-300 dark:text-white mr-1 fa fa-quote-left"></i>
                        {{ text }}
                        <i class="text-gray-300 dark:text-white ml-1 fa fa-quote-right"></i>
                     </p>
                     <!-- End Testimonials person comment -->
                  </div>
                  <!-- End Testimonials Content -->
               </div>
            </slide>
            <!-- End Testimonials card -->

            <!-- Carousel dots -->
            <template #addons="{ slidesCount }">
               <Pagination />
            </template>
            <!-- End Carousel dots -->
         </carousel>
      </section-content>
   </section>
</template>

<style lang="scss">
   .carousel__pagination {
      @apply mt-5;

      .carousel__pagination-button {
         @apply w-8 h-1 bg-gray-700 dark:bg-white rounded-full opacity-20;

         &.carousel__pagination-button--active {
            @apply opacity-100 bg-main-color;
         }
      }
   }
</style>