module.exports = {
  afterInstall: function () {
    return this.addPackagesToProject([
      {name: 'redux-observable', target: '0.16.0'}
    ])
  },

  normalizeEntityName: function () {
    // this prevents an error when the entityName is not specified
  }
}
