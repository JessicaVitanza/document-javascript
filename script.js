// const todo1 ={
//     name: 'compra il pane',
//     priority: 3,
// }

// const todo2 ={
//     name: 'ripassa html',
//     priority: 5,
// }


// const todo3 ={
//     name: 'ripassa css',
//     priority: 7,
// }


// const todo4 ={
//     name: 'studia Javascript',
//     priority: 9,
// }

// const todo5 ={
//     name: 'compra il regalo alla mamma',
//     priority: 10,
// }

// const todoList = [todo1, todo2, todo3, todo4, todo5]

// function logTodos(todoArray) {
//     for (let i = 0; i < todoArray.length; i++) {
//         const todo = todoArray[i];
//        console.log(todo.name + ' ' + "priority: " + todo.priority)
//     }
// }


// // const container = document.getElementById("todo-container");

// // const par = document.createElement('p');

// // const textNode = document.createTextNode('Ciao a tutti');

// // par.appendChild(textNode);

// // container.appendChild(par);

// function writeToDosToDocuments(todoArray) {

//     const container = document.getElementById("todo-container");

//     for (let i = 0; i < todoArray.length; i++) {
//         const todo = todoArray[i];

//         const li = document.createElement('li');

//         li.classList.add('list-element');

//         const node = document.createTextNode(todo.name);

//         const priorityNode = document.createTextNode(" Priority " + todo.priority)

//         const br = document.createElement('br')

//         li.appendChild(node);

//         li.appendChild(br);

//         li.appendChild(priorityNode);

//         container.appendChild(li);
        
//     }
// }

// writeToDosToDocuments(todoList);

//________________________________________________________________________________________________________

// lista studenti

const corso1 = {
    nome: "programmatore front-end",
    ore: 300,
    terminato: false,
  };
  
  const corso2 = {
    nome: "programmatore back-end",
    ore: 300,
    terminato: true,
  };
  
  const corso3 = {
    nome: "programmatore full stack",
    ore: 300,
    terminato: false,
  };
  

  const studente1 = {
    nome: "Polina",
    cognome: "Boretc",
    genere: "femmina",
    eta: 27,
    citta: "Chelyabinsk",
    sposato: false,
    corso: corso1,
  };
  
  const studente2 = {
    nome: "Christopher",
    cognome: "Limone",
    genere: "maschio",
    eta: 27,
    citta: "Genova",
    sposato: false,
    corso: corso2,
  };
  
  const studente3 = {
    nome: "Cinzia",
    cognome: "Ariotti",
    genere: "femmina",
    eta: 26,
    citta: "Genova",
    sposato: false,
    corso: corso3,
  };
  
  const studente4 = {
    nome: "Giovanni",
    cognome: "Cambiaso",
    genere: "maschio",
    eta: 26,
    citta: "Genova",
    sposato: false,
    corso: corso3,
  };
  
  const studente5 = {
    nome: "Mattia",
    cognome: "Dalla Mutta",
    genere: "maschio",
    eta: 26,
    citta: "Genova",
    sposato: false,
    corso: corso3,
  };
  
  const studente6 = {
    nome: "Mirco",
    cognome: "Faro",
    genere: "maschio",
    eta: 26,
    citta: "Genova",
    sposato: false,
    corso: corso2,
  };
  
  const studente7 = {
    nome: "Paolo",
    cognome: "Foppiano",
    genere: "maschio",
    eta: 25,
    citta: "Genova",
    sposato: false,
    corso: corso3,
  };
  
  const studente9 = {
    nome: "Leslie",
    cognome: "Fritas Olaechea Stefanny",
    genere: "femmina",
    eta: 26,
    citta: "Lima",
    sposato: false,
    corso: corso3,
  };
  
  const studente10 = {
    nome: "Artem",
    cognome: "San Giorgio",
    genere: "maschio",
    eta: 26,
    citta: "San Pietroburgo",
    sposato: false,
    corso: corso2,
  };
  
  const studente11 = {
    nome: "Jessica",
    cognome: "Vitanza",
    genere: "femmina",
    eta: 26,
    citta: "Palermo",
    sposato: false,
    corso: corso1,
  };
  
  const studenti = [
    studente1,
    studente2,
    studente3,
    studente4,
    studente5,
    studente6,
    studente7,
    studente9,
    studente10,
    studente11,
  ];
  


function showStudents() {
    
    createStudentListHtml(studenti);

//   const container = document.getElementById("students-container");

//   container.innerHTML = '';


// for (const student of studenti) {

//     const li = document.createElement('li');

//     const nameDiv = document.createElement('div');

//     const nameNode = document.createTextNode(student.nome + ' ' + student.cognome);

//     nameDiv.appendChild(nameNode);

//     li.appendChild(nameDiv);



//     const ageDiv = document.createElement('div');

//     const ageNode = document.createTextNode('Età: ' + student.eta);

//     ageDiv.appendChild(ageNode);

//     li.appendChild(ageDiv);



//     const courseDiv = document.createElement('div');

//     const courseNode = document.createTextNode('Corso: ' + student.corso.nome);

//     courseDiv.appendChild(courseNode);

//     li.appendChild(courseDiv);



//     container.appendChild(li); 
// }

}




function showStudentsByAge() {

const studentsCopy = [...studenti];

studentsCopy.sort(compareStudentsByAge);

createStudentListHtml(studentsCopy);

}


function compareStudentsByAge(stud1, stud2) {

    return stud1.eta - stud2.eta;
}



function showFemaleStudents() {

// const femaleStudents = studenti.filter(keepFemaleStudent);

const femaleStudents = studenti.filter((s) => s.genere === 'femmina');
    
createStudentListHtml(femaleStudents);

}

function keepFemaleStudent(studente) {

return studente.genere === 'femmina';

}



function createStudentListHtml(studentArray) {
    
    const container = document.getElementById("students-container");

    container.innerHTML = '';
  
  
  for (const student of studentArray) {
  
      const li = document.createElement('li');
  
      const nameDiv = document.createElement('div');
  
      const nameNode = document.createTextNode(student.nome + ' ' + student.cognome);
  
      nameDiv.appendChild(nameNode);
  
      li.appendChild(nameDiv);
  
  
  
      const ageDiv = document.createElement('div');
  
      const ageNode = document.createTextNode('Età: ' + student.eta);
  
      ageDiv.appendChild(ageNode);
  
      li.appendChild(ageDiv);
  
  
  
      const courseDiv = document.createElement('div');
  
      const courseNode = document.createTextNode('Corso: ' + student.corso.nome);
  
      courseDiv.appendChild(courseNode);
  
      li.appendChild(courseDiv);

      container.appendChild(li); 
    }
    
}
