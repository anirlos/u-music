import React from "react";
import { styled } from "styled-components";
import youtube from "./../img/youtube.png";
import google from "./../img/google.png";
// import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "./../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // useNavigate로 변경

const Login = () => {
  // const GOOGLE_LOGIN_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.GOOGLE_REDIRECT_URI}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email`;
  // const linkToGoogleLogin = () => {
  //   window.location.href = GOOGLE_LOGIN_URL;
  // };
  const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 20%;
    width: 70%;
    height: 100%;
    margin: 0 auto
    background-color: rgba(0, 0, 0, 0.8); /* 반투명한 검은 배경 */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999; /* 다른 컴포넌트 위에 나타나도록 z-index 설정 */
  `;

  const LoginContainer = styled.div`
    background-color: #090202;
    width: 60%;
    max-width: 400px; /* 로그인 컨테이너의 최대 너비 */
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    > img {
      width: 6rem;
      margin-top: 20px;
    }
    > p {
      color: white;
      font-weight: bold;
      font-size: 2rem;
      height: 20px;
    }
    > button {
      width: 300px;
      height: 100px;
      font-size: 40px;
      background-color: #f3f362;
      border: none;
    }
  `;
  const navigate = useNavigate(); // useNavigate를 사용하여 navigate 함수 가져오기
  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // 로그인 성공 시 홈 화면으로 이동
        navigate("/home"); // navigate 함수를 사용하여 경로 변경
      })
      .catch((error) => {
        // 로그인 실패 처리
      });
  };

  return (
    <div>
      <Wrapper>
        <Logo>
          <img src={youtube} />
          <p>YouTube Music</p>
        </Logo>
        <p>로그인</p>
        <img src={google} onClick={googleLogin} />
      </Wrapper>
    </div>
  );
};

export default Login;

const Logo = styled.div`
  width: 70%;
  height: 20vh;
  display: flex;

  border-bottom: 1px solid gray;
  align-items: center;
  justify-content: center;
  gap: 30px;
  > img {
    width: 5rem;
  }
  > p {
    color: white;
    font-weight: bold;
    font-size: 4rem;
  }
`;

// Login.tsx
