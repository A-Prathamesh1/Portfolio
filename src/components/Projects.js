import './Projects.css';
export default function Projects() {
        const listOfProjects = projects.map((project) => {
                return (
                        <li key={project.id}>
                                <a href={project.git}>{project.title}</a>
                        </li>
                );
        });
        return (
                <>
                        <h1>Projects</h1>
                        <ul>{listOfProjects}</ul>
                </>
        );
}

const projects = [
        {
                id: 0,
                title: 'Expense-Tracker',
                git: 'https://a-prathamesh1.github.io/Expense-Tracker/',
        },
        {
                id: 1,
                title: 'Notes App',
                git: 'https://a-prathamesh1.github.io/Notes-App/',
        },
];
