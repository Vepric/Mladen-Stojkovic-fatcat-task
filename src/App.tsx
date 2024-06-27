import { Landing } from '@homework-task/components/landing/Landing';
import './styles.css';
import { UsersList } from '@homework-task/components/UsersList';
import { z } from 'zod';
import CreateForm from '@homework-task/components/CreateForm';
import Input from '@homework-task/components/Input';
import TextArea from '@homework-task/components/TextArea';

const schema = z.object({
    title: z
        .string()
        .min(1, 'Title is required')
        .max(100, 'Title must be less than 100 characters'),
    body: z
        .string()
        .min(1, 'Body is required')
        .max(500, 'Body must be less than 500 characters'),
});
const App: React.FC = () => {
    return (
        <main>
            <Landing />
            <UsersList />
            <CreateForm
                validationSchema={schema}
                successMessage="Successfully created the post"
                renderForm={({ register, errors }) => (
                    <>
                        <Input
                            id="title"
                            label="Title"
                            register={register('title')}
                            error={!!errors.title}
                            helperText={errors.title?.message}
                        />
                        <TextArea
                            id="body"
                            label="Body"
                            register={register('body')}
                            error={!!errors.body}
                            helperText={errors.body?.message}
                        />
                    </>
                )}
            />
        </main>
    );
};

export default App;
