import React from 'react';
import styled from 'styled-components';

function Modal({ isOpen, onClose }) {
	if (!isOpen) {
		return null;
	}

	// Add your modal content here

	return (
		<ModalContainer onClick={onClose}>
			<CloseButton>x</CloseButton>
			<ModalContent>
				{/* Add your modal content here */}
				<ul>
					<li>
						<a href="#">
							<p>뮤직 스테이션 시작</p>
						</a>
					</li>
					<li>
						<a href="#">
							<p>현재 재생목록에 추가</p>
						</a>
					</li>
					<li>
						<a href="#">
							<p>보관함에 저장</p>
						</a>
					</li>
					<li>
						<a href="#">
							<p>좋아요 표시한 노래에 추가</p>
						</a>
					</li>
					<li>
						<a href="#">
							<p>재생목록에 저장</p>
						</a>
					</li>
					<li>
						<a href="#">
							<p>앨범으로 이동</p>
						</a>
					</li>
					<li>
						<a href="#">
							<p>아티스트 페이지로 이동</p>
						</a>
					</li>
					<li>
						<a href="#">
							<p>공유</p>
						</a>
					</li>
				</ul>
			</ModalContent>
		</ModalContainer>
	);
}

const ModalContainer = styled.div`
	z-index: 100;
	background-color: #212121;
	border-radius: 2%;
	/* box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2); */

	max-width: 80%;

	overflow: none;
`;

const ModalContent = styled.div`
	position: relative;
	width: 100%;
	padding: 20px;
	text-align: left;
	ul {
		width: 240px;
		padding: 0;

		li {
			list-style: none;
			height: 48px;
			a {
				text-decoration: none;
			}
		}
	}
`;

const CloseButton = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	background: none;
	border: none;
	cursor: pointer;
	font-size: 16px;
	color: #fff;
`;

export default Modal;
