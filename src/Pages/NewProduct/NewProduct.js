import React, { useState, useContext } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import storage from '../../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { MovieContext } from '../../context/MovieContext/MovieContext'
import { createMovies } from '../../context/MovieContext/ApiCall'

//Icons
import { ArrowBackIos } from '@material-ui/icons'


const NewProduct = () => {
  const history = useHistory()
  const [movie, setMovie] = useState(null)
  const [img, setImg] = useState(null)
  const [imgSm, setImgSm] = useState(null)
  const [imgTitle, setImgTitle] = useState(null)
  const [trailer, setTrailer] = useState(null)
  const [video, setVideo] = useState(null)
  const [uploaded, setUploaded] = useState(0)
  const { dispatch } = useContext(MovieContext)

  const handleBack = () => {
    history.goBack()
  }

  const handleChange = (e) => {
    const value = e.target.value
    setMovie({ ...movie, [e.target.name]: value })
  }

  const uploadAllFile = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name
      const storageRef = ref(storage, `/items/${fileName}`)
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
            setMovie((prev) => {
              return { ...prev, [item.label]: url }
            })
            setUploaded((prev) => prev + 1)
          })
        }
      )
    })
  }

  const handleCreate = (e) => {
    console.log('Create New Movie')
    e.preventDefault()
    createMovies(movie, dispatch)
  }

  const handleUpload = (e) => {
    console.log('Upload click')
    e.preventDefault()
    uploadAllFile([
      { file: img, label: 'img' },
      { file: imgTitle, label: 'imgTitle' },
      { file: imgSm, label: 'imgSm' },
      { file: trailer, label: 'trailer' },
      { file: video, label: 'video' },
    ])
  }

  return (
    <Container>
      <div onClick={handleBack} className='back-btn'>
        <ArrowBackIos className='icons' /> Back
      </div>
      <InnerContainer>
        <h1 className='title'>New Movie</h1>
        <form className='new-user-form'>
          <ItemContainer>
            <label>Movie Title</label>
            <input
              onChange={handleChange}
              type='text'
              placeholder='John Wick'
              name='title'
            />
          </ItemContainer>
          <ItemContainer>
            <label>Description</label>
            <input
              onChange={handleChange}
              type='text'
              placeholder='About the movie...'
              name='desc'
            />
          </ItemContainer>
          <ItemContainer>
            <label>Year</label>
            <input
              onChange={handleChange}
              type='text'
              placeholder='2000 | 2001 | 200...'
              name='year'
            />
          </ItemContainer>
          <ItemContainer>
            <label>Genre</label>
            <input
              onChange={handleChange}
              type='text'
              placeholder='Comedy | Horor | Action | etc...'
              name='genre'
            />
          </ItemContainer>
          <ItemContainer>
            <label>Duration</label>
            <input
              onChange={handleChange}
              type='text'
              placeholder='Movie Play Time'
              name='duration'
            />
          </ItemContainer>
          <ItemContainer>
            <label>Limit</label>
            <input
              onChange={handleChange}
              type='text'
              placeholder='+8 | +12 | +16 | etc...'
              name='limit'
            />
          </ItemContainer>
          <ItemContainer>
            <label>Image</label>
            <input
              onChange={(e) => setImg(e.target.files[0])}
              type='file'
              name='img'
            />
          </ItemContainer>
          <ItemContainer>
            <label>Title Image</label>
            <input
              onChange={(e) => setImgTitle(e.target.files[0])}
              type='file'
              name='imgTitle'
            />
          </ItemContainer>
          <ItemContainer>
            <label>Thumbnail Image</label>
            <input
              onChange={(e) => setImgSm(e.target.files[0])}
              type='file'
              name='imgSm'
            />
          </ItemContainer>
          <ItemContainer>
            <label>Trailer</label>
            <input
              onChange={(e) => setTrailer(e.target.files[0])}
              type='file'
              name='trailer'
            />
          </ItemContainer>
          <ItemContainer>
            <label>Video</label>
            <input
              onChange={(e) => setVideo(e.target.files[0])}
              type='file'
              name='video'
            />
          </ItemContainer>
          <ItemContainer>
            <label>Is Series</label>
            <select
              onChange={handleChange}
              className='select'
              id='isSeries'
              name='isSeries'
            >
              <option value='true'>Yes</option>
              <option value='false'>No</option>
            </select>
          </ItemContainer>
        </form>
        {uploaded === 5 ? (
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
