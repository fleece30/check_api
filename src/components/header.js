import React from 'react';
import './header.css';
import $ from 'jquery';

const Header = () => {
    $(function () {
        $(document).scroll(function () {
          var $nav = $(".header");
          $nav.toggleClass('scrolled', $(this).scrollTop() > $(window).height());
        });
      });
    return(
        <div className="header">
            <div>
                <a href="#landing">umang.ai</a>
            </div>
            <div className="links">
                <a href="#landing">HOME</a>
                <a href="#applications">OTHER PRODUCTS</a>
            </div>
        </div>
    )
}

export default Header;