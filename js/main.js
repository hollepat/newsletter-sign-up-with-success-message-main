function submitForm(event) {

    // prevent submission
    event.preventDefault()

    
    // get email
    const inputEl = document.querySelector('#email-input')
    let email_address = inputEl.value
    
    // check email
    if (!validateEmail(inputEl)) {
        return
    }
    
    // change email in dialog success message
    const textEl = document.querySelector('#show-email')
    textEl.innerText = email_address
    
    // switch windows content
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

    // reset input
    document.form1.email1.classList.remove('error')
    document.form1.email1.value = ''
}

function validateEmail(input) {

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value !== '' && input.value.match(validRegex)) {  
      return true
    } else {  
      document.form1.email1.focus()
      input.classList.add('error')
      return false
    }
  }