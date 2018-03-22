var msgArr = [];
var id = 0;
module.exports = {
  Create: (req, res) => {
    const { text, time } = req.body;
    msgArr.push({ id, text, time });
    id++;
    res.status(200).json(msgArr);
  },

  Read: (req, res) => {
    res.status(200).json(msgArr);
  },

  Update: (req, res) => {
    const { text } = req.body;
    const updateId = req.params.id;
    const msgIndex = msgArr.findIndex(message => message.id == updateId);
    let message = msgArr[msgIndex];
    msgArr[msgIndex] = {
      id: message.id,
      text: text || message.text,
      time: message.time
    };

    res.status(200).json(msgArr);
  },

  Delete: (req, res) => {
    // console.log(req);
    const deleteID = req.params.id;
    messageIndex = msgArr.findIndex(message => message.id == deleteID);
    msgArr.splice(messageIndex, 1);
    res.status(200).json(msgArr);
  }
};
