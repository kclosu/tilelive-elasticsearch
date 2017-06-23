'use strict'

export default class TileNotFoundError extends Error {
  constructor (message = 'Tile does not exist') {
    super(message)
    this.name = 'TileNotFoundError'
  }
}