import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { Visibility } from '@material-ui/icons'

const WidgetSmall = () => {
  const [newUsers, setNewUsers] = useState([])

  const baseUrl = 'https://full-stack-api-netflix-app.herokuapp.com/api'

  const getNewuser = async () => {
    try {
      const res = await axios.get(`${baseUrl}/user?new=true`, {
        headers: {
          token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
        },
      })
      setNewUsers(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getNewuser()
  }, [])

  return (
    <Container>
      <h1 className='title'>New Join Members</h1>
      <ul className='list'>
        {newUsers &&
          newUsers.map((user) => (
            <li className='item-list' key={user._id}>
              <img
                src={
                  user.profilePic ||
                  'https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg'
                }
                alt=''
                className='item-img'
              />
              <div className='user'>
                <span className='user-name'>{user.username}</span>
                <span className='user-job'>Software Engineer</span>
              </div>
              <Link to={`/user/${user._id}`} className='btn'>
                <Visibility className='icon' />
                Display
              </Link>
            </li>
          ))}
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
