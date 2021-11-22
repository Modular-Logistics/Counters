const increment = document.querySelector(".increment")
const counterContainer = document.querySelector(".counterContainer")
// function creates a new element
const createElement = (tag, className, parent) => {
    const element = document.createElement(tag)
    element.classList = className
    parent.appendChild(element)
    return element
}

const beforeCounter = createElement("div", "beforeCounter counter" , counterContainer)
const counter = createElement("div", "counter" ,counterContainer)
const afterCounter = createElement("div", "afterCounter counter" , counterContainer)

let counterValue = 0
increment.addEventListener("click", () => {
    
    counter.classList.add("incrementAnimation")
    beforeCounter.classList.add("incrementAnimation")
    afterCounter.classList.add("incrementAnimation")
})
counter.addEventListener("transitionend", () => {
    counter.classList.remove("incrementAnimation")
    beforeCounter.classList.remove("incrementAnimation")
    afterCounter.classList.remove("incrementAnimation")
    counterValue++
    update()
});
function update(){
    beforeCounter.innerHTML = (counterValue -1)
    afterCounter.innerHTML = (counterValue + 1)
    counter.innerHTML = counterValue 
}
update()
