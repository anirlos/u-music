import React, { FC, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { RiMore2Line } from 'react-icons/ri';
import useOutSideClick from '../hooks/useOutSideClick';
import ModalContainer from './ModalContainer'; // ModalContainer 추가

// Modal 프롭스 타입 정의
interface ModalProps {
	open: boolean;
	onClose: () => void;
}

const Modal: FC<ModalProps> = ({ open, onClose }) => {
	const modalRef = useRef<HTMLDivElement>(null);

	const handleClose = () => {
		if (modalRef.current) {
			modalRef.current.style.display = 'none';
		}
		onClose?.();
	};

	useOutSideClick(modalRef, handleClose);

	const [hover, setHover] = useState(false);

	useEffect(() => {
		const $body = document.querySelector('body') as HTMLBodyElement | null;
		if ($body) {
			$body.style.overflow = 'hidden';
			return () => {
				$body.style.overflow = 'auto';
			};
		}
	}, []);

	return (
		<ModalBox>
			<Overlay ref={modalRef}>
				<ModalWrap>
					<Contents>
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
					</Contents>
				</ModalWrap>
			</Overlay>
		</ModalBox>
	);
};
export default Modal;
// 스타일 컴포넌트를 사용하여 스타일링

const ModalBox = styled.div`
	position: fixed;
	top: 0;
	left: 10%;
	z-index: 9999;
`;

const Overlay = styled.div`
	display: flex;

	justify-content: center;
	align-items: center;
	z-index: 103;
`;

const ModalWrap = styled.div``;

// const CloseButton = styled.button`
// 	position: absolute;
// 	top: 10px;
// 	right: 10px;
// 	background: none;
// 	border: none;
// 	font-size: 20px;
// 	cursor: pointer;
// `;

const Contents = styled.ul`
	background-color: #212121;
	position: fixed;

	top: -10%;
	left: 10%;
	width: 240px;
	li {
		list-style: none;
		opacity: 0.8;
		margin-bottom: 10px;
		a {
			text-decoration: none;
			p {
				color: #fff;
				font-size: 14px;
			}
		}
		&:hover {
			transition: 0;
			text-decoration: underline;
			font-weight: bold;
			opacity: 1;
		}
	}
`;
