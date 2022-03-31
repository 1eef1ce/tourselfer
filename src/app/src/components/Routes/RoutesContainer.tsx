import Route from './Route';

type RouteTypes = {
    classMod?: string
};

const RoutesContainer = (props:RouteTypes) => {
    const rootClass = "routes__container";
    return (
        <div className={rootClass + ((typeof props.classMod === "string") ? (' ' + rootClass + '--' + props.classMod) : '')}>
            <div className="routes__items">
                <Route/>
                <Route/>
            </div>
        </div>
    );
};

export default RoutesContainer;