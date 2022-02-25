import React,{ useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({language, text}) => {
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timeId = setTimeout(() => {
            setDebouncedText(text);
        },1000);

        return ()=>{
            clearTimeout(timeId);
        };
    }, [text]);

    useEffect(() => {
        const doTranslation = async () =>{
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2',
            // 下面空值表示:We don't want to send information in the body
            {},
            {
            params:{
                q: debouncedText,
                target: language.value,
                key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
            },   
            });

            setTranslated(data.data.translations[0].translatedText);
        }

        doTranslation();
    }, [language, debouncedText]);

    return(
        <div className='ui header'>
            <h1>{translated}</h1>
        </div>
    );
};

export default Convert;