import { useStudents, useInstructors } from "./data/classroom.js";

const students = useStudents();
const instructors = useInstructors();

// Export a function named getStudentsInCohort
// It should accept one integer parameter named `cohort`
// It should return an array of just the students who are in that cohort
 export const getStudentsInCohort = (cohort) => {
     let filteredStudents = students.filter(student => student.cohort === cohort)
     return filteredStudents;
 }


// Export a function called getFullTimeStudents
// It should not accept any parameters
// It should return an array of only the full time students
export const getFullTimeStudents = () => {
    let filteredStudents = students.filter(student => student.fullTime)
    return filteredStudents
}



// Export a function called getStudentsByInstructorId
// It should accept one integer parameter name `instructorId`
// It should return an array of students with that instructor
export const getStudentsByInstructorId = (instructorId) => {
    let filteredStudents = students.filter(student => student.instructorId === instructorId)
    return filteredStudents
}


// Export a function called getPolyglotStudents
// It should accept one integer parameter named `languageCount`
// It should return an array of students who know as many (or more) languages than `languageCount`
// Ex: If the number 2 is passed to the function, only the students who know 2 or more languages should be returned
export const getPolyglotStudents = (languageCount) => {
    let filteredStudents = students.filter(student => student.languages.length >= languageCount)
    return filteredStudents
}




// Export a function called getAvailableInstructors
// It should not accept any parameters
// It should return an array of instructors that don't have any students
export const getAvailableInstructors = () => {
    let mapStuff = students.map(student => student.instructorId)
    return instructors.filter(instructor=> mapStuff.includes(instructor.id)=== false)
}


// Export a function called getStudentsByLanguage
// It should accept one string parameter named `language`
// It should return an array of students who know the given language
// HINT: In addition to the `filter` method, you might also look up the `some` method
export const getStudentsByLanguage = (language) => {
    let filteredStudents = students.filter(student => student.languages.includes(language)=== true)
    return filteredStudents
}



/******** ADVANCED CHALLENGE ********/
/******** Only do this if all other tests are passing ****/
/******** To test, uncomment the code at the bottom of tests/filter.spec.js  *****/

// Export a function called getStudentsByLanguages
// It should accept an array of strings as a parameter named `languages`
// It should return an array of students who know ALL of the given languages
// Ex: getStudentsByLanguages(["Javascript", "C#"])

export const getStudentsByLanguages = (languages) => {
    let matchesLanguages = [];
    languages.map((language) => {
      matchesLanguages = students.filter((student) =>
        student.languages.includes(language)
      );
    });
    return matchesLanguages;
  };



// export const getStudentsByLanguages = (languages) => {
//     let correctStudents = []
//     let fullyCorrectStudents = []
//     students.map((student)=> {
//         languages.forEach(language => {
//             if (student.languages.includes(language)=== true) {
//                 correctStudents.push(student)
//             }
//         })
//     })

//     correctStudents.filter((student)=> {
//         fullyCorrectStudents = correctStudents
//         languages.filter(language => {
//             if(student.languages.includes(language)=== false) {
//                 fullyCorrectStudents.pop(student)
//             }
//             return fullyCorrectStudents
//         })
//     })

    
//     return fullyCorrectStudents
// }

console.log(getStudentsByLanguages(["C#", "Javascript"]))