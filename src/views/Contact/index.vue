<script setup>
   import { inject } from '@vue/runtime-core'

   const { sections: { contact }} = inject('infos')
</script>

<template>
   <section id="contact">
   <section-content title="Liên hệ">
      <form id="send_job" action="https://formspree.io/f/mknkawry" method="POST">
         <div class="form-control w-full">
           <label class="label">
             <span class="label-text">Địa chỉ Email:</span>
           </label>
           <input type="email" name="email" placeholder="Địa chỉ Email" class="input input-bordered w-full" required />
         </div>
         <div class="form-control w-full">
           <label class="label">
             <span class="label-text">Họ và tên:</span>
           </label>
           <input type="fullname" name="fullname" placeholder="Họ và tên" class="input input-bordered w-full" required />
         </div>
         <div class="form-control w-full">
           <label class="label">
             <span class="label-text">Nội dung gửi đi:</span>
           </label>
           <textarea class="textarea textarea-bordered h-24" placeholder="Nhập nội dung mà bạn muốn gửi đến tôi ở đây" required></textarea>
         </div>
         <button id="submit_job" type="submit" class="btn btn-outline my-5">Send</button>
         <p id="send__job__status" class="text-main-color"></p>
      </form>
   </section-content>
   </section>
</template>
