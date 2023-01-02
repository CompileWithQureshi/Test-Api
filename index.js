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
    const schema = {
        name: Joi.string().min(3).required(),
        age: Joi.number().min(2).required(),

    };
    const result = Joi.validate(req.body, schema)
    console.log(result);

    const recivedData = {
        id: data.length + 1,
        name: req.body.name,
        age: req.body.age
    }
    data.push(recivedData)
    console.log(recivedData);
    if (result.error) {
        res.status(400).send({ message: result.error.details[0].message })
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

    const { error } = validateData(req.body)
    findData.name = req.body.name
    res.send(findData)
    if (error) {
        res.status(400).send({ message: error.details[0].message })
    }

})
const validateData = () => {
    const schema = {
        name: Joi.string().min(3).required(),
        age: Joi.number().min(2).required(),

    };
    return Joi.validate(data, schema)
}

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