const express = require('express')
const app = express()

app.use(express.json())

const port = 4000

// const person = {
//     name: '',
//     age: '',
// }
app.get('/', (req, res) => {
    res.send()
})
app.post('/send', (req, res) => {
    let name = req.body.name
    let age = req.body.age


    res.send(`${name} ${age}`)
    console.log(`${name} ${age}`)

})
app.listen(port, console.log(`server is on ${port}`))