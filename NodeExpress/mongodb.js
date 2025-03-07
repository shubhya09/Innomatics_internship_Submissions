// // const mongoose = require('mongoose');


// // mongoose.connect('mongodb://localhost:27017/innomatics_database')
// // .then(()=> console.log('database is connected'))
// // .catch((e)=> console.log('databse is not connected', e));
// // // Define the schema for the student
// // const studentSchema = new mongoose.Schema({
// //     student_name: { type: String, required: true },
// //     student_uid: { type: Number, required: true },
// //     student_contact: { type: String, required: true },
// //     student_attendance: { type: Number, required: true },
// //     student_sub1: { type: Number, required: true },
// //     student_sub2: { type: Number, required: true },
// //     student_sub3: { type: Number, required: true },
// //     student_active: { type: Boolean, required: true }
// // });

// // // Create a model from the schema
// // const studentRecord = mongoose.model('Student', studentSchema);

// // // Function to create and save multiple student documents
// // const createDocument = async () => {
// //  try{
// //     const student1 = new studentRecord({
// //         student_name: 'Peter Parker',
// //         student_uid: 48,
// //         student_contact: 'peterparker@gmail.com',
// //         student_attendance: 99,
// //         student_sub1: 99,
// //         student_sub2: 98,
// //         student_sub3: 96,
// //         student_active: true
// //     });

// //     const student2 = new studentRecord({
// //         student_name: 'Tony Stark',
// //         student_uid: 49,
// //         student_contact: 'tonystark@starkindustries.com',
// //         student_attendance: 95,
// //         student_sub1: 94,
// //         student_sub2: 92,
// //         student_sub3: 88,
// //         student_active: true
// //     });

// //     const student3 = new studentRecord({
// //         student_name: 'Natasha Romanoff',
// //         student_uid: 50,
// //         student_contact: 'natasha.romanoff@shield.com',
// //         student_attendance: 97,
// //         student_sub1: 89,
// //         student_sub2: 93,
// //         student_sub3: 92,
// //         student_active: true
// //     });
// //     const result = await studentRecord({})
// //  }
// //    catch(e){
// //     console.log(e);
// //    }

// //     console.log("Student records saved successfully!");
// // };

// // // Call the createDocument function
// // createDocument().catch(err => console.log("Error saving student records:", err));

// // const mongoose = require('mongoose');

// // // Connect to the database
// // mongoose.connect('mongodb://localhost:27017/innomatics_database')
// //   .then(() => console.log('Database is connected'))
// //   .catch((e) => console.log('Database is not connected', e));

// // // Define the schema for the student
// // const studentSchema = new mongoose.Schema({
// //   student_name: { type: String, required: true },
// //   student_uid: { type: Number, required: true },
// //   student_contact: { type: String, required: true },
// //   student_attendance: { type: Number, required: true },
// //   student_sub1: { type: Number, required: true },
// //   student_sub2: { type: Number, required: true },
// //   student_sub3: { type: Number, required: true },
// //   student_active: { type: Boolean, required: true }
// // });

// // // Create a model from the schema
// // const studentRecord = mongoose.model('Student', studentSchema);

// // // Function to create and save multiple student documents
// // const createDocument = async () => {
// //   try {
// //     const student1 = new studentRecord({
// //       student_name: 'Peter Parker',
// //       student_uid: 48,
// //       student_contact: 'peterparker@gmail.com',
// //       student_attendance: 99,
// //       student_sub1: 99,
// //       student_sub2: 98,
// //       student_sub3: 96,
// //       student_active: true
// //     });

// //     const student2 = new studentRecord({
// //       student_name: 'Tony Stark',
// //       student_uid: 49,
// //       student_contact: 'tonystark@starkindustries.com',
// //       student_attendance: 95,
// //       student_sub1: 94,
// //       student_sub2: 92,
// //       student_sub3: 88,
// //       student_active: true
// //     });

