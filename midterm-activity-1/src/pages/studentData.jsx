import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
const [students, setStudents] = useState([]);

useEffect(() => {
    setStudents(studentData);
}, []);


const studentData = [
    { id: 1, name: "Alice Johnson", course: "Computer Science" },
    { id: 2, name: "Bob Smith", course: "Information Technology" },
    { id: 3, name: "Carol Williams", course: "Software Engineering" },
    { id: 4, name: "David Brown", course: "Computer Science" },
    { id: 5, name: "Eve Davis", course: "Data Science" },
    { id: 6, name: "Frank Miller", course: "Cybersecurity" },
    { id: 7, name: "Grace Wilson", course: "Information Technology" },
    { id: 8, name: "Henry Moore", course: "Computer Science" },
    { id: 9, name: "Ivy Taylor", course: "Software Engineering" },
    { id: 10, name: "Jack Anderson", course: "Data Science" }
];

export default studentData;