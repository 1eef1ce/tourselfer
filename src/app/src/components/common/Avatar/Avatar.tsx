import Image from 'next/image';

const Avatar = ({user}) => {

  if (typeof user === 'object')
  {
    return (
        <Image src={user.avatar} alt={user.name + " " + user.last_name} title={user.name + " " + user.last_name} layout="fill"/>
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
