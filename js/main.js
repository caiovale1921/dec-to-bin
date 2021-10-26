//var decimal = document.getElementById(DecValue);
//var binary = document.getElementById(BinValue);

function converterDecimalToBinary()
{
    /*
    var decimalValue = parseInt(document.getElementById("DecValue").value);
    if (decimalValue >= 0)
    {
        document.getElementById("BinValue").value = (decimalValue >>> 0).toString(2);
    }
    else
        alert("Insira um valor valido")
    */
    
    if (document.getElementById("textOne").textContent == "Decimal:")
    {
        var decimalValue = parseInt(document.getElementById("InpOneValue").value);
        if (decimalValue >= 0)
        {
            document.getElementById("InpTwoValue").value = (decimalValue >>> 0).toString(2);
            clearError();
        }
        else
            document.getElementById("errorResult").textContent = "Insira um valor decimal valido";
    }
    else
    {
        var binaryValue = document.getElementById("InpOneValue").value;
        if (isBinary(binaryValue) && binaryValue != "")
        {
            document.getElementById("InpTwoValue").value = parseInt(binaryValue, 2);
            clearError();
        }
        else
            document.getElementById("errorResult").textContent = "Insira um valor binario valido";
    }
    
}

function inverterConvertion()
{
    clearForm();
    if (document.getElementById("textOne").textContent == "Decimal:")
    {
        document.getElementById("textOne").textContent = "Binary:";
        document.getElementById("textTwo").textContent = "Decimal:";
    }
    else
    {
        document.getElementById("textOne").textContent = "Decimal:";
        document.getElementById("textTwo").textContent = "Binary:";
    }
}

function clearForm()
{
    document.getElementById("InpOneValue").value = "";
    document.getElementById("InpTwoValue").value = "";
    clearError();
}

function clearError()
{
    document.getElementById("errorResult").textContent = "";
}

function isBinary(value)
{
    return (value.split('').filter(x => x == "0" || x == "1").length == value.length);
}