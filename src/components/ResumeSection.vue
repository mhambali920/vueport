<template>
  <section
    id="resume"
    class="w-full flex flex-col items-start justify-center px-6 md:px-[85px] py-8 font-noto"
  >
    <div class="text-center max-w-[541px] mt-10 mx-auto">
      <h2 class="text-5xl my-8">
        My <span class="text-primary-400">services</span>
      </h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
        corrupti, reprehenderit facere at inventore accusamus sunt ad explicabo
        distinctio velit libero amet repudiandae itaque optio aspernatur
        dignissimos, deleniti, natus beatae.
      </p>
      <button class="btn-primary my-8">Download Resume</button>
    </div>
    <!-- slider -->
    <div
      class="flex flex-col md:flex-row items-center gap-20 justify-between w-full mt-8"
    >
      <div
        class="w-full md:w-1/3 rounded-lg max-w-md bg-white px-4 py-8 shadow-xl"
      >
        <div class="flex justify-center">
          <div
            class="w-28 h-28 relative left-3 rounded-full bg-primary-100 flex items-center justify-center text-white text-4xl font-medium font-sans"
          >
            Ui
          </div>
          <div
            class="w-28 h-28 relative -left-3 rounded-full bg-primary-500 flex items-center justify-center text-white text-4xl font-medium font-sans"
          >
            UX
          </div>
        </div>
        <h2 class="text-center font-noto font-semibold my-6">UI/UX</h2>
        <p class="text-center font-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          vero enim a animi culpa itaque eligendi quidem, adipisci.
        </p>
      </div>
      <div
        class="w-full md:w-1/3 rounded-lg max-w-md bg-white px-4 py-8 shadow-xl"
      >
        <img src="@/assets/img/smile.png" alt="" class="w-28 h-28 mx-auto" />
        <h2 class="text-center font-noto font-semibold my-6">Desaign</h2>
        <p class="text-center font-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          vero enim a animi culpa itaque eligendi quidem, adipisci.
        </p>
      </div>
      <div
        class="w-full md:w-1/3 rounded-lg max-w-md bg-white px-4 py-8 shadow-xl"
      >
        <img src="@/assets/svg/code.svg" alt="" class="w-28 h-28 mx-auto" />
        <h2 class="text-center font-noto font-semibold my-6">Developer</h2>
        <p class="text-center font-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          vero enim a animi culpa itaque eligendi quidem, adipisci.
        </p>
      </div>
    </div>
  </section>
</template>
<script></script>
