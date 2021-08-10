const Atendimento = require('../models/atendimentos')

module.exports = app => {
app.get('/atendimento',(req,res)=> res.send('rota de atendimentos estou usando um get'))

app.post('/atendimento',(req,res) => {
const atendimento = req.body
Atendimento.adiciona(atendimento)
res.send('VOCE ESTA USANDO O POST')
})
}