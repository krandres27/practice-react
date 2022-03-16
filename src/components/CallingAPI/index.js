import { useRender } from '../../hooks'
import { useFetch } from '../../hooks'

const CallingAPI = () => {
  const [renders] = useRender()
  const [apiRawData, setCurrentPage] = useFetch()

  const renderUsers = () => {
    const users = apiRawData.map(user => {
      const { results } = user
      const [{ name, picture }]= results ? results : [{ name: {}, picture: {} }]

      return {
        name,
        picture
      }
    })

    return (
      users.map((user, index) => (
        <div className="userInfo_container" key={`${user.name.title}:${user.name.last}:${index}`}>
          <img src={user.picture.thumbnail} alt="user profile" />
          <span>User: {`${user.name.title}, ${user.name.first} ${user.name.last}`} </span>
        </div>
      ))
    )
  }


  return (
    <div>
      <pre style={{ maxHeight: 300, overflow: 'scroll' }}>{JSON.stringify(apiRawData, null, 2)}</pre>
      <hr stlye={{ width: '40%' }}/>
      <p>Number of renders: {renders}</p>
      <hr />
      {renderUsers()}
      <button onClick={() => setCurrentPage(currentPage => currentPage + 1)}>Load more...</button>
    </div>
  )
}

export default CallingAPI
