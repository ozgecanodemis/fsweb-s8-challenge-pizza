import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from 'reactstrap';



function Home() {
    const history = useHistory();

    const handleButtonClick = () => {
        history.push('/order');
    };


    return (
        <>
            <div
                className='full-screen'
                style={{

                    width: '100vw',
                    backgroundImage: 'url(../assets/iteration-1-assets/home-banner.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '100vh',
                    margin: '0',
                    padding: '100px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <div className='sets' style={{
                    color: '#FAF7F2', display: 'flex', flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <h1 style={{ fontSize: '2rem', width: '50%', fontWeight: '600', }} >Teknolojik Yemekler</h1>
                    <h2 style={{ fontSize: '4rem', width: '70%', fontWeight: '300', }}>KOD ACIKTIRIR PİZZA, DOYURUR</h2>
                </div>

                <Button
                    className="w-100"

                    style={{
                        backgroundColor: '#FDC913',
                        border: 'none',
                        color: '#292929',
                        fontWeight: '400',
                        margin: ' 20px',
                        alignItems: 'center'
                    }}
                    onClick={handleButtonClick}
                >
                    ACIKTIM
                </Button>
            </div >
        </>
    );
}

export default Home;