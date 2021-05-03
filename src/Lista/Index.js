import { useEffect, useState } from "react"

export function Lista(props) {

    const Poke = 'Pokemons'


    const [name, setName] = useState('')

    useEffect(() => {
        console.log('Chegou aqui')
    }, [])

    useEffect(() => {
        console.log('Chegou aqui de novo o ' + name)
    }, [name])

    function testeEvento(nameEvent) {
        // console.log(nameEvent)
        setName(nameEvent)
    }



    function botao() {
        return alert('clicou botao')
    }



    var obj = {
        nome: 'Jorel',
        age: '35'

    }
    const { nome, age } = obj

    return (
        <>

            <div>

                <ul>

                    <li>{nome}</li>
                    <li> {age}</li>
                    <li>{Poke}</li>

                    <li>Pikachu</li>
                    <li>Charmander</li>

                    {props.Lista.map(p => {
                        return (

                            <li>{p}</li>
                        )
                    })}




                </ul>
            </div>

            <p><button onClick={() => botao()}>clicar</button></p>

        
        </>



    )
}