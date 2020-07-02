import React from "react";

class ImageSlide extends React.Component {
    constructor(props) {
        super(props)
        const { slideImage } = props;
        this.state = {
            image: {
                index: 0,
                src: slideImage[0].src,
                alt: slideImage[0].alt,
            }
        };
        this.changeImage = this.changeImage.bind(this)
    }
    changeImage() {
        setTimeout(() => {
            const { slideImage } = this.props;
            const { image} = this.state;
            const imgArrayLenght = slideImage.length -1;
            let element = image.index;
            element=  element>= imgArrayLenght ? 0: element+1;
            console.log(element)
            this.setState({
                image: {
                    index: element,
                    src: slideImage[element].src,
                    alt: slideImage[element].alt,
                }
            })   }, 3000) 
            
    }
    render() {

        const { image } = this.state;
        return (
            <React.Fragment>
                <img id="wallpaper" src={image.src} alt={image.alt}
                    // onLoad={setTimeout(() => this.changeImage(), 3000)} />
                    onLoad={()=>this.changeImage()} />

            </React.Fragment>
        )
    }
}

export default ImageSlide