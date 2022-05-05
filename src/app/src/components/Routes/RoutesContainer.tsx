import Route from './Route';

type RouteTypes = {
    classMod?: string,
    items: Array<object>
};

const RoutesContainer = (props:RouteTypes) => {
    const rootClass = "routes__container";
    return (
        <div className={rootClass + ((typeof props.classMod === "string") ? (' ' + rootClass + '--' + props.classMod) : '')}>
            <div className="routes__items">
                {props.items.length > 0 && props.items.map(item => (
                    <Route item={item} />
                ))}
            </div>
        </div>
    );
};

export default RoutesContainer;