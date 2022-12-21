import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from '@/components/navigations/Navigation.module.scss';
const cx = classNames.bind(styles);

function Navigation() {
  return (
    <>
      <nav className={cx('wrap-navigation')}>
        <div>
          <Link className={cx('brand-color')} to="/">
            Home
          </Link>
        </div>
        <div>
          <NavLink className={({ isActive }) => (isActive ? cx('active-color') : '')} to="/blogs">
            Blogs
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? cx('active-color') : '')}
            to="/add-post"
          >
            AddPost
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
