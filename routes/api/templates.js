const express = require('express');
const router = express.Router();
const templatesCtrl = require('../../controllers/api/templates');
const ensureLoggedIn = require("../../config/ensureLoggedIn");


router.get('/', templatesCtrl.index);
router.post('/new', ensureLoggedIn, templatesCtrl.create);
router.delete('/:id', ensureLoggedIn, templatesCtrl.delete);
router.put('/edit/:id', ensureLoggedIn, templatesCtrl.edit);


module.exports = router;