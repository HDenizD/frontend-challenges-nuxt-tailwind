<template>
  <div class="p-1 flex justify-center items-center overflow-hidden m-12">
    <form
      class="w-[500px] h-[800px] rounded-2xl relative flex justify-center items-center bg-[#121212]"
    >
      <div class="w-[102%] h-[150%] absolute overflow-hidden">
        <div class="bg-gradient-cone w-full h-full"></div>
      </div>
      <div class="z-10 bg-[#121212] absolute w-full h-full">
        <MultiStepFormBaseInput
          v-model="email"
          class="text-dark p-5"
          :auto-complete="'email'"
          id="email"
          label=""
          type="email"
          placeholder="Email"
        />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const email = ref('')
</script>

<style scoped>
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.bg-gradient-cone {
  background: conic-gradient(
    from 180deg at 50% 50%,
    rgba(99, 0, 212, 0) 88%,
    rgba(99, 0, 212, 1) 100%
  );
  /* background-size: contain;
  background-position: center; */

  animation: rotate 5s infinite linear;
}
</style>
