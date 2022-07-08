import React from 'react'
import styles from './Card.module.scss'

function Card(props) {
	const [isAdded, setIsAdded] = React.useState(false)

	const handleClick = () => {
		setIsAdded(!isAdded)
	}

	return (
		<div className='card'>
			<div className='relative'>
				<button className='cardHeart' onClick={props.onClickFavorite}>
					<svg
						className='heartSvg'
						width='17'
						height='16'
						viewBox='0 0 17 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M8.03078 14.9412C7.9457 14.8921 6.1608 13.8555 4.34706 12.2912C3.27016 11.3625 2.39709 10.43 1.76148 9.51732C0.939559 8.33717 0.493248 7.15535 0.500452 6.01161L0.500452 6.01159C0.508636 4.7198 0.971706 3.49482 1.81529 2.568L1.81529 2.56799C2.67463 1.62389 3.83337 1.09399 5.07586 1.09399C6.4213 1.09399 7.65502 1.72907 8.50039 2.75678C9.34576 1.72909 10.5795 1.09399 11.9249 1.09399C13.0982 1.09399 14.2112 1.57119 15.0586 2.42404C15.988 3.35925 16.5088 4.67132 16.5003 6.0235C16.493 7.16312 16.0399 8.34117 15.2169 9.51863C14.5798 10.4301 13.7084 11.3618 12.6359 12.2902L12.6359 12.2902C10.829 13.8541 9.05704 14.8906 8.97259 14.9397L8.97242 14.9398C8.82659 15.0245 8.66338 15.067 8.50036 15.067C8.33842 15.067 8.17616 15.0251 8.03078 14.9412ZM8.03078 14.9412C8.03071 14.9412 8.03065 14.9411 8.03058 14.9411L8.28066 14.5081L8.03078 14.9412Z'
							stroke='#D1D1D1'
						/>
					</svg>
				</button>
				<img src={props.imageURL} alt='Nike Blazer Mid Suede Green' />
			</div>
			<h5 className='cardSneakersName'>{props.title}</h5>
			<div className='cardBottom'>
				<div>
					<p className='cardPrice'>Цена:</p>
					<strong>{props.price} руб.</strong>
				</div>
				<button
					className={isAdded ? styles.cardAddedBtn : styles.cardAddBtn}
					onClick={handleClick}
				></button>
			</div>
		</div>
	)
}

export default Card
