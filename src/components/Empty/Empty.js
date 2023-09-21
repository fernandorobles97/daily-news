import './Empty.css'

const Empty = ({ errorMessage }) => {
  return (
    <div className='empty-page'>
      <h1>{errorMessage}</h1>
    </div>
  )
}

export default Empty