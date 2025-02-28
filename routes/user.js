const {Router} = require('express');
const userRouter = Router();

userRouter.get('/', (req, res) => {
    res.send('Hello World!');
})



module.exports = userRouter;