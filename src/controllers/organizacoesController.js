import Organizacoes from '../models/organizacoes.js';

const get = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if (!id) {
      const response = await Organizacoes.findAll({
        order: [['id', 'asc']],
      });
      return res.status(200).send({
        type: 'success',
        message: 'Registros carregados com sucesso',
        data: response,
      });
    }

    const response = await Organizacoes.findOne({ where: { id } });

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

const create = async (dados, res) => {
  const { nome, idConta } = dados;

  const response = await Organizacoes.create({
    nome,
    idConta,
    emFuncionamento: false,
    quantidadeFuncionarios: 0,
  });

  return res.status(200).send({
    type: 'success',
    message: 'Cadastro realizado com sucesso',
    data: response,
  });
};

const update = async (id, dados, res) => {
  const response = await Organizacoes.findOne({ where: { id } });

  if (!response) {
    return res.status(404).send({
      type: 'error',
      message: `Nenhum registro com id ${id} para atualizar`,
      data: [],
    });
  }

  Object.keys(dados).forEach((field) => (response[field] = dados[field]));

  await response.save();
  return res.status(200).send({
    type: 'success',
    message: `Registro id ${id} atualizado com sucesso`,
    data: response,
  });
};

const persist = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if (!id) {
      return await create(req.body, res);
    }

    return await update(id, req.body, res);
  } catch (error) {
    return res.status(500).send({
      type: 'error',
      message: 'Ops! Ocorreu um erro',
      error,
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

    const response = await Organizacoes.findOne({ where: { id } });

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

const getOrganizacoesConta = async (req, res) => {
  try {
    const idConta = req.params.idConta ? req.params.idConta.toString().replace(/\D/g, '') : null;

    if (!idConta) {
      return res.status(500).send({
        type: 'error',
        message: 'Ops! Ocorreu um erro',
        error: error.message,
      });
    }

    const response = await Organizacoes.findAll({ where: { idConta }, order: [['id', 'ASC']] });

    if (!response) {
      return res.status(404).send({
        type: 'error',
        message: `Nenhum registro associado com a conta ${idConta}`,
        data: [],
      });
    }

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
};

const criaOrganizacao = async (req, res) => {
  try {
    return await create(req.body, res);
  } catch (error) {
    return res.status(500).send({
      type: 'error',
      message: 'Ops! Ocorreu um erro',
      error,
    });
  }
};

export default {
  get,
  persist,
  destroy,
  getOrganizacoesConta,
  criaOrganizacao,
};
