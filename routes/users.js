const express = require('express');
const router = express.Router();
const User = require('../schemas/users');

// 사용자 전체 조회
router.get('/', (req, res, next) => {
    User.find()
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            console.error(err);
            next(err);
        })
});

// 유저 생성
router.post('/', (req, res, next) => {
    const user = new User({
        name: req.body.name,
        password: req.body.password,
    })

    user.save()
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.error(err);
            next(err);
        })
})

// 수정용
// router.route("/").post(async (req, res, next) => {
//     try {
//         const user = await User.create({
//             name: req.body.name,
//             password: req.body.password,
//         });
//         console.log(user);
//         res.status(201).json(user);
//     } catch (err) {
//         console.error(err);
//         next(err);
//     }
// })


module.exports = router;