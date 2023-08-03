const express = require("express")

const path = require("path")
const createError = require("http-errors")
const cookieParser = require("cookie-parser")
const logger = require("morgan")

const app = express()
const port = 3000

const usersRouter = require("./routes/users")
const indexRouter = require("./routes/index")
const commentRouter = require("./routes/comment")

//스키마 연결
const connect = require("./schemas")
connect()

app.get("/", (req, res) => {
    res.send("main page")
})

app.use(cookieParser())

app.use("/users", usersRouter)
app.use("/comments", commentRouter)
app.use("/", indexRouter)


app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})