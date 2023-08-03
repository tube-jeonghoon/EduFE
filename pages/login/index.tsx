import axios from 'axios';
import React, { useState } from 'react';
import Cookies from 'js-cookie';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('https://eduplay.jisuheo.shop/login', {
        email: userId,
        password,
      });

      if (res.data && res.data.token) {
        Cookies.set('token', res.data.token);
        alert('로그인 성공!');
      }
    } catch (error) {
      console.error(error);
      alert('로그인 실패!');
    }
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left pl-6">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6 w-[20rem]">
            Eduplaym은 혁신적인 영어 교육 플랫폼으로, 학습자들에게 유익하고
            재미있는 경험을 제공하기 위해 디자인되었습니다. 이 플랫폼은 효과적인
            학습 방법론, 현대적인 기술, 그리고 사용자 중심의 디자인을 결합하여,
            사용자가 영어 실력을 개선할 수 있게 돕습니다.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">ID</span>
              </label>
              <input
                type="text"
                placeholder="id"
                className="input input-bordered"
                value={userId}
                onChange={e => setUserId(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
