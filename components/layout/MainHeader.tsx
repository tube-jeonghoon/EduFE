import Link from 'next/link';
import React, { useState } from 'react';
import styles from './main-header.module.css';
import Button from '../ui/Button';

const MainHeader = () => {
  const [token, setToken] = useState(false);
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow
            rounded-box w-52 bg-slate-50"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>MyPage</a>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Edu Play
        </Link>
      </div>
      {token ? (
        <div className="navbar-end">
          <Link href="/mypage" className="btn mr-[1rem]">
            마이페이지
          </Link>
        </div>
      ) : (
        <div className="navbar-end">
          <Link href="/login" className="btn mr-[1rem]">
            로그인
          </Link>
          <Link href="/signup" className="btn mr-[1rem]">
            회원가입
          </Link>
        </div>
      )}
    </div>
  );
};

export default MainHeader;
