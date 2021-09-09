import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

// Icons
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

const FeaturedInfo = () => {
  return (
    <Container>
      <FeaturedItem>
        <span className='feature-title'>Revenue</span>
        <FeaturedMoneyContainer>
          <span className='feature-money'>$2,415</span>
          <span className='feature-money-rate'>
            -11.4 <ArrowDownward className='feature-icon negative' />
          </span>
        </FeaturedMoneyContainer>
        <span className='feture-sub'>Compared to last month</span>
      </FeaturedItem>
      <FeaturedItem>
        <span className='feature-title'>Sales</span>
        <FeaturedMoneyContainer>
          <span className='feature-money'>$12,415</span>
          <span className='feature-money-rate'>
            -1.4 <ArrowDownward className='feature-icon negative' />
          </span>
        </FeaturedMoneyContainer>
        <span className='feture-sub'>Compared to last month</span>
      </FeaturedItem>
      <FeaturedItem>
        <span className='feature-title'>Costs</span>
        <FeaturedMoneyContainer>
          <span className='feature-money'>$415</span>
          <span className='feature-money-rate'>
            -2.4 <ArrowUpward className='feature-icon' />
          </span>
        </FeaturedMoneyContainer>
        <span className='feture-sub'>Compared to last month</span>
      </FeaturedItem>
    </Container>
  )
}

const Container = styled.div`
  ${tw`
    flex
    flex-wrap
    justify-center
    sm:justify-between
    mb-4
  `}
`

const FeaturedItem = styled.div`
  ${tw`
    mb-2
    py-6
    pl-10
    pr-14
    bg-white
    shadow-sm
    rounded-sm
  `}

  .feature-title {
    ${tw`
        text-lg
        xl:text-xl
    `}
  }
`
const FeaturedMoneyContainer = styled.div`
  ${tw`
    py-4
    flex
    items-center
  `}

  .feature-money {
    ${tw`
        text-xl
        xl:text-2xl
        font-semibold
    `}
  }

  .feature-money-rate {
    ${tw`
        flex
        items-center
        justify-center
        ml-4
    `}
  }

  .feature-icon {
    ${tw`
        text-green-400
    `}
  }

  .negative {
    ${tw`
        text-red-400
    `}
  }
`

export default FeaturedInfo
