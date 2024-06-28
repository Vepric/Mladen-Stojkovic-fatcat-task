export interface IHtmlComponentProps {
    type: 'h1' | 'h2' | 'p' | 'div' | 'span';
    props: React.HTMLProps<HTMLElement>;
}

export interface IComponentProps {
    type: string;
    props: Record<string, any>;
}

export interface ISectionProps {
    type: string;
    props: Record<string, any>;
    components: (IComponentProps | IHtmlComponentProps)[];
}

export interface IPageGeneratorProps {
    data: ISectionProps[];
}
