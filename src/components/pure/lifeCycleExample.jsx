import React, { Children, Component } from 'react'

export default class lifeCycleExample extends Component {
    constructor (props){
        super(props);
        console.log("Pongo algo para que salga el error");
    }
    componentWillMount(){
        console.log("Antes del montaje del componente");
    }
    componentDidMount(){
        console.log("justo despues del montaje, antes de pintarse");
    }

    componentWillReceiveProps(nextProps){
        console.log("Si va a recibir props");
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("Devuelve true o false");
        //Controlar si el componente debe o no actualizarse
    }

    componentWillUpdate(nextProps,nextState){
        console.log("Justo antes de actualizarse");
    }

    componentDidUpdate(prevPops,nextState){
        console.log("Justo despues de actualizarse");
    }

    componentWillUnmount(){
        
    }


  render() {
    return (
      <div>lifeCycleExample</div>
    )
  }
}
