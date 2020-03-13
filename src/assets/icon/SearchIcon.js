import React from 'react'

const SvgComponent = props => (
  <svg
    className="prefix__icon"
    viewBox="0 0 1024 1024"
    width={200}
    height={200}
    {...props}
  >
    <defs>
      <style />
    </defs>
    <path d="M900.267 900.267c-8.534 8.533-21.334 8.533-29.867 0L740.267 768c-66.134 59.733-153.6 96-249.6 96-206.934 0-373.334-166.4-373.334-373.333s166.4-371.2 373.334-371.2S864 285.867 864 492.8c0 93.867-36.267 181.333-93.867 245.333l130.134 130.134c8.533 8.533 8.533 23.466 0 32zm-409.6-738.134C307.2 162.133 160 309.333 160 492.8s147.2 330.667 330.667 330.667 330.666-147.2 330.666-330.667S672 162.133 490.667 162.133z" />
  </svg>
)

export default SvgComponent