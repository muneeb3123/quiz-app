import React from 'react'

const HomePage = ({daud}) => {
  let a = 10
  const b = () => {
    alert(a)
  }
  
  return (
    <>
   <button onClick={b()}>Hello</button>
   <img src='#' alt='aa' />
   </>
  )
}

export default HomePage;
