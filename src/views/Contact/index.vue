<script setup>
   import { inject } from '@vue/runtime-core'

   const { sections: { contact }} = inject('infos')
</script>

<template>
   <section id="contact">
   <section-content title="Liên hệ">
      <form name="send_job" id="send__job" action="https://formspree.io/f/xyyvglla" method="POST">
         <div class="form-control w-full">
           <label class="label">
             <span class="label-text">Địa chỉ Email:</span>
           </label>
           <input type="email" name="email" placeholder="Địa chỉ Email" class="input input-bordered dark:bg-contact-dark w-full" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
         </div>
         <div class="form-control w-full">
           <label class="label">
             <span class="label-text">Họ và tên:</span>
           </label>
           <input type="name" name="fullname" placeholder="Họ và tên" class="input input-bordered dark:bg-contact-dark w-full" required pattern="^(\w\w+)\s(\w+)$"/>
         </div>
         <div class="form-control w-full">
           <label class="label">
             <span class="label-text">Link job:</span>
           </label>
           <input type="url" name="linkjob" placeholder="Link job" class="input input-bordered dark:bg-contact-dark w-full" required pattern="[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?"/>
         </div>
         <div class="form-control w-full">
           <label class="label">
             <span class="label-text">Nội dung gửi đi:</span>
           </label>
           <textarea name="content_job" class="textarea textarea-bordered dark:bg-contact-dark h-24" placeholder="Nhập nội dung mà bạn muốn gửi đến tôi ở đây" required />
         </div>
         <button id="submit_job" type="submit" class="btn my-5">
            <i class="fa fa-paper-plane mr-2" /> Gửi thông tin
         </button>
         <p id="send__job__status"></p>
      </form>
   </section-content>
   </section>
</template>
