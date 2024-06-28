import { ISectionProps } from '@homework-task/models';

export const PAGE_GENERATOR: ISectionProps[] = [
    {
        type: 'layoutSection',
        props: {
            className: 'flex flex-col items-center gap-4',
        },
        components: [
            {
                type: 'componentHero',
                props: {
                    title: 'Component Generator Demo',
                    image: '/media/hero.png',
                },
            },
            {
                type: 'span',
                props: {
                    children: 'This is a tiny span.',
                },
            },
        ],
    },
    {
        type: 'layoutSection',
        props: { className: 'flex flex-col gap-16 my-16' },
        components: [
            {
                type: 'componentItemsShowcase',
                props: {
                    items: [
                        { title: 'Item 1', description: 'Description 1' },
                        { title: 'Item 2', description: 'Description 2' },
                        { title: 'Item 3', description: 'Description 3' },
                        { title: 'Item 4', description: 'Description 4' },
                    ],
                },
            },
            {
                type: 'componentTrustBar',
                props: {
                    images: [
                        '/media/cats/cat_1.png',
                        '/media/cats/cat_2.png',
                        '/media/cats/cat_3.png',
                        '/media/cats/cat_4.png',
                        '/media/cats/cat_5.png',
                        '/media/cats/cat_6.png',
                        '/media/cats/cat_7.png',
                        '/media/cats/cat_8.png',
                        '/media/cats/cat_9.png',
                    ],
                },
            },
        ],
    },
];
