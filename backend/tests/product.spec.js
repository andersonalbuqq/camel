const ProductTestFunctions = require('./test-functions/product.js')

const formatMessageOutput = (func, parm, expectedStatus) => {
  const { message, status } = func(parm, expectedStatus)

  return `${status ? '✅' : '❌'} ${message}`
}

module.exports = class ProductTests {
  static create() {
    console.log('\nMódulo de Produtos - Criação')
    console.log('----------------------------')
    console.log('🚩 Validação de Nome')
    console.log(`・ success with valid name: ${formatMessageOutput(ProductTestFunctions.create().validateNameExists, 'nome', true)}`)
    console.log(`・ fail with empty string:  ${formatMessageOutput(ProductTestFunctions.create().validateNameExists, '', false)}`)
    console.log(`・ fail with null value:  ${formatMessageOutput(ProductTestFunctions.create().validateNameExists, null, false)}`)
    console.log(`・ fail with undefined value:  ${formatMessageOutput(ProductTestFunctions.create().validateNameExists, undefined, false)}`)
  }
}