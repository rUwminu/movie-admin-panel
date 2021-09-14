import React, { useContext, useState, useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { Link, useLocation, useParams } from 'react-router-dom'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import storage from '../../firebase'
import { MovieContext } from '../../context/MovieContext/MovieContext'
import { updateMovies } from '../../context/MovieContext/ApiCall'

import { Publish } from '@material-ui/icons'

const Product = () => {
  const { id } = useParams()
  const location = useLocation()
  const { dispatch } = useContext(MovieContext)
  const movie = location.movie
  const [movieDetail, setMovieDetail] = useState({})
  const [movieText, setMovieText] = useState(null)
  const [img, setImg] = useState(null)
  const [trailer, setTrailer] = useState(null)
  const [video, setVideo] = useState(null)
  const [uploaded, setUploaded] = useState(0)

  const { movies, isFetching } = useContext(MovieContext)

  const findMovieDetail = () => {
    if (movies && !isFetching) {
      const movieObject = movies.find((x) => x._id === id)
      setMovieDetail(movieObject)
    }
  }

  const handleChange = (e) => {
    const value = e.target.value
    setMovieText({ ...movieText, [e.target.name]: value, id })
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
            setMovieText((prev) => {
              return { ...prev, [item.label]: url }
            })
            setUploaded((prev) => prev + 1)
          })
        }
      )
    })
  }

  const handleUpdate = (e) => {
    console.log('Update Movie')
    e.preventDefault()
    updateMovies(movieText, dispatch)
  }

  const handleUpload = (e) => {
    e.preventDefault()

    if (img && trailer && video) {
      uploadAllFile([
        { file: img, label: 'img' },
        { file: trailer, label: 'trailer' },
        { file: video, label: 'video' },
      ])
    } else if (!img || img === null) {
      uploadAllFile([
        { file: trailer, label: 'trailer' },
        { file: video, label: 'video' },
      ])
    } else if (!video || video === null) {
      uploadAllFile([
        { file: img, label: 'img' },
        { file: video, label: 'video' },
      ])
    } else if (!trailer || trailer === null) {
      uploadAllFile([
        { file: img, label: 'img' },
        { file: video, label: 'video' },
      ])
    }
  }

  useEffect(() => {
    findMovieDetail()
  }, [id])

  return (
    <Container>
      {!isFetching && movieDetail && (
        <>
          <TitleContainer>
            <h1>Movie</h1>
            <Link to='/newMovie' className='add-btn'>
              Create
            </Link>
          </TitleContainer>
          <ProductTopContainer>
            <div className='top-right'>
              <div className='product-info-top'>
                <img src={movieDetail.img} alt='' />
                <h1>{movieDetail.title}</h1>
              </div>
              <div className='product-info-bottom'>
                <div className='product-info-item'>
                  <h2>Id: </h2>
                  <p>{movieDetail._id}</p>
                </div>
                <div className='product-info-item'>
                  <h2>Genre: </h2>
                  <p>{movieDetail.genre}</p>
                </div>
                <div className='product-info-item'>
                  <h2>Year: </h2>
                  <p>{movieDetail.year}</p>
                </div>
                <div className='product-info-item'>
                  <h2>Limit: </h2>
                  <p>{movieDetail.limit}</p>
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
                  placeholder={movieDetail.title}
                />
              </div>
              <div className='product-item-box'>
                <label>Year</label>
                <input
                  onChange={handleChange}
                  type='text'
                  name='year'
                  placeholder={movieDetail.year}
                />
              </div>
              <div className='product-item-box'>
                <label>Genre</label>
                <input
                  onChange={handleChange}
                  type='text'
                  name='genre'
                  placeholder={movieDetail.genre}
                />
              </div>
              <div className='product-item-box'>
                <label>Trailer</label>
                <input
                  onChange={(e) => setTrailer(e.target.files[0])}
                  type='file'
                  name='trailer'
                />
              </div>
              <div className='product-item-box'>
                <label>Video</label>
                <input
                  onChange={(e) => setVideo(e.target.files[0])}
                  type='file'
                  name='video'
                />
              </div>
              <div className='product-item-box'>
                <label>Is Series</label>
                <select onChange={handleChange} name='isSeries' id='isSeries'>
                  <option value='true'>Yes</option>
                  <option value='false'>No</option>
                </select>
              </div>
            </div>
            <div className='product-form-right'>
              <div className='product-upload'>
                <img src={movieDetail.img} alt='' />
                <label for='file'>
                  <Publish className='upload-icons'/>
                </label>
                <input name='img' type='file' id='file' className='hidden' />
              </div>
              {img || video || trailer ? (
                <>
                  {uploaded >= 1 ? (
                    <button onClick={handleUpdate} className='update-btn'>
                      Update
                    </button>
                  ) : (
                    <button
                      onClick={(e) => handleUpload(e)}
                      className='update-btn'
                    >
                      Upload
                    </button>
                  )}
                </>
              ) : (
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

export default Product
