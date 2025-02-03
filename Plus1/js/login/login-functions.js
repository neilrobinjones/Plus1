const usernameEl = document.querySelector("#username")
const passwordEl = document.querySelector("#pass-word")

function showPassword() {
    let x = document.getElementById("pass-word")
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}

document.querySelector('#login-button').addEventListener('click', () => {
  
  const entries = JSON.parse(localStorage.getItem('registeredUsers'));
  let found = false;

  entries.forEach(entry => {
    if(entry.email === usernameEl.value && entry.password === passwordEl.value) {
      found = true
      if(found = true) {
        location.assign(`/home.html#${entry.id}`)
      } 
    } else {
      alert('You\'re password and email do not match')
    }
  })
  
  

  console.log(usernameEl.value)
  console.log(passwordEl.value)
})

document.querySelector('#new-user-button').addEventListener('click', () => {
  location.assign('/register.html')
})
