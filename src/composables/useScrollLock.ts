import { watch, onUnmounted, type Ref } from 'vue'

export function useScrollLock(isLocked: Ref<boolean>) {
  let previousOverflow = ''

  watch(
    isLocked,
    (locked) => {
      if (locked) {
        previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = previousOverflow
      }
    },
    { immediate: true },
  )

  onUnmounted(() => {
    document.body.style.overflow = previousOverflow
  })
}
