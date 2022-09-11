function buttonclick(e)
{

    e.preventDefault();

    console.log("function");

    if ((e.target.innerText).length < 1)
    
    {
        ;
    }
   
    else if ((e.target.innerText).length == 1)
    {
    if (e.target.innerText == "C")
    {
        display.innerText = "";
    }


    if (e.target.innerText == "=")
    {

        try
        {
            display.innerText = eval(display.innerText);
        }
       

        catch
        {
            console.log("Error")
            display.innerText = "ERROR";
        }

    }
    
       
    if (e.target.innerText = "Del")
        
    {
        display.innerText = display.innerText.slice(0, -1);
    }


    else
    {
        if (e.target.innerText == "C")
        {

        }

        else
        {
            display.innerText += e.target.innerText; 
        }
    }



}
}

const buttons = Array.from(document.getElementsByClassName("buttons"));


for (x in buttons)
{
    buttons[x].addEventListener("click", buttonclick)
}








