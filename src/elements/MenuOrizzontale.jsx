import React from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function MenuOrizzontale(props) {
  return (
    <div className="hidden sm:ml-6 sm:block">
    <div className="flex space-x-4">
      {props.menuitems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={classNames(
            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'px-3 py-2 rounded-md text-sm font-medium'
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          {item.name}
        </a>
      ))}
    </div>
  </div>
  )
}

export default MenuOrizzontale