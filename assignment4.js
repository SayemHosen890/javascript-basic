function deliveryCost(tshirtQuantity1, tshirtQuantity2, tshirtQuantity3) {
    let delevery100Tshirt = 100;
    let delevery200Tshirt = 80;
    let delevery300Tshirt = 50;
    if (tshirtQuantity1 <= 100) {
        const firstTotal = delevery100Tshirt * tshirtQuantity1;
        console.log(firstTotal);
    }
    else if (tshirtQuantity1 > 100 && tshirtQuantity2 <= 200) {
        const secondTotal = delevery200Tshirt * tshirtQuantity2;
        console.log(secondTotal);
    }
    else if (tshi)
}
deliveryCost(100, 200, 300);