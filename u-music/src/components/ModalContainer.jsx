import React, { Children } from 'react';
import { createPortal } from 'react-dom';

function ModalContainer({}) {
	return createPortal(<>{Children}</>, document.getElementById('modal'));
}

export default ModalContainer;
