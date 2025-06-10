import colaboradoresController from "../controllers/colaboradoresController.js";

export default (app) => {
    app.get('/colaboradores/get', colaboradoresController.get);
    app.get('/colaboradores/get/:id', colaboradoresController.get);
    app.post('/colaboradores/post', colaboradoresController.persist);
    app.patch('/colaboradores/patch/:id', colaboradoresController.persist);
    app.delete('/colaboradores/delete/:id', colaboradoresController.destroy);
};
