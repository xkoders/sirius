import React, { ElementType, ReactNode } from 'react'

export interface ILayoutProps {
  children: ReactNode
  className?: string
  as?: ElementType
}
export interface ISectionProps {
  children: ReactNode
  className?: string
  primary?: boolean
  secondary?: boolean
  oneTwo?: boolean
  oneThird?: boolean
  oneFourth?: boolean
}
export interface IAnnotatedSectionProps {
  children: ReactNode
  className?: string
  primary?: boolean
}

function MainLayout({ children, className, as: Component = 'section' }: ILayoutProps) {
  return (
    <Component className={['flex flex-wrap gap-5 ', className].join(' ')}>{children}</Component>
  )
}

function Section({
  children,
  className,
  primary,
  secondary,
  oneTwo,
  oneThird,
  oneFourth,
}: ISectionProps) {
  const classes = [
    'bg-red-500 ',
    className,
    primary
      ? 'w-[calc(70%-10px)] peer/primary'
      : !secondary
      ? 'peer-first/primary:w-[calc(30%-10px)]'
      : '',
    secondary
      ? 'w-[calc(30%-10px)] peer/secondary'
      : !primary
      ? 'peer-first/secondary:w-[calc(70%-10px)]'
      : '',
    oneTwo ? 'w-1/2' : '',
    oneThird ? 'w-1/3' : '',
    oneFourth ? 'w-1/4' : '',
    !secondary && !primary && !oneTwo && !oneThird && !oneFourth ? 'w-full' : '',
  ]
  return <article className={classes.filter(Boolean).join(' ')}>{children}</article>
}

function AnnotatedSection({ children }: IAnnotatedSectionProps) {
  return <article>{children}</article>
}

const Layout = Object.assign(MainLayout, { Section, AnnotatedSection })

export default Layout
