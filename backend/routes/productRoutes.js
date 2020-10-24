import express from 'express';
import Product from '../models/productModel';

const router = express.Router();


router.get('/', async (req, res) => {
    const products = Product.find({})
    res.json(products);
})

router.get('/:id', (req, res) => {
    const product = products.find(product => product._id === req.params.id);
    res.json(product);
})

export default router;