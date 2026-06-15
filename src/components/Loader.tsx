import React from 'react';
import '../../assets/styles/loader.scss';

interface LoaderProps {
	message?: string;
	progress?: number;
}

const Loader: React.FC<LoaderProps> = ({
	message = 'Loading...',
	progress,
}) => {
	return (
		<div className='loader'>
			<div className='loader__content'>
				<div className='loader__spinner'>
					<div className='loader__spinner-ring' />
					<div className='loader__spinner-ring' />
					<div className='loader__spinner-ring' />
				</div>

				<p className='loader__message'>{message}</p>

				{progress !== undefined && (
					<div className='loader__progress'>
						<div
							className='loader__progress-bar'
							style={{ width: `${progress}%` }}
						/>
						<span className='loader__progress-label'>{progress}%</span>
					</div>
				)}
			</div>
		</div>
	);
};

export default Loader;
