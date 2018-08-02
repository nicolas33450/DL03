function verif(evt)
{
    var tabchamps = ['nom', 'prenom', 'adr1', 'cp', 'ville', 'email'];
    var longueur = tabchamps.length;
    var supp;
    var erreur = 'Remplir les champs *';
    var cp = document.getElementById('cp').value




    for(i=0; i<longueur; i++)
    {
        supp = (document.getElementById(tabchamps[i])).value.trim();


        if(supp == '' ) 

        {
            //window.alert('remplissez tout les champs * ');
            //document.getElementById('erreur').innerHTML = erreur;
            rep = (tabchamps[i]);

            document.getElementById('erreur').innerHTML = erreur;

            document.getElementById(tabchamps[i]).focus();

            evt.preventDefault();

            break;


        }

    }


    // email récupère la valeur saisie dans la zone email
    var email= document.getElementById('email').value;

    // L'expression régulière pour vérifier l'email
    var objReg = /^([a-zA-Z0-9]+(([\.\-\_]?[a-zA-Z0-9]+)+)?)\@(([a-zA-Z0-9]+[\.\-\_])+[a-zA-Z]{2,4})$/g;

    // On vérifie l'email
    var res=objReg.test(email);

    if (res==false)
    {
        window.alert("Votre email n'est pas valide!");
        document.getElementById('email').focus();
        evt.preventDefault();
    }
}




document.getElementById('form1').addEventListener('submit', verif); 


























