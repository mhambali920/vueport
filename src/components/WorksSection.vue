<script setup>
import { ref, reactive } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
const slides = ref([
  { image: "src/assets/img/slides/img1.jpg", text: "Slide 1" },
  { image: "src/assets/img/slides/img2.jpg", text: "Slide 2" },
  { image: "src/assets/img/slides/img3.jpg", text: "Slide 3" },
  { image: "src/assets/img/slides/img4.jpg", text: "Slide 4" },
  { image: "src/assets/img/slides/img5.jpg", text: "Slide 5" },
]);

const myCarousel = ref(null);
const breakpoints = reactive({
  50: { itemsToShow: 1, snapAlign: "center" },
  // 700px and up
  700: {
    itemsToShow: 2,
    snapAlign: "center",
  },
  // 1024 and up
  1024: {
    itemsToShow: 3,
    snapAlign: "center",
  },
});
const settings = reactive({
  itemsToShow: 3,
  transition: 500,
  wrapAround: true,
  snapAlign: "center",
});
</script>
<template>
  <section
    id="works"
    class="relative overflow-hidden w-full flex flex-col items-center justify-center px-6 md:px-[85px] py-12 font-noto bg-primary-50"
  >
    <h2 class="text-5xl my-8 text-center">
      My <span class="text-primary-400">Exceptional</span> Works
    </h2>
    <div class="w-full relative">
      <Carousel
        ref="myCarousel"
        :settings="settings"
        :breakpoints="breakpoints"
      >
        <Slide v-for="slide in slides" :key="slide">
          <div class="carousel__item">
            <img
              :src="slide.image"
              alt=""
              class="relative rounded-lg shadow-lg w-96 h-96"
            />
            <p class="absolute">{{ slide.text }}</p>
          </div>
        </Slide>

        <template #addons> <Navigation /><Pagination /> </template>
      </Carousel>
    </div>
    <div class="flex items-center justify-center gap-24 mt-12">
      <button class="btn-prev" @click="myCarousel.prev()">prev</button>
      <button class="btn-next" @click="myCarousel.next()">next</button>
    </div>
    <div class="text-center max-w-[541px] mt-10 mx-auto">
      <h2 class="text-5xl my-8">Recent Projects</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
        corrupti, reprehenderit facere at inventore accusamus sunt ad explicabo
        distinctio velit libero amet repudiandae itaque optio aspernatur
        dignissimos, deleniti, natus beatae.
      </p>
    </div>
    <div
      class="flex flex-col md:flex-row items-center justify-between gap-6 py-16"
    >
      <div
        class="clippy__parent w-[385px] h-[285px] bg-white overflow-hidden rounded-xl shadow-sm"
      >
        <div class="clippy__child"></div>
      </div>
      <div
        class="clippy__parent w-[385px] h-[285px] bg-white overflow-hidden rounded-xl shadow-sm"
      >
        <div class="clippy__child"></div>
      </div>
      <div
        class="clippy__parent w-[385px] h-[285px] bg-white overflow-hidden rounded-xl shadow-sm"
      >
        <div class="clippy__child"></div>
      </div>
    </div>
  </section>
</template>
<style>
.btn-prev,
.btn-next {
  color: white;
  background-color: #5688cd;
  width: 7rem;
  height: 4.5rem;
  border-radius: 25% 75% 75% 25% / 50% 50% 50% 50%;
}
.btn-prev {
  background-color: #fb992d;
  transform: rotateY(180deg);
}
.carousel__viewport {
  padding: 42px 0;
}
.carousel__item {
  height: 500px;
  width: 100%;
  /* background-color: var(--vc-clr-primary); */
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
  filter: blur(3px);
}
.carousel__slide--active {
  transform: scale(1.3);
  transition: transform 0.5s linear;
  z-index: 999;
  filter: blur(0);
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  /* border: 5px solid white; */
  color: #fba02a;
  background-color: white !important;
  border-radius: 50%;
}

.carousel__pagination-button::after {
  background-color: #ffdb78 !important;
}
.carousel__pagination-button:hover::after,
.carousel__pagination-button--active::after {
  background-color: #fb992d !important;
}
.clippy__child {
  width: 100%;
  height: 100%;
  background: linear-gradient(150deg, #fb992d 0%, #fabf12 100%);
  background-size: cover;
  clip-path: circle(0% at 0 100%);
  transition: 1s cubic-bezier(0.86, 0, 0.07, 1);
}
.clippy__parent:hover .clippy__child {
  clip-path: circle(141.5% at 0 100%);
}
</style>
