import CreateForm from '@homework-task/components/CreateForm';
import Input from '@homework-task/components/Input';
import PageGenerator from '@homework-task/components/PageGenerator';
import TextArea from '@homework-task/components/TextArea';
import { UsersList } from '@homework-task/components/UsersList';
import { FORM_SCHEMA, PAGE_GENERATOR } from '@homework-task/constants';

export const Tasks: React.FC = () => (
    <div className="flex flex-col gap-4 p-8 sm:p-16 bg-cream">
        <h2 className="text-2xl font-semibold my-3 text-center">Users List</h2>
        <UsersList />
        <h2 className="text-2xl font-semibold my-3 text-center">Create Form</h2>
        <CreateForm
            validationSchema={FORM_SCHEMA}
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
        <PageGenerator data={PAGE_GENERATOR} />
    </div>
);
