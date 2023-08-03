const mongoose = require("mongoose")

const { Schema } = mongoose

const userSchema = new Schema({
    name: {
        type: String,     // 자료형
        required: true,   // 필수 여부
        unique: true,     // 고유 값
        default: true,
    },
    password: {
        type: Number,
        required: true,
    },
    comment: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


// TypeError: schema._preCompile is not a function 에러 나서 수정해본 곳
module.exports = mongoose.model("User", userSchema)
// module.exports = {
//     userCollection: mongoose.model("User", userSchema)
// }