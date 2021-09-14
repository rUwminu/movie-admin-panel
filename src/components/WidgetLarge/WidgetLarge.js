import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

const WidgetLarge = () => {
  const Button = ({ type }) => {
    return <button className={'btn ' + type}>{type}</button>
  }

  return (
    <Container>
      <h1 className='title'>Latest Transaction</h1>

      <table className='table'>
        <tbody>
          <tr className='table-row'>
            <th className='table-col table-title'>Customer</th>
            <th className='table-col table-title'>Date</th>
            <th className='table-col table-title'>Amount</th>
            <th className='table-col table-title'>Status</th>
          </tr>
          <tr className='table-row'>
            <td className='table-col table-user'>
              <img
                src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
                alt='avatar'
                className='user-img'
              />
              <span className='user-name'>John Doe</span>
            </td>
            <td className='table-col table-date'>2 Jun 2020</td>
            <td className='table-col table-amount'>$129.98</td>
            <td className='table-col table-status'>
              <Button type='Approved' />
            </td>
          </tr>
          <tr className='table-row'>
            <td className='table-col table-user'>
              <img
                src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
                alt='avatar'
                className='user-img'
              />
              <span className='user-name'>John Doe</span>
            </td>
            <td className='table-col table-date'>2 Jun 2020</td>
            <td className='table-col table-amount'>$129.98</td>
            <td className='table-col table-status'>
              <Button type='Pendding' />
            </td>
          </tr>
          <tr className='table-row'>
            <td className='table-col table-user'>
              <img
                src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
                alt='avatar'
                className='user-img'
              />
              <span className='user-name'>John Doe</span>
            </td>
            <td className='table-col table-date'>2 Jun 2020</td>
            <td className='table-col table-amount'>$129.98</td>
            <td className='table-col table-status'>
              <Button type='Declined' />
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}

const Container = styled.div`
  flex: 2;
  ${tw`
    p-4
    flex
    flex-col
    items-start
    justify-center
    mb-6
    lg:mb-0
    w-full
    bg-white
    shadow-sm
    rounded-sm
  `}

  .title {
    ${tw`
      mb-2
      text-lg
    `}
  }

  .table {
    ${tw`
      w-full 
    `}

    .table-row {
      ${tw`
        w-full
      `}
    }

    .table-title {
      ${tw`
        text-left
      `}
    }

    .table-user {
      ${tw`
        flex
        items-center
        justify-start
      `}

      .user-img {
        ${tw`
          mr-2
          w-10
          h-10
          rounded-full
          object-cover
        `}
      }
    }

    .table-status {
      .btn {
        ${tw`
          py-1
          px-3
          rounded-md
        `}
      }

      .btn.Approved {
        ${tw`
          text-green-500
          bg-green-100
        `}
      }

      .btn.Declined {
        ${tw`
          text-red-500
          bg-red-100
        `}
      }

      .btn.Pendding {
        ${tw`
          text-blue-500
          bg-blue-100
        `}
      }
    }
  }
`

export default WidgetLarge
