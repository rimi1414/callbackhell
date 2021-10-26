'use strict';


const router = require('express-promise-router')({
        mergeParams: true
    }),
    logic = require('./logic')

router.get('/',
    (req, res) => {
        logic.getPofiles(req.query, function (result) {
            res.status(200).json({result});
        });

    });

router.post('/',
    (req, res) => {
        logic.createProfile(req.body.profile, result =>{
            res.status(200).json({result});
        });

    });


router.use('/:profileId', require('./profile'));

module.exports = router;
