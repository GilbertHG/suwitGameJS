function vsComputer(){
    const comp = Math.random();

    if(comp < 0.34) return 'gajah';
    else if(comp >=0.34 && comp<0.67) return 'orang';
    return 'semut';
}

function getWinner(comp,player){
    if(player == comp) return 'Seri!';
    else if(player == 'gajah') return (comp=='orang') ? 'Menang!' : 'Kalah!';
    else if(player == 'semut') return (comp=='gajah') ? 'Menang!' : 'Kalah!';
    else if(player == 'orang') return (comp=='semut') ? 'Menang!' : 'Kalah!';
}

const buttonPlayer = document.querySelectorAll('li img');

buttonPlayer.forEach(function(choosen){
    choosen.addEventListener('click',function(){
        const pChoosen = choosen.className;
        const cChoosen = vsComputer();
        const Winner = getWinner(cChoosen,pChoosen);

        const imgComputer = document.querySelector('.img-computer');
        imgComputer.setAttribute('src','img/'+ cChoosen + '.png');

        const result = document.querySelector('.info');
        result.innerHTML = Winner;
    })
});
