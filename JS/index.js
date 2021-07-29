

// Temperature Conversion

const fTemp = () =>{
    let fTempInput = prompt("Type the Fahrenheit temperature:");
    let cTempOutput = (fTempInput - 32) * 5/9;
    let message = document.querySelector(".tempConversion").innerHTML = 
    `${fTempInput}°F is ${cTempOutput.toFixed(1)}°C`;
    console.log(  `${fTempInput}°F is ${cTempOutput.toFixed(1)}°C`);
} 

const cTemp = () => {
    let cTempInput = prompt("Type the Celsius temperature:")
    let fTempOutput = (cTempInput * 9/5) + 32
    let message = document.querySelector(".tempConversion").innerHTML = 
    `${cTempInput}°C is ${fTempOutput.toFixed(1)}°F `;

    console.log(`${cTempInput}°C is ${fTempOutput.toFixed(1)}°F`);
}


// BMI
let lucas = {
    height: 60,
    weight: 141,
}

let john = {
    height: 67,
    weight: 133,
}

const bmiCalculation = (w, h) =>{
    return ((w / h / h)* 703).toFixed(1) ;
}
console.log("BMI CALCULATOR:")
let lucasBMI = bmiCalculation(lucas.weight, lucas.height);
let johnBMI = bmiCalculation(john.weight, john.height);
if(lucasBMI > johnBMI){
    console.log(`Lucas' BMI(${lucasBMI}) is higher than John's (${johnBMI})`)
}else{
    console.log(`John's BMI(${johnBMI}) is higher than Lucas' (${lucasBMI})`)
}

// Team Winner

const data = (value) =>{
 let scoreData = [
     [
        [96 , 100,  89],
        [88, 91, 100],
     ],
     [
        [97, 112, 101],
        [109, 95, 123],
     ],
     [
        [97, 112, 101],
        [109, 95, 106],
     ]
    ]
    let netsScore = 0;
    let knickScore = 0;

    for(let i = 0; i < 3; i++){
        netsScore += scoreData[value][0][i];
        knickScore += scoreData[value][1][i];
    }
    netsScore = (netsScore / scoreData.length).toFixed(1);
    knickScore = (knickScore / scoreData.length).toFixed(1);
    
    
        //Draw Condition not reaching minimun points
        if( (netsScore < 100 && knickScore < 100))
        {
            document.querySelector(".winnerTeam").innerHTML =
            `Nets Average Score: ${netsScore} <br>
            Knicks Average Score: ${knickScore} <br>
            Result: It's a draw, neither team reached the minimun 100 points and got ahead of the other team.
            `;
            console.log("Result: It's a draw, neither team reached the minimun 100 points and got ahead of the other team.");
        }
        //Draw when above 100 points
        else if((netsScore > 100 && knickScore > 100) && (netsScore===knickScore))
        {
            document.querySelector(".winnerTeam").innerHTML =
            `Nets Average Score: ${netsScore} <br>
            Knicks Average Score: ${knickScore} <br>
            Result: It's a draw, both teams averaged ${knickScore} points
            `;
            console.log(`Result: It's a draw, both teams averaged ${knickScore} points`);
        }
        //Winner while being above 100 for Nets
        else if(netsScore > knickScore){
            document.querySelector(".winnerTeam").innerHTML =
            `Nets Average Score: ${netsScore} <br>
            Knicks Average Score: ${knickScore} <br>
            Result: Nets are the winners with ${netsScore} points!
            `;
            console.log(`Result: Nets are the winners with ${netsScore} points!`);
        }
        else{
            document.querySelector(".winnerTeam").innerHTML =
            `Nets Average Score: ${netsScore} <br>
            Knicks Average Score: ${knickScore} <br>
            Result: Knicks are the winners with ${knickScore} points!
            `;
            console.log(`Result: Knicks are the winners with ${knickScore} points!`);
        }

        }
    

