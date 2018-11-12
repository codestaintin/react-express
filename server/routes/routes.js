import groceryController from '../controllers/groceryController';

const routes = (router) => {
  router.get('/', (req, res) => {
    res.json({
      status: 'Welcome to grocery list'
    });
  });

  router.route('/grocery').post(groceryController.create);
  router.route('/groceries').get(groceryController.retrieveAll);
  router.route('/grocery/:_id').get(groceryController.retrieve);
  router.route('/grocery/:_id').delete(groceryController.deleteItem);
  router.route('/grocery/:_id/purchase')
    .get(groceryController.groceryItemPurchase);
};

export default routes;