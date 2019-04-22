import React, { Component } from 'react';

class Get extends Component {

    render() {
        return (
            <div className="col-md-6">
                <table className="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.allProducts.map(object =>
                            <tr key={object._id}>
                                <td>{object.productName}</td>
                                <td>{object.productPrice}</td>
                                <td><button className="btn btn-danger btn-xs" onClick={() => this.props.deleteProduct(object._id)}>X</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Get;