let REQUIRED = 'REQUIRED'
let MIN_LENGTH = 'MIN_LENGTH'

function validate(value, flag, validatorValue) {
    if (flag === REQUIRED) {
        return value.trim().length > 0
    }
    if (flag === MIN_LENGTH) {
        return value.trim().length > validatorValue
    }
}

function userInput(elementId) {
    return document.getElementById(elementId).value
}

function createUser(userName, userPassword) {
    if (!validate(userName, REQUIRED) || !validate(userPassword, MIN_LENGTH, 5)) {
        throw Error('invalid input - username or password is incorrect')
    }
    return {
        userName: userName,
        password: userPassword
    }
}

function signUpHandler(event) {
    event.preventDefault()
    let enteredUserName = userInput("user-input");
    let enteredPassword = userInput("user-password");

    try {
        let newUser = createUser(enteredUserName, enteredPassword)
        console.log(newUser);
        
    } catch {
        alert()
    }
}

function connectForm (formId, formEventHandler) {
    let form = document.getElementById(formId)
    form.addEventListener('submit', formEventHandler)
}

connectForm('userEntry', signUpHandler) 