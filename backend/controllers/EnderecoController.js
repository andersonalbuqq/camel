const { where } = require("sequelize");
const Cliente = require("../models/cliente");
const Endereco = require("../models/endereco");

module.exports = class EnderecoController {
  static async create(req, res) {
    const { cep, rua, bairro, numero, complemento, cidade, uf, id_cliente } =
      req.body;

    //validações
    const cliente = await Cliente.findByPk(id_cliente);

    if (!cliente) {
      res.status(422).json({ message: "Usuário não encontrado!" });
      return;
    }

    const enderecoCadastrado = await Endereco.findOne({
      where: { id_cliente: id_cliente },
    });

    if (enderecoCadastrado) {
      res.status(422).json({
        message: "Usuário ja possui endereço cadastrado",
        enderecoCadastrado,
      });
      return;
    }

    if (!cep) {
      res.status(422).json({ message: "O CEP deve ser informado" });
      return;
    }

    //verifica se apenas de números informados
    if (!/^[0-9]+$/.test(cep)) {
      res.status(422).json({ message: "Informe apenas os números do CEP." });
      return;
    }

    //verifica a quantidade de dígitos
    if (cep.toString().length !== 8) {
      res.status(422).json({ message: "CEP incorreto." });
      return;
    }

    if (!rua) {
      res.status(422).json({ message: "A rua deve ser informada" });
      return;
    }

    if (!bairro) {
      res.status(422).json({ message: "O bairro deve ser informado" });
      return;
    }

    if (!numero) {
      res
        .status(422)
        .json({ message: "O número da residência deve ser informado" });
      return;
    }

    //verifica se apenas de números informados
    if (!/^[0-9]+$/.test(numero)) {
      res.status(422).json({ message: "Informe apenas números" });
      return;
    }

    if (!cidade) {
      res.status(422).json({ message: "A cidade deve ser informada" });
      return;
    }

    if (!uf) {
      res.status(422).json({ message: "O estado deve ser informado" });
      return;
    }

    if (uf.length !== 2) {
      res.status(422).json({ message: "Informe apenas a sigla do estado" });
      return;
    }

    const endereco = new Endereco({
      cep,
      rua,
      bairro,
      numero,
      complemento,
      cidade,
      uf: uf.toUpperCase(),
      id_cliente,
    });

    try {
      await endereco.save();
      res.status(201).json({ message: "Endereco criado com sucesso!" });
    } catch {
      res.status(500);
    }
  }

  static async getEndereco(req, res) {
    const id_cliente = req.params.id_cliente;

    const endereco = await Endereco.findOne({
      where: { id_cliente: id_cliente },
    });

    if (!endereco) {
      res
        .status(422)
        .json({ message: "O usuário não possui endereço cadastrado!" });
      return;
    }

    res.status(200).json({ endereco });
  }

  static async updateEndereco(req, res) {
    const { cep, rua, bairro, numero, complemento, cidade, uf, id_cliente } =
      req.body;

    //validações
    if (!id_cliente) {
      res.status(422).json({ message: "Informe o ID do cliente!" });
      return;
    }

    const cliente = await Cliente.findByPk(id_cliente);

    if (!cliente) {
      res.status(422).json({ message: "Usuário não encontrado!" });
      return;
    }

    if (!cep) {
      res.status(422).json({ message: "O CEP deve ser informado" });
      return;
    }

    //verifica se apenas de números informados
    if (!/^[0-9]+$/.test(cep)) {
      res.status(422).json({ message: "Informe apenas os números do CEP." });
      return;
    }

    //verifica a quantidade de dígitos
    if (cep.toString().length !== 8) {
      res.status(422).json({ message: "CEP incorreto." });
      return;
    }

    if (!rua) {
      res.status(422).json({ message: "A rua deve ser informada" });
      return;
    }

    if (!bairro) {
      res.status(422).json({ message: "O bairro deve ser informado" });
      return;
    }

    if (!numero) {
      res
        .status(422)
        .json({ message: "O número da residência deve ser informado" });
      return;
    }

    //verifica se apenas de números informados
    if (!/^[0-9]+$/.test(numero)) {
      res.status(422).json({ message: "Informe apenas números" });
      return;
    }

    if (!cidade) {
      res.status(422).json({ message: "A cidade deve ser informada" });
      return;
    }

    if (!uf) {
      res.status(422).json({ message: "O estado deve ser informado" });
      return;
    }

    if (uf.length !== 2) {
      res.status(422).json({ message: "Informe apenas a sigla do estado" });
      return;
    }

    const endereco = {
      cep,
      rua,
      bairro,
      numero,
      complemento,
      cidade,
      uf: uf.toUpperCase(),
    };

    try {
      await Endereco.update(endereco, { where: { id_cliente: id_cliente } });
      res.status(200).json({ message: "Endereço atualizado com sucesso!" });
    } catch (error) {
      res.status(500).json({ message: "Falha na atualização do endereço" });
      console.log(`Falha na atualização: ${error}`);
    }
  }
};
