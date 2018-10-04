import React, {Component} from 'react'

export default class ToDoList extends Component {

    constructor(props){
        super(props)
        if(!window.localStorage.getItem('user')) this.props.router.history.push('/login')
        this.state = {
            dataList : this.getToDoList() || []
        }
    }

    getToDoList(){
        const list = [
            {
               
                activity:'Go to the shopping center',
                date: 'Tomorrow'                
            },
            {
               
                activity:'Play soccer',
                date: 'Next week'
            },
            {
                
                activity:'Read a book',
                date: 'Next Year'
            }
        ]
        return list
    }

    remove(element) {
        const newList = this.state.dataList.reduce((acc,obj) =>{
            if(element !== obj) acc.push(obj)
            return acc
        },[])

        this.setState({...this.state, dataList:newList})
    }

    render(){
        return(
            <div className="col-md-6 offset-md-3">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            
                            <th scope="col">Activitys</th>
                            <th scope="col">Date</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                            this.state.dataList.map( (element,index) => {
                                return (
                                    <tr key={index}>
                                        <td scope="col">{element.activity}</td>
                                        <td scope="col">{element.date}</td>
                                        <td scope="col">
                                            <button className="btn btn-danger" onClick={()=> this.remove(element)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </table>
            </div>
        )
    }
}