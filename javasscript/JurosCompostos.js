function calcular()
{
    const capital =parseFloat(document.getElementById('capital').value);
    const aporte =parseFloat(document.getElementById('aporte').value);
    const taxa =parseFloat(document.getElementById('taxa').value) / 100;
    const periodos = parseInt(document.getElementById('periodo').value);

    if (isNaN(capital) || isNaN(aporte) || isNaN(taxa) || isNaN(periodos))
    {
        document.getElementById('resposta').innerHTML = 'Prencha todos os campos corretamente';
        return;
    }

    const montante = capital * Math.pow(1+ taxa,periodos) + aporte *   ((Math.pow(1+ taxa,periodos)-1) / taxa);
    
    const totalInvestidos = capital + (aporte * periodos);

    const juros = montante - totalInvestidos;

     document.getElementById('resposta').innerHTML =
        `<strong>Montante:</strong> R$ ${montante.toFixed(2)}<br>` +
        `<strong>Investido:</strong> R$ ${totalInvestidos.toFixed(2)}<br>` +
        `<strong>Juros ganhos:</strong> R$ ${juros.toFixed(2)}`;
    

}