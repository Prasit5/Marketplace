const Product = require('../models/product');

exports.createProduct = function(req, res) {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description
  });

  product.save(function(err) {
    if (err) {
      console.error(err);
      res.status(500).send('Error creating product');
    } else {
      res.send(product);
    }
  });
};

exports.getProductById = function(req, res) {
  Product.findById(req.params.id, function(err, product) {
    if (err) {
      console.error(err);
      res.status(500).send('Error getting product');
    } else {
      res.send(product);
    }
  });
};

exports.updateProductById = function(req, res) {
  Product.findByIdAndUpdate(req.params.id, { $set: req.body }, function(err, product) {
    if (err) {
      console.error(err);
      res.status(500).send('Error updating product');
    } else {
      res.send(product);
    }
  });
};

exports.deleteProductById = function(req, res) {
  Product.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      console.error(err);
      res.status(500).send('Error deleting product');
    } else {
      res.send('Product deleted successfully');
    }
  });
};
