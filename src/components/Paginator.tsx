import { useState, useEffect } from "react";

interface PaginatorProps {
    totalItems: number
    currentPage: number
    itemsPerPage: number
}
const Paginator = ({ totalItems, currentPage, itemsPerPage }: PaginatorProps) => {
    const [pageNumbers, setPageNumbers] = useState([]);
    
    const handlePageChange = (pageNumber) => {
        setPageNumbers(pageNumber);
    };

    const generatePageNumbers = () => {
        const startPageNumber = Math.max(1, currentPage - Math.floor(itemsPerPage / 2));
        const endPageNumber = Math.min(totalItems, currentPage + Math.floor(itemsPerPage / 2));

        const pageNumbersArray = [];

        for (let i = startPageNumber; i <= endPageNumber; i++) {
            pageNumbersArray.push(i);
        }

        return pageNumbersArray;
    };

    useEffect(() => {
        setPageNumbers(generatePageNumbers());
    }, [currentPage]);

    return (
        <div>
            <ul>
                {pageNumbers.map((pageNumber) => (
                    <li key={pageNumber}>
                        <a href="#" onClick={() => handlePageChange(pageNumber)}>
                            {pageNumber}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Paginator