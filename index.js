'use strict'

import tilelive from 'tilelive'
import express from 'express'
import cors from 'cors'
import path from 'path'

require('./src/tilelive-elasticsearch').registerProtocols(tilelive)

const app = express()
app.use(cors())

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.get('/:z/:x/:y.mvt', (req, res) => {
  tilelive.load('elasticsearch://localhost:9200', (err, source) => {
    if (err) throw err
    const {z, x, y} = req.params
    source.getTile(z, x, y, (err, tile, headers) => {
      if (err) {
        // console.log(err.name, 'error message', err)
        if (err.name === 'TileNotFoundError') {
          res.status(404)
        } else res.status(500)
        res.send(err)
        return
      }
      if (headers) res.header(headers)
      res.write(tile || '')
      res.end()
    })
  })
})

app.get('/', (req, res) => {
  res.render('index.pug', { title: 'КартоЭластик' })
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
