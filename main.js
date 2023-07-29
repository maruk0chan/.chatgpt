// *** ChatGPT User Script ***
// @github: https://github.com/lencx/ChatGPT
// @path: /Users/marco.chan/.chatgpt/main.js

function waitForElement(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector))
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector))
        observer.disconnect()
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })
  })
}

window.addEventListener('focus', function () {
  const textarea = document.getElementById('prompt-textarea')
  setTimeout(() => {
    textarea.focus()
  }, 100)
})

window.addEventListener('keydown', async (event) => {
  // Check if Enter key is pressed (key code 13)
  if (event.key === 'Enter') {
    const el = await waitForElement(
      '#__next > div.overflow-hidden.w-full.h-full.relative.flex.z-0 > div.relative.flex.h-full.max-w-full.flex-1.overflow-hidden > div > main > div.flex-1.overflow-hidden > div > div > div > button'
    )

    el.click()
  }
})
