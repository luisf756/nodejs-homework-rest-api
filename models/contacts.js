// 
const { Schema, model } = require('mongoose');
const Joi = require('joi');

const contactSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Set name for contact'],
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
}, { versionKey: false, timestamps: true })

const Contact = model('contact', contactSchema);

const contactAddSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    favorite: Joi.boolean(),
})
    
const updateFavoriteSchema = Joi.object({
    favorite: Joi.bool().required(),
});

const schemas = {
    add: contactAddSchema,
    updateFavorite: updateFavoriteSchema,
}

module.exports = {
    Contact,
    schemas
};

// const fs = require('fs/promises')
// const path = require("path")
// const contactsPath = path.join (__dirname, 'contacts.json');

// const { v4: uuidv4 } = require('uuid');


// const renderContact = async (contacts) => { 
//   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
// }

// const listContacts = async () => {
//   const data = await fs.readFile(contactsPath);
//   return JSON.parse(data);
// }

// const getContactById = async (id) => {
//   const contacts = await listContacts();
//   const result = contacts.find(item => item.id === id);
//   if (!result) {
//     return null;
//   }
//   return result;
// }

// const removeContact = async (id) => {
//   const contacts = await listContacts();
//   const index = contacts.findIndex(item => item.id === id);

//   if (!index) {
//     return null;
//   }

//   const [removeContact] = contacts.splice(index, 1);
//   await renderContact(contacts);
//   return removeContact;
// }

// const addContact = async ({name, email, phone}) => {
//   const contacts = await listContacts();
  
//   console.log(name);
//   const newContact = {
//     id: uuidv4(),
//     name,
//     email,
//     phone
//   }
//   contacts.push(newContact);
//   await renderContact(contacts);
//   return newContact;
// }

// const updateContact = async (id, { name, email, phone }) => {
//   const contacts = await listContacts();
//   const index = contacts.findIndex(item => item.id === id);

//   if (index === -1) {
//       return null;
//   }

//   contacts[index] = {
//     id,
//     name,
//     email,
//     phone
// };

// await renderContact(contacts);
// return contacts[index];
// }


// module.exports = {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
//   updateContact,
// }