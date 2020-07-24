import React from 'react';
import { Link } from 'react-router-dom';


export default function Home(props){



    return (
        <div>
            <header>
                <h1>Best Pizza in Town</h1>
                <Link to='/pizza'>Order</Link>
            </header>
            <section>
                <p>We off a vast selection of Pizza Options</p>
            
            </section>
        </div>
    )
}