function showModal(){
    let modal = document.getElementById('modal');
    modal.style.display = 'block';
    modal.classList.remove('hidden')
    modal.classList.remove('fading-out')
    setTimeout(function(){modal.classList.remove("fading-in");}, 500);
}

function hideModal(){
    let modal = document.getElementById('modal');
    modal.classList.remove('fading-in')
    modal.classList.add("fading-out")
    setTimeout(function(){modal.style.display = "none"; modal.classList.add("hidden");modal.classList.add("fading-in"); }, 500);
}