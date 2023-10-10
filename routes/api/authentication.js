const express = require('express');

const { basedir } = global;

const ctrl = require(`${basedir}/controllers/authentication`);

const { ctrlWrapper } = require(`${basedir}/helpers`);

// const { auth } = require(`${basedir}/middlewares`);

const router = express.Router();

router.post('/register', ctrlWrapper(ctrl.register));

router.post('/login', ctrlWrapper(ctrl.login));

// router.get('/logout', auth, ctrlWrapper(ctrl.logout));

module.exports = router;