import contasController from '../controllers/contasController.js';

export default (app) => {
  app.get('/contas/get', contasController.get);
  app.get('/contas/get/:id', contasController.get);
  app.post('/contas/post', contasController.persist);
  app.patch('/contas/patch/:id', contasController.persist);
  app.delete('/contas/delete/:id', contasController.destroy);
};
