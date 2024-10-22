import styles from "../Users/Users.module.css";
import React, {useState} from "react";
type PaginatorPropsType = {
    currentPage : number
    pageSize : number
    totalItemsCount: number
    setCurrentPage: (page: number) => void

}
export const Paginator = ({currentPage, pageSize, totalItemsCount, setCurrentPage, ...props} : PaginatorPropsType) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages: Array<number> = []
    const onPageChange = (changeDirection: '<' | '>') => <span className={styles.pageChangers} onClick={() => {
        {
            setPortionCount(changeDirection === '>' ? portionCount + 10 : portionCount - 10)
        }
    }}>{changeDirection}</span>
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);

    }
    const [portionCount, setPortionCount]= useState<number>(10)
    return <div>
        {portionCount !== 10 && onPageChange('<')}
        {pages.map(page => {
            if (page <= portionCount && page > portionCount - 10) {
                return (
                    <span key={page}
                          onClick={() => setCurrentPage(page)}
                          className={currentPage === page ? `${styles.page} ${styles.selectedPage}` : `${styles.page}`}>{page}</span>
                )
            }
        })}
        {portionCount !== pages[pages.length - 1] && onPageChange('>')}

    </div>
}