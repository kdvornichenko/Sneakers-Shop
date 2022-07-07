import Card from './components/Card'
import Cart from './components/Cart'
import Header from './components/Header'
import Products from './components/Products'

function App() {
	return (
		<div className='max-w-[1080px] my-[50px] mx-auto bg-white shadow-wrapper rounded-[20px]'>
			<Cart />
			<Header />
			<Products />
		</div>
	)
}

export default App
