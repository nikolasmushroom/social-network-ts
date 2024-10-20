import styles from "../Users/Users.module.css";
import React, {useState} from "react";
type PaginatorPropsType = {
    currentPage : number
    pageSize : number
    totalUsersCount: number
    setCurrentPage: (page: number) => void

}
export const Paginator = ({currentPage, pageSize, totalUsersCount, setCurrentPage, ...props} : PaginatorPropsType) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages: Array<number> = []
    const onPageChange = (changeDirection: '<' | '>') => <span className={styles.pageChangers} onClick={() => {
        {
            setMaxCount(changeDirection === '>' ? maxCount + 10 : maxCount - 10)
        }
    }}>{changeDirection}</span>
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    const [maxCount, setMaxCount]= useState<number>(10)
    return <div>
        {maxCount !== 10 && onPageChange('<')}
        {pages.map(page => {
            if (page <= maxCount && page > maxCount - 10) {
                return (
                    <span key={page}
                          onClick={() => setCurrentPage(page)}
                          className={currentPage === page ? `${styles.page} ${styles.selectedPage}` : `${styles.page}`}>{page}</span>
                )
            }
        })}
        {maxCount !== pages[pages.length - 1] && onPageChange('>')}

    </div>
}