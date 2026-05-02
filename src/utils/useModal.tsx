// create a reusable hook for html dialog element
import { useEffect, useRef } from 'react';

export default function useModal() {
	const dialogRef = useRef<HTMLDialogElement>(null);

	const openModal = () => {
		if (dialogRef.current) {
			dialogRef.current?.showModal();
		}
	};

	const closeModal = () => {
		if (dialogRef.current) {
			dialogRef.current?.close();
		}
	};
	// close modal when user clicks outside the dialog
	/*
	useEffect(() => {
		const dialog = dialogRef.current;
		const dialogDimensions = dialog?.getBoundingClientRect();

		const handleClickOutside = (event: MouseEvent) => {
			if (dialog && dialogDimensions) {
				const { left, right, top, bottom } = dialogDimensions;
				const { clientX, clientY } = event;
				if (
					clientX < left ||
					clientX > right ||
					clientY < top ||
					clientY > bottom
				) {
					closeModal();
				}
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);
	*/

	// prevent default behavior when user presses the escape key
	useEffect(() => {
		const dialog = dialogRef.current;
		if (!dialog) return;

		const handleCancel = (event: Event) => {
			event.preventDefault();
			closeModal();
		};

		dialog.addEventListener('cancel', handleCancel);
		return () => {
			dialog.removeEventListener('cancel', handleCancel);
		};
	}, []);
	return { dialogRef, openModal, closeModal };
}
