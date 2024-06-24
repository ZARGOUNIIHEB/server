const express = require('express')
const app = express()

//Routes

app.get('/api', (req, res) => {
    res.send(
        {
            "users": ["userOne", "userTwo", "userThree", 'userFour']
        }
    )
})

app.listen(5000, () => {
    console.log("Connected to the port 5000")
})