import { FormEventHandler, useState } from 'react';
import '../../assets/styles/contact.scss';

import mapMarker from '../../assets/icons/map-marker.svg';
import phone from '../../assets/icons/phone.svg';
import mail from '../../assets/icons/email.svg';
import contactImg from '../../assets/images/location.png';

/// <reference types="vite-plugin-svgr/client" />
import SendIcon from '../../assets/icons/send.svg?react';

const Contact = () => {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [message, setMessage] = useState<string>('');
	const [isSending, setIsSending] = useState<boolean>(false);

	const resetForm = () => {
		setName('');
		setEmail('');
		setMessage('');
	};
	const handleSendMessage: FormEventHandler = async (e) => {
		e.preventDefault();
		// use fetch and post request to api/contact
		const response = await fetch('/api/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ name, email, message }),
		});
		const data = await response.json();
		console.log('Response from server:', data);
		setIsSending(false);
		if (data.success) {
			alert(`Message sent successfully!`);
			resetForm();
		} else {
			alert('Failed to send message. Please try again later.');
			resetForm();
		}
	};

	return (
		<section className='contact-section'>
			<div id='contact' className='contact-bg-img'>
				<p>Contact</p>
			</div>
			<div className='contact-header'>
				<h1>Contact Me</h1>
				<p>Here's is how you can reach me</p>
				<hr />
			</div>
			<div className='contact-detail-container'>
				<div className='left-content'>
					<img
						src={contactImg}
						alt='my location image'
						loading='lazy'
						className='residence-img'
					/>
				</div>
				<div className='right-content'>
					<ul className='contact-info-list'>
						<li className='contact'>
							<img src={mapMarker} alt='map marker' />
							<span>Lagos, Nigeria</span>
						</li>
						<li className='contact'>
							<img src={phone} alt='phone icon' />
							<span>Phone: +234 90 6615 0628</span>
						</li>
						<li className='contact'>
							<img src={mail} alt='email icon' />
							<span>Email: anosykegideon@gmail.com</span>
						</li>
					</ul>
					<div className='message-me'>
						<p>Send me a message: </p>
						<form
							action=''
							className='message-form'
							onSubmit={handleSendMessage}
						>
							<input
								type='text'
								aria-label='sender name'
								placeholder='Name'
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
							<input
								type='email'
								aria-label='sender email'
								placeholder='Email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<textarea
								name=''
								className=''
								cols={30}
								rows={7}
								aria-label='sender message'
								placeholder='Message'
								value={message}
								onChange={(e) => setMessage(e.target.value)}
							></textarea>
							<button
								type='submit'
								aria-label='Send message'
								disabled={isSending}
							>
								<SendIcon />
								<span>Send Message</span>
								{isSending && <span>Sending...</span>}
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
