//connecting to mongoDB
const DATABASE_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@nomad.hot67aq.mongodb.net/?retryWrites=true&w=majority`

const PORT = process.env.PORT || 3000;

module.exports = { DATABASE_URL, PORT }