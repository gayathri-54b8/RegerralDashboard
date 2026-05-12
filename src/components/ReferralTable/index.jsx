import {useEffect, useState} from "react"
import Pagination from "../Pagination"
import "./index.css"

const namesList = [
  "Pranjal",
  "Paritosh",
  "Palav",
  "Moumita",
  "Mitesh",
  "Srinivas",
  "Hritik",
  "Abc",
  "Xyz",
  "Bcd",
  "Rahul",
  "Kiran",
  "Sneha",
  "David",
  "Ramesh",
  "Anjali",
  "Vikram",
  "Rohit",
  "Pooja",
  "Suresh",
  "Akash",
  "Deepak",
  "Meena",
  "Ritika",
  "Ajay",
  "Keerthi",
  "Aman",
  "Karthik",
  "Nithin",
  "Priya",
  "Teja"
]

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

    

    const updatedData = jsonData.map((each, index) => ({
      ...each,
      name: namesList[index]
    }))

    setData(updatedData)
  }

  

  const filteredData = data.filter(each =>
    each.name.toLowerCase().includes(search.toLowerCase())
  )

  // PAGINATION

  const rowsPerPage = 10

  const lastIndex = page * rowsPerPage

  const firstIndex = lastIndex - rowsPerPage

  const currentData = filteredData.slice(firstIndex, lastIndex)

  const totalPages = Math.ceil(filteredData.length / rowsPerPage)

  return (
    <div className="table-container">

      <div className="table-header">

        <div className="entries-box">

          <p>Show</p>

          <select>
            <option>10</option>
          </select>

          <p>entries</p>

        </div>

        <div className="search-table-box">

          <label>Search:</label>

          <input
            type="search"
            value={search}
            onChange={e => {
              setSearch(e.target.value)
              setPage(1)
            }}
          />

        </div>

      </div>

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

            <tr key={each.user_id}>

              <td>{each.name}</td>

              <td>{each.service_name}</td>

              <td>{each.date}</td>

              <td>
                ${Number(each.profit).toLocaleString()}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

      {currentData.length === 0 && (
        <p className="no-data">
          No matching data
        </p>
      )}

      <Pagination
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />

    </div>
  )
}

export default ReferralTable