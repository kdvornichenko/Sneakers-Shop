import Card from './Card'

const arr = [
	{
		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: 12 + ' ' + 990,
		imageURL: '/img/sneakers/Nike-Blazer-Mid-Suede-Green.png',
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		price: 12 + ' ' + 999,
		imageURL: '/img/sneakers/Nike-Air-Max-270.png',
	},
	{
		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: 8 + ' ' + 499,
		imageURL: '/img/sneakers/Nike-Blazer-Mid-Suede-White.png',
	},
	{
		title: 'Кроссовки Puma X Aka Boku Future Rider',
		price: 8 + ' ' + 999,
		imageURL: '/img/sneakers/Puma-X-Aka-Boku-Future-Rider.png',
	},
]

function Products() {
	return (
		<div className='px-14 py-11'>
			<div className='mb-10 flex justify-between items-center'>
				<h1 className='text-4xl font-bold'>Все кроссовки</h1>
				<div className='search-block flex items-center gap-3 pl-3 border border-[#F3F3F3] rounded-xl'>
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
							stroke-width='2'
							stroke-linecap='round'
						/>
					</svg>
					<input
						type='text'
						placeholder='Поиск'
						className='w-52 text-base outline-grey py-2 outline-0'
					/>
				</div>
			</div>

			<div className='flex flex-wrap gap-10'>
				{arr.map(obj => (
					<Card
						title={obj.title}
						price={obj.price}
						imageURL={obj.imageURL}
						onClickFavorite={() => {
							console.log(obj)
						}}
						onClickPlus={() => {
							console.log(obj)
						}}
					/>
				))}
			</div>
		</div>
	)
}

export default Products
