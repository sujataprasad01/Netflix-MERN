const { addToLikedMovies } = require("../controllers/UserControllers")

const router=require("express").Router()

router.post("/add", addToLikedMovies);

module.exports=router;