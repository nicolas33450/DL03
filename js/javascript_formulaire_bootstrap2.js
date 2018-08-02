function verif(evt)
{
    var tabchamps = ['nom', 'prenom', 'adr1', 'cp', 'ville', 'email'];
    var longueur = tabchamps.length;
    var supp;
    var erreur = 'Veuillez rentrer les champs avec une * !';
    
    

    for(i=0; i<longueur; i++)
    {
        supp = (document.getElementById(tabchamps[i])).value.trim();


        if(supp == '' ) 

        {
            //window.alert('remplissez tout les champs * ');
            document.getElementById('erreur').innerHTML = erreur;
            document.getElementById(tabchamps[i]).focus();
            evt.preventDefault();
            break;
            

        }

    }

    if(document.getElementById('cp').value.length != 5)
    {
        window.alert('veuillez rentrer un cp valide !');
        evt.preventDefault();
    }

}





document.getElementById('form1').addEventListener('submit', verif); 