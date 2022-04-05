function showadmin(){
    console.log('clicked');
    var mydiv = document.getElementById('mainhead'); 
    mydiv.setAttribute('class','paidheader');

    //arekvabeo kora jai
    //document.getElementById('mainhead').setAttribute('class','paidheader');
    
    var h1 = mydiv.getElementsByTagName('h1')[0];
    h1.innerHTML = "Paid learning";
    console.log(h1);

    var totalh1 = document.getElementsByTagName('h1');
    for(let i=0; i < totalh1.length; i++ )
    {
        totalh1[i].style.color="white";
    }

    var mycontent = document.querySelectorAll('#mainnajifa');
    console.log(mycontent);
    for(let i = 0; i < mycontent.length; i++){
        mycontent[i].setAttribute('class','customnajifa');
    }


}

function showuser(){
    var mydiv = document.getElementById('mainhead');
    mydiv.setAttribute('class','header');

    var h2 = mydiv.getElementsByTagName('h1')[0];
    h2.innerhtml = "E-learning";

    var totalh1 = document.getElementsByTagName('h1');
    for(let i = 0; i<totalh1.length; i++)
    {
        totalh1[i].style.color = "black";
    }

    var mycontent = document.querySelectorAll('#mainnajifa');
    for(let i=0; i<mycontent.length; i++)
    {
        mycontent[i].setAttribute('class','najifa');
    }
}

var c3 = document.getElementById('click');
c3.addEventListener('click',showadmin);

document.getElementById('mouse').addEventListener('mouseenter',showuser);