import axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { BASE_URL } from './configURL';
import DanhSachMonAn from './DanhSachMonAn/DanhSachMonAn';
import FormMonAn from './FormMonAn/FormMonAn';
import { capNhatDanhSachMonAnAction } from './redux/action/monAn.action';
import { monAnService } from './service/monAn.service';


class DemoAxios extends Component {
  componentDidMount() {
    monAnService.layDanhSach().then((res) => {
      console.log(res);


      // ???? send data to state in Redux
      this.props.capNhatDanhSachMonAn(res.data);
    })
      .catch((err) => {
        console.log(err);
      });
  }


  render() {


    return (
      <div>
        <FormMonAn />

        <DanhSachMonAn />
      </div>
    )
  }
}

let mapDispatchToProps = (dispatch) => {


  return {
    capNhatDanhSachMonAn: (danhSach) => {
      dispatch(capNhatDanhSachMonAnAction(danhSach));
    }
  }
}

export default connect(null, mapDispatchToProps)(DemoAxios)
