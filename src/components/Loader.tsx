import React from 'react';
import '../../assets/styles/loader.scss';

interface LoaderProps {
	message?: string;
}

const Loader: React.FC<LoaderProps> = ({ message = 'Loading assets...' }) => {
	return (
		<div style={containerStyle}>
			<div style={spinnerStyle} />
			<p style={textStyle}>{message}</p>
			<style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
		</div>
	);
};

const containerStyle: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	width: '100%',
	height: '100vh',
	backgroundColor: 'rgba(0, 0, 0, 0.65)',
	color: '#ffffff',
	padding: '1rem',
	boxSizing: 'border-box',
};

const spinnerStyle: React.CSSProperties = {
	width: '60px',
	height: '60px',
	border: '6px solid rgba(255, 255, 255, 0.3)',
	borderTopColor: '#ffffff',
	borderRadius: '50%',
	animation: 'spin 1s linear infinite',
};

const textStyle: React.CSSProperties = {
	marginTop: '1rem',
	fontSize: '1rem',
	textAlign: 'center',
};

export default Loader;
