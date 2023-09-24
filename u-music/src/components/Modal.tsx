import React, { FC, useEffect, useRef, useState, useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { SongData } from '../types';
import {
	addToLibrary,
	resetDuplicateState,
} from '../redux/reducers/library-slice';
import { LibraryRootState } from '../redux/store';
import LibraryModalBox from './modals/LibraryModalBox';

import useOutSideClick from '../hooks/useOutSideClick';

// Modal 프롭스 타입 정의
interface ModalProps {
	open: boolean;
	onClose: () => void;
	trackData: SongData | null;
}

const Modal: FC<ModalProps> = ({ open, onClose, trackData }) => {
	const modalRef = useRef<HTMLDivElement>(null);

	const handleClose = () => {
		if (modalRef.current) {
			modalRef.current.style.display = 'none';
		}
		onClose?.();
	};

	useOutSideClick(modalRef, handleClose);

	useEffect(() => {
		const $body = document.querySelector('body') as HTMLBodyElement | null;
		if ($body) {
			$body.style.overflow = 'hidden';
			return () => {
				$body.style.overflow = 'auto';
			};
		}
	}, [open]);

	const dispatch = useDispatch();

	const [showLibraryErrorModal, setShowLibraryErrorModal] = useState(false);

	const isDuplicate = useSelector(
		(state: LibraryRootState) => state.library.isDuplicate
	);

	useEffect(() => {
		if (isDuplicate) {
			setShowLibraryErrorModal(true);
			dispatch(resetDuplicateState()); // 중복 상태 초기화
		}
	}, [isDuplicate, dispatch]);

	const handleAddToLibrary = useCallback(
		(trackData: SongData) => {
			dispatch(addToLibrary(trackData));
		},
		[dispatch]
	);

	return (
		<ModalBox>
			<ModalWrap ref={modalRef}>
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
					<li
						onClick={() => {
							if (trackData) {
								handleAddToLibrary(trackData);
							}
						}}
					>
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
			{showLibraryErrorModal && (
				<LibraryModalBox
					onClose={() => {
						setShowLibraryErrorModal(false);
						onClose();
					}}
				>
					<LibraryErrorMessage>
						이미 보관함에 저장한 노래입니다.
					</LibraryErrorMessage>
				</LibraryModalBox>
			)}
		</ModalBox>
	);
};
export default Modal;
// 스타일 컴포넌트를 사용하여 스타일링

const ModalBox = styled.div`
	position: absolute;

	top: 0;
	left: 10%;
	z-index: 99;
`;

const ModalWrap = styled.div`
	position: fixed;
`;

const Contents = styled.ul`
	background-color: #212121;
	/* position: fixed;
	z-index: 10001;
	top: -10%;
	left: 10%; */
	width: 200px;
	border-radius: 3%;
	padding: 20px;
	li {
		list-style: none;
		opacity: 0.8;
		margin-bottom: 5px;
		text-align: left;

		a {
			text-decoration: none;
			p {
				color: #fff;
				font-size: 12px;
				margin-left: 15px;
				margin-bottom: 10px;
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

const LibraryErrorMessage = styled.div`
	padding: 60px 50px;
	border-radius: 5px;
	font-size: 1.25rem;
	font-weight: bold;
	background: #212121;
	color: rgba(255, 255, 255, 0.8);
`;
