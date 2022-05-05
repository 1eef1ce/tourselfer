import Image from 'next/image';
import {Crown} from '@components/icons';

const Avatar = ({user}) => {

  if (typeof user === 'object')
  {
    return (
        <>
        {user.super_author && user.super_author === true &&
        <div className="icon user__icon"><Crown /></div>
        }
        <Image src={user.avatar} alt={user.name + " " + user.last_name} title={user.name + " " + user.last_name} layout="fill"/>
        </>
    );
  }
  else
  {
    return (
      <></>
    );
  }
};

export default Avatar;
