import { ref } from 'vue'

export function useColorMode() {
  const isDark = ref(false)

  function toggleDarkMode() {
    isDark.value = !isDark.value

    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
  return {
    isDark,
    toggleDarkMode
  }
}
