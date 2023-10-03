const getAllContacts = require('./getAllContacts');
const getContactById = require('./getContactById');
const addContact = require('./addContact');
const removeContact = require('./removeContact');
const updateContactById = require('./updateContactById');
const updateStatus = require('./updateStatus');

module.exports = {
    getAllContacts,
    getContactById,
    addContact,
    removeContact,
    updateContactById,
    updateStatus
}