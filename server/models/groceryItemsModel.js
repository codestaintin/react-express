import mongoose from 'mongoose';
import uuid from 'uuid';

const { Schema } = mongoose;
const groceryItemsModel = new Schema({
  // _id: {
  //   type: String,
  //   default: uuid()
  // },
  name: {
    type: String,
    required: true,
    trim: true
  },
  purchased: {
    type: Boolean,
    default: false
  },
});

export default mongoose.model('groceryItems', groceryItemsModel);