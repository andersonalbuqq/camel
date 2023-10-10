const {
  validateName,
} = require("../helpers/validations");

describe('Módulo de Produtos - Criação', () => {
  it('Validação de Nome - success with valid name', () => {
    const result = validateName('Lustre')

    expect(result).toBe(null)
  })
})