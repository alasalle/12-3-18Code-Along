const gatekeeper = (req, res, next) => {
  const pass = req.query.pass;
  pass === "ferret"
    ? next()
    : res.status(400).json({ message: "invalid password" });
};

// const other = (req, res, next) => {

// }

module.exports = {
  gatekeeper: gatekeeper,
  // other: other
}
// module.exports.gatekeeper = gatekeeper;