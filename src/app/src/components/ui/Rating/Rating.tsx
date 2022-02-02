import { FC, memo } from 'react';
import rangeMap from '@lib/range-map';
import { Star } from '@components/icons';
import cn from 'classnames';

export interface RatingProps {
  value: number
}

const Quantity: FC<RatingProps> = ({ value = 5 }) => (
  <div className="rating__stars">
    {rangeMap(5, (i) => (
        <div key={`star_${i}`} className={cn('rating__star icon', {
            'rating__star--outline': i >= Math.floor(value),})}>
            <Star />
        </div>
    ))}
  </div>
);

export default memo(Quantity);
