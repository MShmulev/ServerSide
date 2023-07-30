const express = require("express");
const router = express.Router()
const {getContacts,createContact,getContact,updateContact,DeleteContact} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");


router.use(validateToken);
router.route("/").get(getContacts).post(createContact)
router.route("/:d").get(getContact).put(updateContact).delete(DeleteContact)





module.exports = router;