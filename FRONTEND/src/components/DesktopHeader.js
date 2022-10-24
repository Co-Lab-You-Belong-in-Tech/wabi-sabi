import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'


function DesktopHeader({ children }) {
  return (
    <header className="flex items-center justify-between w-full bg-white h-[72px] px-36 drop-shadow-3xl">
      <Image src="/assets/Logo.svg" alt="Logo" width={144} height={63} />
      {children}
    </header>
  )
}

export default DesktopHeader

DesktopHeader.propTypes = {
  children: PropTypes.node,
}