import React from 'react'

import '../Header/header.scss'

const Header = () => {
    return (
        <header className="home__header">
        <h2 className="home__header__heading">MY BLOG HENRY</h2>
        <h1 className="home__header__title">
            <span>"</span>Blog<span>"</span>
        </h1>
        <p className="home__header__desc">
            Welcome tới blog nơi chia sẽ kiến thức và trao đổi về lập trình <br />
            Các kiến thức về Font-End và Back-End.
        </p>
    </header>
  )
}

export default Header