
const express = require('express')
const { basedir } = global;

const ctrl = require(`${basedir}/controllers/contacts`);

const { ctrlWrapper } = require(`${basedir}/helpers`);

const router = express.Router()

const { auth } = require(`${basedir}/middlewares`);


router.get('/:contactId', auth, ctrlWrapper(ctrl.getContactById));

router.post('/', auth, ctrlWrapper(ctrl.addContact));

router.delete('/:contactId', auth, ctrlWrapper(ctrl.removeContact));

router.put('/:contactId', auth, ctrlWrapper(ctrl.updateContactById));

router.patch('/:contactId/favorite', auth, ctrlWrapper(ctrl.updateStatus));

router.get('/', auth, ctrlWrapper(ctrl.getAllFavContacts));
// router.get('/', auth, ctrlWrapper(ctrl.getAllContacts));
router.get('/fav', auth, ctrlWrapper(ctrl.getAllContacts));

module.exports = router;
