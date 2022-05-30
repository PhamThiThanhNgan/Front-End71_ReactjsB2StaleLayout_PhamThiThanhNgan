import React, { Component } from 'react';
import './layoutState.css';
import faceModel from './assets/img/glassesImage/model.jpg';
import v1 from './assets/img/glassesImage/v1.png';
import v2 from './assets/img/glassesImage/v2.png';
import v3 from './assets/img/glassesImage/v3.png';
import v4 from './assets/img/glassesImage/v4.png';
import v5 from './assets/img/glassesImage/v5.png';
import v6 from './assets/img/glassesImage/v6.png';
import v7 from './assets/img/glassesImage/v7.png';
import v8 from './assets/img/glassesImage/v8.png';
import v9 from './assets/img/glassesImage/v9.png';
const data = [
    {
        id: 1,
        price: 30,
        name: "GUCCI G8850U",
        url: v1,
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 2,
        price: 50,
        name: "GUCCI G8759H",
        url: v2,
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 3,
        price: 30,
        name: "DIOR D6700HQ",
        url: v3,
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 4,
        price: 70,
        name: "DIOR D6005U",
        url: v4,
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 5,
        price: 40,
        name: "PRADA P8750",
        url: v5,
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 6,
        price: 60,
        name: "PRADA P9700",
        url: v6,
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 7,
        price: 80,
        name: "FENDI F8750",
        url: v7,
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 8,
        price: 100,
        name: "FENDI F8500",
        url: v8,
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 9,
        price: 60,
        name: "FENDI F4300",
        url: v9,
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
];
class LayoutState extends Component {
  
    state = {
        id: 0,
        price: 0,
        name: "",
        url: "",
        desc: ""
    }
    selectImg =(img) =>{
        this.setState({
            id: img.id,
            price: img.price,
            name: img.name,
            url: img.url,
            desc: img.desc
        })
    };
    render() {
        return (
            <div className='container'>
                <div className='header'>
                    TRY GLASSES APP OMLINE

                </div>
                <div>
                <div className='model'>
                    <img src={faceModel} />
                    <div className='colum'>
                    <img src={v1} />
                    <div className='row'>
                        <h1>
                        GUCCI G8850U
                        </h1>
                        <p>
                        Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.
                        </p>
                    </div>
                    </div>
                </div>
                <div className='model1'>
                    <img src={faceModel} />
                    <div key={this.state.id} className='colum1'>
                    <img src={this.state.url} />
                    <div className='row1'>
                        <h1>
                        {this.state.name}
                        </h1>
                        <p>
                        {this.state.desc}
                        </p>
                    </div>
                    </div>
                </div>
                </div>
              
                <div className='section'>
                    <img src={v1} onClick={() => {this.selectImg(data[0])}}/>
                    <img src={v2} onClick={() => {this.selectImg(data[1])}}/>
                    <img src={v3} onClick={() => {this.selectImg(data[2])}}/>
                    <img src={v4} onClick={() => {this.selectImg(data[3])}}/>
                    <img src={v5} onClick={() => {this.selectImg(data[4])}}/>
                    <img src={v6} onClick={() => {this.selectImg(data[5])}}/>
                    <img src={v7} onClick={() => {this.selectImg(data[6])}}/>
                    <img src={v8} onClick={() => {this.selectImg(data[7])}}/>
                    <img src={v9} onClick={() => {this.selectImg(data[8])}}/>
                </div>
            </div>
        );
    }
}

export default LayoutState;