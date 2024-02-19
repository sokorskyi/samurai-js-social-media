export const getPageCount = (totalItems, limit) => Math.ceil(totalItems / limit);

export const getPageList = (pageCount) => {
  const pageList = [];
  for(let i = 1; i <= pageCount; i++) {
    pageList.push(i)
  }
  return pageList
}