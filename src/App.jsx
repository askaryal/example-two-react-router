import { Route, Routes, Link, useParams, Outlet } from 'react-router-dom'
import './App.css'
import NavaLink from './NavaLink'


const Home = () =>{
  return <h1>Home</h1>
}

const SearchPage = () =>{
  const tacos = [
    'cochinita',
    'chili',
    'carnita',
    'quesadilla'
  ]

  return (
    <div>
        <h1>Search Page</h1>
        <ul>
          {
            tacos.map((taco) => (
              <li key={taco}><Link to={`/tacos/${taco}`}>{ taco }</Link></li>
            ))
          }
          
        </ul>
    </div>
  )
}
const Tacos = ()  => {
   const { name } = useParams()

   return (
   <>
   
    <h1>Tacos - { name }</h1>
      <Link to="details">Ir a los detalles</Link>
      <Outlet/>
   </>
   )
}
const TacoIndex = () =>{
  return (<h1>Index Route de tacos</h1>)
}

const TacosDetails = () => {
  const { name } = useParams()

  return <h1>TacosDetail - { name }</h1>
}


function App() {

  return (
    <div className='App'>
      <header>
         <h1>Hello Word</h1>
         <nav>
          <ul>
            <li>
              <NavaLink to='/'>
                Home</NavaLink>

            </li>
            <li><NavaLink to='/search-page'>search-page</NavaLink>
            </li>
          </ul>
         </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search-page" element={<SearchPage/>}/>
        <Route path="/tortas/:nombre" element={<Tacos/>}/>
        <Route path="/tacos/:nombre" element={<Tacos/>}/>
          <Route index element={<TacoIndex/>} />
          <Route path='details' element={<TacosDetails/>}/>
        <Route/>
        <Route path='*' element={<h1>Not Found</h1>}/>
      </Routes>     
    </div>
  )
}

export default App
