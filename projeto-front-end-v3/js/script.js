let darkmode = document.querySelector('#darkmode');

darkmode.onclick = ()=>{
    //alert("CLICOU!");

    if(darkmode.classList.contains('bx-moon')){
        alert("MODO ESCURO ESTÁ ATIVO!");
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('color');
    }else{
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('color');
    }
}