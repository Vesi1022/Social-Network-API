const { ObjectId } = require('mongoose').Types;
const {  UserName, Portfolio } = require('../models');


const headCount = async () =>
  UserName.aggregate()
    .count('Portfolio')
    .then((usercount) => usercount);


  getUSerthought(req, res) 
    User.findOne({ _id: req.params.UserName })
      .select('-__v')
      .then(async (Portfolio) =>
        !UserName
          ? res.status(404).json({ message: 'No details found!' })
          : res.json({
              UserName,
              Thought: await grade(req.params.UserName),
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  }
  