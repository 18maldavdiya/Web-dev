// ====================== DOCTORS ======================

let doctors = [
    { id: 101, name: "Dr. Sharma", degree: "MBBS, MD", specialization: "Cardiologist", room: 201, timing: "9 AM - 5 PM" },
    { id: 102, name: "Dr. Verma", degree: "MBBS, MS", specialization: "Neurologist", room: 202, timing: "9 AM - 5 PM" },
    { id: 103, name: "Dr. Khan", degree: "MBBS, MD", specialization: "Dermatologist", room: 203, timing: "9 AM - 5 PM" },
    { id: 104, name: "Dr. Singh", degree: "MBBS, DNB", specialization: "Orthopedic", room: 204, timing: "9 AM - 5 PM" },
    { id: 105, name: "Dr. Patel", degree: "MBBS, MD", specialization: "Pediatrician", room: 205, timing: "9 AM - 5 PM" }
];

// ====================== PATIENTS ======================

let patients = [
    { id: 1, name: "Rahul", age: 25, disease: "Heart Pain", address: "Bhopal", mobile: "9876543210" },
    { id: 2, name: "Priya", age: 30, disease: "Migraine", address: "Indore", mobile: "9876500000" },
    { id: 3, name: "Amit", age: 22, disease: "Skin Allergy", address: "Sehore", mobile: "9876511111" },
    { id: 4, name: "Neha", age: 35, disease: "Leg Fracture", address: "Vidisha", mobile: "9876522222" },
    { id: 5, name: "Rohan", age: 10, disease: "Fever", address: "Bhopal", mobile: "9876533333" }
];

// ====================== DOCTOR SCHEDULE ======================

let schedule = [

    { doctor: "Dr. Sharma", time: "09:00 AM", patient: "Rahul", disease: "Heart Pain" },
    { doctor: "Dr. Sharma", time: "10:00 AM", patient: "Follow Up Case", disease: "Heart Checkup" },
    { doctor: "Dr. Sharma", time: "11:00 AM", patient: "Emergency Case", disease: "Chest Pain" },
    { doctor: "Dr. Sharma", time: "12:00 PM", patient: "New Patient", disease: "BP Problem" },

    { doctor: "Dr. Verma", time: "09:00 AM", patient: "Priya", disease: "Migraine" },
    { doctor: "Dr. Verma", time: "10:00 AM", patient: "Patient A", disease: "Headache" },
    { doctor: "Dr. Verma", time: "11:00 AM", patient: "Patient B", disease: "Brain Scan Review" },
    { doctor: "Dr. Verma", time: "12:00 PM", patient: "Patient C", disease: "Nerve Problem" },

    { doctor: "Dr. Khan", time: "09:00 AM", patient: "Amit", disease: "Skin Allergy" },
    { doctor: "Dr. Khan", time: "10:00 AM", patient: "Patient D", disease: "Skin Infection" },
    { doctor: "Dr. Khan", time: "11:00 AM", patient: "Patient E", disease: "Acne" },
    { doctor: "Dr. Khan", time: "12:00 PM", patient: "Patient F", disease: "Skin Rash" },

    { doctor: "Dr. Singh", time: "09:00 AM", patient: "Neha", disease: "Leg Fracture" },
    { doctor: "Dr. Singh", time: "10:00 AM", patient: "Patient G", disease: "Bone Pain" },
    { doctor: "Dr. Singh", time: "11:00 AM", patient: "Patient H", disease: "Joint Problem" },
    { doctor: "Dr. Singh", time: "12:00 PM", patient: "Patient I", disease: "Back Pain" },

    { doctor: "Dr. Patel", time: "09:00 AM", patient: "Rohan", disease: "Fever" },
    { doctor: "Dr. Patel", time: "10:00 AM", patient: "Patient J", disease: "Cold" },
    { doctor: "Dr. Patel", time: "11:00 AM", patient: "Patient K", disease: "Child Checkup" },
    { doctor: "Dr. Patel", time: "12:00 PM", patient: "Patient L", disease: "Vaccination" }
];

// ====================== DISPLAY ======================

console.log("\n========== DOCTOR DETAILS ==========");

doctors.forEach(function(doc) {
    console.log(doc);
});

console.log("\n========== PATIENT DETAILS ==========");

patients.forEach(function(patient) {
    console.log(patient);
});

console.log("\n========== DOCTOR DAILY SCHEDULE ==========");

schedule.forEach(function(item) {

    console.log(
        "Doctor :", item.doctor,
        "| Time :", item.time,
        "| Patient :", item.patient,
        "| Disease :", item.disease
    );

});