import { Spinner } from 'react-bootstrap'

const Spiner = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				width: '100%',
				alignItems: 'center',
			}}>
			<Spinner animation='grow' role='status' variant='light' style={{width:'5rem',height:'5rem'}}>
				<span className='visually-hidden'>Loading...</span>
			</Spinner>
		</div>
	)
}

export default Spiner
