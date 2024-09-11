function Coletar(){
    let input = document.querySelector('.input-cep').value
    console.log(input)
    Dados(input)
}
//funcao para consumir api Via cep
 async function Dados(input){
    let dados = await fetch(`https://viacep.com.br/ws/${input}/json/`).then(response => response.json())
    console.log(dados)
    ExibirDados(dados)

}
function ExibirDados(dados){
    document.querySelector('.endereco').value = dados.logradouro
    document.querySelector('.bairro').value = dados.bairro
    document.querySelector('.cidade').value = dados.localidade
   
}

//funcao enter

const form = document.querySelector('form')
const submit =document.querySelector('button[type="submit"]')

form.addEventListener('keydown', function(e){
    if(e.key === 'Enter' && !e.shiftKey){
        e.preventDefault()
        submit.click()
    }
}
)