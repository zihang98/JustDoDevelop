const mongoose = require('mongoose');

const { Schema } = mongoose;

const { Types: ObjectId } = Schema;

const commentSchema = new Schema({
    commenter: {
        //type: ObjectId, //TypeError: schema._preCompile is not a function 에러로 수정해봄
        type: String,
        required: true,
        ref: 'User'      // User Schema의 아이디
    },
    comment: {
        type: String,
        requried: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})


// TypeError: schema._preCompile is not a function 에러로 수정
module.exports = mongoose.model('Comment', commentSchema);
// module.exports = {
//     commentCollection: mongoose.model("Comment", commentSchema)
// }