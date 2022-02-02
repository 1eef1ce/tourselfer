import { FC } from 'react'
import Image from 'next/image'

interface Props {
  className?: string
  children?: any
}

const Avatar: FC<Props> = ({}) => {
  return (
      <Image src="/images/user.jpg" alt="user" title="" layout="fill"/>
  )
}

export default Avatar
