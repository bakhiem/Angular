const express = require("express");
const router = express.Router();

const authController = require("./controller");
router.post('/',(req,res) => {
    let user = JSON.parse(req.query.user);
    authController.login(user)
    .then(userInfo => {
        req.session.userInfo = userInfo;
        res.send(req.session.userInfo)
    })
    .catch(error => res.status(error.status).send(error.err))
})

router.delete('/',(req,res) => {
    req.session.destroy();
    res.send('Logout');
});

module.exports = router;