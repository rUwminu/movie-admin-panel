import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { userRows } from '../../Assets/DumbData'

// Icons
import {
  PermIdentity,
  PhoneAndroid,
  MailOutline,
  LocationSearching,
  CalendarTodayOutlined,
  Publish,
} from '@material-ui/icons'

const User = () => {
  return (
    <Container>
      <TitleContainer>
        <h1 className='title'>Edit User</h1>
        <Link to='/newUser' className='add-btn'>
          Create
        </Link>
      </TitleContainer>
      <UserContainer>
        <div className='user-info'>
          <div className='user-profile'>
            <img
              src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
              alt='avatar'
            />
            <div className='user-info-title'>
              <h1>John Doe</h1>
              <h2>Software Engineer</h2>
            </div>
          </div>
          <UserInfoBottom>
            <div className='info-title'>Account Detail</div>
            <div className='info-show'>
              <PermIdentity />
              <span className='info-show-detail'>@johndoe90</span>
            </div>
            <div className='info-show'>
              <CalendarTodayOutlined />
              <span className='info-show-detail'>10.1.1990</span>
            </div>
          </UserInfoBottom>
          <UserInfoBottom>
            <div className='info-title'>Contact Detail</div>
            <div className='info-show'>
              <PhoneAndroid />
              <span className='info-show-detail'>+60 11 1567 8987</span>
            </div>
            <div className='info-show'>
              <MailOutline />
              <span className='info-show-detail'>john@email.com</span>
            </div>
            <div className='info-show'>
              <LocationSearching />
              <span className='info-show-detail'>N0 JKH United Kingdom</span>
            </div>
          </UserInfoBottom>
        </div>
        <UserUpdateContainer>
          <div className='update-title'>Update Profile</div>
          <form className='update-form'>
            <div className='update-left'>
              <div className='update-item'>
                <label htmlFor=''>Username</label>
                <input
                  type='text'
                  placeholder='Username'
                  className='input-box'
                />
              </div>
              <div className='update-item'>
                <label htmlFor=''>Full Name</label>
                <input
                  type='text'
                  placeholder='John Doe'
                  className='input-box'
                />
              </div>
              <div className='update-item'>
                <label htmlFor=''>Email</label>
                <input
                  type='text'
                  placeholder='john@email.com'
                  className='input-box'
                />
              </div>
              <div className='update-item'>
                <label htmlFor=''>Contact</label>
                <input
                  type='text'
                  placeholder='+60 1172 8784'
                  className='input-box'
                />
              </div>
              <div className='update-item'>
                <label htmlFor=''>Address</label>
                <input
                  type='text'
                  placeholder='N0 JKH United Kingdom'
                  className='input-box'
                />
              </div>
            </div>

            <div className='update-right'>
              <div className='update-upload'>
                <img
                  src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
                  alt=''
                />
                <label htmlFor='file'>
                  <Publish />
                </label>
                <input type='file' id='file' className='hidden' />
              </div>
              <button className='update-btn'>Update</button>
            </div>
          </form>
        </UserUpdateContainer>
      </UserContainer>
    </Container>
  )
}

const Container = styled.div`
  ${tw`
    mx-auto
    pt-28
    px-4
    xl:px-0
    w-full
    max-w-5xl
    flex-grow
    overflow-hidden
    overflow-y-auto
    scrollbar-hide
  `}
`

const TitleContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-between
  `}

  .title {
    ${tw`
        text-xl
        font-semibold
    `}
  }

  .add-btn {
    ${tw`
        py-[6px]
        px-5
        text-white
        bg-green-600
        rounded-md
        cursor-pointer
        transition
        duration-200
        ease-in-out
    `}

    :hover {
      ${tw`
        text-black
        bg-green-400
      `}
    }
  }
`

const UserContainer = styled.div`
  ${tw`
    w-full
    mt-4
    flex
    flex-col
    lg:flex-row
  `}

  .user-info {
    flex: 1;
    ${tw`
        w-full
        md:max-w-sm
        p-4
        bg-white
        shadow-md
        rounded-sm
    `}

    .user-profile {
      ${tw`
        flex
        items-center
        justify-start
      `}

      img {
        ${tw`
            mr-2
            w-10
            h-10
            rounded-full
            object-cover
        `}
      }

      .user-info-title {
        ${tw`
            flex
            flex-col
            items-start
            justify-center
        `}

        h1 {
          ${tw`
            font-semibold
            text-gray-700
          `}
        }

        h2 {
          ${tw`
            text-sm
            text-gray-500
          `}
        }
      }
    }
  }
`

const UserInfoBottom = styled.div`
  ${tw`
    mt-4
  `}

  .info-title {
    ${tw`
        mb-2
        text-gray-700
    `}
  }

  .info-show {
    ${tw`
        flex
        items-center
        justify-start
        text-gray-800
        mb-2
    `}

    .info-show-detail {
      ${tw`
        ml-2
      `}
    }
  }
`

const UserUpdateContainer = styled.div`
  flex: 2;
  ${tw`
    mt-4
    lg:mt-0
    lg:ml-4
    p-4
    bg-white
    shadow-md
    rounded-sm
  `}

  .update-title {
    ${tw`
        mb-6
        font-semibold
    `}
  }

  .update-form {
    ${tw`
        flex
        justify-between
    `}
  }

  .update-left {
    ${tw`
        w-full
    `}

    .update-item {
      ${tw`
        mb-3
        flex
        flex-col
      `}

      label {
        ${tw`
            text-base
        `}
      }

      .input-box {
        ${tw`
            py-1
            text-sm
            border-b-2
            border-gray-200
            focus:outline-none
        `}

        ::placeholder {
          ${tw`
            text-gray-400
          `}
        }
      }
    }
  }

  .update-right {
    ${tw`
        w-full
        flex
        flex-col
        items-end
        justify-between
    `}

    .update-upload {
      ${tw`
        flex
        items-center
      `}

      img {
        ${tw`
            w-28
            h-28
            rounded-lg
            object-cover
        `}
      }

      label {
        ${tw`
            ml-3
          `}
      }
    }

    .update-btn {
      ${tw`
        py-2
        w-32
        md:w-44
        text-white
        bg-gradient-to-r
        from-blue-600
        to-indigo-600
        rounded-sm
        transition
        duration-200
        ease-out
      `}

      &:hover {
        ${tw`
            shadow-xl
        `}
      }
    }
  }
`

export default User
