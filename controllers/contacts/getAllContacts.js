const { basedir } = global;
const { Contact } = require(`${basedir}/models/contact`);


const getAllContacts = async (req, res, next) => {
    // try {
    console.log("global ",basedir);
    const result = await Contact.find();
    res.json(result)
    // } catch (error) {
    //   next(error);
    // }
};


module.exports = getAllContacts;