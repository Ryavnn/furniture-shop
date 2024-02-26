const counter = document.getElementById("counter")
const cartBtn =  document.querySelectorAll(".add-cart")
const openCart = document.querySelector(".cart-btn")
const closeCart = document.querySelector(".close-cart-btn")
const cart = document.querySelector(".cart")
const overlay = document.querySelector(".overlay")
let count = 0

cartBtn.forEach(button =>{
    button.addEventListener('click', ()=> {
        count++
        counter.textContent = count
    })
})
openCart.addEventListener('click',()=>{
    cart.classList.add('active')
    overlay.classList.add('active')

})
closeCart.addEventListener('click', ()=>{
    cart.classList.remove('active')
    overlay.classList.remove('active')
})
