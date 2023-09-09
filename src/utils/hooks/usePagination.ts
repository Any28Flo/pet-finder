import { useState, useEffect } from 'react';

const usePagination = (currentPage: number, pageSize: number, siblingCount: number, totalCount: number) => {
    const [pageNumbers, setPageNumbers] = useState([]);
  
    useEffect(() => {
      const calculatePageNumbers = () => {
        const startPage = Math.max(1, currentPage - siblingCount);
        const endPage = Math.min(totalCount, currentPage + siblingCount);
        const pageNumbers = [];
        for (let i = startPage; i <= endPage; i++) {
          pageNumbers.push(i);
        }
        setPageNumbers(pageNumbers);
      };
  
      calculatePageNumbers();
    }, [currentPage, pageSize, siblingCount, totalCount]);
  
    return pageNumbers;
  };
  export default usePagination;