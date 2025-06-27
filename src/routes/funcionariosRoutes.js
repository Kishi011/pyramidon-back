import funcionariosController from "../controllers/funcionariosController.js";

export default (app) => {
  app.get('/funcionarios/get', funcionariosController.get);
  app.get('/funcionarios/get/:idOrganizacao', funcionariosController.getFuncionarioOrganizacao);
  app.post('/funcionarios/post/:idOrganizacao', funcionariosController.create);
  app.patch('/funcionarios/patch/:id', funcionariosController.update);
  app.delete('/funcionarios/delete/:id', funcionariosController.destroy);
};
