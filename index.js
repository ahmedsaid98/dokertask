const express = require("express");
const app = express();
const PORT = 8000
app.get("/", (req, res) => {
 res.send("Home Page")
});
app.listen(PORT , ()=> {
    console.log(`app run at http://localhost:${PORT}`)
})
   

