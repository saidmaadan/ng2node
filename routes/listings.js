var express = require('express');
var router = express.Router();

var Listing = require('../models/listing');

router.get('/', function (req, res, next) {
    Listing.find()
        .exec(function (err, listings) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: listings
            });
        });
});

router.post('/', function (req, res, next) {
  var listing = new Listing({
    content: req.body.content
  });
  listing.save(function(err, result){
    if(err){
      return res.status(500).json({
        title: "An error occurred",
        error: err
      });
    }
    res.status(201).json({
      message: "Listing Posted",
      obj: result
    });
  });

});

router.patch('/:id', function (req, res, next) {
    Listing.findById(req.params.id, function (err, listing) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!listing) {
            return res.status(500).json({
                title: 'No Listing Found!',
                error: {message: 'Listing not found'}
            });
        }
        listing.content = req.body.content;
        listing.save(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated listing',
                obj: result
            });
        });
    });
});

router.delete('/:id', function(req, res, next) {
    Listing.findById(req.params.id, function (err, listing) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!listing) {
            return res.status(500).json({
                title: 'No Listing Found!',
                error: {message: 'Listing not found'}
            });
        }
        listing.remove(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Deleted listing',
                obj: result
            });
        });
    });
});

module.exports = router;
