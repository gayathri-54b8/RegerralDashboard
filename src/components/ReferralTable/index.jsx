import {useEffect, useState} from "react"
import Pagination from "../Pagination"
import "./index.css"

const ReferralTable = () => {

  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {

    const response = await fetch(
      "https://nxtwave-assessments-backend-nxtwave-media-static.s3-ap-south-1.amazonaws.com/topin_beta/media/content_loading/uploads/d4457a9c-6134-46a5-b31c-60ad13a3e2f6_userData.json"
    )

    const jsonData = await response.json()

    setData(jsonData)
  }

  const filteredData = data.filter(each =>
    each.name.toLowerCase().includes(search.toLowerCase())
  )

  const rowsPerPage = 10

  const lastIndex = page * rowsPerPage

  const firstIndex = lastIndex - rowsPerPage

  const currentData = filteredData.slice(firstIndex, lastIndex)

  const totalPages = Math.ceil(filteredData.length / rowsPerPage)

  return (
    <div>

      <input
        type="search"
        placeholder="Search Name"
        value={search}
        onChange={e => {
          setSearch(e.target.value)
          setPage(1)
        }}
      />

      {currentData.length === 0 ? (
        <p>No matching data</p>
      ) : (
        <>
          <table>

            <thead>
              <tr>
                <th>Name</th>
                <th>Service Name</th>
                <th>Date</th>
                <th>Profit</th>
              </tr>
            </thead>

            <tbody>

              {currentData.map(each => (
                <tr key={each.id}>

                  <td>{each.name}</td>

                  <td>{each.serviceName}</td>

                  <td>{each.date}</td>

                  <td>{each.profit}</td>

                </tr>
              ))}

            </tbody>

          </table>

          <Pagination
            page={page}
            totalPages={totalPages}
            setPage={setPage}
          />
        </>
      )}

    </div>
  )
}

export default ReferralTable