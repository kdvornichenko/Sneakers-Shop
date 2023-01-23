import React from 'react'
import axios from 'axios'
import Card from './components/Card'
import Cart from './components/Cart'
import Header from './components/Header'

function App() {
	const [items, setItems] = React.useState([])
	const [cartOpened, setCartOpened] = React.useState(false)
	const [favorites, setFavorites] = React.useState([])
	const [searchValue, setSearchValue] = React.useState('')
	const [cartItems, setCartItems] = React.useState([])

	React.useEffect(() => {
		axios.get('https://62c7fe728c90491c2cabe824.mockapi.io/Items').then(res => {
			setItems(res.data)
		})
		axios.get('https://62c7fe728c90491c2cabe824.mockapi.io/Cart').then(res => {
			setCartItems(res.data)
		})
	}, [])

	const onAddToCart = obj => {
		if (!obj.isAdded) {
			axios.post('https://62c7fe728c90491c2cabe824.mockapi.io/Cart', obj)
			setTimeout(() => {
				axios
					.get(`https://62c7fe728c90491c2cabe824.mockapi.io/Cart`)
					.then(res => {
						setCartItems(res.data)
					})
			}, 500)
		}
	}

	const onRemoveItem = id => {
		axios.delete(`https://62c7fe728c90491c2cabe824.mockapi.io/Cart/${id}`)
		setCartItems(prev => prev.filter(item => item.id !== id))
	}

	const onAddToFavorite = obj => {
		if (!obj.isFavorite) {
			axios.post('https://62c7fe728c90491c2cabe824.mockapi.io/Favorite', obj)
			setTimeout(() => {
				axios
					.get(`https://62c7fe728c90491c2cabe824.mockapi.io/Favorite`)
					.then(res => {
						setFavorites(res.data)
					})
			}, 500)
		}
	}

	const onChangeSearchInput = e => {
		setSearchValue(e.target.value)
	}

	return (
		<div className='wrapper'>
			{cartOpened && (
				<Cart
					items={cartItems}
					onRemove={onRemoveItem}
					onClose={() => setCartOpened(false)}
				/>
			)}

			<Header onClickCart={() => setCartOpened(true)} />

			<div className='px-14 py-11'>
				<div className='mb-10 flex justify-between items-center'>
					<h1 className='text-4xl font-bold'>
						{searchValue
							? `Поиск по запросу: "${searchValue}"`
							: 'Все кроссовки'}
					</h1>
					<div className='searchBlock '>
						<svg
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z'
								stroke='#E4E4E4'
								strokeWidth='2'
								strokeLinecap='round'
							/>
						</svg>
						{searchValue && (
							<div
								onClick={() => setSearchValue('')}
								className='searchCross'
							></div>
						)}
						<input
							type='text'
							placeholder='Поиск'
							className='searchInput'
							value={searchValue}
							onChange={onChangeSearchInput}
						/>
					</div>
				</div>

				<div className='flex flex-wrap gap-10'>
					{items
						.filter(item =>
							item.title.toLowerCase().includes(searchValue.toLowerCase())
						)
						.map((item, index) => (
							<Card
								key={index}
								title={item.title}
								price={item.price}
								imageURL={item.imageURL}
								favorite={item.isFavorite}
								onFavorite={obj => onAddToFavorite(obj)}
								add={!item.isAdded}
								onPlus={obj => onAddToCart(obj)}
							/>
						))}
				</div>
			</div>
		</div>
	)
}

export default App
