"use strict";
/*******************************************************
 *     bmi.js
 *
 *     Write a small program that calculates the Body Mass Index according to parameters,
 *     given by the user. It should generate a textbased representation like the following:
 *
 *     -----------------------------------------------------
 *     Name:		         :PICHLER:, :Michaela:
 *     -----------------------------------------------------
 *     Age:                  :32: Years
 *     Height:		         :1.67m: (i.e. 1,81m)
 *     Weight:	             :54: kg
 *     Basal Metabolic Rate: <bmr> kcal
 *     Body Mass Index:	     <bmi>
 *     Normal Weight:        <Yes/No>
 *     Danger:		         <Yes/No>
 *     -----------------------------------------------------
 *
 *     To do so, collect data from your users. Values within :colons: are (formatted) user-inputs;
 *     values within <angle brackets> have to be calculated by your software.
 *
 *     MaikyPi - 2026-03-05
 *******************************************************/

/*
 * TODO: Declare and assign all necessary constants and variables with user input.
 * Make sure, to help your users understand what they need to type in, by using clear prompt-instructions.
 */

const LAST_NAME = prompt("What is your Last name?");
const FIRST_NAME = prompt("What is your First Name?");
const AGE = Number(prompt("What is your Age?"));
const HEIGHT = Number(prompt("How tall are you (in cm)?"));
const WEIGHT = Number(prompt("How much do you weight? (in kg)?"));


let gender = "";
do {
    gender = prompt("What is your gender?");
} while (gender.toLowerCase() != "male" && gender.toLowerCase() != "female");


const LINE = "-----------------------------------------------------";
let bmr, bmi, normal, danger;

if (gender.toLowerCase() == "female") {
    bmr = 655 + 10 * WEIGHT + 2 * HEIGHT - 6 * AGE;
} else if (gender.toLowerCase() == "male")
{
    bmr = 66 + 14 * WEIGHT + 5 * HEIGHT - 7 * AGE;
}

bmi = ((10000*WEIGHT) / HEIGHT**2)

normal = (bmi >=18 && bmi <= 25);
danger = (bmi < 16 || bmi >=30);

console.log(LINE);
console.log("Name:".padEnd(22) + LAST_NAME.toUpperCase() + ", "+ FIRST_NAME);
console.log(LINE);

console.log("Age:".padEnd(22) + AGE + " Years");
console.log("Height:".padEnd(22) + (HEIGHT / 100) + " m");
console.log("Weight:".padEnd(22) + WEIGHT + " kg");

console.log("Basal Metabolic Rate:".padEnd(22) + bmr + " kcal");
console.log("Body Mass Index:".padEnd(22) + bmi);

console.log("Normal Weight:".padEnd(22) + (normal ? "Yes" : "No"));
console.log("Danger:".padEnd(22) + (danger ? "Yes" : "No"));



/**
 * Formulas:
 *
 * BMR = A + B × weight [kg] + C × height [cm] − D × age [years]
 *      For women: A=655, B=10, C=2, D=6
 *      For men: A=66, B=14, C=5, D=7
 *
 * BMI = (10000 * weight [kg]) / height² [cm]
 *
 * Normal Weight = Any BMI between 18 and 25 (including 18 and 25).
 * Danger = Any BMI lower than 16 or 30+.
 **/

/*
 * TODO: To calculate the bmr; ask your users which calculation method they would prefer (male or female).
 * Be careful. Users make typos. Make sure that you have a valid answer before moving on.
 */

// TODO: To calculate the bmi, use the given formula with all the input you have collected.
// TODO: Once you have the bmi, determine whether or not the weight is normal and if the condition is dangerous.

/*
 * TODO: Create the correct output from all your data. Make sure to stick to the promised format! NO EXCEPTIONS!
 * You can use \t to add a Tab-Space. Once your program is completed, the output in the browser console should
 * look EXACTLY like the Example-Output above (with different data, of course).
 *
 *  Valid Example:
 *   -----------------------------------------------------
 *   Name:		           NEUWERSCH, Matthias
 *   -----------------------------------------------------
 *   Age:                  35 Years
 *   Height:               1,78m
 *   Weight:               77 kg
 *   Basal Metabolic Rate: 1789 kcal
 *   Body Mass Index:      24.302487059714682
 *   Normal Weight:        Yes
 *   Danger:               No
 *   -----------------------------------------------------
 */

console.log(LINE); // Logs the dashed-line.

/*
 * TODO: Make sure to TEST YOUR SOFTWARE! Does it work, when People are smaller than 1 meter? Or taller than 2?
 * Tip: An 18-Year old Woman, sized 160cm with 60 kg should have a BMR of 1467 kcal and a BMI of 23.4375.
 */