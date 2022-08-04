<script setup>
   import { inject } from '@vue/runtime-core'

   const { sections: { contact }} = inject('infos')
</script>

<template>
   <section id="contact" class="mt-20 py-10 md:py-14 lg:py-16">
      <form id="send_job" action="https://formspree.io/f/mknkawry" method="POST" enctype="multipart/form-data">
         <div class="form-control w-full max-w-xs">
           <label class="label">
             <span class="label-text">Địa chỉ Email:</span>
           </label>
           <input type="email" name="email" placeholder="Địa chỉ Email" class="input input-bordered w-full max-w-xs" required />
         </div>
         <div class="form-control w-full max-w-xs">
           <label class="label">
             <span class="label-text">Họ và tên:</span>
           </label>
           <input type="fullname" name="fullname" placeholder="Họ và tên" class="input input-bordered w-full max-w-xs" required />
         </div>
         <div class="form-control w-full max-w-xs">
           <label class="label">
             <span class="label-text">Nội dung gửi đi:</span>
           </label>
           <textarea class="textarea textarea-bordered h-24" placeholder="Nhập nội dung mà bạn muốn gửi đến tôi ở đây" required></textarea>
         </div>
         <div class="form-control w-full max-w-xs">
           <label class="label">
             <span class="label-text">File thông tin job:</span>
           </label>
           <input type="file" name="upload" class="input input-bordered w-full max-w-xs" required />
         </div>
         <button id="submit_job" type="submit" class="btn btn-outline">Send</button>
         <p id="send__job__status" class="text-main-color"></p>
      </form>
   </section>
</template>
