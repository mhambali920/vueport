<script setup>
import { ref } from "vue";
import TextTyperVue from "./utils/TextTyper.vue";

const text = ref("");
const index = ref(0);
const texts = ["Laravel", "Tailwind", "MySQL", "Vue JS"];

setInterval(() => {
  // Increment index
  index.value++;

  // If index is greater than the number of messages, reset it to 0
  if (index.value > texts.length - 1) {
    index.value = 0;
  }

  // Update message
  text.value = texts[index.value];
}, 3000);
</script>
<template>
  <section
    id="hero"
    class="relative overflow-hidden pt-48 font-noto w-full md:min-h-screen px-6 md:px-[85px] bg-primary-50 flex flex-col md:flex-row gap-4"
  >
    <div class="flex md:w-1/2 flex-col gap-10">
      <h1 class="text-6xl">Hi! I Am</h1>
      <TextTyperVue
        text="Muhammad Hambali"
        typeInterval="150"
        class="text-6xl text-primary-400"
      />
      <p>
        I am a full stack web programmer who has the ability to develop quality
        and responsive web applications. I can work well on every layer of a web
        application, from the front-end to the back-end. My skills in web
        programming include HTML, CSS, JavaScript, PHP and MySQL
      </p>
      <div class="my-10 flex items-center gap-x-24">
        <div><button class="btn-primary">Hire me</button></div>
        <div class="group flex items-center justify-center">
          <img
            src="@/assets/svg/portofoliowebsite.svg"
            alt=""
            class="group-hover:animate-spinSlow"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="absolute w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="pl-24 relative group">
      <div
        class="relative w-[23rem] h-[36rem] bg-transparent border group-hover:border-sky-500 border-sky-300 rounded-t-full"
      >
        <div
          class="bg-image absolute right-4 w-full h-full bg-primary-200 group-hover:bg-primary-300 rounded-t-full"
        >
          <img
            src="@/assets/img/people.png"
            alt="people"
            class="absolute bottom-0 -left-6"
          />
          <img
            src="@/assets/svg/star1.svg"
            alt=""
            class="w-6 h-6 absolute z-20 -left-20 bottom-72 animate-pulse hover:animate-ping"
          />
          <img
            src="@/assets/svg/star2.svg"
            alt=""
            class="w-5 h-5 absolute z-20 -bottom-16 right-20 animate-pulse hover:animate-ping delay-75"
          />
          <img
            src="@/assets/svg/star3.svg"
            alt=""
            class="w-5 h-5 absolute z-20 -top-8 right-4 animate-pulse hover:animate-ping delay-200"
          />
          <div
            class="flex items-center bg-white max-w-[231px] rounded-2xl shadow-primary-100 shadow-sm font-semibold absolute bottom-20 -left-24 px-4 py-2 animate-wiggle"
          >
            <img src="@/assets/svg/piala.svg" alt="" />
            <p>Best Desain Awward</p>
          </div>
          <div
            class="bg-white max-w-[200px] h-[50px] rounded-2xl shadow-primary-100 shadow-sm font-semibold absolute px-4 py-2 top-10 -right-28 animate-wiggle animation-delay-1000"
          >
            <div class="flex items-center w-48 h-full overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-10 h-10 text-primary-500 mr-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
              <Transition name="fade">
                <span class="text-xl">{{ text }}</span>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
