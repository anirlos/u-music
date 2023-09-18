import React from 'react';
import styled from 'styled-components';
import { useRef, useState } from 'react';

function Modal() {
	const [modalOpen, setModalOpen] = useState(false);
	const modalBackground = useRef();

	return (
		<>
			<div className={'btn-wrapper'}>
				<button onClick={() => setModalOpen(true)}>모달 열기</button>
			</div>
			{modalOpen && (
				<ModalContainer
					ref={modalBackground}
					onClick={(e) => {
						if (e.target === modalBackground.current) {
							setModalOpen(false);
						}
					}}
				>
					<ModalList>
						<p>리액트로 모달 구현하기</p>
						<button
							className={'modal-close-btn'}
							onClick={() => setModalOpen(false)}
						>
							모달 닫기
						</button>
					</ModalList>
				</ModalContainer>
			)}
		</>
	);
}

const ModalContainer = styled.div`
	width: 240px;
	position: fixed;
	top: 0;
	left: 0;
	padding: 16px 0;
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 2px;
	background-color: #212121;
`;
const ModalList = styled.ul`
	background-color: #ffffff;
	width: 250px;
	height: 150px;
	padding: 15px;
`;

export default Modal;
