import React from 'react';

class SearchBar extends React.Component {
    state = { term:''};

    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    };
    
    render(){
        return (
        <div className='ui segment'>
            <form className='ui form' onSubmit={this.onFormSubmit}>
                <div className='field'> 
                    <label>Image Search</label>
                    {/* <input type= "text" onChange={this.onInputChange}/> */}
                    {/* 不要每次都直接render，而是有變動才呼叫=>此處的prop-onChange不加上() */}

                    {/* <input type= "text" onChange={(event) => console.log(event.target.value)}/> */}
                    {/* 或可使用arrow func 不用預先設定func */}

                    <input type= "text" value={this.state.term} 
                    onChange={e => this.setState({ term: e.target.value.toUpperCase()})}/>
                    {/* toUpperCase 的意思是将所有的英文字符转换为大写字母 */}

                </div>
            </form>
        </div>
        );
    }
};

export default SearchBar;