import {Navbar,Footer,Header} from './components/Main'
import ProductList from './components/ProductCard/ProductList.jsx'

export default function App(){

  return <>
  <div>
    <Navbar/>
    <Header/>
    <ProductList />
  
  <Footer/>
  </div>
  </>
}