// middleware/validation.js
function validateUser(req, res, next) {
    const { firstName, lastName, password, email, phone } = req.body;

    if (!firstName || firstName[0] !== firstName[0].toUpperCase()) {
        return next(new Error('First name must start with a capital letter.'));
    }

    if (!lastName || lastName[0] !== lastName[0].toUpperCase()) {
        return next(new Error('Last name must start with a capital letter.'));
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$/;
    if (!password || !passwordRegex.test(password)) {
        return next(new Error('Password must be at least 8 characters long and include one uppercase letter, one special character, and one numeric character.'));
    }

    if (!email || !email.includes('@')) {
        return next(new Error('Invalid email address.'));
    }

    if (!phone || phone.length < 10) {
        return next(new Error('Phone number must be at least 10 digits long.'));
    }

    next();
}

module.exports = validateUser;
