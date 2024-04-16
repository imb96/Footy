import HeaderItem from './HeaderItem'
import Logo from './Logo'

const Header = () => {
  return (
    <div className="top-0 sticky py-5 px-14 w-full flex items-center gap-12 bg-rose-500 opacity-80">
      <Logo />
      <div className="flex gap-10">
        <HeaderItem imageSrc="/images/pl.png" link="/pl" />
        <HeaderItem imageSrc="/images/cl.png" link="/cl" />
      </div>
    </div>
  )
}

export default Header
