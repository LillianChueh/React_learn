import React from 'react';

class ImageCard extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            spans: 0,
        }
        this.imageRef = React.createRef();
    };

    componentDidMount() {
        // 會有未load完全，而抓不到值的問題
        // console.log(this.imageRef.current.clientHeight);

        // 需增加addEventListener，待load完後執行setSpans
        this.imageRef.current.addEventListener('load',this.setSpans);
    }    
    setSpans = () => {
        // console.log(this.imageRef.current.clientHeight);
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 150 + 1);

        this.setState({ spans }) ;

    }

    render() {
        const {description, urls} = this.props.image;

        return(
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard;