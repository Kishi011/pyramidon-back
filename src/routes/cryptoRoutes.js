import cryptoController from '../controllers/cryptoController.js';

export default (app) => {
  app.get('/crypto/get', cryptoController.get);
  app.get('/crypto/get/:id', cryptoController.get);
  app.post('/crypto/post', cryptoController.persist);
  app.patch('/crypto/patch/abre-fecha-moeda/:id', cryptoController.alteraStatusAbertoFechado);
  app.patch('/crypto/patch/:id', cryptoController.persist);
  app.delete('/crypto/delete/:id', cryptoController.destroy);
};