// //     const student3 = new studentRecord({
// //       student_name: 'Natasha Romanoff',
// //       student_uid: 50,
// //       student_contact: 'natasha.romanoff@shield.com',
// //       student_attendance: 97,
// //       student_sub1: 89,
// //       student_sub2: 93,
// //       student_sub3: 92,
// //       student_active: true
// //     });

// //     // Save all student documents
// //     await student1.save();
// //     await student2.save();
// //     await student3.save();

// //     console.log("Student records saved successfully!");
// //   } catch (e) {
// //     console.log("Error saving student records:", e);
// //   }
// // };

// // // Call the createDocument function
// // createDocument().catch(err => console.log("Error saving student records:", err));


// // other way to store data


// const mongoose = require('mongoose');

// // Connect to the database
// mongoose.connect('mongodb://localhost:27017/innomatics_database')
//   .then(() => console.log('Database is connected'))
//   .catch((e) => console.log('Database is not connected', e));

// // Define the schema for the student
// const studentSchema = new mongoose.Schema({
//   student_name: { type: String, required: true },
//   student_uid: { type: Number, required: true },
//   student_contact: { type: String, required: true },
//   student_attendance: { type: Number, required: true },
//   student_sub1: { type: Number, required: true },
//   student_sub2: { type: Number, required: true },
//   student_sub3: { type: Number, required: true },
//   student_active: { type: Boolean, required: true }
// });

// // Create a model from the schema
// const studentRecord = mongoose.model('Student', studentSchema);

// // Function to create and save multiple student documents
// const createDocument = async () => {
//   try {
//     const allStudents = await studentRecord.create(
//         [
//             {
//                 student_name: 'Bruce Banner',
//                 student_uid: 51,
//                 student_contact: 'bruce.banner@starkindustries.com',
//                 student_attendance: 93,
//                 student_sub1: 85,
//                 student_sub2: 88,
//                 student_sub3: 92,
//                 student_active: true
//             },
//             {
//                 student_name: 'Steve Rogers',
//                 student_uid: 52,
//                 student_contact: 'steve.rogers@avengers.com',
//                 student_attendance: 100,
//                 student_sub1: 92,
//                 student_sub2: 96,
//                 student_sub3: 94,
//                 student_active: true
//             },
//             {
//                 student_name: 'Clint Barton',
//                 student_uid: 53,
//                 student_contact: 'clint.barton@shield.com',
//                 student_attendance: 94,
//                 student_sub1: 91,
//                 student_sub2: 89,
//                 student_sub3: 93,
//                 student_active: true
//             }
//         ]
//     )
// console.log('record saved successfuly')
//   } catch (e) {
//     console.log("Error saving student records:", e);
//   }
// };

// // Call the createDocument function
// createDocument().catch(err => console.log("Error saving student records:", err));



// // ==-------------------Read data from database============---------


// const getDocument = async()=>{
//     try{
//         // const result = await studentRecord.find({student_attendance:{$gt:95}},{student_name:1,_id:0});
//         const result = await studentRecord.find({student_attendance:{$gt:95}}).select({student_name:1,_id:0});
//         console.log(result);
//     }
//     catch(e){
//         console.log(e);
//     }
// }
// getDocument();


// //----------------------- Update record------------------------------------

// const updateDocument = async () => {
//     try {
//         // Update a specific student record (example: update attendance for a student)
//         const result = await studentRecord.updateOne(
//             { student_uid: 48 }, // Filter to find the document (e.g., student_uid: 48)
//             {
//                 $set: { student_attendance: 100 } // Update the attendance field
//             }
//         );
//         console.log("Update Result:", result);
//     } catch (e) {
//         console.log("Error updating document:", e);
//     }
// };

// updateDocument();



// // -----------------delete record------------------------------

// const deleteDocument = async () => {
//     try {
//         // Delete a student record based on the student_uid (example: delete student with uid 48)
//         const result = await studentRecord.deleteOne({ student_uid: 48 });
//         console.log("Delete Result:", result);
//     } catch (e) {
//         console.log("Error deleting document:", e);
//     }
// };

// deleteDocument();
