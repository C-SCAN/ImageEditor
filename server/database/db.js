const mongoose = require('mongoose');



const DBConnection = async () => {
    const MONGOBB_URI = `mongodb+srv://kalakotisaketh:2OiFBDD3ebs5nzNq@image-editor.lse7ks7.mongodb.net/?retryWrites=true&w=majority&appName=Image-editor`;
    try{
        await mongoose.connect(MONGOBB_URI, {useNewUrlParser: true});
        console.log('Database connected succesfully!!');
    }
    catch(error){
        console.error('Error while connecting with the database ', error.message);
    }
}

module.exports = DBConnection;