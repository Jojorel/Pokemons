import axios from "axios"
import { useEffect, useState } from "react"

export function Lista2(props){
    
    const [name, setName] = useState('')
    const [pokemons, setPokemons] = useState([])

    useEffect(()=> {
        console.log('Chegou aqui')
        getAllPokemons()
        
    },[])

    useEffect(()=>{
        console.log('Chegou aqui de novo o ' + name)
    }, [name])

    let baseDeDados = [] 



    async function  getAllPokemons(){
        const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon')
        
        data.results.forEach(async (result)=>{

            const img = await getDetails(result.url)
            console.log(img)
            pokemons.push(
                {name:result.name, image:img}

            )
            setPokemons([...pokemons])
           
        })
         
    }
    getAllPokemons()


    


    async function getDetails(url){

        const {data} = await axios.get(url)
        baseDeDados.push(data)
        console.log(baseDeDados)
        console.log(baseDeDados[0])

     
             
        return data.sprites.front_default
      
  

    }

    function procurandoPokemons(){
    const searchPokemon = document.forms['pokemonSearchBar'].querySelector('input')
            searchPokemon.addEventListener('keyup',e=>{
            const pokemonProcurado = e.target.value
            const pokemonFiltrado = baseDeDados.filter(pokemon=>{
                return (
                    pokemon.name.includes(pokemonProcurado)
                    
                )
           
            })
            pokemonFiltrado.forEach(pokemon=>{
                return (
                    <li key={Math.random()}>{pokemon.name}
                    <img src={pokemon.image} alt=''/>'
                    </li>
                )
            })
        })
    
    }
    

    function testeEvento(event){
        // console.log(event.target.value)
        setName(event.target.name)
        
    }
    testeEvento()
    
    return (
        <>
            <ul>
                {pokemons.map(pokemon=>{
                    return (
                        <li key={Math.random()}>{pokemon.name}
                        <img src={pokemon.image} alt=''/>'
                        </li>
                    )
                })}
            </ul>
            
            <p/>
            
            <form id='pokemonSearchBar'>
             Nome: <input type='text' onChange={procurandoPokemons} />
            </form>
            {name}
        </>
    )
}