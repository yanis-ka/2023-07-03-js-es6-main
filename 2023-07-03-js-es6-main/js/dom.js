console.log('début du chargement de la page');
loaded(function(){
    console.log('la page est chargée, début du script sur le DOM');
    const titre = document.querySelector('#titrePrincipal');
    console.log(titre);

    const pageTitle = document.querySelector('h1');
    console.log(pageTitle);

    const details = document.querySelectorAll('details li a');
    console.log(details);

    const mainContainer = document.querySelectorAll('main.container');
    console.log(mainContainer);

    const allContainer = document.querySelectorAll('.container')
    console.log(allContainer);

    console.log(document.getElementsByTagName('h1'));

    const allP = document.querySelectorAll('p:not(p.special)');
    allP.forEach(function(paragraphe){
        paragraphe.addEventListener('click', function(){
            paragraphe.classList.toggle('fondGris20');
            q('#showP').innerHTML = paragraphe.innerHTML;
        });
    });

    const buttonTest = qA('.testez-moi');
    console.log(buttonTest);

    buttonTest.forEach(button=>{
        button.addEventListener('click', function(event){
            event.stopPropagation();
            qA('p').forEach(function(paragraphe){
                console.log(paragraphe.innerText);
            });
        });
    })

    q('#showP').addEventListener('click', function(event){
        console.log(event);
        console.log(event.target);
    });

    const imgPipBoy = q('#imgOver');
    
    imgPipBoy.addEventListener('mouseover', function(){
        //console.log(this.getAttribute('src'));
        this.setAttribute('src', '../images/pip-boy-thumb-up.png');
        this.setAttribute('alt', 'Pip boy avec le bras droit');
        this.nextElementSibling.innerHTML = 'Pip boy avec le bras droit';
    });
    
    imgPipBoy.addEventListener('mouseleave', function(){
        this.setAttribute('src', '../images/pip-boy-thumb-down.png');
        this.setAttribute('alt', 'Pip boy sans le bras droit');
        this.nextElementSibling.innerHTML = 'Pip boy sans le bras droit';
    });

});
