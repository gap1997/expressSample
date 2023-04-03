const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModels")

//@desc get alll Contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler(async (req, res) => {
    const contacts= await Contact.find()
  res.status(200).json(contacts);
});

//@desc create newContacts
//@route POST /api/contacts
//@access public

const createContact = asyncHandler(async (req, res) => {
  console.log("the request body is:", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mendatory");
    }
    const contact = await Contact.create({
        name, email, phone,
    });
  res.status(201).json(contact);
});

//@desc get Contacts
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
    const contact =await Contact.findById(req.param.id)
  res.status(201).json({ massage: `Get Contact  ${req.params.id}` });
});

//@des update Contacts
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
  res.status(201).json({ massage: `updates the Contacts $(req.params.id)` });
});


//@des delete Contacts
//@route DELETE /api/contacts/:id
//@access public
const DeleteContact = asyncHandler(async (req, res) => {
  res.status(201).json({ massage: `Delete the Contacts $(req.params.id)` });
});


module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  DeleteContact,
};