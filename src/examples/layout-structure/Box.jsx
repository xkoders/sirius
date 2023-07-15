import React from 'react'

export default function Box() {
  return (
    <div>Box</div>
  )
}

// import React, { ReactNode, useEffect, useMemo, useRef } from 'react'
// import { motion, EasingDefinition, useInView } from 'framer-motion'
// import classNames from 'classnames'

// type ElementsType =
//   | 'div'
//   | 'ul'
//   | 'li'
//   | 'span'
//   | 'section'
//   | 'article'
//   | 'p'
//   | 'h1'
//   | 'h2'
//   | 'h3'
//   | 'h4'
//   | 'h5'
//   | 'img'

// type VariantType =
//   | 'fadeup'
//   | 'fadein'
//   | 'fadeout'
//   | 'fadedown'
//   | 'fadeleft'
//   | 'faderight'
//   | 'fade'
// type DelayEnum = 0 | 75 | 100 | 150 | 200 | 300 | 1000 | 500 | 700
// export interface IBox {
//   as?: ElementsType // element tag
//   children?: ReactNode
//   variant?: VariantType // variant of fades
//   duration?: number // By ms
//   ease?: EasingDefinition // transition tipe
//   delay?: DelayEnum
//   x?: number
//   y?: number
//   [x: string]: any
// }
// export default function Box(props: IBox) {
//   const {
//     as = 'div',
//     children,
//     variant = 'fadeup',
//     x = 100,
//     y = 100,
//     duration = 1500,
//     ease = 'easeInOut',
//     delay = 0,
//     className,
//     ...restOfProps
//   } = props
//   const CustomMotionTag = useMemo(()=> motion[as], [as])
//     // elemets.find(({ key }) => key === as)?.type || elemets[0].type
//   const ref = useRef(null)
//   const inView = useInView(ref)

//   //  useEffect(()=>{
//     //  }, [inView])

//     // TODO: DO NOT REMOVE untile use daynamic delay 
//     // delay-0 delay-75 delay-100 delay-150 delay-200 delay-300 delay-1000 delay-500 delay-700
//     return (
//     <CustomMotionTag
//       ref={ref}
//       className={classNames(
//         className,
//         !inView ? variant : '',
//         `delay-${delay}`,
//         'animate transition-all ease-in-out duration-1000 '
//       )}
//       // style={{
//       //   msTransitionDelay: 0,
//       //   WebkitTransitionDelay: 0,
//       //   MozTransitionDelay: 0
//       // }}
//       {...restOfProps}
//     >
//       {children}
//     </CustomMotionTag>
//   )
// }