import Link from 'next/link';
import React from 'react';
import styles from './main-header.module.css';
import Button from '../ui/Button';

const MainHeader = () => {
  return (
    <header className="flex justify-between bg-cyan-200">
      <div>로고</div>
      <div className="flex">
        <div>카테고리 1</div>
        <div>카테고리 2</div>
        <div>카테고리 3</div>
      </div>
      <div className="flex">
        <Button textColor="">로그인</Button>
        <Button>회원가입</Button>
      </div>
    </header>
  );
};

export default MainHeader;
