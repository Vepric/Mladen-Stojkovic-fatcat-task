import React from 'react';
import {
    useForm,
    SubmitHandler,
    FieldErrors,
    UseFormRegister,
} from 'react-hook-form';
import { ZodSchema } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreatePostMutation } from '../hooks/useCreatePostMutation';
import { ICreatePostFormInputs } from '@homework-task/models';

interface CreateFormProps {
    validationSchema: ZodSchema<ICreatePostFormInputs>;
    renderForm: (methods: {
        register: UseFormRegister<ICreatePostFormInputs>;
        errors: FieldErrors<ICreatePostFormInputs>;
    }) => React.ReactNode;
    successMessage: string;
}

const CreateForm: React.FC<CreateFormProps> = ({
    validationSchema,
    renderForm,
    successMessage,
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ICreatePostFormInputs>({
        resolver: zodResolver(validationSchema),
    });

    const mutation = useCreatePostMutation();

    const onSubmit: SubmitHandler<ICreatePostFormInputs> = (data) => {
        mutation.mutate(data, {
            onSuccess: () => {
                alert(successMessage);
                reset();
            },
        });
    };

    return (
        <form
            className="w-3/4 justify-center flex flex-col gap-4 self-center"
            onSubmit={handleSubmit(onSubmit)}
        >
            {renderForm({ register, errors })}
            <button
                type="submit"
                disabled={mutation.isPending}
                className="mt-4 w-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
                Submit
            </button>
            {mutation.isError && (
                <p className="mt-2 text-sm text-red">
                    An error occurred:{' '}
                    {mutation.error instanceof Error
                        ? mutation.error.message
                        : 'Unknown error'}
                </p>
            )}
        </form>
    );
};

export default CreateForm;
