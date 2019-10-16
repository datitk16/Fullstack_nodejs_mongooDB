const mongoose = require('mongoose');
const data = require('./data.json');

mongoose.connect('mongodb://localhost:27017/dbtestmongodb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(c => console.log(c))
    .catch(e => console.log(e))

const CourseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String], // tags['ReactJs','NodeJs']
    isPublished: Boolean,
    price: Number,
})
/**
 * @param Course in database
 * "Course": tên table trong database
 * "course": 
 * 
 */
const Course = mongoose.model('course', CourseSchema, 'Course');

/**
 * @param create model course demo
 */
// const itemCourse = new Course({
//     tags: [
//         "express",
//         "backend"
//     ],
//     name: "ExpressJS",
//     author: "Mosh",
//     isPublished: true,
//     price: 10,
// })
// itemCourse.save()
//     .then(s => console.log(s))
//     .catch(e => console.log(e))
/**
 * @param ES7 async awit
 */
const saveItemCourse = async (course) => {
    const newCourse = new Course(course);
    try {
        await newCourse.save();
        // const saveC = await newCourse.save();
        // console.log(saveC)
    }
    catch (err) {
        console.log(err)
    }
}
data.forEach(e => {
    saveItemCourse(e)
});


/**
 * @param ES6
 */
// itemCourse.save()
//     .then(c => console.log(c))
//     .catch(err => console.log(err))

/**
 * @param ES5
 */
// itemCourse.save({}, (err, res) => {
//     if (err) console.log(err)
//     console.log(res)
// })

/**
 * @param search : hiển thị tất cả các document 
 */
// Course.find()
// .then(s=>console.log(s))
// .catch(e=>console.log(e))
/**
 * @param search : hiển thị tất cả các document isPublished=true
 * 
 */
Course.find({isPublished:true})
.then(s=>console.log(s))
.catch(e=>console.log(e))
