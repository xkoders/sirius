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
  title?: string
  description?: string | ReactNode
}

function MainLayout({ children, className, as: Component = 'section' }: ILayoutProps) {
  return (
    <Component className={['flex flex-wrap gap-5 ', className].join(' ')}>{children}</Component>
  )
}

export function Section({
  children,
  className,
  primary,
  secondary,
  oneTwo,
  oneThird,
  oneFourth,
}: ISectionProps) {
  const classes = [
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

export function AnnotatedSection({
  children,
  className = '',
  title,
  description,
}: IAnnotatedSectionProps) {
  return (
    <article className={['flex w-full', className].join(' ')}>
      <div className="w-1/3">
        {title && <h1 className="text-[22px] font-medium">{title}</h1>}
        {description && <h2 className="text-base opacity-75">{description}</h2>}
      </div>
      <div className="w-2/3">{children}</div>
    </article>
  )
}

export const Layout = Object.assign(MainLayout, { Section, AnnotatedSection })
