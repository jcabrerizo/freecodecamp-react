import React from 'react'
import './meme.css'

export default function Meme() {
    console.log('meme');
    const [meme, setMeme] = React.useState<MemeType>(
        {
            topText: "",
            bottomText: "",
            randomImage: ""
        }
    );

    const [memes, setMemes] = React.useState<MemeData[]>([]);

    React.useEffect(function () {
        console.log("Get memes")
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => {
                setMemes(data.data.memes);
                setMeme(prevMeme => ({
                    ...prevMeme,
                    randomImage: data.data.memes[0].url,
                }))
                console.log(data);
            }).catch(error => {
                console.log(`Errro: ${error}`)
            })
    }, [])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleChange');
        const { name, value } = event.target as HTMLInputElement;
        setMeme(prevMeme => (
            {
                ...prevMeme,
                [name]: value
            }
        ))

    }

    const generateMeme = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('generateMeme');
        event.preventDefault()
        const randomIndex = Math.floor(Math.random() * memes.length);
        console.log(memes[randomIndex]);
        // equivalent to 
        // setMemeUrl(function(prevUrl){return getMemeImage().url})
        setMeme(prevMeme => (
            {
                ...prevMeme,
                randomImage: memes[randomIndex].url
            }
        )
        )
        console.log(meme);
    }


    return (
        <main>
            <div className='meme--container'>
                <input type="text" className='meme--input' placeholder='Top line' name='topText' onChange={handleChange} value={meme.topText} />
                <input type="text" className='meme--input' placeholder='Bottom line' name='bottomText' onChange={handleChange} value={meme.bottomText} />
                <button className='meme--button' onClick={generateMeme}>Get your random meme 🖼️ </button>
            </div>
            <div className='meme'>
                <img className='meme--image' src={meme.randomImage} alt='meme' />
                <h2 className='meme--text top' id='topText'>{meme.topText}</h2>
                <h2 className='meme--text bottom' id='buttonText'>{meme.bottomText}</h2>
            </div>
        </main>
    )
}

type MemeData = {
    "id": string,
    "name": string,
    "url": string,
    "width": number,
    "height": number,
    "box_count": number,
}

type MemeType = {
    topText: string,
    bottomText: string,
    randomImage: string,
}