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
        document.getElementById('result').value = 'Expressão errada!!'
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