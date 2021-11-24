function deliveryCost(tshirt) {
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
        let delivery100 = tshirt * firstProduct;
        let second100 = tshirt * secondProduct;
        let lastStoppage = tshirt - 200;
        let third100Delivery = lastStoppage * thirdProduct;
        let totalCoast = first100Delivery + second100Delivery + third100Delivery;
        return totalCoast;
    }
}
const delivery = deliveryCost(200);
console.log(delivery);









