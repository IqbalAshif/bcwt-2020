// Controller
'use strict';
const catModel = require('../models/catModel');

const cats = catModel.cats;

const cat_list_get = async (req, res) => {
  const cats = await catModel.getAllCats();
  res.json(cats);
};

const cat_get_by_id = (req, res) => {
res.json(cats.filter(cat => cat.id === req.params.id ).reduce(cat => cat));
};

const cat_create = (req, res) => {
    //here we will create cat with data coming from req
res.send(`cat created with id:...`);
};

   
module.exports = {
  cat_list_get,
  cat_get_by_id,
  cat_create
};