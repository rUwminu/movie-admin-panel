import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

// Icons
import { NotificationsNone, Settings, Language } from '@material-ui/icons'

const Topbar = () => {
  return (
    <TopContainer>
      <LeftContainer>
        <span className='logo'>AdminPanel</span>
      </LeftContainer>
      <RightContainer>
        <div className='icons-container'>
          <NotificationsNone />
          <span className='noti'>2</span>
        </div>
        <div className='icons-container'>
          <Language />
          <span className='noti'>2</span>
        </div>
        <div className='icons-container'>
          <Settings />
        </div>
        <img
          src='https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
          alt=''
          className='top-avatar'
        />
      </RightContainer>
    </TopContainer>
  )
}

const TopContainer = styled.div`
  ${tw`
    fixed
    top-0
    w-full
    flex
    items-center
    justify-between
    py-5
    px-8
    bg-white
    shadow-md
    z-30
  `}
`

const LeftContainer = styled.div`
  ${tw``}

  .logo {
    ${tw`
        text-lg
        lg:text-xl
        text-blue-600
        cursor-pointer
    `}
  }
`

const RightContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-center
  `}

  .icons-container {
    ${tw`
        ml-3
        relative
        cursor-pointer
    `}

    .noti {
      ${tw`
        absolute
        top-[-5px]
        right-[-5px]
        flex
        items-center
        justify-center
        w-4
        h-4
        text-white
        bg-red-500
        font-semibold
        rounded-full
      `}
    }
  }

  .top-avatar {
    ${tw`
        ml-3
        w-10
        h-10
        rounded-full
        cursor-pointer
    `}
  }
`

export default Topbar
