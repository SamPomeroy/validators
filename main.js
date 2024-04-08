

/**
 * Checks if a given string is empty.
 */
function isEmpty(str) {
    return str.length === 0

}

/**
 * Checks if a given string meets the criteria of a strong password.
 */
function isStrongPassword(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasSpecialChars = password.match(/[!@#$%^&*()\-,.?><]/g) || [];
    
    if(password.length >= minLength && hasUpperCase && hasLowerCase && hasSpecialChars.length){
        return true
    }else{
        return false
    }
    // Implementation here
}

/**
 * Checks if a given string is a valid email address.
 */
function isEmail(email) {
    var reg = /\S+@\S+\.\S+/;
    return reg.test(email);
    // Implementation here
}

/**
 * Checks if a given string contains only alphabetic characters.
*/
function isAlpha(str) {
    return /^[a-zA-Z]+$/.test(str);
    // Implementation here
}

/**
 * Checks if a given string contains only alphanumeric characters.
 */
function isAlphanumeric(str) {
    return /^[a-zA-Z0-9]+$/.test(str);
    // Implementation here
}

module.exports = {
    isEmail,
    isEmpty,
    isAlpha,
    isAlphanumeric, 
    isStrongPassword
}