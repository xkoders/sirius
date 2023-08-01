import React, { ReactNode } from 'react'
import { classNames } from '@/helpers'
import { Popover } from '../forms-selections'

interface Props {
  children: ReactNode
  sidebar?: ReactNode
  className?: string
}
const Logo = () => (
  <svg width="167" height="48" viewBox="0 0 167 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M58.2031 30.1679C58.2031 30.8798 57.6812 31.4651 56.9386 31.4651C56.2163 31.4651 55.6943 30.8785 55.6943 30.1679V17.7986C55.6943 17.0865 56.2163 16.5012 56.9588 16.5012C57.6812 16.5012 58.2031 17.0879 58.2031 17.7986V30.1679Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M74.4188 17.7985V29.1011C74.4188 30.6291 73.6365 31.4878 72.3922 31.4878H72.2925C71.1087 31.4878 70.5459 30.7758 70.0447 29.7291L67.5157 24.6011L65.2679 19.3065L65.3284 24.4345L65.3486 30.1478C65.3486 30.8598 64.8272 31.4451 64.0841 31.4451C63.3617 31.4451 62.8403 30.8584 62.8403 30.1478V18.8452C62.8403 17.4425 63.6226 16.4585 64.9879 16.4585H65.0882C66.3526 16.4585 66.874 17.1705 67.3763 18.2172L69.8644 23.3038L71.9918 28.2438L71.9319 23.5131L71.9117 17.7999C71.9117 17.0878 72.4331 16.5025 73.1762 16.5025C73.8969 16.5012 74.4188 17.0865 74.4188 17.7985Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M84.4745 30.1479C84.4745 30.8598 83.9532 31.4451 83.21 31.4451C82.4882 31.4451 81.9663 30.8585 81.9663 30.1479V18.9505H78.8555C78.2137 18.9505 77.6924 18.4479 77.6924 17.7159C77.6924 17.0039 78.2137 16.5026 78.8555 16.5026H87.5853C88.2271 16.5026 88.749 17.0052 88.749 17.7372C88.749 18.4492 88.2271 18.9505 87.5853 18.9505H84.4745V30.1479Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M92.0204 29.7293V18.1133C92.0204 17.0253 92.6022 16.4187 93.6662 16.46H100.891C101.533 16.46 102.054 16.9826 102.054 17.6947C102.054 18.4067 101.533 18.908 100.891 18.908H94.5085V22.508H100.148C100.771 22.508 101.272 22.9893 101.272 23.68C101.272 24.3706 100.771 24.852 100.148 24.852H94.5085V28.9959H100.891C101.533 28.9959 102.054 29.5186 102.054 30.2306C102.054 30.9426 101.533 31.444 100.891 31.444H93.6058C92.5625 31.4453 91.9812 30.8386 92.0204 29.7293Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M115.723 31.5079C116.425 31.1306 116.647 30.3559 116.305 29.7493L113.796 25.1039C115.864 24.6853 117.068 23.0946 117.068 20.9386C117.068 18.6786 115.704 16.46 112.432 16.46H107.676C106.613 16.4187 106.031 17.0253 106.031 18.1133V30.1693C106.031 30.8799 106.552 31.4666 107.275 31.4666C108.018 31.4666 108.539 30.8813 108.539 30.1693L108.519 25.6066H111.168L113.958 30.9853C114.297 31.5919 115.041 31.864 115.723 31.5079ZM112.491 23.24H108.517V18.9067H112.471C113.795 18.9067 114.538 19.7853 114.538 21.0627C114.538 22.34 113.836 23.24 112.491 23.24Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M122.245 30.3359C120.74 28.9332 120.058 26.7359 120.058 23.9732C120.058 21.1892 120.72 19.0132 122.206 17.6319C123.129 16.7946 124.372 16.2292 126.18 16.2292C127.765 16.2292 128.99 16.6066 129.912 17.4225C130.716 18.0919 131.297 19.0346 131.638 20.3532C131.819 21.0439 131.357 21.7345 130.595 21.8812C129.873 22.0066 129.291 21.5252 129.07 20.8346C128.829 20.1652 128.507 19.6839 128.127 19.3479C127.605 18.8666 126.963 18.6572 126.119 18.6572C125.216 18.6572 124.433 18.9292 123.851 19.5359C123.008 20.4146 122.646 21.9852 122.646 23.9732C122.646 25.9412 122.988 27.5105 123.871 28.3892C124.453 28.9958 125.216 29.2678 126.099 29.2678C127.022 29.2678 127.724 29.0172 128.307 28.4519C128.607 28.1585 128.869 27.7825 129.05 27.3425C129.31 26.6932 129.853 26.2119 130.554 26.3799C131.256 26.5479 131.699 27.2585 131.478 27.9492C131.116 29.0998 130.494 30.0212 129.652 30.6492C128.729 31.3398 127.585 31.6958 126.14 31.6958C124.293 31.6958 123.129 31.1305 122.245 30.3359Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M140.67 16.2292C136.314 16.2292 134.468 19.2852 134.468 23.9732C134.468 28.8079 136.295 31.7172 140.67 31.7172C144.964 31.7172 146.852 28.8079 146.852 23.9732C146.852 19.2012 144.985 16.2292 140.67 16.2292ZM140.65 18.6786C143.038 18.6786 144.282 20.4146 144.282 23.9732C144.282 27.5305 143.017 29.2678 140.65 29.2678C138.261 29.2678 137.057 27.5318 137.057 23.9732C137.057 20.4159 138.301 18.6786 140.65 18.6786Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M166.319 30.1478C166.319 30.8598 165.797 31.4451 165.055 31.4451C164.332 31.4451 163.81 30.8584 163.81 30.1478V24.5385L163.871 19.0758L162.124 24.6225L160.359 30.0851C160.058 31.0478 159.436 31.4251 158.653 31.4251C157.83 31.4251 157.228 31.0278 156.907 30.0651L155.1 24.6238L153.434 19.1612L153.494 24.5398V30.1491C153.494 30.8611 152.972 31.4464 152.23 31.4464C151.507 31.4464 150.986 30.8598 150.986 30.1491V18.9518C150.986 17.4025 151.788 16.5025 153.193 16.5025C154.518 16.5025 155.261 17.2345 155.681 18.5745L157.528 24.2878L158.652 28.1811L159.796 24.2878L161.642 18.5745C162.064 17.2345 162.787 16.5025 164.111 16.5025C165.516 16.5025 166.299 17.3812 166.299 18.9518L166.319 30.1478Z"
      fill="black"
    />
    <path
      d="M35.438 26.1117C35.438 26.486 35.2946 26.8451 35.0393 27.1099C34.784 27.3746 34.4378 27.5233 34.0767 27.5233C33.7157 27.5233 33.3694 27.3746 33.1141 27.1099C32.8588 26.8451 32.7154 26.486 32.7154 26.1117V13.5001C32.7154 13.1257 32.8588 12.7666 33.1141 12.5019C33.3694 12.2371 33.7157 12.0884 34.0767 12.0884C34.4378 12.0884 34.784 12.2371 35.0393 12.5019C35.2946 12.7666 35.438 13.1257 35.438 13.5001V26.1117ZM34.9655 34.8499C34.7855 35.0366 29.7229 39.4116 20.4415 39.4116C11.1601 39.4116 6.13135 35.0599 5.9176 34.8733C5.78287 34.7555 5.67193 34.6113 5.59107 34.449C5.51021 34.2866 5.46109 34.1093 5.44642 33.9272C5.43181 33.7451 5.45196 33.5618 5.50578 33.3878C5.5596 33.2138 5.646 33.0526 5.76008 32.9133C5.99505 32.6314 6.32791 32.4572 6.6862 32.4288C7.04449 32.4004 7.39908 32.5201 7.67258 32.7616C7.75137 32.8199 12.2739 36.6233 20.4303 36.6233C28.5866 36.6233 33.1429 32.7966 33.188 32.7616C33.4645 32.5222 33.8203 32.4041 34.1795 32.4325C34.5388 32.4608 34.8732 32.6333 35.1117 32.9133C35.3413 33.191 35.4558 33.5514 35.4305 33.9162C35.4053 34.2811 35.2422 34.6208 34.9768 34.8616L34.9655 34.8499ZM5.43382 13.5001C5.45415 13.1245 5.61705 12.7725 5.88692 12.5211C6.15672 12.2697 6.51159 12.1393 6.87385 12.1584C7.20968 12.1781 7.52659 12.3262 7.76341 12.574C8.00023 12.8217 8.14023 13.1516 8.15636 13.5001V26.0883C8.15636 26.4627 8.01295 26.8218 7.75764 27.0865C7.5024 27.3513 7.15615 27.5 6.79512 27.5C6.43409 27.5 6.08784 27.3513 5.83254 27.0865C5.57724 26.8218 5.43382 26.4627 5.43382 26.0883V13.5001ZM12.2627 10.7001C12.283 10.3245 12.4459 9.97254 12.7157 9.7211C12.9856 9.46972 13.3404 9.33929 13.7027 9.35839C14.0385 9.37816 14.3554 9.52622 14.5922 9.77396C14.8291 10.0217 14.9691 10.3516 14.9852 10.7001V29.3667C14.9852 29.741 14.8418 30.1001 14.5865 30.3649C14.3312 30.6296 13.985 30.7783 13.624 30.7783C13.2629 30.7783 12.9167 30.6296 12.6614 30.3649C12.4061 30.1001 12.2627 29.741 12.2627 29.3667V10.7001ZM19.1253 10.0001C19.1253 9.62568 19.2687 9.2666 19.524 9.00189C19.7793 8.73713 20.1255 8.58839 20.4865 8.58839C20.8476 8.58839 21.1938 8.73713 21.4491 9.00189C21.7044 9.2666 21.8478 9.62568 21.8478 10.0001V30.2999C21.8478 30.6744 21.7044 31.0334 21.4491 31.2981C21.1938 31.5629 20.8476 31.7117 20.4865 31.7117C20.1255 31.7117 19.7793 31.5629 19.524 31.2981C19.2687 31.0334 19.1253 30.6744 19.1253 30.2999V10.0001ZM25.8753 10.7001C25.8753 10.3257 26.0188 9.9666 26.2741 9.70189C26.5294 9.43712 26.8756 9.28839 27.2366 9.28839C27.5977 9.28839 27.9439 9.43712 28.1992 9.70189C28.4545 9.9666 28.5979 10.3257 28.5979 10.7001V29.3667C28.5979 29.741 28.4545 30.1001 28.1992 30.3649C27.9439 30.6296 27.5977 30.7783 27.2366 30.7783C26.8756 30.7783 26.5294 30.6296 26.2741 30.3649C26.0188 30.1001 25.8753 29.741 25.8753 29.3667V10.7001ZM35.8092 3.00012H5.11882C4.45007 2.99547 3.78704 3.12769 3.16768 3.38921C2.54827 3.65067 1.98474 4.03628 1.50925 4.52393C1.03376 5.01163 0.655701 5.59173 0.396758 6.23114C0.137759 6.87049 0.00296799 7.5566 0 8.2501V39.7499C0.00296799 40.4434 0.137759 41.1295 0.396758 41.7689C0.655701 42.4083 1.03376 42.9884 1.50925 43.4761C1.98474 43.9637 2.54827 44.3493 3.16768 44.6108C3.78704 44.8723 4.45007 45.0044 5.11882 44.9999H35.8092C36.477 45.0044 37.1391 44.8727 37.7578 44.6119C38.3764 44.3512 38.9395 43.9666 39.4148 43.4802C39.8902 42.9938 40.2685 42.415 40.5281 41.777C40.7877 41.1389 40.9236 40.4541 40.9281 39.7616V8.2501C40.9251 7.55755 40.7906 6.87245 40.5324 6.23383C40.2741 5.5952 39.8971 5.01561 39.4228 4.52807C38.9485 4.04059 38.3862 3.65476 37.7682 3.39256C37.1501 3.13037 36.4883 2.99704 35.8205 3.00012"
      fill="black"
    />
  </svg>
)
export function Frame({ children, sidebar, className }: Props) {
  return (
    <div className={classNames('w-full', className)}>
      <Header />
      <div className="flex w-full">
        {sidebar}
        {children}
      </div>
    </div>
  )
}

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

