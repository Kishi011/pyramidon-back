import templateController from '../controllers/template.js';

export default (app) => {
  app.get('/controller/get', templateController.get);
  app.get('/controller/get/:id', templateController.get);
  app.post('/controller/post', templateController.persist);
  app.patch('/controller/patch/:id', templateController.persist);
  app.delete('/controller/delete/:id', templateController.destroy);
}