import clsx from 'clsx'
import React from 'react'

const Button = ({icon,children,href,containerClassName,onClick}) => {
    const  Inner = () => (
        <>Text</>
    );

  return href ? (
    <a className={clsx(
        "relative, p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName,
    )}
    href={href}
    >
        <Inner/>
    </a>
  ) : 
  (
    <button className={clsx("relative, p-0.5 g5 rounded-2xl shadow-500 group",containerClassName,
    )}
    onClick={onClick}
    >
      <Inner/>
    </button>
  )
}

export default Button
