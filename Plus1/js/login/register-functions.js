// read existing notes from local storage
const getRegisteredUsers = () => {
    const usersJSON = localStorage.getItem('registeredUsers')

    try {
        return usersJSON ? JSON.parse(usersJSON) : []
    } catch (e) {
        return []
    }
}

const firstNameEl = document.querySelector("#firstName")
const lastNameEl = document.querySelector("#lastName")
const genderEl = document.querySelector("#gender")
const emailEl = document.querySelector("#email")
const passwordEl = document.querySelector("#password")

//storing the new user in the local storage 
document.querySelector('#registration-complete-button').addEventListener('click', () => {
    const id = uuidv4()

    users.push({
        id: id,
        gender: genderEl.value,
        firstName: firstNameEl.value,
        lastName: lastNameEl.value,
        email: emailEl.value,
        password: passwordEl.value
    })
    localStorage.setItem('registeredUsers', JSON.stringify(users))
    location.assign('/index.html')
})

function showPassword() {
    let x = document.getElementById("password")
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}