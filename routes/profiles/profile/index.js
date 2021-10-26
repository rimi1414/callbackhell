'use strict';


const router = require('express-promise-router')({
        mergeParams: true
    }),
    logic = require('./logic')

router.get('/',
    (req, res) => {
       logic.getPofile(Number(req.params.profileId),  result=> {
            res.status(200).json({result});
        });

    });

router.put('/',
    (req, res) => {
        logic.updateProfile(Number(req.params.profileId), req.body.profile, result =>{
            res.status(200).json({result});
        }) ;

    });
router.delete('/',
    (req, res) => {
        const result = logic.removeProfile(Number(req.params.profileId));
        res.status(200).json({result});
    });
router.patch('/',
    (req, res) => {
        const result = logic.updateProfileType(Number(req.params.profileId), req.body.profile);
        res.status(200).json({result});
    });

router.use('/friends', require('./friends'));

module.exports = router;
