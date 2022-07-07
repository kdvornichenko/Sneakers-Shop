function Cart() {
	return (
		<div
			style={{ display: 'none' }}
			className='absolute w-full h-full left-0 top-0 bg-black bg-opacity-50 z-10'
		>
			<div className='absolute flex flex-col w-96 h-full p-8 right-0 bg-white shadow-cart'>
				<div className='mb-4 flex justify-between'>
					<h2 className='text-2xl font-bold'>Корзина</h2>
					<button className='cart-close-btn'>
						<svg
							width='16'
							height='14'
							viewBox='0 0 16 14'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M1 7H14.7143'
								stroke='#9D9D9D'
								stroke-width='2'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
							<path
								d='M8.71436 1L14.7144 7L8.71436 13'
								stroke='#9D9D9D'
								stroke-width='2'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
						</svg>
					</button>
				</div>

				<div className='flex-1 overflow-auto'>
					<div className='flex justify-between items-center py-8 px-5 mt-4 border rounded-[20px]'>
						<img
							src='/img/sneakers/Nike-Blazer-Mid-Suede-Green.png'
							alt='Nike Blazer Mid Suede Green'
							className='max-w-[70px]'
						/>
						<div className='max-w-[150px]'>
							<h5 className='card-sneakers-name'>
								Мужские Кроссовки Nike Blazer Mid Suede
							</h5>
							<div className='mt-1'>
								<strong>12 999 руб.</strong>
							</div>
						</div>
						<button className='card-delete-btn'></button>
					</div>
				</div>

				<div>
					<div className='flex justify-between gap-2'>
						<p>Итого: </p>
						<div className='relative -top-1 w-full border-b-2 border-dashed'></div>
						<p className='whitespace-nowrap'>
							<strong>21 498 руб. </strong>
						</p>
					</div>
					<div className='mt-5 flex justify-between gap-2'>
						<p className='whitespace-nowrap'>Налог 5%: </p>
						<div className='relative -top-1 w-full border-b-2 border-dashed'></div>
						<p className='whitespace-nowrap'>
							<strong>1074 руб. </strong>
						</p>
					</div>
					<button className='btn-green'>
						Оформить заказ
						<img
							src='/img/cart-btn-arrow.svg'
							alt='Arrow'
							className='absolute right-8 transition-all'
						/>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Cart
