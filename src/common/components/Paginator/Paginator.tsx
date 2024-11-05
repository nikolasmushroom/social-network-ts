import styles from "../../../features/users/ui/UsersPage/Users.module.css";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../app/store/redux-store";
import {setCurrentPage} from "../../../features/users/model/users-reducer";
type PaginatorPropsType = {
    currentPage : number
    pageSize : number
    totalItemsCount: number

}
export const Paginator = ({currentPage, pageSize, totalItemsCount, ...props} : PaginatorPropsType) => {
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
    const dispatch = useDispatch<AppDispatch>()
    return <div>
        {portionCount !== 10 && onPageChange('<')}
        {pages.map(page => {
            if (page <= portionCount && page > portionCount - 10) {
                return (
                    <span key={page}
                          onClick={() => dispatch(setCurrentPage(page))}
                          className={currentPage === page ? `${styles.page} ${styles.selectedPage}` : `${styles.page}`}>{page}</span>
                )
            }
        })}
        {portionCount !== pages[pages.length - 1] && onPageChange('>')}

    </div>
}