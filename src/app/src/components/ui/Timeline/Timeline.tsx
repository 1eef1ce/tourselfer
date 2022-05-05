interface TimelineProps {
    label: string
    withIcon?: boolean
}

const Timeline = (props: TimelineProps) => {
    return (
        <div className="timeline">
            <div className="timeline__dash"/>
            <div className="timeline__placeholder">
                <div className="timeline__time">{props.label}</div>
            </div>
            {props.withIcon && <div className="timeline__time timeline__time--last"/>}
        </div>
    );
};

export default Timeline;