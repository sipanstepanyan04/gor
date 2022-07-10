// "use strict";

// function defineWorkshop() {}

// deepJS.addStudent(311, "Frank", /*paid=*/ true);
// deepJS.addStudent(410, "Suzy", /*paid=*/ true);
// deepJS.addStudent(709, "Brian", /*paid=*/ false);
// deepJS.addStudent(105, "Henry", /*paid=*/ false);
// deepJS.addStudent(502, "Mary", /*paid=*/ true);
// deepJS.addStudent(664, "Bob", /*paid=*/ false);
// deepJS.addStudent(250, "Peter", /*paid=*/ true);
// deepJS.addStudent(375, "Sarah", /*paid=*/ true);
// deepJS.addStudent(867, "Greg", /*paid=*/ false);

// deepJS.enrollStudent(410);
// deepJS.enrollStudent(105);
// deepJS.enrollStudent(664);
// deepJS.enrollStudent(375);

// deepJS.printCurrentEnrollment();
// console.log("----");
// deepJS.enrollPaidStudents();
// console.log("----");
// deepJS.remindUnpaidStudents();

// function defineWorkshop() {
//   let currentEnrollment = [];
//   let studentRecords = [];

//   // ********************************

//   function addStudent(id, name, paid) {
//     studentRecords.push({ id, name, paid });
//   }

//   function enrollStudent(id) {
//     if (!currentEnrollment.includes(id)) {
//       currentEnrollment.push(id);
//     }
//   }

//   function printCurrentEnrollment() {
//     printRecords(currentEnrollment);
//   }

//   function enrollPaidStudents() {
//     currentEnrollment = paidStudentsToEnroll();
//     printCurrentEnrollment();
//   }

//   function remindUnpaidStudents() {
//     remindUnpaid(currentEnrollment);
//   }

//   function getStudentFromId(studentId) {
//     return studentRecords.find(matchId);

//     // *************************

//     function matchId(record) {
//       return record.id == studentId;
//     }
//   }

//   function printRecords(recordIds) {
//     let records = recordIds.map(getStudentFromId);

//     records.sort(sortByNameAsc);

//     records.forEach(printRecord);
//   }

//   function sortByNameAsc(record1, record2) {
//     if (record1.name < record2.name) return -1;
//     else if (record1.name > record2.name) return 1;
//     else return 0;
//   }

//   function printRecord(record) {
//     console.log(
//       `${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`
//     );
//   }

//   function paidStudentsToEnroll() {
//     let recordsToEnroll = studentRecords.filter(needToEnroll);

//     let idsToEnroll = recordsToEnroll.map(getStudentId);

//     return [...currentEnrollment, ...idsToEnroll];
//   }

//   function needToEnroll(record) {
//     return record.paid && !currentEnrollment.includes(record.id);
//   }

//   function getStudentId(record) {
//     return record.id;
//   }

//   function remindUnpaid(recordIds) {
//     let unpaidIds = recordIds.filter(notYetPaid);

//     printRecords(unpaidIds);
//   }

//   function notYetPaid(studentId) {
//     let record = getStudentFromId(studentId);
//     return !record.paid;
//   }

//   let publicAPI = {
//     addStudent,
//     enrollStudent,
//     printCurrentEnrollment,
//     enrollPaidStudents,
//     remindUnpaidStudents,
//   };
//   return publicAPI;
// }

/*
   Bob (664): Not Paid
   Henry (105): Not Paid
   Sarah (375): Paid
   Suzy (410): Paid
   ----
   Bob (664): Not Paid
   Frank (313): Paid
   Henry (105): Not Paid
   Mary (502): Paid
   Peter (250): Paid
   Sarah (375): Paid
   Suzy (410): Paid
   ----
   Bob (664): Not Paid
   Henry (105): Not Paid
*/

// let deepJS = {
//   currentEnrollment: [],
//   studentRecords: [],

//   addStudent(id, name, paid) {
//     this.studentRecords.push({ id, name, paid });
//   },

//   enrollStudent(id) {
//     if (!this.currentEnrollment.includes(id)) {
//       this.currentEnrollment.push(id);
//     }
//   },

//   printCurrentEnrollment() {
//     this.printRecords(this.currentEnrollment);
//   },

//   enrollPaidStudents() {
//     this.currentEnrollment = this.paidStudentsToEnroll();
//     this.printCurrentEnrollment();
//   },

//   remindUnpaidStudents() {
//     this.remindUnpaid(this.currentEnrollment);
//   },

//   getStudentFromId(studentId) {
//     return this.studentRecords.find(matchId);

//     function matchId(record) {
//       return record.id == studentId;
//     }
//   },

//   printRecords(recordIds) {
//     let records = recordIds.map(this.getStudentFromId.bind(this));
//     records.sort(this.sortByNameAsc);
//     records.forEach(this.printRecord);
//   },

//   sortByNameAsc(record1, record2) {
//     if (record1.name < record2.name) return -1;
//     else if (record1.name > record2.name) return 1;
//     else return 0;
//   },

//   printRecord(record) {
//     console.log(
//       `${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`
//     );
//   },

//   paidStudentsToEnroll() {
//     let recordsToEnroll = this.studentRecords.filter(
//       this.needToEnroll.bind(this)
//     );

//     let idsToEnroll = recordsToEnroll.map(this.getStudentId.bind(this));

//     return [...this.currentEnrollment, ...idsToEnroll];
//   },

//   needToEnroll(record) {
//     return record.paid && !this.currentEnrollment.includes(record.id);
//   },

//   getStudentId(record) {
//     return record.id;
//   },

//   remindUnpaid(recordIds) {
//     let unpaidIds = recordIds.filter(this.notYetPaid.bind(this));
//     this.printRecords(unpaidIds);
//   },

//   notYetPaid(studentId) {
//     let record = this.getStudentFromId(studentId);
//     return !record.paid;
//   },
// };

// console.log(deepJS.addStudent(311, "Frank", /*paid=*/ true));
// console.log(deepJS.addStudent);
// deepJS.addStudent(311, "Frank", /*paid=*/ true);
// deepJS.addStudent(410, "Suzy", /*paid=*/ true);
// deepJS.addStudent(709, "Brian", /*paid=*/ false);
// deepJS.addStudent(105, "Henry", /*paid=*/ false);
// deepJS.addStudent(502, "Mary", /*paid=*/ true);
// deepJS.addStudent(664, "Bob", /*paid=*/ false);
// deepJS.addStudent(250, "Peter", /*paid=*/ true);
// deepJS.addStudent(375, "Sarah", /*paid=*/ true);
// deepJS.addStudent(867, "Greg", /*paid=*/ false);

// deepJS.enrollStudent(410);
// deepJS.enrollStudent(105);
// deepJS.enrollStudent(664);
// deepJS.enrollStudent(375);

// deepJS.printCurrentEnrollment();
// console.log("----");
// deepJS.enrollPaidStudents();
// console.log("----");
// deepJS.remindUnpaidStudents();

// git init
// git checkout [branch_name]
// git checkout -b [branch_name]
// git checkout [commit_hash]
// git status
// git add [file_name]
// git add .
// git commit -m ['commit message']
// git push origin [branch_name]
// git push
// git pull origin [branch_name]
// git pull
// git remote -version
// git remote add [origin] [repo_url]
// git branch -D [branch_name]
// git workflow
// git clone [repo_url]
// git restor
