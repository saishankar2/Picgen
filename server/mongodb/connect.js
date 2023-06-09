import mongoose from 'mongoose';

const connectDB = (url) => {
  mongoose.set('strictQuery', true);
  mongoose.connect(url)
    .then(() => console.log('MongoDb conn success'))
    .catch((err) =>
     {
      console.error('failed to connect with mongo');
      console.error(err);
    }
    //    console.log(err)
    );
};

export default connectDB;