<template>
  <div class="pb-1 text-3xl font-bold text-indigo-950">Personal info</div>
  <p class="text-gray-400">
    Please provide your name, email address, and phone number.
  </p>
  <form>
    <div class="mt-7 flex flex-col gap-5">
      <MultiStepFormBaseInput
        v-model="personalInfo.name"
        id="name"
        label="Name"
      />
      <MultiStepFormBaseInput
        v-model="personalInfo.email"
        id="email"
        type="email"
        label="Email Address"
      />
      <MultiStepFormBaseInput
        v-model="personalInfo.email"
        id="email"
        type="number"
        label="Phone Number"
        placeholder="e.g. +1 234 567 890"
      />
    </div>
  </form>
</template>

<script setup lang="ts">
defineProps({
  personalInfo: {
    type: Object as PropType<{
      name: string
      email: string
      phone: string
    }>,
    required: true
  }
})
</script>

<style scoped></style>
