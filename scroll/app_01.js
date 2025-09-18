const main = document.querySelector("#main")
const valorvertical = document.querySelector(".valor-vertical")
const valorhorizontal = document.querySelector(".valor-horizontal")
const pelota = document.querySelector("#pelota")

function verScroll () {
    let top = main.scrollTop
    let left = main.scrollLeft

    valorvertical.textContent = `V:  ${top}`
    valorhorizontal.textContent = `H:  ${left}`

    pelota.style.top = `${top}px`
    pelota.style.left = `${left}px`
    pelota.style.transform = `scale(${(top/30)})`
}

main.addEventListener("scroll", verScroll)
