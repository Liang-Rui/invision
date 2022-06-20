import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='row'>
                <div className='col-12'>
                    <div className='image-card-container'>
                        <img className='image-card-image' src={this.props.image} alt="card-image" />
                    </div>
                    <p className='title-5 fw-bold'>{this.props.title}</p>
                    <p className='p6 text-secondary'>{this.props.content}</p>
                    <p className='title-6 fw-bold image-card-cta d-inline-block' onClick={this.props.redirect}>READ MORE</p>
                </div>
            </div>
        );
    }
}

export default ImageCard;