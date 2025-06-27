import Funcionarios from '../models/funcionarios.js';

const get = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if (!id) {
      const response = await Funcionarios.findAll({
        order: [['id', 'asc']],
      });
      return res.status(200).send({
        type: 'success',
        message: 'Registros carregados com sucesso',
        data: response,
      });
    }

    const response = await Funcionarios.findOne({ where: { id } });

    if (!response) {
      return res.status(404).send({
        type: 'error',
        message: `Nenhum registro com id ${id}`,
        data: [],
      });
    }

    return res.status(200).send({
      type: 'success',
      message: 'Registro carregado com sucesso',
      data: response,
    });
  } catch (error) {
    return res.status(500).send({
      type: 'error',
      message: 'Ops! Ocorreu um erro',
      error: error.message,
    });
  }
};

const create = async (req, res) => {
  try {
    const idOrganizacao = req.params.idOrganizacao ? req.params.idOrganizacao.toString().replace(/\D/g, '') : null;

    if(!idOrganizacao) {
      return res.status(500).send({
        type: 'error',
        message: 'Ops! Ocorreu um erro',
      });
    }

    const {
      codFuncionario,
      nome,
      salario,
    } = req.body;

    const response = await Funcionarios.create({
      codFuncionario,
      nome,
      salario,
      idOrganizacao,
    });

    return res.status(200).send({
      type: 'success',
      message: 'Cadastro realizado com sucesso',
      data: response,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      type: 'error',
      message: 'Ops! Ocorreu um erro',
      error: error.message,
    });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

  if (!id) {
    return res.status(500).send({
      type: 'error',
      message: 'Ops! Ocorreu um erro',
      error,
    });
  }

  const response = await Funcionarios.findOne({ where: { id } });

  if (!response) {
    return res.status(404).send({
      type: 'error',
      message: `Nenhum registro com id ${id} para atualizar`,
      data: [],
    });
  }

  const dados = req.body;
  Object.keys(dados).forEach((field) => (response[field] = dados[field]));

  await response.save();
  return res.status(200).send({
    type: 'success',
    message: `Registro id ${id} atualizado com sucesso`,
    data: response,
  });
  } catch (error) {
    return res.status(500).send({
      type: 'error',
      message: 'Ops! Ocorreu um erro',
      error: error.message,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;
    if (!id) {
      return res.status(200).send({
        type: 'error',
        message: 'Informe um id para deletar o registro',
        data: [],
      });
    }

    const response = await Funcionarios.findOne({ where: { id } });

    if (!response) {
      return res.status(404).send({
        type: 'error',
        message: `Nenhum registro com id ${id} para deletar`,
        data: [],
      });
    }

    await response.destroy();
    return res.status(200).send({
      type: 'success',
      message: `Registro id ${id} deletado com sucesso`,
      data: [],
    });
  } catch (error) {
    return res.status(500).send({
      type: 'error',
      message: 'Ops! Ocorreu um erro',
      error: error.message,
    });
  }
};

const getFuncionarioOrganizacao = async (req, res) => {
  try {
    const idOrganizacao = req.params.idOrganizacao ? req.params.idOrganizacao.toString().replace(/\D/g, '') : null;

    if(!idOrganizacao) {
      return res.status(400).send({
        type: 'error',
        message: 'id da organização não existe!',
      });
    }
    const response = await Funcionarios.findAll({ where: { idOrganizacao }, order: [['id', 'asc']] });

    return res.status(200).send({
      type: 'success',
      message: 'Registros carregados com sucesso',
      data: response,
    });
  } catch (error) {
    return res.status(500).send({
      type: 'error',
      message: 'Ops! Ocorreu um erro',
      error: error.message,
    });
  }
}

export default {
  get,
  create,
  update,
  destroy,
  getFuncionarioOrganizacao,
};