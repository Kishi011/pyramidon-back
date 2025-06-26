import OrganizacaoColaboradores from '../models/organizacaoColaboradores.js';
import Colaboradores from '../models/colaboradores.js';

const get = async (req, res) => {
    try {
        const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

        if (!id) {
            const response = await Colaboradores.findAll({
                order: [['id', 'asc']],
            });
            return res.status(200).send({
                type: 'success',
                message: 'Registros carregados com sucesso',
                data: response,
            });
        }

        const response = await Colaboradores.findOne({ where: { id } });

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
    const {
        nome,
        email,
        cpf,
        telefone,
        cep,
        banco,
        numeroCartao,
        senhaCartao,
        cvv,
        vencimentoCartao,
    } = dados;

    const response = await Colaboradores.create({
        nome,
        email,
        cpf,
        telefone,
        cep,
        banco,
        numeroCartao,
        senhaCartao,
        cvv,
        vencimentoCartao,
    });

    return res.status(200).send({
        type: 'success',
        message: 'Cadastro realizado com sucesso',
        data: response,
    });
};

const update = async (id, dados, res) => {
    const response = await Colaboradores.findOne({ where: { id } });

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

        const response = await Colaboradores.findOne({ where: { id } });

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

const getColaboradoresOrganizacao = async (req, res) => {
    try {
        const idOrganizacao = req.params.idOrganizacao ? req.params.idOrganizacao.toString().replace(/\D/g, '') : null;

        if (!idOrganizacao) {
            return res.status(500).send({
                type: 'error',
                message: 'Ops! Ocorreu um erro',
                error: error.message,
            });
        }

        const organizacaoColaboradores = await OrganizacaoColaboradores.findAll({ where: { idOrganizacao }});

        if(!organizacaoColaboradores.length) {
            return res.status(200).send({
                type: 'success',
                message: 'Nenhum registro encontrado',
                data: [],
            });
        }

        const response = [];
        for(let i = 0; i < organizacaoColaboradores.length; i++) {
            const colaborador = await Colaboradores.findOne({ where: { id: organizacaoColaboradores[i].idColaborador } });
            response.push(colaborador);
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

const criaColaborador = async (req, res) => {
    try {
        const idOrganizacao = req.params.idOrganizacao ? req.params.idOrganizacao.toString().replace(/\D/g, '') : null;
    
        if(!idOrganizacao) {
            return res.status(500).send({
                type: 'error',
                message: 'Ops! Ocorreu um erro',
            });
        }
    
        const {
            cpf,
            nome,
            email,
            telefone,
            cep,
            banco,
            numeroCartao,
            senhaCartao,
            senhaSeguranca,
            dataVencimentoCartao,
        } = req.body;
    
        const response = await Colaboradores.create({
            cpf,
            nome,
            email,
            telefone,
            cep,
            banco,
            numeroCartao,
            senhaCartao: parseInt(senhaCartao),
            senhaSeguranca: parseInt(senhaSeguranca),
            dataVencimentoCartao,
        });
    
        const organizacaoColaboradores = await OrganizacaoColaboradores.create({
            idOrganizacao,
            idColaborador: response.id,
        });
    
        if(!organizacaoColaboradores) {
            await response.destroy();
    
            return res.status(500).send({
                type: 'error',
                message: 'Ocorreu um erro ao criar colaborador!',
            });
        }
    
        return res.status(200).send({
            type: 'success',
            message: 'Cadastro realizado com sucesso',
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

export default {
    get,
    persist,
    destroy,
    getColaboradoresOrganizacao,
    criaColaborador,
};