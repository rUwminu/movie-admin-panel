import React, { useState, useContext, useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { Link, useParams, useHistory } from 'react-router-dom'
import { UserContext } from '../../context/UserContext/UserContext'
import { updateUser, getSingleUsers } from '../../context/UserContext/ApiCall'

// Icons
import {
  PhoneAndroid,
  MailOutline,
  Publish,
  ArrowBackIos,
} from '@material-ui/icons'

const User = () => {
  const history = useHistory()
  const { id } = useParams()
  const [userDetails, setUserDetails] = useState()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const { users, isFetching, dispatch } = useContext(UserContext)

  const findUserDetail = () => {
    console.log('finding...')

    if (users.length > 0 && !isFetching) {
      const detail = users.find((x) => x._id === id)
      setUserDetails(detail)
    } else {
      history.push('/users')
    }
  }

  const handleUpdate = (e) => {
    e.preventDefault()

    if (username.trim() === '') {
      if (email.trim() === '' && password.trim() !== '') {
        if (password === confirmPassword) {
          const updateData = {
            id,
            password,
          }
          updateUser(updateData, dispatch)
        }
      } else if (email.trim() !== '' && password.trim() === '') {
        const updateData = {
          id,
          email,
        }
        updateUser(updateData, dispatch)
      } else if (email.trim() !== '' && password.trim() !== '') {
        if (password === confirmPassword) {
          const updateData = {
            id,
            email,
            password,
          }
          updateUser(updateData, dispatch)
        }
      }
    } else if (email.trim() === '') {
      if (username.trim() === '' && password.trim() !== '') {
        if (password === confirmPassword) {
          const updateData = {
            id,
            password,
          }
          updateUser(updateData, dispatch)
        }
      } else if (username.trim() !== '' && password.trim() === '') {
        const updateData = {
          id,
          username,
        }
        updateUser(updateData, dispatch)
      } else if (username.trim() !== '' && password.trim() !== '') {
        if (password === confirmPassword) {
          const updateData = {
            id,
            username,
            password,
          }
          updateUser(updateData, dispatch)
        }
      }
    } else if (password.trim() === '') {
      if (username.trim() === '' && email.trim() !== '') {
        const updateData = {
          id,
          email,
        }
        updateUser(updateData, dispatch)
      } else if (username.trim() !== '' && email.trim() === '') {
        const updateData = {
          id,
          username,
        }
        updateUser(updateData, dispatch)
      } else if (username.trim() !== '' && email.trim() !== '') {
        const updateData = {
          id,
          username,
          email,
        }
        updateUser(updateData, dispatch)
      }
    }
  }

  useEffect(() => {
    findUserDetail()
  }, [id])

  const handleBack = () => {
    history.goBack()
  }

  return (
    <Container>
      <div onClick={handleBack} className='back-btn '>
        <ArrowBackIos className='icons' /> Back
      </div>
      <TitleContainer>
        <h1 className='title'>Edit User</h1>
        <Link to='/newUser' className='add-btn'>
          Create
        </Link>
      </TitleContainer>
      <UserContainer>
        {userDetails && (
          <div className='user-info'>
            <div className='user-profile'>
              <img
                src={
                  userDetails.profilePic
                    ? userDetails.profilePic
                    : 'https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg'
                }
                alt='avatar'
              />
              <div className='user-info-title'>
                <h1>{userDetails.username}</h1>
                <h2>Software Engineer</h2>
              </div>
            </div>
            <UserInfoBottom>
              <div className='info-title'>Contact Detail</div>
              <div className='info-show'>
                <PhoneAndroid />
                <span className='info-show-detail'>+60 11 1567 8987</span>
              </div>
              <div className='info-show'>
                <MailOutline />
                <span className='info-show-detail'>{userDetails.email}</span>
              </div>
            </UserInfoBottom>
          </div>
        )}
        {userDetails && (
          <UserUpdateContainer>
            <div className='update-title'>Update Profile</div>
            <form className='update-form'>
              <div className='update-left'>
                <div className='update-item'>
                  <label htmlFor=''>Full Name</label>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    type='text'
                    placeholder={userDetails.username}
                    className='input-box'
                  />
                </div>
                <div className='update-item'>
                  <label htmlFor=''>Email</label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type='text'
                    placeholder={userDetails.email}
                    className='input-box'
                  />
                </div>
                <div className='update-item'>
                  <label htmlFor=''>Password</label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type='password'
                    placeholder='Atleast 6 Character'
                    className='input-box'
                  />
                </div>
                <div className='update-item'>
                  <label htmlFor=''>Comfirm Password</label>
                  <input
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type='password'
                    placeholder='Repeat the password'
                    className='input-box'
                  />
                </div>
              </div>

              <div className='update-right'>
                <div className='update-upload'>
                  <img
                    src={
                      userDetails.profilePic
                        ? userDetails.profilePic
                        : 'https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg'
                    }
                    alt=''
                  />
                  <label htmlFor='file'>
                    <Publish />
                  </label>
                  <input type='file' id='file' className='hidden' />
                </div>
                <button onClick={(e) => handleUpdate(e)} className='update-btn'>
                  Update
                </button>
              </div>
            </form>
          </UserUpdateContainer>
        )}
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

  .back-btn {
    ${tw`
        flex
        items-center
        justify-center
        px-2
        py-2
        mb-4
        w-28
        text-center
        rounded-sm
        cursor-pointer
    `}

    .icons {
      ${tw`
        transition
        duration-200
        ease-in-out
      `}
    }

    &:hover {
      ${tw`
        bg-gray-200
      `}
      .icons {
        ${tw`
          -translate-x-2
        `}
      }
    }
  }
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
