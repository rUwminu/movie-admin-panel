import React, { useContext, useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { DataGrid } from '@material-ui/data-grid'
import { MovieContext } from '../../context/MovieContext/MovieContext'
import { getMovies, deleteMovies } from '../../context/MovieContext/ApiCall'

import { DeleteOutline } from '@material-ui/icons'

const ProductList = () => {
  const { movies, dispatch } = useContext(MovieContext)

  useEffect(() => {
    getMovies(dispatch)
  }, [dispatch])

  const handleDetele = (id) => {
    deleteMovies(id, dispatch)
  }

  const columns = [
    { field: '_id', headerName: 'ID', width: 100 },
    {
      field: 'name',
      headerName: 'Movie Name',
      width: 240,
      renderCell: (params) => {
        return (
          <UserProfile>
            <img src={params.row.img} alt='' />
            {params.row.title}
          </UserProfile>
        )
      },
    },
    {
      field: 'genre',
      headerName: 'Genre',
      width: 116,
    },
    {
      field: 'year',
      headerName: 'Year',
      width: 105,
    },
    {
      field: 'limit',
      headerName: 'Limit',
      width: 108,
    },
    {
      field: 'isSeries',
      headerName: 'IsSeries',
      width: 128,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 118,
      renderCell: (params) => {
        return (
          <EditButton>
            <Link
              to={{ pathname: `/movie/${params.row._id}`, movie: params.row }}
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
        rows={movies}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
        getRowId={(r) => r._id}
      />
      <Link to='/newMovie' className='add-btn'>
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
        min-w-[2.5rem]
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
