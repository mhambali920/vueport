<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { RouterLink } from "vue-router";
const open = ref(false);
const header = ref(null);
const handleScroll = () => {
  if (window.scrollY > 50) {
    header.value.classList.add("shadow-lg", "shadow-amber-100");
  } else {
    header.value.classList.remove("shadow-lg", "shadow-amber-100");
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    ref="header"
    class="fixed inset-x-0 flex flex-col md:flex-row md:items-center justify-between bg-primary-50/50 backdrop-blur-lg z-50 px-6 md:px-[85px] py-8 md:py-12"
  >
    <div class="flex justify-between items-center">
      <a href="#" class="font-inter text-primary-500 text-2xl">Portofolio</a>
      <!-- toggle nav -->
      <button
        class="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
        @click="open = !open"
      >
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          class="w-6 h-6 text-primary-500"
        >
          <path
            v-show="!open"
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
          <path
            v-show="open"
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
    <nav
      :class="{ flex: open, hidden: !open }"
      class="md:flex flex-col md:flex-row items-center gap-10 lg:gap-24 font-noto font-bold"
    >
      <RouterLink to="/" class="text-primary-300">Home</RouterLink>
      <RouterLink to="/projects" class="hover:text-primary-300"
        >Projects</RouterLink
      >
      <RouterLink to="/resume" class="hover:text-primary-300"
        >Resume</RouterLink
      >
      <RouterLink to="/contact" class="btn-primary">Contact us</RouterLink>
    </nav>
  </header>
</template>
