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

function roll(){
    const imgComputer = document.querySelector('.img-computer');
    const img = ['gajah','semut','orang']
    let i = 0;
    const start = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - start > 1000){
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src','img/'+ img[i++] + '.png');
        if(i==img.length)i = 0;
    },100)
}

const buttonPlayer = document.querySelectorAll('li img');
buttonPlayer.forEach(function(choosen){
    choosen.addEventListener('click',function(){
        const pChoosen = choosen.className;
        const cChoosen = vsComputer();
        const Winner = getWinner(cChoosen,pChoosen);

        roll();

        setTimeout(function(){
            const imgComputer = document.querySelector('.img-computer');
            imgComputer.setAttribute('src','img/'+ cChoosen + '.png');

            const result = document.querySelector('.info');
            result.innerHTML = Winner;
        },1000);
    })
});


