import './Projects.css';
export default function Projects() {
        const listOfProjects = projects.map((project) => {
                return <li key={project.id}>{project.title}</li>;
        });
        return (
                <>
                        <h1>Projects</h1>
                        <ul>{listOfProjects}</ul>
                </>
        );
}

const projects = [
        { id: 0, title: "Todo's App " },
        { id: 1, title: 'Personal Finance Tracker' },
        { id: 3, title: 'Introduction to Penetration Testing' },
        { id: 4, title: 'Selection of Protocol Based on Number of Nodes' },
];
