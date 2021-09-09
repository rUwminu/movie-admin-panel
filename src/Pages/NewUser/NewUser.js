import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

//Icons
import { ArrowBackIos } from '@material-ui/icons'

const NewUser = () => {
  const history = useHistory()

  const handleBack = () => {
    history.goBack()
  }

  return (
    <Container>
      <div onClick={handleBack} className='back-btn hover:translate-x-2'>
        <ArrowBackIos className='icons' /> Back
      </div>
      <InnerContainer>
        <h1 className='title'>New User</h1>
        <form className='new-user-form'>
          <ItemContainer>
            <label>Username</label>
            <input type='text' placeholder='john' />
          </ItemContainer>
          <ItemContainer>
            <label>Full Name</label>
            <input type='text' placeholder='John Smitch' />
          </ItemContainer>
          <ItemContainer>
            <label>Email</label>
            <input type='text' placeholder='john@example.com' />
          </ItemContainer>
          <ItemContainer>
            <label>Password</label>
            <input type='password' placeholder='Atleast 6 Character' />
          </ItemContainer>
          <ItemContainer>
            <label>Phone Number</label>
            <input type='text' placeholder='+60 11 1111 1111' />
          </ItemContainer>
          <ItemContainer>
            <label>Address</label>
            <input type='text' placeholder='New York | USA' />
          </ItemContainer>
          <ItemContainer>
            <label>Image</label>
            <input type='file' />
          </ItemContainer>
          <ItemContainer>
            <label>Gender</label>
            <div className='gender-container'>
              <input type='radio' name='gender' id='male' value='male' />
              <label for='male'>Male</label>
              <input type='radio' name='gender' id='female' value='female' />
              <label for='female'>Female</label>
              <input type='radio' name='gender' id='other' value='other' />
              <label for='other'>Other</label>
            </div>
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
    max-w-md
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
      mb-3
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
    md:max-w-sm
    mb-2
    lg:mr-4
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
        mt-3
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
`

export default NewUser
