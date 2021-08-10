
const customExpress = require('./config/customExpress')
const conexao = require('./infroEstrutura/conexao')
const Tabelas = require('./infroEstrutura/tabelas')

conexao.connect((erro)=>{
    if(erro){
        console.log(erro)
    }else{
        console.log('rodando com sucesso')

        Tabelas.init(conexao)

        const app = customExpress()

app.listen(3000,() => console.log('servidor rodando na porta 3000'))    
       
    }
})


