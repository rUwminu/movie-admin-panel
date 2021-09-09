import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Chart from '../../Charts/Chart'
import { productData } from '../../Assets/DumbData'
import { Publish } from '@material-ui/icons'

const Product = () => {
  return (
    <Container>
      <TitleContainer>
        <h1>Product</h1>
        <Link to='/newProduct' className='add-btn'>
          Create
        </Link>
      </TitleContainer>
      <ProductTopContainer>
        <div className='top-left'>
          <Chart
            data={productData}
            dataKey={'Sales'}
            title={'Sales Performance'}
          />
        </div>
        <div className='top-right'>
          <div className='product-info-top'>
            <img
              src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
              alt=''
            />
            <h1>Apple Watch</h1>
          </div>
          <div className='product-info-bottom'>
            <div className='product-info-item'>
              <h2>Id: </h2>
              <p>123</p>
            </div>
            <div className='product-info-item'>
              <h2>Sales: </h2>
              <p>3123</p>
            </div>
            <div className='product-info-item'>
              <h2>Active: </h2>
              <p>yes</p>
            </div>
            <div className='product-info-item'>
              <h2>In Stock: </h2>
              <p>123</p>
            </div>
          </div>
        </div>
      </ProductTopContainer>
      <ProductBottomContainer>
        <div className='product-form-left'>
          <label>Product Name</label>
          <input type='text' placeholder='Apple Watch' />
          <label>In Stock</label>
          <select name='inStock' id='inStock'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
          <label>Active</label>
          <select name='inStock' id='inStock'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <div className='product-form-right'>
          <div className='product-upload'>
            <img
              src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
              alt=''
            />
            <label for='file'>
              <Publish />
            </label>
            <input type='file' className='hidden' />
          </div>
          <button className='update-btn'>Update</button>
        </div>
      </ProductBottomContainer>
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
    md:max-w-5xl
    flex-grow
    overflow-hidden
    overflow-y-auto
    scrollbar-hide
  `}
`

const TitleContainer = styled.div`
  ${tw`
    w-full
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

const ProductTopContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-col-reverse
    lg:flex-row-reverse
    mt-4
  `}

  .top-left {
    ${tw`
        w-full
        mt-4
        lg:mt-0
        lg:ml-4
    `}
  }

  .top-right {
    ${tw`
        p-4
        w-full
        bg-white
    `}

    .product-info-top {
      ${tw`
        flex
        items-center
        justify-start
      `}

      img {
        ${tw`
            w-20
            h-20
            rounded-md
            object-cover
        `}
      }

      h1 {
        ${tw`
            ml-4
            text-lg
        `}
      }
    }

    .product-info-bottom {
      ${tw`
        mt-2
        flex
        flex-wrap
      `}

      .product-info-item {
        ${tw`
            pr-4
            w-56
            flex
            items-center
            justify-between
        `}

        h2 {
          ${tw``}
        }

        p {
          ${tw``}
        }
      }
    }
  }
`

const ProductBottomContainer = styled.div`
  ${tw`
    h-56
    w-full
    mt-4
    py-4
    px-6
    flex
    items-start
    justify-between
    bg-white 
  `}

  .product-form-left {
    ${tw`
        h-full
        flex
        flex-col
    `}

    label {
      ${tw`
        mb-1
      `}
    }

    input {
      ${tw`
            py-1
            border-b-2
            focus:outline-none
      `}
    }

    input,
    select {
      ${tw`
        mb-2
      `}
    }
  }

  .product-form-right {
    ${tw`
        h-full
        flex
        flex-col
        items-end
        justify-between
    `}

    .product-upload {
      ${tw`
        flex
        items-center
        justify-center
      `}

      img {
        ${tw`
            h-20
            w-20
            mr-4
            rounded-md
            object-cover
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

export default Product
