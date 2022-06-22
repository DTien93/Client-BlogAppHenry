import React from 'react'

import '../Footer/footer.scss'

const Footer = () => {
    return (
        <footer className="footer__container">
              <div className="footer__left">
              <h3 className="footer__logo">Henry</h3>
              <p className="footer__desc">
            This is my blog from HenryTien. Nơi chia sẽ kiến thức về Back End và Font-End.
            Các kiến thức cơ bản về React và Node Js
              </p>
              <div className="footer__social__container">
                <div className="footer__social__icon">
         
                </div>
                  <div className="footer__social__icon">
   
                </div>
                  <div className="footer__social__icon">
  
                </div>
                  <div className="footer__social__icon">

                </div>
          </div>
          </div>
          <div className="footer__center">
            <h3 className="footer__center__title">Liên hệ</h3>
          <div className="footer__item">
              
            </div>
          <div className="footer__item">
        
            </div>
          </div>
        <div className="footer__right">
          <h3 className="footer__right__title">About me</h3>
          <div className="footer__right__contact">
        
          </div>
          <div className="footer__right__contact">
         
          </div>
          <div className="footer__right__contact">
         
          </div>
        </div>
        </footer>
    )
}

export default Footer
