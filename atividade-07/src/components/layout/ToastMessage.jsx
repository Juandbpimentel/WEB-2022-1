import { Toast, ToastContainer } from 'react-bootstrap'

const ToastMessage = ({ header, body, show, bg, setShowToast }) => {
	return (
		<ToastContainer position='top-center' style={{ marginTop: '5em' }}>
			<Toast
				onClose={() => setShowToast(false)}
				show={show}
				bg={bg}
				delay={4000}
				autohide>
				<Toast.Header>
					<strong className='me-auto'>{header}</strong>
				</Toast.Header>
				<Toast.Body>
					<span style={{ color: 'black', fontWeight: 'bold' }}>
						{body}
					</span>
				</Toast.Body>
			</Toast>
		</ToastContainer>
	)
}

export default ToastMessage;