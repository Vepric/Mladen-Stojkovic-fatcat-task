import { IUser } from '@homework-task/models';
import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';

interface IFetchUserParams {
    pageParam: number;
    limit: number;
}

interface IPagination<T> {
    data: T[];
    currentPage: number;
    nextPage: number | null;
}

const fetchUsers = async ({
    pageParam,
    limit,
}: IFetchUserParams): Promise<IPagination<IUser>> => {
    try {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/users`,
            {
                params: {
                    _page: pageParam,
                    _limit: limit,
                },
            }
        );

        const totalUsers = parseInt(response.headers['x-total-count'], 10);

        return {
            data: response.data,
            currentPage: pageParam,
            nextPage: pageParam * limit >= totalUsers ? null : pageParam + 1,
        };
    } catch (error) {
        const errorMessage =
            error instanceof Error ? error.message : String(error);
        throw new Error(errorMessage);
    }
};

export const useFetchUsers = (limit = 3, onError: (error: Error) => void) => {
    return useInfiniteQuery({
        queryKey: ['users'],
        queryFn: ({ pageParam = 1 }) => fetchUsers({ pageParam, limit }),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.nextPage,
    });
};
