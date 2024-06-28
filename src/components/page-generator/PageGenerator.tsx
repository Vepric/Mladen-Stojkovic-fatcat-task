import { Hero } from '@homework-task/components/page-generator/Hero';
import {
    IComponentProps,
    IPageGeneratorProps,
    ISectionProps,
} from '@homework-task/components/page-generator/IPageGenerator';
import { ItemsShowcase } from '@homework-task/components/page-generator/ItemsShowcase';
import { TrustBar } from '@homework-task/components/page-generator/TrustBar';

const componentMap: Record<string, React.ElementType> = {
    componentHero: Hero,
    componentItemsShowcase: ItemsShowcase,
    componentTrustBar: TrustBar,
    h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1 {...props} className="text-3xl font-bold my-4" />
    ),
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2 {...props} className="text-2xl font-semibold my-3" />
    ),
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p {...props} className="text-base my-2" />
    ),
    div: (props: React.HTMLAttributes<HTMLDivElement>) => (
        <div {...props} className="my-4" />
    ),
    span: (props: React.HTMLAttributes<HTMLSpanElement>) => (
        <span {...props} className="my-1" />
    ),
};

const renderComponent = (component: IComponentProps, index: number) => {
    const Component = componentMap[component.type];
    return Component ? (
        <Component key={`${component.type}-${index}`} {...component.props} />
    ) : null;
};

const renderSection = (section: ISectionProps, index: number) => (
    <div key={`${section.type}-${index}`} {...section.props}>
        {section.components.map((component, compIndex) =>
            renderComponent(component as IComponentProps, compIndex)
        )}
    </div>
);

export const PageGenerator: React.FC<IPageGeneratorProps> = ({ data }) => (
    <div>{data.map((section, index) => renderSection(section, index))}</div>
);
