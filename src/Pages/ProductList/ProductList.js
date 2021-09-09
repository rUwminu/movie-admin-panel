import React, { useState } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { DataGrid } from '@material-ui/data-grid'

import { productRows } from '../../Assets/DumbData'
import { DeleteOutline } from '@material-ui/icons'

const ProductList = () => {
  const [productData, setProductData] = useState(productRows)

  const handleDetele = (id) => {
    const newUserData = productData.filter((user) => user.id !== id)
    setProductData(newUserData)
    }
    
    const columns = [
      { field: 'id', headerName: 'ID', width: 100 },
      {
        field: 'name',
        headerName: 'Product name',
        width: 200,
        renderCell: (params) => {
          return (
            <UserProfile>
              <img src={params.row.img} alt='' />
              {params.row.name}
            </UserProfile>
          )
        },
      },
      {
        field: 'stock',
        headerName: 'Stock',
        sortable: false,
        width: 120,
      },
      {
        field: 'status',
        headerName: 'Status',
        width: 120,
      },
      {
        field: 'price',
        headerName: 'Price',
        width: 140,
      },
      {
        field: 'action',
        headerName: 'Action',
        width: 150,
        renderCell: (params) => {
          return (
            <EditButton>
              <Link to={`/product/${params.row.id}`}>
                <button>Edit</button>
              </Link>

              <DeleteOutline
                onClick={() => handleDetele(params.row.id)}
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
        rows={productData}
        columns={columns}
        disableSelectionOnClick
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
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
