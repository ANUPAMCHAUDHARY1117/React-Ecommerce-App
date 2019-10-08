import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component{
    constructor(){
        super();
        this.state = {collections : SHOP_DATA};
    }
    render(){
        console.log(this.state);
        const {collections} = this.state;
        return(
            <div className="shop-page">
                {collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))}
            </div>)
    }
}

export default ShopPage;