import React from 'react'
import cl from './Pagination.module.css'

const PaginationItem = ({page, onPageSelect, ...props}) => {
  return (
    <button onClick={onPageSelect} {...props}>
      {page}
    </button>
  )
}

export default PaginationItem