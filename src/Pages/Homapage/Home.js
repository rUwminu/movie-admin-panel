import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

// Components
import Chart from '../../Charts/Chart'
import { FeaturedInfo, WidgetSmall, WidgetLarge } from '../../components/index'

// DataKey
import { data } from '../../Assets/DumbData'

const Home = () => {
  return (
    <Container>
      <FeaturedInfo />
      <Chart data={data} title='User Analytics' dataKey='Active User' grid />
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
