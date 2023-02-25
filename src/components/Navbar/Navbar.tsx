import React, { MouseEventHandler } from 'react'
import { useLocation } from '@reach/router'
import { Link } from 'gatsby'
import Basket from '../../assets/icons/shop-basket.svg'
import Logo from '../../assets/icons/logo.svg'
import Wrapper from '../Wrapper/Wrapper'
import MenuLinks from '../MenuLinks/MenuLinks'

interface menuMobileProps {
  closeMenuMobile: MouseEventHandler<HTMLButtonElement>
}

const usePrevious = <T,>(value: T): T | undefined => {
  const ref = React.useRef<T>()
  React.useEffect(() => {
    ref.current = value
  })
  return ref.current
}

const MenuMobile = ({ closeMenuMobile }: menuMobileProps) => {
  return (
    <div className="absolute top-0 right-0 left-1/3 h-screen bg-white-color z-50 lg:hidden">
      <button onClick={closeMenuMobile}>CLOSE</button>
      <div className="flex flex-col">
        <MenuLinks className="mobile" />
        <div className="m-auto">Social Media links</div>
      </div>
    </div>
  )
}

export const Navbar = () => {
  const [isOpen, setOpen] = React.useState(false)
  const location = useLocation()
  const prevLocation = usePrevious(location)

  const openMenuMobile = () => {
    setOpen(true)
  }

  const closeMenuMobile = () => {
    setOpen(false)
  }

  React.useEffect(() => {
    if (location !== prevLocation) {
      closeMenuMobile()
    }
  }, [location, prevLocation])

  return (
    <nav className="mx-auto max-w-[1350px] flex items-center py-7 px-2 xl:px-0 z-30">
      <Wrapper className="flex mx-auto justify-between">
        <Link to="/" className="z-30">
          <Logo />
        </Link>
        <div className="flex flex-wrap items-center justify-end w-6/12 z-50">
          <div
            onClick={openMenuMobile}
            className="w-12 h-12 flex items-center justify-center lg:hidden"
          >
            <div className="space-y-2">
              <span className="block w-8 h-0.5 bg-white"></span>
              <span className="block w-8 h-0.5 bg-white"></span>
              <span className="block w-5 h-0.5 bg-white"></span>
            </div>
          </div>
          {isOpen ? <MenuMobile closeMenuMobile={closeMenuMobile} /> : null}
          <MenuLinks className="desktop" />
        </div>
      </Wrapper>
      <a
        href="https://sklep.green-tech.com.pl/"
        target="_blank"
        className="hidden w-12 h-12 bg-blue-color hover:bg-base-color transition-all ml-3.5 lg:flex items-center justify-center xl:ml-0"
        rel="noreferrer"
      >
        <Basket />
      </a>
    </nav>
  )
}
