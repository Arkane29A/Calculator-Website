function buttonclick(e)
{

    e.preventDefault();

    console.log(e.target.innerText);

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
        
 
    else if (e.target.innerText == "=")
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



function deletefunc(e)
{
   
    console.log("DELETE");
    display.innerText = display.innerText.slice(0, -1);

}


const buttons = Array.from(document.getElementsByClassName("buttons"));
const deletebutton = document.getElementById("delete");


for (x in buttons)
{
    buttons[x].addEventListener("click", buttonclick)
}

deletebutton.addEventListener("click", deletefunc);







