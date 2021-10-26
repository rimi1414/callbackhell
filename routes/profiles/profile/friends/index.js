'use strict';


const router = require('express-promise-router')({
        mergeParams: true
    }),
    logic = require('./logic')

router.get('/',
    (req, res) => {
        logic.getFriends(Number(req.params.profileId), result =>{
            res.status(200).json({result});
        });

    });

router.post('/',
    (req, res) => {
        logic.createFriends(req.body.friends, Number(req.params.profileId), result=>{
            res.status(200).json({result});
        } );

    });

router.use('/:friendType', require('./friend'));
module.exports = router;
