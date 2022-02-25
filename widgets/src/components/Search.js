import React,{ useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm ] = useState('apple');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults]= useState([]);

    useEffect(() => {
        const timeId = setTimeout(() => {
            setDebouncedTerm(term);
        },1000);

        return () => {
            clearTimeout(timeId);
        };
    }, [term]);

    // 取代下方的term
    useEffect(() => {
        const searchThis = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php',
            {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    // srsearch: term,
                    srsearch: debouncedTerm,
                },
            });

            setResults(data.query.search);
        };
        searchThis();
    }, [debouncedTerm] );

    // 當term變動時，引發useEffect
    // useEffect( () => {
    //     const search = async () => {
    //         const { data } = await axios.get('https://en.wikipedia.org/w/api.php',
    //         {
    //             params: {
    //                 action: 'query',
    //                 list: 'search',
    //                 origin: '*',
    //                 format: 'json',
    //                 srsearch: term,
    //             },
    //         });

    //         setResults(data.query.search);
    //     };

    //     if( term && !results.length) {
    //         search();
    //     }else{
    //         const timeoutId = setTimeout(() => {
    //             if(term){
    //                 search();
    //             }
    //         },1000);

    //         return () => {
    //             clearTimeout(timeoutId);
    //         };
    //     };

    // // 等於下面這個做法
    // //  axios.get('atest')
    // //     .then( (response) => {
    // //         console.log(response.data);
    // //     });
    // }, [term, results.length]);

    const renderResults = results.map((result) => {
        return (
            <div className='item' key={result.pageid}>
                <div className='right floated content'>
                    <a 
                        className='ui button'
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                            Go
                    </a>
                </div>
                <div className='content'>
                    <div className='header'>
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML= {{__html: result.snippet}} ></span>
                    {result.snippet}
                </div>
            </div>
        )
    })

    return(
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Search Term</label>
                    <input 
                        className='input' 
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className='ui celled list'>
                {renderResults}
            </div>
        </div>
    );
}

export default Search;