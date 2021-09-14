import React, { useState, useEffect, useContext } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { DataGrid } from '@material-ui/data-grid'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext/UserContext'
import { getUsers, deleteUser } from '../../context/UserContext/ApiCall'

//import { userRows } from '../../Assets/DumbData'
import { DeleteOutline } from '@material-ui/icons'

const UserList = () => {
  const { users, dispatch } = useContext(UserContext)

  const handleDetele = (id) => {
    deleteUser(id, dispatch)
  }

  useEffect(() => {
    getUsers(dispatch)
  }, [dispatch])


  const columns = [
    { field: '_id', headerName: 'ID', width: 100 },
    {
      field: 'name',
      headerName: 'Full name',
      width: 200,
      renderCell: (params) => {
        return (
          <UserProfile>
            <img src={params.row.profilePic} alt='' />
            {params.row.username}
          </UserProfile>
        )
      },
    },
    {
      field: 'email',
      headerName: 'Email',
      sortable: false,
      width: 180,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <EditButton>
            <Link to={`/user/${params.row._id}`}>
              <button>Edit</button>
            </Link>

            <DeleteOutline
              onClick={() => handleDetele(params.row._id)}
              className='delete-icons'
            />
          </EditButton>
        )
      },
    },
  ]

  return (
    <Container>
      {users && (
        <DataGrid
          rows={users}
          columns={columns}
          disableSelectionOnClick
          pageSize={8}
          checkboxSelection
          getRowId={(r) => r._id}
        />
      )}
      <Link to='/newUser' className='add-btn'>
        Create
      </Link>
    </Container>
  )
}

const Container = styled.div`
  ${tw`
    mx-auto
    pt-28
    pb-20
    px-4
    xl:px-0
    w-full
    max-w-5xl
    flex
    flex-col
    flex-grow
    justify-end
    overflow-hidden
    overflow-y-auto
    scrollbar-hide
  `}

  .add-btn {
    ${tw`
        w-48
        mt-4
        ml-auto
        py-[6px]
        px-5
        text-center
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

const UserProfile = styled.div`
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
`

const EditButton = styled.div`
  ${tw`
    flex
    items-center
    justify-center
  `}

  button {
    ${tw`
        mr-3
        flex
        items-center
        justify-center
        h-6
        w-10
        text-green-700
        bg-green-100
        rounded-md
        hover:bg-green-200
        transition
        duration-200
        ease-in-out
    `}
  }

  .delete-icons {
    ${tw`
        text-red-600
        cursor-pointer
    `}
  }
`

export default UserList
