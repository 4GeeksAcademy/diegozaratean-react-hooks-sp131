import React, { useState } from "react";

const Home = () => {
	// tengo algo mas dentrod e im fuera de lo viusal
	// useState() // retorna una arrya [variable , funcion]
	// [nombre de la variable, funcion que modifica esta varaible]
	const [count,setCount] = useState(0)

	const [usos, setUsos] = useState(0)
	//const [variable,setVariable] = useState(valor inicial)

	let contador = 1
	console.log("estoy mejorando")

	function agregar(){
		console.log("agregar")
		console.log(contador)
		contador++
		// count = 25
		// setCount(count + 1)
		// setCount(x) ====> count = x
		// count++ ====> count = count + 1
		// setCount(count++) ====> count = count++
		// setCount(count++) ====> count = count = count + 1
		setCount(count + 1)
		setUsos(usos + 1)
		// setCount(x) ====> count = ++
		console.log(contador)
	}

	function ejecutar(){
		console.log('ejecutar')
	}

	function disminuir(){
		console.log('disminuir')
		setCount(count - 1)
		setUsos(usos + 1)
	}

	
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hola Bienvenidos a React Hooks 🪝!</h1>
			<button onClick={()=>disminuir()} >Disimnuir</button>
			<p>Loki: {contador}</p>
			<p>Thor {count}</p>
			<button onClick={agregar} >Agregar</button>
			<button onClick={ejecutar()} >ejecutar</button>
			<p>utilizaste mi app {usos} veces</p>
		</div>
	);
};

export default Home;