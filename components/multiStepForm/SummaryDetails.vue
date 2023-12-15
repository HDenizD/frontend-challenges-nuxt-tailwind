<template>
  <MultiStepFormDefaultStep
    title="Finishing Up"
    sub-title="Double-check everthing looks OK before confirming."
  >
    <div class="bg-[#f7f9fe] w-full rounded-md p-5">
      <div class="flex justify-between items-center">
        <div>
          <p class="font-bold text-blue-900">Arcade (Monethly)</p>
          <a
            href=""
            class="underline text-grey-600 opacity-50"
          >
            Change
          </a>
        </div>
        <div>
          <p class="font-extrabold text-blue-900">$9/mo</p>
        </div>
      </div>
      <hr class="my-6" />
      <div class="flex mb-3 justify-between">
        <p class="text-gray-600 opacity-50 font-semibold">Online service</p>
        <p class="text-blue-950 font-semibold text-sm">+$1/mo</p>
      </div>
      <div class="flex last-of-type:mb-0 mb-3 justify-between">
        <p class="text-gray-600 opacity-50 font-semibold">Larger Storage</p>
        <p class="text-blue-950 font-semibold text-sm">+$2/mo</p>
      </div>
    </div>

    <div class="mx-5 flex justify-between">
      <p class="text-gray-500 opacity-70 font-semibold">Total (per year)</p>
      <p class="text-indigo-700 font-bold text-lg">$120/yr</p>
    </div>
  </MultiStepFormDefaultStep>
</template>

<script setup lang="ts"></script>

<style scoped></style>
