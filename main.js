//problem number 1:seerToMon

function seerToMon(seer) {
    if (typeof seer != 'number') {
        return 'input a number';
    }
    let mon = seer / 40;
    return mon;
}
let seers = seerToMon(80);
console.log(seers);


//problem number 2:total return

//perShirt=100;
//perPant=200;
//perShoe=500;

function totalSales(shirts, pants, shoes) {
    if (typeof shirts != 'number' || typeof pants != 'number' || typeof shoes != 'number') {
        return 'input a number';
    }
    const perShirt = 100;
    const perPant = 200;
    const perShoe = 500;
    let total = perShirt * shirts + perPant * pants + perShoe * shoes;
    // console.log(total);
    return total;
}
let totalOfSale = totalSales(2, 2, 2);
console.log(totalOfSale);


//problem number 3:deliveryCost

function deliveryCost(tshirt) {
    if (typeof tshirt != 'number') {
        return 'input a legal value';
    }
    let firstProduct = 100;
    let secondProduct = 80;
    let thirdProduct = 50;
    if (tshirt <= 100) {
        let first100Delivery = tshirt * firstProduct;
        return first100Delivery;
    }
    else if (tshirt <= 200) {
        let Delivery100 = tshirt * firstProduct;
        let firstStoppage = tshirt - 100;
        let second100 = firstStoppage * secondProduct;
        let second100Delivery = Delivery100 + second100;
        return second100Delivery;
    }
    else {
        let first100Delivery = tshirt * firstProduct;
        let second100Delivery = tshirt * secondProduct;
        let lastStoppage = tshirt - 200;
        let third100Delivery = lastStoppage * thirdProduct;
        let totalCoast = first100Delivery + second100Delivery + third100Delivery;
        return totalCoast;
    }
}
let delivery = deliveryCost(300);
console.log(delivery);


//problem number 4:perfectFriend

function perfectFriend(friends) {
    if (typeof friends != 'object') {
        return 'enter a valid name';
    }
    for (let name of friends) {
        if (name.length == 5) {
            console.log(name);
            return name;
        }
    }
}
let friends = ['emon', 'sujon', 'shahadat', 'sohag', 'asik'];
let perfect = perfectFriend(friends);
console.log(perfect);



