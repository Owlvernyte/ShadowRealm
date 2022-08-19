const index = (req, res) => {
    res.status(200).send({ message: 'OK' });
}

module.exports = {
    index,
}