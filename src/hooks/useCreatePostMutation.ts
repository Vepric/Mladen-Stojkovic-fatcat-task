import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { ICreatePostFormInputs } from '@homework-task/models';

const createPost = async (data: ICreatePostFormInputs) => {
    try {
        const response = await axios.post(
            'https://jsonplaceholder.typicode.com/posts',
            data
        );
        return response.data;
    } catch (error) {
        const errorMessage =
            error instanceof Error ? error.message : String(error);
        throw new Error(errorMessage);
    }
};

export const useCreatePostMutation = () => {
    return useMutation({
        mutationFn: createPost,
        onError: (error) =>
            console.error('Error creating post:', error.message),
    });
};
