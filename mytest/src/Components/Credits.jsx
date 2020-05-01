import React, { useState, useEffect } from 'react';
import { getData } from './../services/apiservice';
export const Credits = () => {
    const [charactersList, setList] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getData('http://api.tvmaze.com/people/1/castcredits');
            let charlist = [];
            for (let index = 0; index < data.length; index++) {
                const names = await getData(data[index]._links.character.href);
                charlist.push(names.name);
            }
            setList(charlist);
        };
        fetchData();
    }, []);

    return (
        <>
            <ul>
                {charactersList.map((x, index) =>
                    <li key={index} style={{ listStyle: 'none' }}>
                        {x}
                    </li>)}
            </ul>
        </>
    );
}