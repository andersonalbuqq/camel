const Cliente = require("../models/cliente");

//biblioteca responsável pela criptografia
const bcrypt = require("bcrypt");

module.exports = class ClienteController {
  //Cria um cliente
  static async create(req, res) {
    //recebe os dados da requisição
    const { nome, email, senha, confirmaSenha } = req.body;

    //Realiza as validações
    if (!nome) {
      res.status(422).json({ message: "O nome é obrigatório" });
      return;
    }
    if (!email) {
      res.status(422).json({ message: "O email é obrigatório" });
      return;
    }
    if (!senha) {
      res.status(422).json({ message: "A senha é obrigatória" });
      return;
    }
    if (senha !== confirmaSenha) {
      res.status(422).json({
        message: "A senha e a confirmação da senha precisam ser iguais.",
      });
      return;
    }

    //verifica se o email já foi usado
    const usuarioExistente = await Cliente.findOne({ where: { email: email } });

    if (usuarioExistente) {
      res.status(422).json({
        message: "O email informado já está em uso, favor usar outro email.",
      });
      return;
    }

    //criptografia da senha
    const salt = await bcrypt.genSalt(10);
    const senhaCripto = await bcrypt.hash(senha.toString(), salt);

    //cria o cliente
    const cliente = new Cliente({
      nome,
      email,
      senha: senhaCripto,
    });

    try {
      await cliente.save();
      res.status(201).json({ message: "Usuário criado com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `falha na criação do cliente. ${error}` });
    }
  }

  static async getCliente(req, res) {
    const id = req.params.id;

    const cliente = await Cliente.findByPk(id, {
      attributes: { exclude: ["senha"] },
    });

    if (!cliente) {
      res.status(422).json({ message: "Usuário não encontrado!" });
      return;
    }

    res.status(200).json({ cliente });
  }

  static async updateEmail(req, res) {
    const { id, email } = req.body;

    const cliente = await Cliente.findByPk(id);

    if (!email) {
      res.status(422).json({ message: "O email é obrigatório" });
      return;
    }

    //verifica se o email foi alterado
    if (email !== cliente.email) {
      //verifica se o novo email já foi usado
      const usuarioExistente = await Cliente.findOne({
        where: { email: email },
      });

      if (usuarioExistente) {
        res.status(422).json({
          message: "O email informado já está em uso, favor usar outro email.",
        });
        return;
      }
    } else {
      res.status(422).json({
        message: "Email inalterado.",
      });
      return;
    }

    //atualiza o email
    try {
      await Cliente.update({ email: email }, { where: { id: id } });
      res.status(201).json({ message: "Email atualizado com sucesso!" });
    } catch (error) {
      console.log(`Falha na atualização: ${error}`);
    }
  }

  static async updateSenha(req, res) {
    const { id, senhaAntiga, novaSenha, confirmaNovaSenha } = req.body;

    const cliente = await Cliente.findByPk(id);

    //validações
    const verificaSenha = await bcrypt.compare(senhaAntiga, cliente.senha);

    if (!verificaSenha) {
      res.status(422).json({ message: "Senha incorreta!" });
      return;
    }

    if (!novaSenha) {
      res.status(422).json({ message: "A nova senha é obrigatória." });
      return;
    }

    if (novaSenha !== confirmaNovaSenha) {
      res
        .status(422)
        .json({
          message: "A senha e a confirmação da senhas devem ser iguais.",
        });
      return;
    }

    //atualiza a senha
    try {
      await Cliente.update({ senha: novaSenha }, { where: { id: id } });
      res.status(201).json({ message: "Senha atualizado com sucesso!" });
    } catch (error) {
      console.log(`Falha na atualização da senha: ${error}`);
    }
  }

  static async updateCPF(req, res) {
    const { id, cpf } = req.body;

    const cliente = Cliente.findByPk(id);

    if (!cpf) {
      res.status(422).json({ message: "O cpf deve ser informado" });
      return
    }
    
    if (/^\d+$/.test(cpf)){
      res.status(422).json({ message: "Informe apenas os números do CPF." });
      return
    }

    try{
      await Cliente.update({cpf: cpf}, {where: {id:id }})
      res.status(201).json({ message: "CPF atualizado com sucesso!" });
    } catch(error){
      console.log(`Falha na atualização: ${error}`);
    }
  }
};
