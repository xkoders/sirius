export const GAP: Record<number, string> = {
  0: 'gap-0',
  1: 'gap-1',
  2: 'gap-2',
  3: 'gap-3',
  4: 'gap-4',
  5: 'gap-5',
  6: 'gap-6',
  7: 'gap-7',
  8: 'gap-8',
  9: 'gap-9',
  10: 'gap-10',
}

export const SIZE: Record<string, string> = {
  sm: 'h-3',
  md: 'h-4',
  lg: 'h-5',
  xl: 'h-6',
  '2xl': 'h-7',
  '3xl': 'h-8',
  '4xl': 'h-9',
  '5xl': 'h-10',
}

export const ROUNDED: Record<string, string> = {
  full: 'rounded-full',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-[10px]',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
  '4xl': 'rounded-4xl',
  '5xl': 'rounded-5xl',
}

export const SHADOW: { [x: string]: string } = {
  none: 'shadow-none',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  '2xl': 'shadow-2xl',
  '3xl': 'shadow-3xl',
  '4xl': 'shadow-4xl',
  '5xl': 'shadow-5xl',
}

export const BUTTON_VARIANT = {
  default:
    'bg-white border border-gray-400 disabled:bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-100',
  primary: 'bg-indigo-600 border-indigo-900 text-white hover:bg-indigo-700',
  success: 'bg-green-600 border-green-800 text-white hover:bg-green-700',
  warning: 'bg-orange-400 border-orange-600 text-white hover:bg-orange-500',
  danger: 'bg-red-600 border-red-800 text-white hover:bg-red-700',
  info: 'bg-blue-600 border-blue-800 text-white hover:bg-blue-700',
  ghost: 'shadow-none text-slate-700 hover:bg-slate-100',
  subdued: 'text-gray-600 hover:text-gray-700 bg-gray-200 hover:bg-gray-300',
  dark: 'text-gray-100 hover:text-white bg-gray-950 hover:bg-gray-900',
  none: '',
}