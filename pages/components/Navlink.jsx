import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'



const Navlink = ({ children, activeClassName, className, ...props }) => {
  const { asPath, isReady } = useRouter()
  const [computedClassName, setComputedClassName] = useState(className)

  useEffect(() => {
    if (isReady) {
      const linkPathname = new URL(props.href, location.href).pathname
      const activePathname = new URL(asPath, location.href).pathname

      const newClassName =
        linkPathname === activePathname
          ? `${className} ${activeClassName}`.trim()
          : className

      if (newClassName !== computedClassName) {
        setComputedClassName(newClassName)
      }
    }
  }, [
    asPath,
    isReady,
    props.href,
    activeClassName,
    className,
    computedClassName,
  ])

  return (
    <Link className={computedClassName} href={props.href ?? ' '}>
      {children}
    </Link>
  )
}
export default Navlink