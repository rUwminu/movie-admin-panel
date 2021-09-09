import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

//Icons
import { ArrowBackIos } from '@material-ui/icons'

const NewProduct = () => {
  const history = useHistory()

  const handleBack = () => {
    history.goBack()
  }

  return (
    <Container>
      <div onClick={handleBack} className='back-btn'>
        <ArrowBackIos className='icons' /> Back
      </div>
      <InnerContainer>
        <h1 className='title'>New Product</h1>
        <form className='new-user-form'>
          <ItemContainer>
            <label>Product Name</label>
            <input type='text' placeholder='PS5...' />
          </ItemContainer>
          <ItemContainer>
            <label>Stock</label>
            <input type='text' placeholder='20 | 30 | 40' />
          </ItemContainer>
          <ItemContainer>
            <label>Product Image</label>
            <input type='file' />
          </ItemContainer>
          <ItemContainer>
            <label>Active</label>
            <select className='select' name='active' id='active'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </ItemContainer>
        </form>
        <button className='btn-create'>Create</button>
      </InnerContainer>
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
        transition-all
        duration-200
        ease-in-out
    `}

    &:hover {
      ${tw`
        bg-gray-200
      `}

      .icons {
        ${tw`
            -ml-3
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
        flex
        flex-wrap
    `}
  }

  .btn-create {
    ${tw`
        mt-4
        py-2
        w-full
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

export default NewProduct
