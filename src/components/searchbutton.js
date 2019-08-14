import React from 'react';



// make class
// render to display then handlebutton click update state


export default function Button(props) {
  return <button onClick={() => props.onClick()}>Search</button>;
}

{/* <button
  type='button'
  className='List-add-button'
>
  Go Search
</button> */}