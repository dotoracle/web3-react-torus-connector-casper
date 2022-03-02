
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dotoracle-web3-react-torus-connector.cjs.production.min.js')
} else {
  module.exports = require('./dotoracle-web3-react-torus-connector.cjs.development.js')
}