export function Header() {
  return (
    <header className="flex h-14 w-full sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="w-60 flex items-center px-5 ">
        <Logo />
        {/* <img
        className="block h-8 w-auto lg:hidden"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <img
        className="hidden h-8 w-auto lg:block"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      /> */}
      </div>
      <div className="flex items-center justify-end md:justify-between flex-1 max-w-5xl mx-auto px-6">
        <div className="h-9 w-full max-w-md bg-gray-100 rounded-md relative border border-gray-300 hidden md:flex justify-between items-center px-3 text-gray-500 text-sm">
          <span>search by keyword</span>
          <span>⌘K</span>
        </div>
        <div className="flex">
          <button
            type="button"
            className="rounded-full bg-white p-1 w-8 flex justify-center items-center text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 "
          >
            <span className="sr-only">View notifications</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10 2a6 6 0 00-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 00.515 1.076 32.91 32.91 0 003.256.508 3.5 3.5 0 006.972 0 32.903 32.903 0 003.256-.508.75.75 0 00.515-1.076A11.448 11.448 0 0116 8a6 6 0 00-6-6zM8.05 14.943a33.54 33.54 0 003.9 0 2 2 0 01-3.9 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Profile dropdown */}
          <Popover
            as="div"
            activator={
              <div>
                <button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <span className="sr-only">Open user menu</span>
                  <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                </button>
              </div>
            }
            className="relative ml-3"
          >
            <ul className="w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {userNavigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames('block px-4 py-2 text-sm text-gray-700')}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </Popover>
        </div>
      </div>
    </header>
  )
}
