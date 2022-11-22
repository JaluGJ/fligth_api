require("dotenv").config()
const app = require("./src/app")
const { PORT } = process.env

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
// .catch((error)=>{
//     console.log("error",error)
// })