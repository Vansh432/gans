import {Navbar,Footer,Header,Shop} from './components/Main'

export default function App(){

  return <>
  <div>
    <Navbar/>
    <Header/>
    <div className='pt-[50px] px-[200px]'>
    <Shop/>
    </div>
  <Footer/>
  </div>
  </>
}