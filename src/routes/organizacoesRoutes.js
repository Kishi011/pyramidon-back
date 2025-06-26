import organizacoesController from '../controllers/organizacoesController.js';

export default (app) => {
  app.get('/organizacoes/get', organizacoesController.get);
  app.get('/organizacoes/get-organizacoes-conta/:idConta', organizacoesController.getOrganizacoesConta);
  app.get('/organizacoes/get/:id', organizacoesController.get);
  app.post('/organizacoes/post', organizacoesController.criaOrganizacao);
  app.patch('/organizacoes/patch/:id', organizacoesController.persist);
  app.delete('/organizacoes/delete/:id', organizacoesController.destroy);
};
