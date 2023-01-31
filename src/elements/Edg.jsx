import React from 'react'

function Edg() {
  return (
    <div className="flex flex-shrink-0 items-center">
        <img
        className="block h-8 w-auto lg:hidden"
        src="https://tools.expressdeliverygroup.com/assets/img/edg-rev.png"
        alt="Express Delivery Group"
        />
        <img
        className="hidden h-8 w-auto lg:block"
        src="https://tools.expressdeliverygroup.com/assets/img/edg-rev.png"
        alt="Express Delivery Group"
        />
    </div>
  )
}

export default Edg