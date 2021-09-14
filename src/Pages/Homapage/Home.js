import { useState, useEffect, useMemo } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import axios from 'axios'

// Components
import Chart from '../../Charts/Chart'
import { FeaturedInfo, WidgetSmall, WidgetLarge } from '../../components/index'

const Home = () => {
  const Months = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  )

  const [userStats, setUserStats] = useState([])

  const baseUrl = 'https://full-stack-api-netflix-app.herokuapp.com/api'

  const getStats = async () => {
    try {
      const res = await axios.get(`${baseUrl}/user/stats`, {
        headers: {
          token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
        },
      })

      const statList = res.data.sort(function (a, b) {
        return a._id - b._id
      })

      statList.map((item) =>
        setUserStats((prev) => [
          ...prev,
          { name: Months[item._id - 1], 'New User': item.total },
        ])
      )
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getStats()
  }, [Months])

  return (
    <Container>
      <FeaturedInfo />
      <Chart data={userStats} title='User Analytics' dataKey='New User' grid />
      <HomeWidget>
        <WidgetSmall />
        <WidgetLarge />
      </HomeWidget>
    </Container>
  )
}

const Container = styled.div`
  ${tw`
    mx-auto
    pt-28
    pb-10
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

const HomeWidget = styled.div`
  ${tw`
    mt-6
    w-full
    flex
    flex-col-reverse
    md:flex-row
    items-start
    justify-center
  `}
`

export default Home
