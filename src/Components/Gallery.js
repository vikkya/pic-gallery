import React, {Component} from 'react';

class Gallery extends Component {
    constructor(props){
        super(props);
        this.state = {
            images: []
        }
    }
    componentDidMount(){
        fetch(`https://pixabay.com/api/?key=10045062-5741ce43aaddc6072cba64d70&q=${this.props.query}&image_type=photo`)
            .then(res => res.json()).then(data => console.log(data))
    }
    render(){
        const {images} = this.state;
        return(
            <div className="container-fluid">
            <div className="row">     
                {images.map((image, i) => {
                    return (
                        <div className="col-md-3" key={i}>
                        <div className="card" style={{width: "18rem"}} >
                            <img className="card-img-top" src={image.largeImageURL} alt={image.tags} />
                            <div className="card-body">
                            <p className="card-text">
                                <li>{i+1}</li>
                                <li>Views:{image.views}</li>
                                <li>Downloads:{image.downloads}</li>
                                <li>Favorites:{image.favorites}</li>
                                <li>Likes:{image.likes}</li>
                            </p>
                            </div>
                        </div>
                        </div>
                    )
                })}
            </div>
            </div>
        )
    }
}

export default Gallery;