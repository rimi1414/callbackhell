'use strict';


const router = require('express-promise-router')({
        mergeParams: true
    }),
    logic = require('./logic')

router.get('/',
    (req, res) => {
        const result = logic.getFriend(Number(req.params.profileId), req.params.friendType);
        res.status(200).json({result});
    });

// router.put('/',
//     (req, res) => {
//         const result = logic.updateProfile(Number(req.params.profileId), req.body.profile);
//         res.status(200).json({result});
//     });
// router.delete('/',
//     (req, res) => {
//         const result = logic.removeProfile(Number(req.params.profileId));
//         res.status(200).json({result});
//     });

module.exports = router;
