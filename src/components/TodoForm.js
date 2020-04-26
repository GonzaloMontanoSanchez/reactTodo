import React, { Component } from "react"

class TodoForm extends Component{
    constructor(){
    super();
    this.state={
        "title": "",
        "responsible":"",
        "description":"",
        "prio":"low"
        };
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleInput(e){
        const {value,name} = e.target;
        this.setState({
            [name] : value
        })
        console.log(this.state)
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state);
    }

    render(){
        return(
            <div className='card'>
                <form className='card-body' onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <input type='text' name='title' onChange={this.handleInput} className='form-control' placeholder='Title'>
                        </input>
                    </div>
                    <div className='form-group'>
                        <input type='text' name='responsible'onChange={this.handleInput} className='form-control' placeholder='Responsible'>
                        </input>
                    </div>
                    <div className='form-group'>
                        <input type='text' name='description'onChange={this.handleInput} className='form-control' placeholder='Description'>
                        </input>
                    </div>
                    <div className='form-group'>
                        <select type='text' name='prio'onChange={this.handleInput} className='form-control' placeholder=''>
                            <option>low</option>
                            <option>medium</option>
                            <option>high</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <button className='btn btn-primary' type='submit'>Save</button>
                    </div>
                </form>
            </div>
        );
    }

}

export default TodoForm