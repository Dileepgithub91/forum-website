const Topic = require('../models/topicModel')

//..............addTopic...............

const addTopic = async (req, res) => {
  const { desc, img } = req.body;
  const username = req.username;

  if (!desc) {
    return res.status(400).send({ status: false, message: "Missing desc" });
  }
  if (!username) {
    return res.status(400).send({ status: false, message: "Missing Username" });
  }
  if (!img) {
    return res.status(400).send({ status: false, message: "Missing img" });
  }

  try {
    const topic = await Topic.create({
      desc: desc,
      img: img,
      username: username,

    });

    return res.status(201).send({ status: true, message: 'Topic created successfully',topic });
  } 
  catch (error) {
    
    return res.status(500).send({ status: false, error: 'Error creating Topic',error });
  }
};

//........delete topic................

const deleteTopic = async (req, res) => {
  const username = req.username;
  try {
    const deleted = await Topic.destroy({
      where: { username: username }
    });
    return res.status(200).send({ status: true, message: "Topic deleted successfully",deleted });
    }
   
  catch (error) {
    return res.status(500).send({ status: false, error: "Error deleting Topic",error });
  }
};



module.exports = { addTopic, deleteTopic };
