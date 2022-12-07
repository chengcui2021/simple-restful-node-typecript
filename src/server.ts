import app from "./app";
const PORT = process.env.PORT || 3003;

module.exports = app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
})