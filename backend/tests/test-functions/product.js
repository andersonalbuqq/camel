module.exports = class ProductTestFunctions {
  static create() {
    const validateNameExists = (name, expectedStatus) => {
      if (!name) {
        return {
          message: 'Error',
          status: false === expectedStatus
        }
      } else {
        return {
          message: 'Ok',
          status: true === expectedStatus
        }
      }
    }

    return {
      validateNameExists
    }
  }
}

