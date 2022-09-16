import { useState } from 'react'


//Reglas de los hooks:
    //No se llaman en while, for, if, else, forEach. Debe estar en el nivel más alto. No se llaman en loops.
    // Solo se llaman en dos partes:
        //Componentes de react
        //Custom hooks
        //Cuando creamos un custom hooks siempre debe comenzar con use*


// class App extends Component {
//     state = {contador: 0}
//     incrementar = () => {
//         this.setState({
//             contador: this.state.contador + 1
//         })
//     }
//     render() {
//         return(
//             <div>
//                 contador: {this.state.contador}
//                 <button onClick={this.incrementar}>Incrementar</button>
//             </div>
//         )
//     }
//     }

const useContador = (inicial) => {
    const [contador, setContador] = useState(inicial)
    const incrementar = () => {
        setContador(contador + 1)
    }

    return [contador, incrementar]
}

const App = () => {
    const [contador, incrementar] = useContador(0)
    return (
        <div>
            Contador: {contador}
            <button onClick={incrementar}>Incrementar</button>
        </div>
    )
}

export default App