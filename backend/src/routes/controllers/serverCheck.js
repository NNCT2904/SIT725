// Example: /serverCheck
const serverChecker = (req, res) => {
    console.log(`Server running!`);
    res.send(`Server Running!`);
};

module.exports = serverChecker;