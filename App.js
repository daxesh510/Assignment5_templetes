import React from 'react';
import Card from './Card'
import Sdata from './Sdata'




const App = () => {
    return (
        <>
            <h1 className='heading_style'> List of top 5 Netflix Series</h1>
            <Card
                key={Sdata[1].id}
                imgsrc={Sdata[1].imgsrc}
                cardInfo={Sdata[1].cardInfo}
                link={Sdata[1].link}
                title={Sdata[1].title}
            />
            <Card
                key={Sdata[0].id}
                imgsrc={Sdata[0].imgsrc}
                cardInfo={Sdata[0].cardInfo}
                link={Sdata[0].link}
                title={Sdata[0].title}
            />,
            <Card
                key={Sdata[2].id}
                imgsrc={Sdata[2].imgsrc}
                cardInfo={Sdata[2].cardInfo}
                link={Sdata[2].link}
                title={Sdata[2].title}
            />,
            <Card
                key={Sdata[4].id}
                imgsrc={Sdata[4].imgsrc}
                cardInfo={Sdata[4].cardInfo}
                link={Sdata[4].link}
                title={Sdata[4].title}
            />
        </>
    );
}

export default App;