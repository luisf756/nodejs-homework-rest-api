// 
const { Schema, model } = require('mongoose');
const Joi = require('joi');

// const validateContact=Joi.object({
//     name: Joi.string().required(),
//     email: Joi.string()
//     .email({minDomainSegments: 2})
//     .messages({
//         "String.pattern.base":
//         "invalid email. please provide a valid email address"
//     }).required(),
//     phone: Joi.string().required(),
//     favorite: Joi.boolean().required(),
// })

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
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      }
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
