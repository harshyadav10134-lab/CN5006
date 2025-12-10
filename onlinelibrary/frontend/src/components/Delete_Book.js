import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {useParams } from "react-router-dom";
//import { Link } from 'react-router-dom';
import DisplayData from './DisplayData';
export default function DeleteBook(props) 
 {
    const [state, setState] = useState([]);
    let params = useParams();
          useEffect(()=>{
        console.log("useeff delete"+params.id)
        axios.post("https://upgraded-space-succotash-jjprw6gqgx6qfqgpr-5000.app.github.dev/deleteBook/"+params.id)
        .then(res => {
            axios.get("https://upgraded-space-succotash-jjprw6gqgx6qfqgpr-5000.app.github.dev/allbooks")
        .then(res => {
                
                setState(res.data)
                console.log("data set in the state and state length"+state.length)
            })
        .catch(err => {
              console.log("error has occured")
            })
                      }) 
        .catch(err => {
          console.log("error has occured")
        })
    },[params.id])
        return (
        <div>
            <DisplayData Books={state}/>
        </div>
    )
    }

