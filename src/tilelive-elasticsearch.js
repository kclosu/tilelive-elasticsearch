'use strict'

import elasticsearch from 'elasticsearch'


export default class ElasticSearchSource {
  constructor (uri, callback) {
    const client = new elasticsearch.Client(Object.assign({}, uri, {
      log: 'trace'
    }))
    this.client = client
    callback(null, this)
  }
  getInfo (callback) {
    callback(null, {})
  }
  getTile (z, x, y, callback) {
    callback(null)
  }
  static registerProtocols = tilelive => {
    tilelive.protocols['elasticsearch:'] = ElasticSearchSource
  }
}