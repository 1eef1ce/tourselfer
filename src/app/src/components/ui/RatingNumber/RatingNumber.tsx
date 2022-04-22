import React from 'react';

interface RatingNumberProps {
  value: number
}

const RatingNumber: React.FC<RatingNumberProps> = ((props) => {
    const {
        value = 5
    } = props;

    return (
        <div className="rating-number">
            {value}
        </div>
    );
});

export default RatingNumber;
