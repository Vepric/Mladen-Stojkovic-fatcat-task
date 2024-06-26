import { fetchUsers, useFetchUsers } from '@homework-task/hooks/useFetchUsers'; // Assuming the type 'UseQueryResult' is exported from 'useFetchUsers'
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const UsersList = () => {
    const { ref, inView } = useInView();
    const { data, error, status, fetchNextPage, isFetchingNextPage } =
        useFetchUsers(3);

    useEffect(() => {
        if (inView) {
            fetchNextPage();
        }
    }, [inView, fetchNextPage]);

    return status === 'pending' ? (
        <div>Loading...</div>
    ) : status === 'error' ? (
        <div>{error.message}</div>
    ) : (
        <div className="flex flex-col gap-2">
            {data.pages.map((page) => (
                <div className="flex flex-col gap-2" key={page.currentPage}>
                    {page.data.map((user) => (
                        <div key={user.id} className="p-4 bg-gray60 rounded">
                            {user.name}
                        </div>
                    ))}
                </div>
            ))}
            <div ref={ref}>{isFetchingNextPage && 'Loading...'}</div>
        </div>
    );
};
