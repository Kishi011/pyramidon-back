import colaboradoresController from "../controllers/colaboradoresController.js";

export default (app) => {
    app.get('/colaboradores/get', colaboradoresController.get);
    app.get('/colaboradores/get/:idOrganizacao', colaboradoresController.getColaboradoresOrganizacao);
    app.post('/colaboradores/cria-colaborador/:idOrganizacao', colaboradoresController.criaColaborador);
    app.patch('/colaboradores/patch/:id', colaboradoresController.persist);
    app.delete('/colaboradores/delete/:id', colaboradoresController.destroy);
};
