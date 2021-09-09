import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import { Visibility } from '@material-ui/icons'

const WidgetSmall = () => {
  return (
    <Container>
      <h1 className='title'>New Join Members</h1>
      <ul className='list'>
        <li className='item-list'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='item-img'
          />
          <div className='user'>
            <span className='user-name'>John Doe</span>
            <span className='user-job'>Software Engineer</span>
          </div>
          <button className='btn'>
            <Visibility className='icon' />
            Display
          </button>
        </li>
        <li className='item-list'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='item-img'
          />
          <div className='user'>
            <span className='user-name'>John Doe</span>
            <span className='user-job'>Software Engineer</span>
          </div>
          <button className='btn'>
            <Visibility className='icon' />
            Display
          </button>
        </li>
        <li className='item-list'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='item-img'
          />
          <div className='user'>
            <span className='user-name'>John Doe</span>
            <span className='user-job'>Software Engineer</span>
          </div>
          <button className='btn'>
            <Visibility className='icon' />
            Display
          </button>
        </li>
        <li className='item-list'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='item-img'
          />
          <div className='user'>
            <span className='user-name'>John Doe</span>
            <span className='user-job'>Software Engineer</span>
          </div>
          <button className='btn'>
            <Visibility className='icon' />
            Display
          </button>
        </li>
        <li className='item-list'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='item-img'
          />
          <div className='user'>
            <span className='user-name'>John Doe</span>
            <span className='user-job'>Software Engineer</span>
          </div>
          <button className='btn'>
            <Visibility className='icon' />
            Display
          </button>
        </li>
      </ul>
    </Container>
  )
}

const Container = styled.div`
  flex: 1;

  ${tw`
    p-4
    mr-4
    w-full
    max-w-sm
    flex
    flex-col
    items-start
    justify-center
    bg-white
    shadow-sm
    rounded-sm
  `}

  .title {
    ${tw`
      mb-2
      text-lg
    `}
  }

  .list {
    ${tw`
      w-full
    `}

    .item-list {
      ${tw`
      flex
      items-center
      justify-start
      w-full
      mb-2
    `}

      .item-img {
        ${tw`
          w-10
          h-10
          min-w-[2.5rem]
          rounded-full
          object-cover
        `}
      }
    }

    .user {
      ${tw`
        flex
        flex-col
        items-start
        justify-center
        ml-2
      `}

      .user-name {
        ${tw`

        `}
      }

      .user-job {
        ${tw`
          text-sm
          text-gray-500
        `}
      }
    }

    .btn {
      ${tw`
        ml-auto
        flex
        items-center
        justify-center
        text-sm
        py-1
        px-2
        bg-gray-200
        rounded-md
        hover:bg-gray-300
        transition
        duration-200
        ease-in-out
      `}

      .icon {
        ${tw`
          mr-1
        `}
      }
    }
  }
`

export default WidgetSmall
