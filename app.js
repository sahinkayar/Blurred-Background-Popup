const popup=document.getElementById("popup-main");

const btn = document.getElementById('Join-btn')

const main = document.getElementById("main");

const icon = document.getElementById("iconic");

btn.addEventListener('click',e=>{ 
     main.classList.add('filter');
     popup.classList.remove("active");
    
 
})
icon.addEventListener('click', e=>{ 
    main.classList.remove('filter');
popup.classList.add('active')

})