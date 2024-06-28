import React from 'react';
import { Hero } from '@homework-task/components/Hero';
import { ItemsShowcase } from '@homework-task/components/ItemsShowcase';
import { TrustBar } from '@homework-task/components/TrustBar';
import {
    IComponentProps,
    IPageGeneratorProps,
    ISectionProps,
} from '@homework-task/models';

const componentMap: Record<string, React.FC<any>> = {
    componentHero: Hero,
    componentItemsShowcase: ItemsShowcase,
    componentTrustBar: TrustBar,
    h1: (props) => <h1 {...props} className="text-3xl font-bold my-4" />,
    h2: (props) => <h2 {...props} className="text-2xl font-semibold my-3" />,
    p: (props) => <p {...props} className="text-base my-2" />,
    div: (props) => <div {...props} className="my-4" />,
    span: (props) => <span {...props} className="my-1" />,
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
            renderComponent(component, compIndex)
        )}
    </div>
);

const PageGenerator: React.FC<IPageGeneratorProps> = ({ data }) => (
    <div>{data.map((section, index) => renderSection(section, index))}</div>
);

export default PageGenerator;
