const express = require('express')
const cardRouter = express.Router()
const card = require('../models/card')

cardRouter.get('/', (req, res) => {       
    card.find((err, card) => {
        if(err) return res.status(500).send(err)
        return res.status(200).send(card)

    })
})
cardRouter.get('/:id', (req, res) => {
    card.findById({_id: req.params.id }, (err, card) => {
        if(err) return res.status(500).send(err);
        return res.status(200).send(card)
    })
})

cardRouter.post('/', (req, res) => {      
    const newCard = new card(req.body)
    newCard.save((err, newcard) => {
        if(err) return res.status(500).send(err)
        return res.status(201).send(newcard)
    })
})

cardRouter.put('/:id', (req, res) => {
    card.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (err, updatedCard) => {
            if(err) return res.status(500).send(err)
            return res.send(updatedCard)
        }
    )
})

cardRouter.delete('/:id', (req, res) => {
    card.findByIdAndRemove(req.params.id, (err, deletedCard) => {
        if(err) return res.status(500).send(err)
        return res.send ({message: 'item has been sucesfully deleted', deletedCard})
    })
})

module.exports = cardRouter