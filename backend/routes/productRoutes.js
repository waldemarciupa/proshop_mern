import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.json(products);
})

router.get('/:id', (req, res) => {
    const product = products.find(product => product._id === req.params.id);
    res.json(product);
})

export default router;