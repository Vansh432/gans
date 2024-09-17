import {Navbar,Footer,Header,Shop,Feature} from './components/Main'

export default function App(){

  return <>
  <div>
    <Navbar/>
    <Header/>
    <div className='pt-[50px] px-[200px]'>
    <Shop/>
    <Feature/>
    </div>
  <Footer/>
  </div>
  </>
}