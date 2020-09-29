import React, { Component } from 'react';

class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            userInput:'',
            items:[]
        }
    }


    onChange(event){ 
        console.log(event.target.value);
        this.setState({
            userInput: event.target.value
        });
    }

    addTodo(event){
        event.preventDefault();
        this.setState({
            userInput:'',
            items:[...this.state.items, this.state.userInput]
        });
    }


    deleteTodos(event){
        event.preventDefault();
        //on récupére le tableau des items dans un nouveau tableau 
        const array = this.state.items;
        //on récupère l'index de l'item que l'on veux supprimmer
        const index = array.indexOf(event.target.value);
        //on supprime l'item du nouveau tableau
        array.splice(index, 1);
        //on remplace le tableau d'items sauvegarder dans les states
        this.setState({
            items:array
        });
    }

    renderTodos(){
        return this.state.items.map((item)=>{
            return (
                <div className="list-group-item" key={item}> 
                    {item} | <button onClick={this.deleteTodos.bind(this)} >X</button>
                </div>
            );
        });
    }


    render(){
        return(
            <div>
                <h1 align="center">Ma Todo List</h1>
                <form className="form-row ">
                    <input 
                        value={this.state.userInput}
                        type="text" 
                        placeholder="Renseigner un item"
                        onChange={this.onChange.bind(this)}
                        className="form-control mb-2"
                    />
                    <button 
                        onClick={this.addTodo.bind(this)}
                        className="btn btn-primary"
                    >
                        Ajouter
                    </button>
                </form>
                <div>
                    {this.renderTodos()}
                </div>
            </div>
        )
    }
}

export default TodoList;