import React from 'react'
import About from './components/About'
import Hero from './components/Hero'
import Roadmap from './components/Roadmap'
import Tokenomics from './components/Tokenomics'
import Tweet from './components/Tweet'
import Footer from './components/Footer'


const App = () => {
	return (
		<>
			<Hero />
			<div className='w-full h-[44vh] bg-banner bg-cover bg-center'></div>
			<About />
			<Tweet />
			<Tokenomics />
			<Roadmap />
			<Footer />
		</>
	)
}

export default App