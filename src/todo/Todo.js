import React, { useState } from 'react'
import { array } from '../array/Array'
import './Todo.css'
export default function Todo() {
    // All States Of Todo
    const [todo, setTodo] = useState(array)
    const [name, setName] = useState('')
    const [disc, setDiscription] = useState('')
    const [updateindex, setUpdateindex] = useState()
    const [flag, setFlag] = useState(false)

    // Funation For Add Button
    const additem = () => {
        if (name === '' || disc === '') {
            alert("Enter your right name and discription...");
        } else {
            const data = {
                name: name,
                disc: disc
            }
            setTodo([...todo, data])
            setName("")
            setDiscription('')
        }

    }

    // Function For Delete
    const dellitem = (id) => {
        const newitm = todo.filter((item, ind) => {
            if (ind !== id)
                return item
        })
        setTodo([...newitm])


    }

    // Function for update

    const update = (todo, id) => {
        console.log("Check for Update ", todo.name + todo.disc);
        setName(todo.name)
        setDiscription(todo.disc)
        setUpdateindex(id)


        setFlag(true)
    }
    
    const updateHandler = ()=>{
        if( name !== "" && disc !== ""){

        
        const data ={
            name: name,
            disc: disc
        }
        let updatetodo = todo.map((item , index)=>{
            if(updateindex === index)
            {
            return data
            }
            else
            {
            return item
            }

        })
        
        setTodo([...updatetodo ])
        setName("")
        setDiscription('')
        setFlag(false)
        updateindex()


    }

    }








    return (
        <div className='body'>
            <div className='mainbox' >
                <h1 id="heading"> My Todos</h1>
                <div className='container box1'>
                    <div>
                        <label for="Name" style={{ color: "white" }}>Name :</label> <br />
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type={'text'} maxLength={'18'} id={'Name'} className="input"
                        /> <br />
                        <label for="disc" style={{ color: "white" }}>Discription :</label> <br />
                        <input
                            value={disc}
                            onChange={(e) => setDiscription(e.target.value)}
                            type={'text'} maxLength={'30'} id={'disc'} className="input"
                        /> <br />

                    </div>
                    <div>
                        {flag ?
                            <button

                                onClick={() => updateHandler()}
                                className='btnadd'
                            >
                                Update Todo
                            </button>
                            :
                            <button
                                onClick={() => additem()}
                                className='btnadd'
                            >
                                Add Todo
                            </button>
                        }
                    </div>
                </div>
                {
                    todo.map((item, ind) => {
                        return (

                            <div className='container box2'>
                                <div>
                                    <h1 className='heading'>{item.name}</h1>
                                    <p className='disc' style={{ color: "white" }}>{item.disc}</p>

                                </div>
                                <div>
                                    <button className='btncomp' >Complete</button>
                                    <button className='btndel'
                                        onClick={() => dellitem(ind)}
                                    >
                                        Delete
                                    </button>
                                    <button className='btnupdate'
                                        onClick={() => update(item, ind)} >Update</button>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}
