import React from 'react';
import { createPortal } from 'react-dom';

function ModalContainer({}) {
	return createPortal(<></>, document.getElementById('modal'));
}

export default ModalContainer;
