import { onMounted, onUnmounted, ref } from 'vue'

export const useScrollReveal = () => {
  const isVisible = ref(false)

  const observer = ref(null)

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        if (observer.value) {
          observer.value.unobserve(entry.target)
        }
      }
    })
  }

  const setupObserver = (element) => {
    observer.value = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    })

    if (element) {
      observer.value.observe(element)
    }
  }

  onUnmounted(() => {
    if (observer.value) {
      observer.value.disconnect()
    }
  })

  return { isVisible, setupObserver }
}

export const useScrollPosition = () => {
  const scrollY = ref(0)
  const isAtTop = ref(true)

  const handleScroll = () => {
    scrollY.value = window.scrollY
    isAtTop.value = window.scrollY < 50
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return { scrollY, isAtTop }
}

export const useTypeWriter = (text, speed = 50) => {
  const displayedText = ref('')
  let index = 0

  const start = () => {
    const interval = setInterval(() => {
      if (index < text.length) {
        displayedText.value += text.charAt(index)
        index++
      } else {
        clearInterval(interval)
      }
    }, speed)
  }

  onMounted(() => {
    start()
  })

  return { displayedText }
}
