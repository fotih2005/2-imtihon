const elCard = document.querySelector('.header-section__nav-wrapper')
const elCardBtn = document.querySelectorAll('.header-section__hamburger')

elCardBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.header-section__nav-wrapper').classList.toggle('header-section__hamburger--active')
  })
})
