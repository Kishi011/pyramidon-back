import marketingController from "../controllers/marketingController.js";

export default (app) => {
  app.get('/marketing/get', marketingController.get);
  app.get('/marketing/get/:idOrganizacao', marketingController.getMarketingOrganizacao);
  app.post('/marketing/post/:idOrganizacao', marketingController.create);
  app.patch('/marketing/patch/:id', marketingController.update);
  app.delete('/marketing/delete/:id', marketingController.destroy);
};
