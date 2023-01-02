const Joi = require('joi')
const express = require('express')
const app = express()

app.use(express.json())

const port = 4000
const data = [
    {
        id: 1,
        name: "sajid",
        age: 22
    },
    {
        id: 2,
        name: "Qureshi",
        age: 22
    },
    {
        id: 3,
        name: "zuhaib",
        age: 22
    }

]

// const person = {
//     name: '',
//     age: '',
// }
app.get('/', (req, res) => {
    res.send(data)
})
app.post('/send', (req, res) => {

    // const recivedData = data.push(name + age)
    const creatData = {
        id: data.length + 1,
        name: req.body.name,
        age: req.body.age

    }
    data.push(creatData)
    res.send(creatData)
    console.log(creatData)

})

app.put('/put', (req, res) => {
    let id = req.params


})
app.listen(port, console.log(`server is on ${port}`))