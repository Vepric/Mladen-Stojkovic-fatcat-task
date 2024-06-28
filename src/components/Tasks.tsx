import CreateForm from '@homework-task/components/create-form/CreateForm';
import { FORM_SCHEMA } from '@homework-task/components/formSchema';
import Input from '@homework-task/components/Input';
import { PageGenerator } from '@homework-task/components/page-generator/PageGenerator';
import { PAGE_GENERATOR_DATA } from '@homework-task/components/page-generator/pageGeneratorData';
import TextArea from '@homework-task/components/TextArea';
import { UsersList } from '@homework-task/components/users-list/UsersList';

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
        <PageGenerator data={PAGE_GENERATOR_DATA} />
    </div>
);
