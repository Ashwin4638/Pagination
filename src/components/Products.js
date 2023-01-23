import React from "react";
import Pager from './Pager'
import ExpenseEntryItemList from './ExpenseEntryItemList'
import Header from './Header'

 const pageCount = 5;

class Products extends React.Component {

    state = {
        isLoading: true,
        items: []
    };

    componentDidMount() {
        this.getFetchProducts();
    }

    getFetchProducts() {
        this.setState({
            loading: true
        }, () => {
            fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(result => this.setState({
                loading: false,
                items: result.products
            }))
            .catch(console.log);
        });
    }

    render() {
        const { items } = this.state;
        console.log('items', items)
        return (
            <div>
            <Header />
            <Pager
                items={items}
                pageCount={pageCount}
                render={
                pagerState => (
               <div>
                  <ExpenseEntryItemList items={pagerState.items} 
                 />
               </div>
            )
         }
      />
            </div>
        )
    }

}

export default Products;