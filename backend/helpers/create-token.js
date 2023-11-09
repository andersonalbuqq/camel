const jwt = require("jsonwebtoken");

async function Createtoken(client, req, res) {
  // Create token
  const token = jwt.sign(
    {
      name: client.nome,
      id: client.id,
    },
    process.env.TOKEN_KEY,
    {
      expiresIn: "2h",
    }
  );

  //return token
  res.status(201).json({
    message: "Autenticado com sucesso!",
    client,
    token,
  });
}

module.exports = Createtoken;
