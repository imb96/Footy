'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface HeaderItemProps {
  imageSrc?: string
  title?: string
  isActive?: boolean
  link?: string
}

const HeaderItem = ({ imageSrc, title, isActive, link }: HeaderItemProps) => {
  const router = useRouter()

  const handleClickHeaderItem = () => {
    if (!link) return
    router.push(link)
  }

  return (
    <div
      className={`cursor-pointer border-b-2 border-transparent hover:border-white ${isActive && 'border-white'}`}
      onClick={handleClickHeaderItem}
    >
      {imageSrc ? (
        <Image src={imageSrc} alt={'image'} width={48} height={48} />
      ) : (
        <span>{title}</span>
      )}
    </div>
  )
}

export default HeaderItem
