import { message } from 'antd';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { capNhatDanhSachMonAnAction } from '../redux/action/monAn.action';
import { CHINH_SUA_MON_AN } from '../redux/constant/monAn.constant';
import { monAnService } from '../service/monAn.service';

class ItemMonAn extends Component {

  handleXoaMonAn = (id) => {
    monAnService
      .xoaMonAn(id)
      .then((res) => {
        console.log(res);

        return monAnService.layDanhSach()
      })
      .then((res) => {
        this.props.capNhatDanhSachMonAn(res.data);

        message.success("Xoa mon an thanh cong");
      })
      .catch((err) => {
        console.log(err);

        message.error("Xoa mon an that bai");
      });
  }

  hanldeSuaMonAn = (id) => {
    monAnService
      .layThongTinMonAn(id)
      .then((res) => {
        console.log(res);
        this.props.capNhatFoodEdit(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }


  render() {
    let { id, name, price, img, description } = this.props.item;

    return (

      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{price}</td>
        <td>
          <img style={{
            width: "80px",
            height: "80px",
            objectFit: "contain",

          }} src={img} alt="" />
        </td>
        <td>{description}</td>
        <td className='d-flex'>
          <button className='btn btn-success mx-2' onClick={() => {
            this.hanldeSuaMonAn(id);
          }}>Sua</button>
          <button className='btn btn-danger' onClick={() => { 
            this.handleXoaMonAn(id);
           }}>Xoa</button>
        </td>
      </tr>
    )
  }
}

let mapDispatchToProps = (dispatch) => {

  return {
    capNhatDanhSachMonAn: (danhSach) => {
      dispatch(capNhatDanhSachMonAnAction(danhSach))
    },

    capNhatFoodEdit: (monAn) => {
      dispatch({
        type: CHINH_SUA_MON_AN,
        payload: monAn,
      })
    },


  }
}

export default connect(null, mapDispatchToProps)(ItemMonAn);





