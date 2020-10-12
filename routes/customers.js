const Joi = require('joi');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Customer = mongoose.model('Customer', new mongoose.Schema({
    name: {
        type: String,
        minlength: 5,
        maxlength: 50,

    },
    isGold: {
        type: Boolean,
        default: false
    },
    phone: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
}));
router.post('/', async (req, res) => {

    let customer = new Customer({
        name: req.body.name,
        isGold: req.body.isGold,
        phone: req.body.phone
    });
    customer = await customer.save().then(function () {
        console.log("Customer saved");
        res.send(customer);
    }).catch(reason => {
        console.log('validation error', reason.message);
        res.status(400).send(reason.message);
    })
});

router.put('/:id',async (req, res) => {
    const {error} = validateCustomer(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    let customer = await Customer.findByIdAndUpdate({_id:req.params.id},
        {$set:{phone:req.body.phone},
    });
    res.send(customer);
});

router.delete('/:id',async (req, res) =>{
    let customer = await Customer.findByIdAndRemove({_id:req.params.id});
    res.send(customer);
});


function validateCustomer(customer) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        phone: Joi.string().min(5).max(50).required(),
        isGold: Joi.boolean()
    };
    return Joi.validate(customer, schema);
}
        module.exports = router;