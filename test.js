see = false;

function changeButtonText(){
    if (see == true)
        document.getElementById("btn").innerHTML="Show text";
    else
        document.getElementById("btn").innerHTML="Hide text";  
}

function myFunction(){
    
    if (see == false){
        document.getElementById('demo').style.display='block';
        changeButtonText()
        see = true;
    }
    else{
        document.getElementById('demo').style.display='none';
        changeButtonText()
        see = false;
    }
        
}
