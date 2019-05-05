let AddCreatedDate = (req, res, next) => {
  if (req.method === "POST") {
    let id = parseInt(req.body.id);
    let date = new Date();
    req.body.date = date;
    req.body.id = id;
  }
  next();
};

module.exports = AddCreatedDate;
