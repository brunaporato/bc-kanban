export function shortTexts() {
  const elements = document.querySelectorAll('.card p')
  const limit = 70

  for (let p of elements) {
    const overLimit = p.innerText.length > limit
    const addDots = overLimit ? "..." : ""
    p.innerText = p.innerText.substring(0, limit) + addDots
  }
}