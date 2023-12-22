<template>
  <nav
    class="flex items-center justify-between border-dark dark:border-white dark:bg-dark bg-white p-4 h-16"
    @mouseleave="closeAllDropdown()"
  >
    <div class="hidden md:flex items-center justify-center w-full gap-10">
      <template v-for="item in navigationItems">
        <div
          v-if="item.challenges"
          class="flex justify-center"
        >
          <button
            class="dark:text-white text-lg text-dark group"
            :class="item.isOpen ? 'dark:text-purple-600 text-purple-600' : ''"
            @click="item.isOpen = !item.isOpen"
            @mouseover="closeAllDropdown(), (item.isOpen = true)"
          >
            <span
              class="group-hover:text-purple-600 transition-colors duration-500"
            >
              {{ item.name }}
            </span>
            <Icon
              name="ic:round-keyboard-arrow-up"
              size="24"
              class="transition-all duration-500 group-hover:text-purple-600"
              :class="item.isOpen ? 'rotate-180 text-purple-600' : ''"
            />
          </button>

          <div
            v-if="item.isOpen"
            class="dark:bg-dark bg-white p-2 outline absolute rounded top-16"
            @mouseleave="item.isOpen = false"
          >
            <ul>
              <li
                v-for="challenge in item.challenges"
                class="hover:bg-purple-600 p-2 rounded dark:text-white text-lg text-dark cursor-pointer"
                @click="$router.push(challenge.href)"
              >
                {{ challenge.name }}
              </li>
            </ul>
          </div>
        </div>
        <a
          v-else
          :href="item.href"
          class="dark:text-white text-lg text-dark"
          @mouseover="closeAllDropdown()"
        >
          <span class="transition-colors duration-500 hover:text-purple-600">{{
            item.name
          }}</span>
        </a>
      </template>
    </div>
    <ColorModeToggle />
    <LanguageSelect class="mx-5" />
    <!-- <button
      class="block md:hidden text-white"
      @click="toggleMenu"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <template v-if="isMenuOpen">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </template>
        <template v-else>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </template>
      </svg>
    </button> -->
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

// const toggleMenu = () => {
//   isMenuOpen.value = !isMenuOpen.value
// }

function closeAllDropdown() {
  navigationItems.value.forEach((item) => (item.isOpen = false))
}

const navigationItems = ref([
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Challenges',
    href: '#',
    isOpen: false,
    challenges: [
      {
        name: 'Multi Step Form',
        href: '/multi-step-form'
      },
      {
        name: 'Challenge 2',
        href: 'challenge-2'
      },
      {
        name: 'Challenge 3',
        href: 'challenge-3'
      }
    ]
  },
  {
    name: 'Services',
    href: '#'
  },
  {
    name: 'Contact',
    href: '#'
  }
])
</script>

<style scoped></style>
