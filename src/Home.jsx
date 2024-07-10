import Bar from './components/bar'
import Hero from './components/hero'
import Instructions from './components/instructions'
import Extras from './components/extras'
import Favourites from './components/favourites'
import Procedure from './components/starsprocedure'
import Partners from './components/partners'
import Question from './components/question'
import Information from './components/information'
function Home() {
    return (
        <>
        <Bar />
      <Hero />
      <Instructions />
      <Favourites />
      <Extras />
      <Procedure />
      <Partners />
      <Question />
      <Information />
        </>
    )
}
export default Home;