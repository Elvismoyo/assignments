
const jasonTipV1 = (index) =>{
    let bills = [275, 28, 430]
    let total = 0, tip = 0
    let message = document.querySelector(".total-bill");
    console.log("Jason's Tip Calculator V1");

    while(index == 3){
        let value = prompt("Insert new bill:");
        while(isNaN(value)){
            message.innerHTML =  `${value} is not a valid number, try again`
            console.log(`${value} is not a valid number, try again`);
            return;
        }
        value = parseFloat(value)
        while(value >= 30 && value <=300){
        
        tip =  value * .15;
        total = tip + value;
        
        message.innerHTML =  `The bill was $${value}, the tip(15%) was $${tip.toFixed(2)}, and the total value $${total.toFixed(2)}`
        console.log(`The bill was $${value}, the tip(15%) was $${tip.toFixed(2)}, and the total value $${total.toFixed(2)}`);
        return;
        }
        tip = value * .2;
        total = tip + value;
        message.innerHTML = `The bill was $${value}, the tip(20%) was $${tip.toFixed(2)}, and the total value $${total.toFixed(2)}`
        console.log(`The bill was $${value}, the tip(20%) was $${tip.toFixed(2)}, and the total value $${total.toFixed(2)}`);
        return;
    }


    let tips1 = bills[index] * .15, tips2 = bills[index] * .2;

    while(true){

        while(bills[index] >= 30 && bills[index] <=300){
            total = tips1 + bills[index];
            message.innerHTML = `The bill was $${bills[index]}, the tip(15%) was $${tips1.toFixed(2)}, and the total value $${total.toFixed(2)}`
            console.log(`The bill was $${bills[index]}, the tip(15%) was $${tips1.toFixed(2)}, and the total value $${total.toFixed(2)}`);
            return;
        }
        total = tips2 + bills[index];
        message.innerHTML = `The bill was $${bills[index]}, the tip(20%) was $${tips2.toFixed(2)}, and the total value $${total.toFixed(2)}`
        console.log(`The bill was $${bills[index]}, the tip(20%) was $${tips2.toFixed(2)}, and the total value $${total.toFixed(2)}`);
       return;
    }
}


// Temperature Conversion

const fTemp = () =>{
    console.log("Temperature Conversion:");
    console.log("Fahrenheit to Celsius:");
    let fTempInput = prompt("Type the Fahrenheit temperature:");
    if(isNaN(fTempInput)){
    let message = document.querySelector(".tempConversion").innerHTML = 
    `${fTempInput} is not a valid number, try again.`;
    console.log(message);
    return;
    }
    let cTempOutput = (fTempInput - 32) * 5/9;
    let message = document.querySelector(".tempConversion").innerHTML = 
    `${fTempInput}°F is ${cTempOutput.toFixed(1)}°C`;
    console.log(  `${fTempInput}°F is ${cTempOutput.toFixed(1)}°C`);
} 

const cTemp = () => {
    console.log("Temperature Conversion:");
    console.log("Celsius to Fahrenheit:");
    let cTempInput = prompt("Type the Celsius temperature:")
    if(isNaN(cTempInput)){
        let message = document.querySelector(".tempConversion").innerHTML = 
        `${cTempInput} is not a valid number, try again.`;

        console.log(message)
        return;
    }
    let fTempOutput = (cTempInput * 9/5) + 32
    let message = document.querySelector(".tempConversion").innerHTML = 
    `${cTempInput}°C is ${fTempOutput.toFixed(1)}°F `;

    console.log(message);
}

// Team Winner

const calcAverage = (value) =>{
    console.log("Who is the winner?");
    let scoreData = [
        [
           [44, 23, 71],
           [65, 54, 49],
        ],
        [
           [85, 54, 41],
           [23, 34, 27],
        ],
        [
            [27, 31, 22],
            [87, 58, 49],
        ]
       ]
       let netsScore = 0;
       let knickScore = 0;
   
       for(let i = 0; i < 3; i++){
           netsScore += scoreData[value][0][i];
           knickScore += scoreData[value][1][i];
       }
       let avgNets = (netsScore / scoreData.length).toFixed(2);
       let avgKnicks = (knickScore / scoreData.length).toFixed(2);
       checkWinner(avgNets, avgKnicks);

           }
const checkWinner = (avgNets, avgKnicks) =>{
        
        if( (avgNets > avgKnicks * 2)){
               document.querySelector(".winnerTeam").innerHTML =
               `Nets Average Score: ${avgNets} <br>
               Knicks Average Score: ${avgKnicks} <br>
               Result: The Nets with with an average score of ${avgNets} points
               `;
                console.log(`Result: The Nets with with an average score of ${avgNets} points`);
            }
       
           else if(avgKnicks > avgNets * 2 ){
               document.querySelector(".winnerTeam").innerHTML =
               `Nets Average Score: ${avgNets} <br>
               Knicks Average Score: ${avgKnicks} <br>
               Result: The Knicks with with an average score of ${avgKnicks} points
               `;
               console.log(`The Knicks with with an average score of ${avgKnicks} points`);
           }else{
               document.querySelector(".winnerTeam").innerHTML =
               `Nets Average Score: ${avgNets} <br>
               Knicks Average Score: ${avgKnicks} <br>
               Result: Neither team doubles the other team's average score, so no winner!
               `;
               console.log(`Result: Neither team doubles the other team's average score, so no winner!`);
           }
        

}

const jasonTipV2 = (index) =>{
    let bills = [125, 55, 44];
    
    let messages = document.querySelector(".total2-bill");
    console.log("Jason's Tip Calculator V2");

    if(index == -1){
        messages.innerHTML = "";
        return;
    }
    if(index == 3){
        let value = prompt("Insert new bill:");
        while(isNaN(value)){
            messages.innerHTML =  `${value} is not a valid number, try again`
            console.log(`${value} is not a valid number, try again`);
            return;
        }
        value = parseFloat(value, index)
        bills.push(value);
        calcTip(bills, index);
        return;
    }
    calcTip(bills, index);
}

const calcTip = (bills, index) =>{
    let messages = document.querySelector(".total2-bill");
    let tips = [];
    let totalbills = [];
    let total = 0;
    let tip1 = "tip(15%)";
    let tip2 = "tip(20%)";
    let tip = [];
    for(let i = 0; i < bills.length; i++){
        if(bills[i] > 50 && bills[i] <=300){
            let tips1 = bills[index] * .15
            tips.push(tips1);
            total = tips1 + bills[i];
            totalbills.push(total);
            tip.push(tip1)    
       }
        else{
        let tips2 = bills[i] * .2;
        tips.push(tips2)
        total = tips2 + bills[i];
        totalbills.push(total);
        tip.push(tip2);
        }
    }

    if(bills.length == 4){
        messages.innerHTML += `Your bill was $${bills[index]}, the ${tip[index]} was $${tips[index].toFixed(2)}, and the total value $${totalbills[index].toFixed(2)} <br>`
        console.log(`Your bill was $${bills[index]}, the ${tip[index]} was $${tips[index].toFixed(2)}, and the total value $${totalbills[index].toFixed(2)}`);
        return;
    }
    for (let i = 0; i < bills.length; i++) {
        messages.innerHTML += `The bill was $${bills[i]}, the ${tip[i]} was $${tips[i].toFixed(2)}, and the total value $${totalbills[i].toFixed(2)} <br>`
        console.log(`The bill was $${bills[i]}, the ${tip[i]} was $${tips[i].toFixed(2)}, and the total value $${totalbills[i].toFixed(2)}`);
        
    }
}