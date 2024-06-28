import { Landing } from '@homework-task/components/landing/Landing';
import './styles.css';
import { Tasks } from '@homework-task/components/Tasks';

const App: React.FC = () => {
    return (
        <main>
            <Landing />
            <Tasks />
        </main>
    );
};

export default App;
