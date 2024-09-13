import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SpinnerLoading } from '../Utils/SpinnerLoading';

interface JwtResponse {
  id: number;
  username: string;
  accessToken: string;
  refreshToken: string;
}

const SignInPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post<JwtResponse>('http://localhost:8080/api/v1/auth/login', {
        username,
        password,
      });

      console.log('Login successful', response.data);
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      setIsLoading(false);

      // Navigate to homepage or another route after successful login
      navigate('/home');
    } catch (error: any) {
      setErrorMessage('Invalid username or password. Please try again.');
    }
  };

  if (isLoading) {
    return (
        <SpinnerLoading/>
    )
}



  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="card-title text-center">Sign In</h3>

              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="form-check mb-3">
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>

                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

                <button type="submit" className="btn btn-primary w-100">
                  Sign In
                </button>
              </form>

              <div className="text-center mt-3">
                <a href="/forgot-password">Need help signing in?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
