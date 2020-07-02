// http://clubmate.fi/remove-a-class-name-from-multiple-elements-with-pure-javascript/
// https://gist.github.com/paulirish/5d52fb081b3570c81e3a
const createList = () => {
  const divCounter = document.querySelector("div.counter")
  const pCounter = document.createElement("p")
  pCounter.innerHTML = `<span></span>px is scrolled down, now`
  divCounter.appendChild(pCounter)
  const listUl = document.createElement("ul")
  divCounter.appendChild(listUl)
  let numberOfElement1 = [...document.querySelectorAll("article>h3")]

  for (i = 0; i < numberOfElement1.length; i++) {
    let chapterTitle = numberOfElement1[i].textContent
    const ulLi = document.createElement("li")
    ulLi.innerHTML = `<a href="#chapter${i}">${chapterTitle}</a>`
    listUl.appendChild(ulLi)
  }
}

const removeClasses = () => {
  const els = document.getElementsByClassName("active")
  if (els[0]) {
    els[0].classList.remove("active")
  }
}

const scrollSpy = () => {
  const pixelsToTop = window.scrollY // Window.screenY aka window.scrollY

  document.querySelector("div.counter>p>span").innerHTML = pixelsToTop

  let numberOfElement1 = document.querySelectorAll("article>h3")
  let lastChapterNumber = numberOfElement1.length
  let numberOfElement2 = document.querySelectorAll("div.counter>ul>li")
  for (i = 0; i < numberOfElement1.length; i++) {
    let j = i + 1
    let chapter = numberOfElement1[i].offsetTop - pixelsToTop
    let chapterNextToTop
    let title = document.querySelectorAll("h3")[i].textContent
    j < lastChapterNumber
      ? (chapterNextToTop = numberOfElement1[j].offsetTop - pixelsToTop)
      : (chapterNextToTop = 2)
    numberOfElement2[
      i
    ].innerHTML = `<a href="#chapter${j}">[${j}] ${title} [${chapter}px to top]</a>`
    if (chapter <= 1 && chapterNextToTop > 1) {
      removeClasses()
      numberOfElement2[i].classList.add("active")
    }
  }
}
window.onload = createList()
window.addEventListener("scroll", scrollSpy)
window.addEventListener("resize", scrollSpy)
window.onload = scrollSpy()
