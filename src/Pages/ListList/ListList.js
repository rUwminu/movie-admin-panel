import React, { useContext, useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { DataGrid } from '@material-ui/data-grid'
import { ListContext } from '../../context/ListContext/ListContext'
import { getList, deleteList } from '../../context/ListContext/ApiCall'

import { DeleteOutline } from '@material-ui/icons'

const ProductList = () => {
  //const { movies, dispatch } = useContext(MovieContext)
  const { lists, dispatch } = useContext(ListContext)

  useEffect(() => {
    getList(dispatch)
  }, [dispatch])

  const handleDetele = (id) => {
    deleteList(id, dispatch)
  }

  const columns = [
    { field: '_id', headerName: 'ID', width: 220 },
    {
      field: 'title',
      headerName: 'List Title',
      width: 240,
    },
    {
      field: 'genre',
      headerName: 'Genre',
      width: 116,
    },
    {
      field: 'type',
      headerName: 'Type',
      width: 120,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 118,
      renderCell: (params) => {
        return (
          <EditButton>
            <Link
              to={{ pathname: `/list/${params.row._id}`, list: params.row }}
            >
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
      <DataGrid
        rows={lists}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
        getRowId={(r) => r._id}
      />
      <Link to='/newList' className='add-btn'>
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

export default ProductList
