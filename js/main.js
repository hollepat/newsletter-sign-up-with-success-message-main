function submitForm(event) {

    // prevent submission
    event.preventDefault()

    const newsletterEl = document.querySelector('.newsletter')
    const dialogEl = document.querySelector('.dialog')
    
    newsletterEl.classList.toggle('active');
    dialogEl.classList.toggle('active')
}

function dismissDialog() {
    
    const dialogEl = document.querySelector('.dialog')
    const newsletterEl = document.querySelector('.newsletter')
    
    dialogEl.classList.toggle('active')
    newsletterEl.classList.toggle('active');

}