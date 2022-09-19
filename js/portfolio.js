let bcrypt = require('bcrypt')
let password = "MarvieCodie"
let password1 = "Marviecoolio"

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    })
})
