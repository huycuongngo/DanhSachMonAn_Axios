import React, { Component } from 'react'
import { connect } from 'react-redux'
import ItemMonAn from './ItemMonAn';

class DanhSachMonAn extends Component {


  render() {

    return (
      <div className='container'>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>IMG</th>
              <th>Description</th>
              <th>Thao tac</th>
            </tr>
          </thead>

          <tbody>
            {this.props.danhSach.map((item, index) => {
              return <ItemMonAn item={item} key={index}/>
            })}
          </tbody>
        </table>
      </div>
    )
  }
}


let mapStateToProps = (state) => {

  return {
    danhSach: state.danhSachMonAn,
  }
}


export default connect(mapStateToProps, null)(DanhSachMonAn);





