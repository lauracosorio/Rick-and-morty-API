import React from "react";
import axios from "axios";

//Funcionamiento de http

//Como queremos trabajar con una biblioteca externa hay  que instalar las dependencias

export default class Character extends React.Component {
  //Propiedades externas que llegan al componente
  //Los constructores son lo mejor para inicializar el estado
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      characters: [], //undefined
      error: null
    };
  }

  //Metodo auxiliar que me ayude a generar la captura los datos
  _fetchData = () => {
    this.setState({
      loading: true,
      error: null
    });

    axios.get("https://rickandmortyapi.com/api/character/").then(res => {
      //console.log(res.data.results);
      const characters = res.data.results;
      this.setState({
        loading: false,
        characters
      });
    })
.catch(error=> {
  this.state({
loading:false,
error
  })
})
  }

  componentDidMount() {
    this._fetchData()
  }



  render() {
    if(this.state.loading === true && this.state.characters === undefined) {
      return <h1> Cargando... </h1>
      }

    console.log(this.state.characters[0]);

   return this.state.characters.map((character) => {
    return (
      <div key = {`card-${character.name}-${character.id}`}>
        <h1>Personajes Rick and Morty</h1>
        <img src={character.image} alt={character.name} />
        <h3>Nombre:{character.name}  </h3>
        <h3>Estado: {character.status} </h3>
        <h4>Genero: {character.gender} </h4>
        <h4>Origen: {character.origin.name} </h4>
      </div>
    );
   })
  }
}
