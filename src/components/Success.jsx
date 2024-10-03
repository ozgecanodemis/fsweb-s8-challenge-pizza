
import React from 'react';

function Success() {
    return (
        <div style={{
            backgroundColor: '#CE2829',
            color: 'white',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            minWidth: '60vw'

        }}>
            <h1 style={{ marginBottom: '200px', padding: ' 0 20%', fontSize: '2rem', fontWeight: '600', }}>Teknolojik Yemekler</h1>

            <h2 style={{ padding: ' 0 20%', fontSize: '3rem', fontWeight: '300' }}>TEBRİKLER!
            </h2>
            <h2 style={{ marginBottom: '200px', padding: ' 0 10%', fontSize: '3rem', fontWeight: '300' }}>
                SİPARİŞİNİZ ALINDI!</h2>
        </div >
    );
}

export default Success;
