function Cart({ onClose, onRemove, items = [] }) {
	return (
		<div className='absolute w-full h-full left-0 top-0 bg-black bg-opacity-50 z-10'>
			<div className='absolute flex flex-col w-96 h-full p-8 right-0 bg-white shadow-cart'>
				<div className='mb-4 flex justify-between'>
					<h2 className='text-2xl font-bold'>Корзина</h2>
					<button className='cart-close-btn' onClick={onClose}>
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
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M8.71436 1L14.7144 7L8.71436 13'
								stroke='#9D9D9D'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</button>
				</div>

				{items.length > 0 ? (
					<div className='flex flex-col justify-between h-full'>
						<div className='flex-1 overflow-auto'>
							{items.map((obj, index) => (
								<div
									key={index}
									className='flex justify-between items-center py-8 px-5 mt-4 border rounded-[20px] last:mb-4'
								>
									<img
										src={obj.imageURL}
										alt='Nike Blazer Mid Suede Green'
										className='max-w-[70px]'
									/>
									<div className='max-w-[150px]'>
										<h5 className='cardSneakersName'>{obj.title}</h5>
										<div className='mt-1'>
											<strong>{obj.price} руб.</strong>
										</div>
									</div>
									<button
										className='cardDeleteBtn'
										onClick={() => {
											onRemove(obj.id)
										}}
									></button>
								</div>
							))}
						</div>

						<div className='mt-6'>
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
							<button className='btnGreenOrder'>
								Оформить заказ
								<img
									src='/img/cart-btn-arrow.svg'
									alt='Arrow'
									className='absolute right-8 transition-all'
								/>
							</button>
						</div>
					</div>
				) : (
					<div className='text-center flex flex-col flex-1 justify-center'>
						<div>
							<img
								src='/img/cart-empty.png'
								alt='Cart Empty'
								className='mx-auto'
							/>
							<h3 className='mt-5 font-semibold text-[22px]'>Корзина пуста</h3>
							<p className='mt-2 opacity-40'>
								Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
							</p>
							<button className='btnGreenBack' onClick={onClose}>
								<img
									src='/img/cart-btn-arrow.svg'
									alt='Arrow'
									className='absolute left-8 transition-all rotate-180'
								/>
								Вернуться назад
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Cart
