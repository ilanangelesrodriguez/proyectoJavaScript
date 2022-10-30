// function moneyBox(coins){
//     let saveCoins=0;
//     saveCoins+=coins;
//     console.log(`MoneyCoins: S/.${saveCoins}`)
// }

function moneyBox(){
    let saveCoins=0;
    function countCoins(coins){
        saveCoins+=coins;
        console.log(`MoneyCoins: S/.${saveCoins}`)
    }
    return countCoins
}

const myMoneyBox=moneyBox();
myMoneyBox(5);
myMoneyBox(20);