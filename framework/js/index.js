	
// Variabelen aanmaken die gekoppeld worden aan elementen in HTML d.m.v. classe naam
var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');


// De length word bepaald afhankelijk van de grootte vand de titel 
    for (i = 0; i < accHD.length; i++) 
    {
        accHD[i].addEventListener('click', toggleItem, false);
    }

// Binnen deze functie wordt bepaald wanneer welke css transitie toegepast wordt.
    function toggleItem() 
        {
            // De grootte van de div is afhankelijk van de grootte van de content die erbinnen staat
            var itemClass = this.parentNode.className;
            for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'accordionItem close';
        }
        if (itemClass == 'accordionItem close') 
        {
            this.parentNode.className = 'accordionItem open';
        }
    }