import "./index.css"

const Pagination = props => {

  const {page, totalPages, setPage} = props

  return (
    <div className="pagination">

      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        Prev
      </button>

      <p>
        {page} / {totalPages}
      </p>

      <button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>

    </div>
  )
}

export default Pagination