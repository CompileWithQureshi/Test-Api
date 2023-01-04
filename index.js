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
    console.log(data);
})
app.post('/send', (req, res) => {
    const { name, age, id } = req.body
    const recivedData = {
        id, name, age,
    }
    data.push(recivedData)
    console.log(recivedData);

    if (recivedData.error) {
        res.status(400).send({ message: recivedData.error.details[0].message })
    } else {
        return res.send(recivedData)
    }

})

app.put('/:id', (req, res) => {
    const findData = data.find(c => c.id === parseInt(req.params.id))
    if (!findData) {
        res.status(404).send({ message: `user not found` })
        res.send(findData)
    }

    findData.name = req.body.name
    res.send(findData)
    if (findData.error) {
        res.status(400).send({ message: findData.error.details[0].message })
    }

})


app.delete('/del/:id', (req, res) => {
    const findData = data.find(c => c.id === parseInt(req.params.id))
    if (!findData) {
        res.status(404).send({ message: `user not found` })
        res.send(findData)
    }

    const deletData = data.indexOf(findData)
    data.splice(deletData, 1)

    res.send(findData)
})
app.listen(port, console.log(`server is on ${port}`))