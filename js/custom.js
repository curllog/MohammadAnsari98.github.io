/* Add your custom JavaScript code */
document.getElementById("gototop").style.visibility="hidden";
window.onscroll = function()
{

    if(window.scrollY >= 100)
    {
        document.getElementById('gototop').style.visibility="visible"
    }else
    {
        document.getElementById('gototop').style.visibility="hidden";
    }
};