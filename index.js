const inquirer = require('inquirer');
const fs= require('fs');
let peopleAry=[];
let person;
let currentMan;
let currentEng;
let currentInt;
let startHTML=`
<!DOCTYPE html>
<html>
<head>
	<title>Page</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>
<body>
	<div class="jumbotron">
		<h1 class="text-center">My Team</h1>
	</div>
<div class=container>
`;

const endHTML=`
</div>
</body>
</html>
`;

function ask() {
inquirer
  .prompt([
    {
      type: 'list',
      name: 'position',
      message: 'Would you like to add another Person?',
      choices: ['Manager','Engineer','Intern','Exit']
    },
  ])
  .then(answers => {
     if(answers.position=="Manager") {
        manager();
    }
     else if(answers.position=="Engineer") {
        engineer();
     }
     else if(answers.position=="Intern") {
        intern();
    }
    else {
        test();
    }
    
  });
}
ask()

function manager() {
    inquirer.prompt([
        {
            name: "name",
            message: "What is this Person's Name"
        },
        {
          name: "id",
          message: "What is this Person's ID number?"  
        },
        {
            name: "email",
            message: "What is this Person's Email Adress?"  
          },
          {
            name: "office",
            message: "What is this Person's Office number?"  
          }
    ])
    .then(answers => {
        console.log(answers.name, answers.id, answers.email, answers.office);
        person={
            position:"Manager",
            name: answers.name,
            id: answers.id,
            email: answers.email,
            office: answers.office,
        }
        peopleAry.push(person);
        ask();
 });
}
function engineer() {
    inquirer.prompt([
        {
            name: "name",
            message: "What is this Person's Name"
        },
        {
          name: "id",
          message: "What is this Person's ID number?"  
        },
        {
            name: "email",
            message: "What is this Person's Email Adress?"  
          },
          {
            name: "git",
            message: "What is this Person's GitHub Username?"  
          },
    ])
    .then(answers => {
        console.log(answers.name, answers.id, answers.email, answers.git);
        person={
            position:"Engineer",
            name: answers.name,
            id: answers.id,
            email: answers.email,
            git: answers.git
        }
        peopleAry.push(person);
        ask();
 });
}
function intern() {
    inquirer.prompt([
        {
            name: "name",
            message: "What is this Person's Name"
        },
        {
          name: "id",
          message: "What is this Person's ID number?"  
        },
        {
            name: "email",
            message: "What is this Person's Email Adress?"  
          },
          {
            name: "school",
            message: "Where does this Person go to School?"  
          },
    ])
    .then(answers => {
        console.log(answers.name, answers.id, answers.email, answers.school);
        person={
            position:"Intern",
            name: answers.name,
            id: answers.id,
            email: answers.email,
            school: answers.school
        }
        peopleAry.push(person);
        ask();
 });
}
function test(){
    let x=JSON.stringify(peopleAry);
    fs.writeFile('test.txt', x, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
      
    
for(i=0;i<peopleAry.length;i++) {
 

    if (peopleAry[i].position=="test") { }
    else if (peopleAry[i].position=="Manager") {
       currentMan= `
       <div class=row>
        <div class="col-4"></div>
        <div class="card col-3" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Manager</h5>
          <h6 class="card-text">${peopleAry[i].name}</h6>
          <p class="card-text">ID: ${peopleAry[i].id}</p>
          <p class="card-text">Office: ${peopleAry[i].office}</p>
          <a href="mailto:${peopleAry[i].email}" >${peopleAry[i].email}</a>
        </div>
      </div>
    </div>
    `;
startHTML=startHTML+currentMan;
    }
    else if (peopleAry[i].position=="Engineer") {
        currentEng=`
        <div class=row>
        <div class="col-4"></div>
      <div class="card col-3" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Engineer</h5>
          <h6 class="card-text">${peopleAry[i].name}</h6>
          <p class="card-text">ID: ${peopleAry[i].id}</p>
          <a href="mailto:${peopleAry[i].email}" >${peopleAry[i].email}</a>
          <br>
          <a href="https://github.com/${peopleAry[i].git}">${peopleAry[i].git}</a>
        </div>
      </div>
      </div>
      `;
      startHTML=startHTML+currentEng;
    }
    else {
        currentInt=`
        <div class="row">
        <div class= col-4></div>
      <div class="card col-3" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Intern</h5>
          <h6 class="card-text">${peopleAry[i].name}</h6>
          <p class="card-text">ID: ${peopleAry[i].id}</p>
          <p class="card-text">School: ${peopleAry[i].school}</p>
          <a href="mailto:${peopleAry[i].email}" >${peopleAry[i].email}</a>
        </div>
      </div>
      </div>
      `;
      startHTML=startHTML+currentInt;
    }
}
htmlEnd();
}


function htmlEnd(){
  startHTML=startHTML+endHTML;
 fs.writeFile('index.html', startHTML, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  
}