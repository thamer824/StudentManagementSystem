function add (number1, number2){
  return number1 + number2
};
add(1,2);
var numberOfStudents = 0;

function addStudent(){
  numberOfStudents = numberOfStudents + 1;
};
console.log(numberOfStudents);
addStudent();
console.log(numberOfStudents);
addStudent();
console.log(numberOfStudents);
function getNumberOfStudents() {
  console.log(numberOfStudents);
  return numberOfStudents;
};
getNumberOfStudents();
addStudent();
getNumberOfStudents();
var students = [];
clearStudents();


function addStudents(student){
students [numberOfStudents] = student;  
numberOfStudents = students.length;
};
console.log(students);
addStudents("Josh");
console.log(students);
console.log(numberOfStudents);
addStudents("John");
console.log(students);

function clearStudents() {
  clear = [];
  students = clear
  numberOfStudents = 0;
};
console.log(students);
getNumberOfStudents();
clearStudents();
console.log(students);
getNumberOfStudents();

function createFullName(firstName, lastName){
  return firstName + " " + lastName;
};
clearStudents();
getNumberOfStudents();
console.log(students);
addStudents(createFullName("Josh", "Bull"));
addStudents(createFullName("John", "Doe"));
addStudents(createFullName("Aziz", "Rourou"));
addStudents(createFullName("Aziz", ""));
addStudents(createFullName("", "Rourou"));
getNumberOfStudents();
console.log(students);

function getStudentByInitials(name, initial) {
if (name.charAt(0)==initial) {
  console.log("true");
  return true;
} else {
  console.log("false");
  return false;
}
}
getStudentByInitials("Josh", "J");
getStudentByInitials("Josh", "A");

function isFullName(name) {
const str = ""+name;
const words = str.split(' ');
var count = words.length;
if (count>1) {
  console.log("true");
  return true;
} else {
  console.log("false");
  return false;
};
};
isFullName("John Doe");
isFullName("John");

function getStudentsByInitials(initial) {
  var result = [];
  let i = 0;
  for (let index = 0; index < students.length; index++) {
    if(students[index].charAt(0)==initial){
    result[i]=students[index]
    i=i+1;
    }
  };
  console.log(result);
  return result
};
console.log(students);
getStudentsByInitials("J");

function getStudentsByInitials_v2(firstInitial,
  secondInitial) {
    var result = [];
    let i = 0;
    for (let index = 0; index < students.length; index++) {
      if(isFullName(students[index])){
        const str = ""+students[index];
        const words = str.split(' ');
        if((words[0].charAt(0)==firstInitial)&&(words[1].charAt(0)==secondInitial)){
        result[i]=students[index]
        i=i+1;
        }
      }
    };
    console.log(result);
    return result
  }
console.log(students);
getStudentsByInitials_v2("J", "D");



function createStudent(firstName, lastName, email, age,
education) {
  var student = {
    firstName: firstName,
    lastName: lastName,
    fullName: createFullName(firstName, lastName),
    email: email,
    age: age,
    education: education,
    skills: []
  };
  console.log(student);
  return student
}

var student1 = new createStudent("Aziz", "Rourou", "aziz.rourou.99@gmail.com", 21,
"SE");



function addSkills(student, sklls) {
  
  var arr = Array()
  arr= arr.concat(student.skills)
  arr=arr.concat(sklls)
  student.skills = [...new Set(arr)];
  
 }
 addSkills(student1,["hatml","css","dz"])
 console.log(student1.skills)


clearStudents();
console.log(students)



addStudents(createStudent("tamer", "galai", "aziz.com", 21,
"SE"))





