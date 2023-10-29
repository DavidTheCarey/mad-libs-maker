const express = require('express');
const router = express.Router();
const entriesCtrl = require('../../controllers/api/entries');
const ensureLoggedIn = require("../../config/ensureLoggedIn");


router.get('/', entriesCtrl.index);
router.post('/new', ensureLoggedIn, entriesCtrl.create);
router.delete('/:id', ensureLoggedIn, entriesCtrl.delete);
// router.put('/edit/:id', ensureLoggedIn, entriesCtrl.edit);


module.exports = router;