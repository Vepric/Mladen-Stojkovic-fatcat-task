import clsx from 'clsx';
import { User } from '@homework-task/components/User';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useFetchUsers } from '@homework-task/hooks';

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
        <div
            className={clsx(
                'flex',
                'flex-col',
                'bg-white',
                'text-black',
                'rounded-2xl',
                'h-48',
                'w-3/4',
                'self-center',
                'items-center',
                'justify-center'
            )}
        >
            Loading...
        </div>
    ) : status === 'error' ? (
        <div>{error.message}</div>
    ) : (
        <div
            className={clsx(
                'flex',
                'flex-col',
                'gap-8',
                'w-3/4',
                'self-center'
            )}
        >
            {data.pages.map((page) => (
                <div
                    className={clsx('flex', 'flex-col', 'gap-8')}
                    key={page.currentPage}
                >
                    {page.data.map((user) => (
                        <User key={user.id} {...user}></User>
                    ))}
                </div>
            ))}
            <div className={clsx()} ref={ref}>
                {isFetchingNextPage && (
                    <div
                        className={clsx(
                            'flex',
                            'flex-col',
                            'bg-white',
                            'rounded-2xl',
                            'h-48'
                        )}
                    ></div>
                )}
            </div>
        </div>
    );
};
