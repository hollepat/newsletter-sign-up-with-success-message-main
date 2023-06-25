function submitForm(event) {

    // prevent submission
    event.preventDefault()

    const newsletterEl = document.querySelector('.newsletter')
    const dialogEl = document.querySelector('.dialog')
    
    newsletterEl.classList.toggle('active');
    dialogEl.classList.toggle('active')

    // get email
    const inputEl = document.querySelector('#email-input')
    let email_address = inputEl.value

    // change it in dialog success
    const textEl = document.querySelector('#show-email')
    email_address = (email_address === '') ? 'ash@loremcompany.com' : email_address
    textEl.innerText = email_address
    
}

function dismissDialog() {
    
    const dialogEl = document.querySelector('.dialog')
    const newsletterEl = document.querySelector('.newsletter')
    
    dialogEl.classList.toggle('active')
    newsletterEl.classList.toggle('active');

}