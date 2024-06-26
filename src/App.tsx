import { Landing } from '@homework-task/components/landing/Landing';
import './styles.css';
import { UsersList } from '@homework-task/components/UsersList';

const App: React.FC = () => {
    return (
        <main>
            <Landing />
            <UsersList />
        </main>
    );
};

export default App;
