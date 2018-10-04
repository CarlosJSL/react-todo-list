import React from 'react'
import HeaderComponent from './header/header'
import ToDoListComponent from './toDoList/toDoList'

export default (props) =>(
    <div>
        <HeaderComponent></HeaderComponent>
        <ToDoListComponent router = {props}></ToDoListComponent>
    </div>
)