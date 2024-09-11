
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

function Home() {
    return (
        <>
            <div style={{ color: '#292929' }}>
                <h1>Teknolojik Yemekler</h1>
                <h2>Kod Acıktırır Pizza Doyurur</h2>
            </div>

            <Button
                className="w-100"
                style={{
                    backgroundColor: '#FDC913',
                    border: 'none',
                    color: '#292929',
                    fontWeight: '400',
                    width: '100%'
                }}
            >
                <Link to="/order" style={{ textDecoration: 'none', color: '#292929' }}>
                    ACIKTIM
                </Link>
            </Button>
        </>
    );
}

export default Home;
