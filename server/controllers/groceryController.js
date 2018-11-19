import { Types } from 'mongoose';
import GroceryItem from '../models/groceryItemsModel';

const groceryController = {
  /**
   * @description - create item
   *
   * @param { object }  req
   * @param { object }  res
   *
   * @returns { object } item
   */
  create(req, res) {
    const { name } = req.body;
    const groceryItem = new GroceryItem({ name });
    groceryItem.save();
    return res.status(201)
      .json({ groceryItem, message: 'Item successfully added' });
  },
  /**
   * @description - Get all items
   *
   * @param { object }  req
   * @param { object }  res
   */
  retrieveAll(req, res) {
    GroceryItem.find({})
      .then(groceryItems => {
        res.status(200).json(groceryItems);
      })
      .catch(err => res.status(500).json({ error: err }));
  },

  /**
   * @description - Get an item
   *
   * @param { object }  req
   * @param { object }  res
   *
   * @returns { object } groceryItem
   */
  retrieve(req, res) {
    const { _id } = req.params;
    if (!Types.ObjectId.isValid(_id)) {
      return res.status(422).json({
        message: 'Grocery not found'
      });
    }
    GroceryItem.findById(_id, (error, groceryItem) => {
      if (error) throw error;
      return res.status(200).json(groceryItem);
    });
  },

  /**
   * @description - Delete Item
   *
   * @param { object }  req
   * @param { object }  res
   *
   */
  deleteItem(req, res) {
    const { _id } = req.params;
    GroceryItem.findOneAndDelete(_id)
      .then((item) => {
        if (!item) {
          return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json({ message: 'Deletion successful' });
      })
      .catch(error => res.status(500).json({ error }));
  },
  /**
   * @description - Purchase item
   *
   * @param { object }  req
   * @param { object }  res
   *
   */
  groceryItemPurchase(req, res) {
    const { _id } = req.params;
    GroceryItem.findOne({ _id }, { purchased: true })
      .then((groceryItem) => {
        GroceryItem
          .findOneAndUpdate({ _id: groceryItem._id },
            { purchased: !groceryItem.purchased })
          .then(() => res.status(200).json({
            message: 'Purchase status changed',
            groceryItem
          }))
          .catch(err => res.status(500).json({ err }));
      });
  }
};

export default groceryController;
