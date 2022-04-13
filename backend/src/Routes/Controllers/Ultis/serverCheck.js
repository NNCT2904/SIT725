// Example: /serverCheck
const serverChecker = (req, res) => {
    console.log(`Server running!`);
    res.status(200).json(`Server Running!`);
};

module.exports = serverChecker;