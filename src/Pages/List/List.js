import React, { useContext, useState, useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { Link, useLocation, useParams, useHistory } from 'react-router-dom'
import { ListContext } from '../../context/ListContext/ListContext'

import { updateMovies } from '../../context/MovieContext/ApiCall'

import { ArrowBackIos } from '@material-ui/icons'

const List = () => {
  const history = useHistory()
  const { id } = useParams()
  const location = useLocation()
  const { dispatch } = useContext(ListContext)
  const list = location.list
  const [listDetail, setListDetail] = useState({})
  const [listText, setListText] = useState({})

  const { lists, isFetching } = useContext(ListContext)

  const findListDetail = () => {
    if (lists.length > 0 && !isFetching) {
      const listObject = lists.find((x) => x._id === id)
      setListDetail(listObject)
    } else {
      history.push('/lists')
    }
  }

  const handleChange = (e) => {
    const value = e.target.value
    setListText({
      ...listText,
      [e.target.name]: value ? value : e.target.placeholder,
      id,
    })
  }

  const handleUpdate = (e) => {}

  console.log(listText)

  useEffect(() => {
    findListDetail()
  }, [id])

  const handleBack = () => {
    history.goBack()
  }

  return (
    <Container>
      <div onClick={handleBack} className='back-btn '>
        <ArrowBackIos className='icons' /> Back
      </div>
      {!isFetching && listDetail && (
        <>
          <TitleContainer>
            <h1>Movie</h1>
            <Link to='/newList' className='add-btn'>
              Create
            </Link>
          </TitleContainer>
          <ProductTopContainer>
            <div className='top-right'>
              <p>{listDetail.title}</p>
              <div className='product-info-bottom'>
                <div className='product-info-item'>
                  <h2>Id: </h2>
                  <p>{listDetail._id}</p>
                </div>
                <div className='product-info-item'>
                  <h2>Genre: </h2>
                  <p>{listDetail.genre}</p>
                </div>
                <div className='product-info-item'>
                  <h2>Type: </h2>
                  <p>{listDetail.type}</p>
                </div>
              </div>
            </div>
          </ProductTopContainer>
          <ProductBottomContainer>
            <div className='product-form-left'>
              <div className='product-item-box'>
                <label>Movies Title</label>
                <input
                  onChange={handleChange}
                  type='text'
                  name='title'
                  placeholder={listDetail.title}
                />
              </div>
              <div className='product-item-box'>
                <label>Genre</label>
                <input
                  onChange={handleChange}
                  type='text'
                  name='genre'
                  placeholder={listDetail.genre}
                />
              </div>
              <div className='product-item-box'>
                <label>Type</label>
                <select onChange={handleChange} name='type' id='isSeries'>
                  <option value=''>Type</option>
                  <option value='series'>Series</option>
                  <option value='movie'>Movies</option>
                </select>
              </div>
            </div>
            <div className='product-form-right'>
              {Object.keys(listText).length > 0 && (
                <button onClick={handleUpdate} className='update-btn'>
                  Update
                </button>
              )}
            </div>
          </ProductBottomContainer>
        </>
      )}
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
    md:max-w-5xl
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
        mt-4
        flex
        flex-col
        flex-wrap
      `}

      .product-info-item {
        ${tw`
            w-full
            md:max-w-xs
            mr-20
            flex
            items-center
            justify-between
        `}

        h2 {
          ${tw`
            mr-4
          `}
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
    relative
    h-auto
    w-full
    mt-4
    pt-4
    pb-16
    lg:py-4
    px-6
    flex
    flex-col-reverse
    lg:flex-row
    items-start
    justify-between
    bg-white 
  `}

  .product-form-left {
    ${tw`
        h-full
        w-full
        max-w-sm
        flex
        flex-col
    `}

    .product-item-box {
      ${tw`
        flex
        flex-col
        mb-3
      `}
    }

    label {
      ${tw`
        text-sm
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
        mb-6
        lg:mb-0
        h-full
        flex
        flex-col
        items-end
        justify-between
    `}

    .product-upload {
      ${tw`
        lg:mt-10
        flex
        items-center
        justify-center
      `}

      img {
        ${tw`
            h-24
            w-24
            lg:h-56
            lg:w-56
            mr-4
            rounded-md
            object-cover
        `}
      }

      .upload-icons {
        ${tw`
          cursor-pointer
        `}
      }
    }

    .update-btn {
      ${tw`
        absolute
        bottom-8
        left-6
        lg:left-auto
        py-2
        w-48
        md:w-56
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

export default List
