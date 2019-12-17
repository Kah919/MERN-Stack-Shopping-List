const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route  GET api/items
// @desc   Get all Items
// @access Public

// this actually represents /api/items because it is being called from the server file and it already has /api/items
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1}) // sorts by descending order 
        .then(items => res.json(items))
}); 


module.exports = router;