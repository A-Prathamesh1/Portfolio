export default function Education() {
        const listOfDegrees = education.map((degree) => (
                <li key={degree.id}>
                        <h2>{degree.degree}</h2>
                        <h3>{degree.specialization}</h3>
                        <h4>{degree.university}</h4>
                        <h4>CGPA: {degree.CGPA}</h4>
                </li>
        ));
        return (
                <>
                        <h1>Education</h1>
                        <ul>{listOfDegrees}</ul>
                </>
        );
}

const education = [
        {
                id: 0,
                degree: 'Master of Science',
                specialization:
                        'Computer Networking System & Telecommunication',
                university: 'California State University EastBay',
                CGPA: 3.11,
        },
        {
                id: 1,
                degree: 'Bachelor of Engineering',
                specialization: 'Computer Science & Engineering',
                university: 'Sant Gadge Baba Amravati University',
                CGPA: 7.84,
        },
];
