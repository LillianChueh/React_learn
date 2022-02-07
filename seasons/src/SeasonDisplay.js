import './seasonDisplay.css'
import React from 'react';

const seasonConfig = {
    summer:{
        text:'hot summer',
        iconName:'sun',
    },
    winter:{
        text:'cold day',
        iconName:'snowflake',
    }
};

const getSeason =(lat, month)=>{
    if(month > 2 && month < 9){
       return (lat > 0 ) ? 'summer' : 'winter';
    }else{
        return (lat < 0 ) ? 'summer' : 'winter';
    }
}

const SeasonDisplay = (props)=> {
    const season = getSeason(props.lat , new Date().getMonth());
    const {text, iconName } = seasonConfig[season]

    return (
        <div className={season}>
            <i className={`${iconName} icon massive iconLeft`} />
            <h1>{text}</h1>
            <i className={`${iconName} icon massive iconRight`} />
        </div>
    );
};

export default SeasonDisplay;