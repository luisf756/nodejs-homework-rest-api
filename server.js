
// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000")
// })


const app = require('./app');
const { default: mongoose } = require('mongoose');
const { DB_HOST, PORT } = process.env;

mongoose.set("strictQuery", true);

mongoose.connect(DB_HOST)
.then(() => {
  app.listen(PORT, () => {
    console.log("Database connection successful")
  })
}).catch((err) => {
    console.log(err.message);
    process.exit(1);
});
