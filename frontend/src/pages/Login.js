import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const { loading, error, userInfo } = useSelector((state) => state.userLogin);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  if (userInfo) {
    navigate('/dashboard');
  }

  return (
    <div>
      <h1>Login</h1>
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      <form onSubmit={submitHandler}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
