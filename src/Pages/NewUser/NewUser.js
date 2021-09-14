import React, { useState, useContext } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import storage from '../../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { UserContext } from '../../context/UserContext/UserContext'
import { createUser } from '../../context/UserContext/ApiCall'

//Icons
import { ArrowBackIos } from '@material-ui/icons'

const NewUser = () => {
  const history = useHistory()
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [email, setEmail] = useState(null)
  const [profilePic, setProfilePic] = useState(null)
  const [user, setUser] = useState(null)
  const [uploaded, setUploaded] = useState(0)
  const { dispatch } = useContext(UserContext)

  const handleBack = () => {
    history.goBack()
  }

  const handleChange = (e) => {
    const value = e.target.value
    setUser({ ...user, [e.target.name]: value })
  }

  const uploadAllFile = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name
      const storageRef = ref(storage, `/users/${fileName}`)
      const uploadTask = uploadBytesResumable(storageRef, item.file)

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log('Upload is ' + progress + '% done')
        },
        (error) => {
          console.log(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setUser((prev) => {
              return { ...prev, [item.label]: url }
            })
            setUploaded((prev) => prev + 1)
          })
        }
      )
    })
  }

  const handleUpload = (e) => {
    console.log('Upload click')
    e.preventDefault()
    uploadAllFile([{ file: profilePic, label: 'profilePic' }])
  }

  const handleCreate = (e) => {
    console.log('Create New User')
    e.preventDefault()
    createUser(user, dispatch)
  }

  console.log(user)

  return (
    <Container>
      <div onClick={handleBack} className='back-btn '>
        <ArrowBackIos className='icons' /> Back
      </div>
      <InnerContainer>
        <h1 className='title'>New User</h1>
        <form className='new-user-form'>
          <ItemContainer>
            <label>Username</label>
            <input
              onChange={handleChange}
              type='text'
              placeholder='John Smitch'
              name='username'
            />
          </ItemContainer>
          <ItemContainer>
            <label>Email</label>
            <input
              onChange={handleChange}
              type='text'
              placeholder='john@example.com'
              name='email'
            />
          </ItemContainer>
          <ItemContainer>
            <label>Password</label>
            <input
              onChange={handleChange}
              type='password'
              placeholder='Atleast 6 Character'
              name='password'
            />
          </ItemContainer>
          <ItemContainer>
            <label>Image</label>
            <input
              onChange={(e) => setProfilePic(e.target.files[0])}
              className='file-input'
              type='file'
              name='profilePic'
            />
          </ItemContainer>
          <ItemContainer>
            <label>Is Admin</label>
            <select
              onChange={handleChange}
              className='select'
              name='isAdmin'
              id='isAdmin'
            >
              <option value=''>Type</option>
              <option value='true'>Yes</option>
              <option value='false'>No</option>
            </select>
          </ItemContainer>
        </form>
        {uploaded === 1 ? (
          <button onClick={handleCreate} className='btn-create'>
            Create
          </button>
        ) : (
          <button onClick={(e) => handleUpload(e)} className='btn-create'>
            Upload
          </button>
        )}
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

  .file-input {
    ${tw`
      py-[1px]
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
