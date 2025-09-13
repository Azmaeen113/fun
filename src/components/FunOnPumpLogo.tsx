import React from 'react'

type Props = React.SVGProps<SVGSVGElement> & {
  width?: number | string
  height?: number | string
}

export default function FunOnPumpLogo({ width = 1000, height = 500, ...rest }: Props) {
  return (
    <svg
      viewBox="0 0 1000 500"
      width={width}
      height={height}
      role="img"
      aria-label="FUN ON PUMP logo"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <defs>
        <style>{".fn{font-family:Impact,'Bebas Neue','Oswald','Anton',sans-serif;font-weight:900;letter-spacing:-0.03em}.main{font-size:120px;fill:#000}.sec{font-size:40px;fill:#000;font-weight:800}.pumpText{font-size:40px;fill:#fff;font-weight:800}"}</style>
      </defs>

      <g transform="translate(500,250)">
        <text className="fn main" x={0} y={-20} dominantBaseline="alphabetic">FUN</text>

        <g transform="translate(-60,80)">
          <text className="fn sec" x={0} y={0} dominantBaseline="alphabetic">ON</text>
        </g>

        <g transform="translate(40,54)">
          <rect x={0} y={-42} width={220} height={56} fill="#00FF00" />
          <text className="fn pumpText" x={110} y={-4} textAnchor="middle" dominantBaseline="middle">PUMP</text>
        </g>
      </g>
    </svg>
  )
}
