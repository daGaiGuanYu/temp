const db = require('better-sqlite3')('./test-sqlite3.db')

exports.activate = async function() {
  const result = db.prepare('Pragma table_info(ccz)').get()
  console.log('result', result)
}

exports.deactivate = function() {
  console.debug('deactivated')
}

// you can uncomment the following code and run ```node ./ext.js``` to ...
// exports.activate()