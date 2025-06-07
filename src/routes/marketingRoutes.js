import marketingController from "../controllers/marketingController.js";

export default (app) => {
  app.get('/marketing/get', marketingController.get);
  app.get('/marketing/get/:id', marketingController.get);
  app.post('/marketing/post', marketingController.persist);
  app.patch('/marketing/patch/:id', marketingController.persist);
  app.delete('/marketing/delete/:id', marketingController.destroy);
};
