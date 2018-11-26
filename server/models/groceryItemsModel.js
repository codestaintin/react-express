import mongoose from 'mongoose';

const { Schema } = mongoose;
const groceryItemsModel = new Schema({
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