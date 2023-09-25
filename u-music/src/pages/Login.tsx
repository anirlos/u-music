import React from 'react';
import { styled } from 'styled-components';
import youtube from './../img/youtube.png';
import google from './../img/google.png';
// import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from './../firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
	// const GOOGLE_LOGIN_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.GOOGLE_REDIRECT_URI}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email`;
	// const linkToGoogleLogin = () => {
	//   window.location.href = GOOGLE_LOGIN_URL;
	// };
	const Wrapper = styled.div`
		position: fixed;
		top: 0;
		left: 0;
		width: 50%;
		height: 50%;
		background-color: rgba(0, 0, 0, 0.8); /* 반투명한 검은 배경 */
		display: flex;
		align-items: center;
		justify-content: center;
		/* z-index: 9999;  */
	`;

	const LoginContainer = styled.div`
		background-color: #090202;
		width: 100%;
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
		}
	`;

	const googleLogin = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential!.accessToken;
				// The signed-in user info.
				const user = result.user;
				// IdP data available using getAdditionalUserInfo(result)
				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
			});
	};

	return (
		<div>
			<Wrapper>
				<LoginContainer>
					<Logo>
						<img src={youtube} />
						<p>YouTube Music</p>
					</Logo>

					<img src={google} onClick={googleLogin} />

					{/* <GoogleOAuthProvider clientId="<your_client_id>">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
          ;
        </GoogleOAuthProvider>
        ; */}
				</LoginContainer>
			</Wrapper>
		</div>
	);
};

const Logo = styled.div`
	width: 70%;
	height: 20vh;
	display: flex;

	border-bottom: 1px solid gray;
	align-items: center;
	justify-content: center;
	gap: 30px;
	> img {
		width: 6rem;
	}
	> p {
		color: white;
		font-weight: bold;
		font-size: 4rem;
	}
`;

export default Login;
