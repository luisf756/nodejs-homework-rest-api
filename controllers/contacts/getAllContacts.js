const { basedir } = global;
const { Contact } = require(`${basedir}/models/contact`);


const getAllContacts = async (req, res, next) => {
    // const { id: owner } = req.user;
    // console.log("global ",basedir);
    const result = await Contact.find(); //{owner}
    res.json(result)
    
};


module.exports = getAllContacts;