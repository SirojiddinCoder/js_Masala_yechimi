var myString = "MySites"
var newString = "";
var wasUpper = false;
for (var i = 0; i < myString.length; i++)
{
    if (!wasUpper && myString[i] == myString.toUpperCase()[i])
    {
        newString = newString + " ";
        wasUpper = true;
    }
    else
    {
        wasUpper = false;
    }
    newString = newString + myString[i];
}