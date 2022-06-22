import React from 'react'

import styles from '../SearchBar/searchBar.module.scss'

const SearchBar = ( {value, clearSearch} ) => {
  return (
      <div className={styles.wrapper}>
          <div className={styles.form}>
              <input
                className={styles.input}
                  type='text'
                  placeholder='Tìm kiếm theo thể loai...'
                  value={value}
              />
              <button className={styles.button}>Tìm kiếm</button>
          </div>
      </div>
  )
}

export default SearchBar