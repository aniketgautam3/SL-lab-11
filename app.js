const express = require("express")
const app = express()
const mongoose = require("mongoose")
const url = "mongodb+srv://aniket:aniket2001@cluster0.xjscy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const mySchema = require('./schema');
mongoose.connect(url).then(() => console.log("connected to Database"))
app.use(express.json())
app.post("/add-new-student", async (req, res) => {
    const mystudent = req.body.studentName;
    const myregno = req.body.regNo;
    const mymarks = req.body.marks;

    try {
        const newproject = new mySchema({
            studentName: mystudent,
            regNo: myregno,
            marks: mymarks
        })
        const savedproject = await newproject.save()
        res.json({ "message": "Student is saved", "data": savedproject })
    } catch (err) {
        res.json(err);
    }
})

app.use("/", (req, res) => {
    //res.send("Hello");
    res.json({ "message": "Express server started" })
})

app.listen(3001, () => console.log("Express Server Strarted"))
