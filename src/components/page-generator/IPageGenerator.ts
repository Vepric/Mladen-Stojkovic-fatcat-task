import { HTMLProps } from 'react';

import { IHeroProps } from '@homework-task/components/page-generator/Hero';
import { IItemsShowcaseProps } from '@homework-task/components/page-generator/ItemsShowcase';
import { ITrustBarProps } from '@homework-task/components/page-generator/TrustBar';

export interface IHtmlComponentProps {
    type: 'h1' | 'h2' | 'p' | 'div' | 'span';
    props: React.HTMLProps<HTMLElement>;
}

export interface IComponentProps {
    type: string;
    props: IHeroProps | IItemsShowcaseProps | ITrustBarProps;
}

export interface ISectionProps {
    type: string;
    props: HTMLProps<HTMLDivElement>;
    components: (IComponentProps | IHtmlComponentProps)[];
}

export interface IPageGeneratorProps {
    data: ISectionProps[];
}
