const { Checkbox } = require('@material-ui/core');
const mongoose = require('mongoose');
const { isString } = require('util');


// Schema
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    name: String,
    email:String,
    phone: String,
    village: String,
    message: String,
    
    date: {
        type: Date,
        default: new Date()
    }
});

// Model
const BlogPost = mongoose.model('full stack DB', BlogPostSchema);

module.exports =  BlogPost;