const atendimentos = require('../models/atendimentos')
const Atendimento = require('../models/atendimentos')

module.exports = app => {
app.get('/atendimento',(req,res)=> {
    Atendimento.lista(res)
})

app.get('/atendimento/:id',(req,res)=>{
    const  id = parseInt(req.params.id)

    Atendimento.buscaPorID(id,res)
})

app.post('/atendimento',(req,res) => {
const atendimento = req.body
Atendimento.adiciona(atendimento,res)

})
}