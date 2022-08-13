<script setup>
   import { inject } from '@vue/runtime-core'

   const { sections: { contact }} = inject('infos')
</script>

<template>
   <section id="contact">
   <div class="p-4 my-4 w-full max-w-sm bg-white bg-contact rounded-lg vnodesign-border">
      <form class="space-y-6" name="send_job" id="send__job" action="https://formspree.io/f/xyyvglla" method="POST">
        <h5 class="text-xl font-medium">Send job</h5>
        <div>
           <label for="email" class="block mb-2 text-sm font-medium">Địa chỉ E-mail</label>
           <input type="email" name="email" class="text-sm rounded-lg block w-full p-2.5 text-black dark:text-white" placeholder="Địa chỉ E-mail" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
        </div>
        <div>
           <label for="name" class="block mb-2 text-sm font-medium">Họ và tên</label>
           <input type="name" name="fullname" class="text-sm rounded-lg block w-full p-2.5 text-black dark:text-white" placeholder="Họ và tên" required/>
        </div>
        <div>
           <label for="url" class="block mb-2 text-sm font-medium">Link job</label>
           <input type="url" name="linkjob" class="text-sm rounded-lg block w-full p-2.5 text-black dark:text-white" placeholder="Link job" required pattern="[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?"/>
        </div>
        <div>
           <label for="content_job" class="block mb-2 text-sm font-medium">Nội dung</label>
           <textarea name="content_job" class="text-sm rounded-lg block w-full p-2.5 text-black dark:text-white" placeholder="Nội dung" required/>
        </div>
         <button id="submit_job" type="submit" class="w-full text-white bg-vnodesign font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            <i class="fa fa-paper-plane mr-2" /> Gửi thông tin
         </button>
         <p id="send__job__status"></p>
      </form>
   </div>
   </section>
</template>
