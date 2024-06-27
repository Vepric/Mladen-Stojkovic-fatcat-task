import { IUser } from '@homework-task/models';
import { useInfiniteQuery } from '@tanstack/react-query';

interface IFetchUserParams {
    pageParam: number;
    limit: number;
}

interface IPagination<T> {
    data: T[];
    currentPage: number;
    nextPage: number | null;
}
interface IUserDTO {}

// Total number of users in the API. Simulation, since the API doesn't provide this information.
const TOTAL_USERS = 10;

export const fetchUsers = async ({
    pageParam,
    limit,
}: IFetchUserParams): Promise<IPagination<IUser>> => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?_page=${pageParam}&_limit=${limit}`
    );

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
            `Network error: ${response.status} ${response.statusText}. Error details: ${errorText}`
        );
    }

    return {
        data: await response.json(),
        currentPage: pageParam,
        nextPage: pageParam * limit >= TOTAL_USERS ? null : pageParam + 1,
    };
};

export const useFetchUsers = (limit = 3) => {
    return useInfiniteQuery({
        queryKey: ['users'],
        queryFn: ({ pageParam = 1 }) => fetchUsers({ pageParam, limit }),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.nextPage,
    });
};
