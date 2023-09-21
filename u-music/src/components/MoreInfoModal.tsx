import React, { FC, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { SongData } from '../../types';
import { addToLibrary } from '../../redux/reducers/library-slice';
import { LibraryRootState } from '../../redux/store/LibraryStore';
import Modal from '../modals/Modal';

// Modal에서 사용되는 props의 타입을 정의합니다.
interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	trackData: SongData;
}

const MoreInfoModal: FC<ModalProps> = ({ isOpen, onClose, trackData }) => {
	const dispatch = useDispatch();
	const savedSongs = useSelector(
		(state: LibraryRootState) => state.library.savedSongs
	);

	const [showLibraryErrorModal, setShowLibraryErrorModal] = useState(false);

	const handleAddToLibrary = useCallback(
		(trackData: SongData) => {
			// 이미 저장된 노래인지 체크
			const isSongSaved = savedSongs.some(
				(savedSong) => savedSong.id === trackData.id
			);

			if (isSongSaved) {
				// Modal 또는 알림을 통해 사용자에게 메시지 전달
				setShowLibraryErrorModal(true);
			} else {
				// 노래를 보관함에 추가
				dispatch(addToLibrary(trackData));
			}
		},
		[dispatch, savedSongs]
	);

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
					<li
						onClick={() => {
							handleAddToLibrary(trackData);
							console.log(trackData.id);
							console.log(trackData.releaseDate);
							console.log(trackData.duration_ms);
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
				</ul>
			</ModalContent>
			{showLibraryErrorModal && (
				<Modal onClose={() => setShowLibraryErrorModal(false)}>
					<LibraryErrorMessage>
						이미 보관함에 저장한 노래입니다.
					</LibraryErrorMessage>
					<CloseButton onClick={() => setShowLibraryErrorModal(false)}>
						X
					</CloseButton>
				</Modal>
			)}
		</ModalContainer>
	);
};

const ModalContainer = styled.div`
	z-index: 100;
	background-color: #212121;
	border-radius: 2%;
	/* box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2); */

	max-width: 100%;

	overflow: hidden;
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

const LibraryErrorMessage = styled.div`
	padding: 60px 50px;
	border-radius: 5px;
	font-size: 1.25rem;
	font-weight: bold;
	background: #212121;
	color: rgba(255, 255, 255, 0.8);
`;

export default MoreInfoModal;
