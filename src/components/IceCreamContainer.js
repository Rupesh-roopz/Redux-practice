import React from 'react';
import { buyIceCream } from '../redux/iceCream/iceCreamAction';
import { connect } from 'react-redux';

function IceCreamContainer(props) {
    return (
        <div>
            <h1>number of icecreams - {props.numOfIcecreams}</h1>
            <button onClick = {props.buyIceCream}>buy Icecream</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        numOfIcecreams : state.iceCream.numOfIceCreams
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream : () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
