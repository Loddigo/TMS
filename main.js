_path =process.cwd()

var express = require("express");
var router = express.Router();
var fs = require("fs");


router.get("/", async(req, res) => {
console.log("deu bom ")
res.json( {
" lord ": "lord"
})
})
module.exports = router 
