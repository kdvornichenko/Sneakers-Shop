import React from 'react'
import Cart from './components/Cart'
import Header from './components/Header'
import Products from './components/Products'

function App() {
	const [cartOpened, setCartOpened] = React.useState(false)

	return (
		<div className='max-w-[1080px] my-[50px] mx-auto bg-white shadow-wrapper rounded-[20px]'>
			{cartOpened && <Cart onClose={() => setCartOpened(false)} />}
			<Header onClickCart={() => setCartOpened(true)} />
			<Products />
		</div>
	)
}

export default App
