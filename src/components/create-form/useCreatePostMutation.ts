import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { ICreatePostFormInputs } from '@homework-task/components/create-form/ICreatePostFormInputs';

interface IPostResponse {
    id: number;
    title: string;
    body: string;
    userId?: number;
}

const createPost = async (
    data: ICreatePostFormInputs
): Promise<IPostResponse> => {
    try {
        const response = await axios.post<IPostResponse>(
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
    });
};
