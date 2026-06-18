var loris = document.getElementById("loris");


function showMore(){
    loris.innerHTML = `Slow lorises are a group of several species of strepsirrhine primates which make up the genus
Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration
patterns that are species-dependent. The hands and feet of slow lorises have several adaptations
that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow
lorises have a toxic bite, a rare trait among mammals.<a href='JavaScript:void(0)' onclick='showLess()' >Show less...</a>`
}

function showLess(){
    
        var data = loris.innerHTML

        var copy = data.slice(0,80);


        loris.innerHTML = copy + "<a href='Javascript:void(0)' onclick='showMore()'>Click for more</a>"
        
}

function makeInvisible(){
    document.getElementById("ugly").className = "hidden";
}

function bigText(){
    document.getElementById("para").className += " bigText"
}