function removeStudent(firstName) {
  for (let index = 0; index < students.length; index++) {
    if (students[index].firstName == firstName) {
      students.splice(0, 1);
      numberOfStudents = students.length
    };
    
  }
}
console.log(students);
  console.log(numberOfStudents);
  removeStudent("tamer")
  console.log(students)
  console.log(numberOfStudents)




  function addSkills(student, sklls) {
    var arr = Array();
    arr = arr.concat(student.skills);
    arr = arr.concat(sklls);
    student.skills = [...new Set(arr)];
  };
    var student1 = createStudent("John","Doe",
    "john.doe@gmail.com", 25, "CS");
    console.log(student1.skills);
    addSkills(student1, ["HTML", "CSS"]);
    console.log(student1.skills);
    addSkills(student1, ["Javascript", "CSS"]);
    console.log(student1.skills);
  
  clearStudents();
  delete me;
  addStudents(createStudent("firstn", "lastn","email@gmail.com",22,"RE"));
  console.log(students);
  console.log(numberOfStudents);
  addStudents(createStudent("second", "student","email@gmail.com",22,"SE"));
  console.log(students);
  console.log(numberOfStudents);
  
  function removeStudent(firstName) {
    for (let index = 0; index < students.length; index++) {
      if (students[index].firstName == firstName) {
        students.splice(index, 1);
        numberOfStudents = students.length
      };
      
    }
  }
    console.log(students);
    console.log(numberOfStudents);
    removeStudent("second");
    console.log(students);
    console.log(numberOfStudents);
    removeStudent("firstn");
    console.log(students);
    console.log(numberOfStudents);
  
 

    function isStudentOlderThan(student, age) {
       
      if (student.age > age)
        {
          return console.log( "true") 
        }else {
          return console.log( "false") 
        }



     }

var student3 = new createStudent("thamer","galai","zaaer",23,"fddgdg","fdfgsdqg")
var student1 = createStudent("ohn", "Doe",
  "john.doe@gmail.com", 25, "C")
  


isStudentOlderThan(student1,70)
isStudentOlderThan(student1,20)


function doesStudentHaveSkills(student) {
       
      if (student.skills.length != 0 ) {
        return console.log("true")
      }else 
      {
        return console.log("aaalse")
      }


 }


 var student5 = createStudent("tttttohn", "Doe",
  "john.doe@gmail.com", 25, "C")

  doesStudentHaveSkills(student5)
  addSkills(student5,["tamiiira","sfdsdf"])
  console.log(student5.skills)
  doesStudentHaveSkills(student5)
  doesStudentHaveSkills(student3)


  function isStudentQualified(student) {
    
        if (   doesStudentHaveSkills(student)   &&   isStudentOlderThan(student,18)) {
          return true

        }
        else {
          return false
        }


   }

   var student7 = createStudent("tttttohn", "Doe",
   "john.doe@gmail.com", 20, "C")
   isStudentQualified(student7)
   addSkills(student7,["sd","sfdsdf"])
   console.log(student7.skills)
   isStudentQualified(student7)

   function numberOfStudentsOlderThan(age) {
    var count = 0;
    for (let index = 0; index < students.length; index++) {
      
      if (isStudentOlderThan(students[index],age)) {
        
        count =index 
         count++


      }
    }
    return count;
  }
  clearStudents();
  console.log(students);
  var student1 = createStudent("Ben", "Vega",
  "ben.vega@gmail.com", 25, "RE");
  addStudents(student1);
  var student2 = createStudent("Josh", "Hep",
  "josh.hep@gmail.com", 26, "CS");
  addStudents(student2);
  var student3 = createStudent("Jane", "Nash",
  "jane.nash@gmail.com", 28, "CSE")
  addStudents(student3)
  console.log(numberOfStudentsOlderThan(25));



  function getStudentsWithSkills() {
    var res =[];
    var i =0;
    for (let index = 0; index < students.length; index++) {
      if (doesStudentHaveSkills(students[index])) {
        res[i] = students[index];
        i=i+1;
      }      
    }
    return res;
  }
  addSkills(student1, ["HTML", "CSS"]);
  getStudentsWithSkills()
   

   
 
 
 
 