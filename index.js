const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());
let review = [
    {id: 1, name: 'Jai', rating: 4},
    {id: 2, name: 'hello brother', rating: 5},
    {id: 3, name: 'Sye', rating: 4}
];
app.get('/api/review', (req, res) => {
    res.send(review);

});
//path variable(:id)
app.get('/api/review/:id', (req, res) => {
    let id = parseInt(req.params.id);
    const rev = review.find(c => c.id === id);
    if (!rev)
        return res.status(404).send(`The movie with the ID ${id} was not found.`);
    res.send(rev);
});
//path variable (:name)
app.get('/api/review1/:name',(req,res)=>{
    let name=String(req.params.name);
    const rev1=review.find(c=>c.name === name);
    if (!rev1)
        return res.status(404).send(`The movie with the name ${name} was not found.`);
    res.send(rev1);

});
//path variable (:rating)
app.get('/api/review2/:rating',(req,res)=>{
    let rating=parseInt(req.params.rating);
    const rev2=review.find(c=>c.rating === rating);
    const rev3=rev2;
    if (!rev2)
        return res.status(404).send(`The movie with the rating ${rating} was not found.`);
    res.send(rev2);
    res.send(rev3);

});
app.post('/api/review', (req, res) => {
    const { error } = validateMovies(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const rev = {
        id: review.length + 1,
        name: req.body.name
    };
    review.push(rev);
    res.send(rev);
});

let port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('server started listening on port number', port);
});

function validateMovies(rev) {
    const schema = {
        name: Joi.string().min(5).required()
    };

    return Joi.validate(rev, schema);
}