import './App.css';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import ContactMe from './components/ContactMe';
import Map from './components/Map';

export default function App() {
        return (
                <div className="App">
                        <Profile />
                        <Projects />
                        <Experience />
                        <Education />
                        <Map />
                        <ContactMe />
                </div>
        );
}

// App;
