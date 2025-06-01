function append(value)
{
    document.getElementById('result').value += value;
}

function calcular()
{
    try
    {
        document.getElementById('result').value = eval(document.getElementById('result').value);
    } catch {
        document.getElementById('result').value = 'Expressão invalida!!'
    }
}

function limpar()
{
    document.getElementById('result').value = '';
}

function porcentagem()
{
    const input =document.getElementById('result');
    try
    {
        input.value = eval(input.value) /100;
    }
    catch
    {
        input = 'Não foi possivel calcular a porcentagem'
    }
}

//Design Calculadora


function alterarCores()
{
    const CorFundo = document.getElementById('CorFundo').value;
    document.getElementById('tabela').style.backgroundColor = CorFundo;
    
    const CordeFundo = document.getElementById('CorBtns').value;
    document.body.style.backgroundColor = CordeFundo;
}