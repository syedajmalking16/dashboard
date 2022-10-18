import { listClasses } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Home(){
    const navigate = useNavigate();
    // state: {
    //     id:1,
    //     title: 'abc',
    //     },
    //     {
    //     id:2,
    //     title: 'hdg',
    //     },
    //     {
    //     id:3,
    //     title: 'fhf',
    //     },
    //     {
    //     id:4,
    //     title: 'xy6z',
    //     },\
    const [list, setList] = useState();
    let moveData = () => {
        navigate('/contact',{
            list: [
            {
                id:1,
                title: 'abc',
            },
            {
                id:2,
                title: 'hdg',
            },
            {
                id:3,
                title: 'fhf',
            },
            {
                id:4,
                title: 'xy6z',
            },
        ]
    })}

    return (
    <>
    <div>
    <h1>Home</h1>
    <button onClick={moveData}>
        goto contact move data
    </button>
    {
        list.map((e,i) => <p key={i} onClick={moveData}>
            {e.list.title}
        </p>
    )}
    </div>
    </>
    )
}