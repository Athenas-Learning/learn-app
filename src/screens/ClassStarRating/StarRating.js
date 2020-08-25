import StarRating from 'react-native-star-rating';
import React, { Component } from 'react';

class GeneralStarExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            starCount: 4
        };
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

    render() {
        return (
            <StarRating
                disabled={false}
                maxStars={5}
                fullStarColor="#f2c94c"
                starSize={30}
                containerStyle={{ width: '50%', alignSelf: 'center' }}
                halfStarEnabled={true}
                animation="bounce"
                rating={this.state.starCount}
                selectedStar={(rating) => this.onStarRatingPress(rating)}
            />
        );
    }
}

export default GeneralStarExample