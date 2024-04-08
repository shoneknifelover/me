let finalGPASum = 0.0;
let numberOfGrades = 0;
let gradesArray = ['A+', 'A', 'A-', 'B+','B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
let mean = 1;




function runProgram(){
    const submitButton = document.querySelector(".submitButton");
    submitButton.addEventListener("click", addGrade);



}

function meanCalculator(number, amount){
    const gpa = document.querySelector("#fG");
    mean = number/amount  
    gpa.textContent = `Your Final GPA: ${mean}`

}




function addGrade(){
    console.log("Adding grade");
    let validGrade = 0;
    const gradeInputBar = document.querySelector("#gradeInput");
    const classInputBar = document.querySelector("#classInput");
    const classWeightInputBar = document.querySelector("#weightOfClass");
    let course = classInputBar.value;
    let grade = gradeInputBar.value;
    let classWeight = classWeightInputBar.value;
    
    const newClass = document.createElement("li");
    const list = document.querySelector("#gradeList");


    for(let i=0; i<13; i++){
        if(grade === gradesArray[i]){
            validGrade += 1;
        }
    }
    
    if(validGrade === 0){
        alert("Please enter a valid LETTER grade.");
    }
    else{
        newClass.textContent = `Class:  ${classWeight} ${course}, Grade: ${grade}`
        list.appendChild(newClass);
    }
    
    numberOfGrades += 1;
    

    if (classWeight === "On-Level"){
        if (grade === gradesArray[0]){
            finalGPASum += 4.3;
            meanCalculator(finalGPASum, numberOfGrades);
           
        }
        else if (grade === gradesArray[1]){
            finalGPASum += 4.0;
            meanCalculator(finalGPASum, numberOfGrades);
        }
        else if (grade === gradesArray[2]){
            finalGPASum += 3.8;
            meanCalculator(finalGPASum, numberOfGrades);
        }
        else if (grade === gradesArray[3]){
            finalGPASum += 3.3;
            meanCalculator(finalGPASum, numberOfGrades);
        }
        else if (grade === gradesArray[4]){
            finalGPASum += 3.0;
            meanCalculator(finalGPASum, numberOfGrades);
        }
        else if (grade === gradesArray[5]){
            finalGPASum += 2.7;
            meanCalculator(finalGPASum, numberOfGrades);
        }
        else if (grade === gradesArray[6]){
            finalGPASum += 2.4;
            meanCalculator(finalGPASum, numberOfGrades);
        }
        else if (grade === gradesArray[7]){
            finalGPASum += 2.3;
            meanCalculator(finalGPASum, numberOfGrades);
        }
        else if (grade === gradesArray[8]){
            finalGPASum += 2.0;
            meanCalculator(finalGPASum, numberOfGrades);
        }
        else if (grade === gradesArray[9]){
            finalGPASum += 1.7;
            meanCalculator(finalGPASum, numberOfGrades);
        } 
        else if (grade === gradesArray[10]){
            finalGPASum += 1.3;
            meanCalculator(finalGPASum, numberOfGrades);
        }
        else if (grade === gradesArray[11]){
            finalGPASum += 1.0;
            meanCalculator(finalGPASum, numberOfGrades);
        }
        else if (grade === gradesArray[12]){
            finalGPASum += 0.0;
            meanCalculator(finalGPASum, numberOfGrades);
        }
    }
    else if (classWeight === "Honors/AP"){
        if (grade === gradesArray[0]){
            finalGPASum += 5.3;
            meanCalculator(finalGPASum, numberOfGrades);
        }
        else if (grade === gradesArray[1]){
            finalGPASum += 5.0;
            meanCalculator(finalGPASum, numberOfGrades);
        }
        else if (grade === gradesArray[2]){
            finalGPASum += 4.8;
            meanCalculator(finalGPASum, numberOfGrades);
        }
        else if (grade === gradesArray[3]){
            finalGPASum += 4.3;
            meanCalculator(finalGPASum, numberOfGrades);
        }
        else if (grade === gradesArray[4]){
            finalGPASum += 4.0;
            meanCalculator(finalGPASum, numberOfGrades);
        }
        else if (grade === gradesArray[5]){
            finalGPASum += 3.7;
            meanCalculator(finalGPASum, numberOfGrades);
        }
        else if (grade === gradesArray[6]){
            finalGPASum += 3.4;
            meanCalculator(finalGPASum, numberOfGrades);
        }
        else if (grade === gradesArray[7]){
            finalGPASum += 3.3;
            meanCalculator(finalGPASum, numberOfGrades);
        }
        else if (grade === gradesArray[8]){
            finalGPASum += 3.0;
            meanCalculator(finalGPASum, numberOfGrades);
        }
        else if (grade === gradesArray[9]){
            finalGPASum += 2.7;
            meanCalculator(finalGPASum, numberOfGrades);
        } 
        else if (grade === gradesArray[10]){
            finalGPASum += 2.3;
            meanCalculator(finalGPASum, numberOfGrades);
        }
        else if (grade === gradesArray[11]){
            finalGPASum += 2.0;
            meanCalculator(finalGPASum, numberOfGrades);
        }
        else if (grade === gradesArray[12]){
            finalGPASum += 1.0;
            meanCalculator(finalGPASum, numberOfGrades);
        }
    }



    gradeInputBar.value = "";
    classInputBar.value = "";
    classWeightInputBar.value = "";

    gradeInputBar.focus();


}






document.addEventListener("DOMContentLoaded", runProgram);
