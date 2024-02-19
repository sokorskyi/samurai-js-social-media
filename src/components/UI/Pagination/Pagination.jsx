import React, { useMemo } from "react";
import cl from './Pagination.module.css'
import { getPageCount, getPageList } from "../../../util/pagination";
import PaginationItem from "./PaginationItem";
import { useState } from "react";
import { memo } from "react";

const Pagination = memo(({limit, pagePortionLimit = 10, totalItems, selectedPage, onPageSelect}) => {

  const [swappedPagePortionCount, setSwappedPagePortionCount] = useState(0);

  const pageCount = useMemo(() => getPageCount(totalItems, limit), [totalItems, limit]) 
  const pageList = useMemo(() => getPageList(pageCount), [pageCount]);

  const startPagePortionPoint = useMemo(
    () => swappedPagePortionCount * pagePortionLimit + 1, 
  [pagePortionLimit, swappedPagePortionCount]);

  const endPagePortionPoint = useMemo(
    () => (swappedPagePortionCount + 1) * pagePortionLimit, 
  [swappedPagePortionCount, pagePortionLimit]);

  const lastSwappedPagePortionCount = useMemo(
    () => Math.ceil(pageCount / pagePortionLimit) - 1, 
    [pageCount, pagePortionLimit]
  );

  return (
    <div className={cl.paginationBlock}>
      {
        swappedPagePortionCount > 0 && <button onClick={() => setSwappedPagePortionCount(swappedPagePortionCount - 1)} >Previous</button>
      }
      {
        pageList.filter(p => p >= startPagePortionPoint && p <= endPagePortionPoint).map(p => (
          <PaginationItem key={p} page={p} onClick={() => onPageSelect(p)} className={selectedPage === p ? cl.active : null} />
        ))
      }
      {
        swappedPagePortionCount < lastSwappedPagePortionCount && <button onClick={() => setSwappedPagePortionCount(swappedPagePortionCount + 1)} >Next</button>
      }
    </div>
  )
})

export default Pagination