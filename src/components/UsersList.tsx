import clsx from 'clsx';
import { User } from '@homework-task/components/User';
import { useFetchUsers } from '@homework-task/hooks/useFetchUsers';
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
        <div className={clsx('flex', 'flex-col', 'gap-2')}>
            {data.pages.map((page) => (
                <div
                    className={clsx('flex', 'flex-col', 'gap-2')}
                    key={page.currentPage}
                >
                    {page.data.map((user) => (
                        <User key={user.id} {...user}></User>
                    ))}
                </div>
            ))}
            <div className={clsx('h-2')} ref={ref}>
                {isFetchingNextPage && 'Loading...'}
            </div>
        </div>
    );
};
