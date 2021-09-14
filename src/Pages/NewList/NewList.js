import React, { useState, useContext, useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { MovieContext } from '../../context/MovieContext/MovieContext'
import { ListContext } from '../../context/ListContext/ListContext'
import { createList } from '../../context/ListContext/ApiCall'
import { getMovies } from '../../context/MovieContext/ApiCall'

//Icons
import { ArrowBackIos } from '@material-ui/icons'

const NewList = () => {
  const history = useHistory()
  const [list, setList] = useState(null)
  const { dispatch } = useContext(ListContext)
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext)

  const handleBack = () => {
    history.goBack()
  }

  const handleChange = (e) => {
    const value = e.target.value
    setList({ ...list, [e.target.name]: value })
  }

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value)
    setList({ ...list, [e.target.name]: value })
  }

  const handleCreate = (e) => {
    e.preventDefault()
    if (list !== null && Object.keys(list).length === 4) {
      createList(list, dispatch)
      history.push('/lists')
    } else {
      console.log('There field empty')
    }
  }

  useEffect(() => {
    getMovies(dispatchMovie)
  }, [])

  return (
    <Container>
      <div onClick={handleBack} className='back-btn'>
        <ArrowBackIos className='icons' /> Back
      </div>
      <InnerContainer>
        <h1 className='title'>New List</h1>
        <form className='new-user-form'>
          <div className='form-left'>
            <ItemContainer>
              <label>List Title</label>
              <input
                onChange={handleChange}
                type='text'
                placeholder='Best Comedy...'
                name='title'
              />
            </ItemContainer>
            <ItemContainer>
              <label>Genre</label>
              <input
                onChange={handleChange}
                type='text'
                placeholder='comedy | action | crime'
                name='genre'
              />
            </ItemContainer>
            <ItemContainer>
              <label>Type</label>
              <select onChange={handleChange} name='type' id='type'>
                <option value=''>Type</option>
                <option value='movie'>Movies</option>
                <option value='series'>Series</option>
              </select>
            </ItemContainer>
          </div>
          <div className='form-right'>
            <ItemContainer>
              <label>Contents</label>
              <select
                multiple
                onChange={handleSelect}
                name='content'
                id='type'
                style={{ height: '250px' }}
              >
                {movies.map((movie) => (
                  <option key={movie._id} value={movie._id}>
                    {movie.title}
                  </option>
                ))}
              </select>
            </ItemContainer>
          </div>
        </form>

        <button onClick={handleCreate} className='btn-create'>
          Create
        </button>
      </InnerContainer>
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

const InnerContainer = styled.div`
  ${tw`
    py-4
    px-6
    w-full
    bg-white
    shadow-sm
    rounded-sm
  `}

  .title {
    ${tw`
        mb-4
    `}
  }

  .new-user-form {
    ${tw`
        w-full
        flex
        flex-col
        lg:flex-row
    `}

    .form-left {
      ${tw`
        w-full
      `}
    }

    .form-right {
      ${tw`
        mt-4
        lg:mt-0
        w-full
      `}
    }
  }

  .btn-create {
    ${tw`
        mt-4
        py-2
        w-full
        max-w-sm
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
`

const ItemContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    max-w-sm
    mb-2
    md:mr-4
  `}

  label {
    ${tw`
        mb-1
        text-sm
        text-gray-600
    `}
  }

  input {
    ${tw`
        w-full
        py-1
        px-2
        border-2
        border-gray-200
        rounded-md
        focus:outline-none
    `}
  }

  .gender-container {
    input {
      ${tw`
        mr-2
      `}
    }

    label {
      ${tw`
        mr-4
      `}
    }
  }

  select {
    ${tw`
        py-1
    `}
  }

  :nth-child(3) {
    input {
      ${tw`
        py-[1px]
      `}
    }
  }
`

export default NewList
