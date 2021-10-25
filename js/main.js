//var decimal = document.getElementById(DecValue);
//var binary = document.getElementById(BinValue);

function converterDecimalToBinary()
{
    var decimalValue = parseInt(document.getElementById("DecValue").value);
    if (decimalValue >= 0)
        document.getElementById("BinValue").value = (decimalValue >>> 0).toString(2);
    else
        alert("Insira um valor valido")
}