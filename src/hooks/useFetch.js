import { useEffect, useState } from 'react'

const useFetch = (url = 'https://randomuser.me/api') => {
  const [apiRawData, setApiRawData] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  
  useEffect(() => {    
    async function getAPIData() {
      try {
        const data = await (await fetch(`${url}?page=${currentPage}`)).json();
        setApiRawData(prevData => {
          const newData = [...prevData, data]
          return newData
        })
      } catch(err) {
        console.log(err)
      }
    }
    
    getAPIData()
  }, [currentPage, url])

  return [apiRawData, setCurrentPage]
}

export default useFetch
