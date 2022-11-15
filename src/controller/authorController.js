const authorModel = require("../models/authorModels")




// ----------------------------------------- Email Validation ------------------------------------------------------

const emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
const nameRegex = /^[ a-z ]+$/i

//circumflex
// ----------------------------------------- CREATE AUTHOR ---------------------------------------------------------

const createAuthor = async function (req, res) {
  try {
    const author_data = req.body

    // -------------------------- Checking for all the fields --------------------------------

    if (Object.keys(author_data).length == 0) {
      return res.status(400).send({
        status: false,
        msg: "Please Provide Data"
      })
    }

    if (!author_data.fname) {
      return res.status(400).send({
        status: false,
        msg: "fname is required"
      })
    }
    author_data.fname = author_data.fname.trim()

    if (!author_data.fname.match(nameRegex)) {
      return res.status(400).send({
        status: false,
        msg: "Please Provide correct input for fname"
      })
    }
    if (!author_data.lname) {
      return res.status(400).send({
        status: false,
        msg: "lname is required"
      })
    }
    author_data.lname = author_data.lname.trim()

    if (!author_data.lname.match(nameRegex)) {
      return res.status(400).send({
        status: false,
        msg: "Please Provide correct input for lname"
      })
    }

    if (!author_data.title) {
      return res.status(400).send({
        status: false,
        msg: "title is required"
      })
    }
    let titles=["Mr", "Mrs", "Miss"]
    if (!(titles.includes(author_data.title))) {
      return res.status(400).send({
        status: false,
        msg: "Invalid title, Please select from Mr, Mrs, Miss"
      }) // enum checked
    }
    if (!author_data.email) {
      return res.status(400).send({
        status: false,
        msg: "email is required"
      })
    }
    if (!emailRegex.test(author_data.email))
      return res.status(400).send({
        status: false,
        message: "Please Enter Email in valid Format"
      })

    let duplicateEmail = await authorModel.findOne({
      email: author_data.email
    });
    if (duplicateEmail) {
      return res.status(400).send({
        status: false,
        msg: "Email already exists!"
      });
    }
    if (!author_data.password) {
      return res.status(400).send({
        status: false,
        msg: "password is required"
      })
    }

    let authorCreated = await authorModel.create(author_data)
    res.status(201).send({
      status: true,
      Message: "New author created successfully",
      author_data: authorCreated
    })

  } catch (error) {
    res.status(500).send({
      status: false,
      Error: error.message
    })
  }
}

// ----------------------------------------- GET AUTHOR ------------------------------------------------------------

const getAuthor = async function (req, res) {
  let alldata = await authorModel.find()
  res.status(201).send({
    status: true,
    data: alldata
  })
}

//         <<<==========ooo==========>>>

module.exports.createAuthor = createAuthor;
module.exports.getAuthor = getAuthor