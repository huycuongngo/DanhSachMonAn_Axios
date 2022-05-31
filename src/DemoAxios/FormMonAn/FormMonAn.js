import { Button, message } from 'antd';
import axios from 'axios';
import React, { Component, createRef } from 'react'
import { connect } from 'react-redux';
import { BASE_URL } from '../configURL';
import { capNhatDanhSachMonAnAction } from '../redux/action/monAn.action';
import { monAnService } from '../service/monAn.service';
import { CHINH_SUA_MON_AN } from '../redux/constant/monAn.constant';



class FormMonAn extends Component {
  constructor(props) {
    super(props);

    this.nameRef = createRef();
    this.priceRef = createRef();
    this.formRef = createRef();
  }

  state = {
    name: "",
    price: "",
    img: "",
    description: "",
  }

  handleOnchange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    // dynamic key
    this.setState({
      [name]: value,
    })
  }

  // viet theo cach promise chaining 
  handleThemMon = () => {
    // post data len server
    monAnService.themMonAn(this.state)
      .then((res) => {
        console.log(res);

        // lay data tu server ve
        return monAnService.layDanhSach()
      })
      .then((res) => {
        console.log(res);

        // dispatch len store Redux
        this.props.capNhatDanhSachMonAn(res.data);

        // messge them thanh cong 
        message.success('Them mon an thanh cong');
        this.formRef.current.reset();
      })
      .catch((err) => {
        console.log(err);

        message.error('Them mon an that bai');
      });
  }

  handleCapNhatMonAn = () => {
    monAnService.capNhatMonAn(this.state)
      .then((res) => {
        console.log(res);

        // lay data tu server ve
        return monAnService.layDanhSach()
      })
      .then((res) => {
        console.log(res);

        // dispatch len store Redux
        this.props.capNhatDanhSachMonAn(res.data);

        // messge them thanh cong 
        message.success('Them mon an thanh cong');
        this.formRef.current.reset();
      })
      .catch((err) => {
        console.log(err);

        message.error('Them mon an that bai');
      });
  }

  // handleThemMon = () => {
  //   // post data len server
  //   monAnService.themMonAn(this.state)
  //     .then((res) => {
  //       console.log(res);

  //       // lay data tu server ve
  //       monAnService.layDanhSach()
  //         .then((res) => {
  //           console.log(res);

  //           // dispatch len store Redux
  //           this.props.capNhatDanhSachMonAn(res.data);

  //           // messge them thanh cong 
  //           message.success('This is a success message');
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });


  //     })
  //     .catch((err) => {
  //       console.log(err);

  //       message.error('This is a error message');
  //     });
  // }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("nextprops", nextProps.foodEdit);

    if (nextProps.foodEdit) {
      this.setState({
        ...nextProps.foodEdit
      })
    }
  }

  // componentDidMount() {
  //   this.nameRef.current.focus();
  // }


  render() {
    console.log(this.state);

    return (
      <div className='container py-5 text-left'>
        <form action="" ref={this.formRef}>
          <div className="form-group">
            <label htmlFor="name">Ten Mon</label>
            <input
              value={this.state.name}
              type="text" name="name" id="name" className="form-control" placeholder=""
              onChange={(event) => {
                this.handleOnchange(event);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Gia Ban</label>
            <input
              value={this.state.price}
              type="text" name="price" id="price" className="form-control" placeholder=""
              onChange={(event) => {
                this.handleOnchange(event);
              }}

            // keep track of value in input
            // ref={this.priceRef}
            />
          </div>

          <div className="form-group">
            <label htmlFor="img">Hinh Anh</label>
            <input
              value={this.state.img}
              type="text" name="img" id="img" className="form-control" placeholder=""
              onChange={(event) => {
                this.handleOnchange(event);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Mo ta</label>
            <input
              value={this.state.description}
              type="text" name="description" id="description" className="form-control" placeholder=""
              onChange={(event) => {
                this.handleOnchange(event);
              }}
            />
          </div>

          <button
            type='button'
            onClick={() => {
              // let valuePrice = this.priceRef.current.value;
              // console.log("valuePrice", valuePrice);

              // console.log("state", this.state);

              this.handleThemMon();

            }}
            className='btn btn-success mx-2' >Thêm món</button>
          <button
            onClick={() => {

            }}

            type='button' className='btn btn-danger mx-2'>Cap Nhat</button>
        </form>
      </div>

    )
  }
}


let mapStateToProps = (state) => {

  return {
    foodEdit: state.foodEdit,

  }
}

let mapDispatchToProps = (dispatch) => {


  return {
    capNhatDanhSachMonAn: (danhSach) => {
      dispatch(capNhatDanhSachMonAnAction(danhSach));
    },

    capNhatFoodEdit: (monAn) => {
      dispatch({
        type: CHINH_SUA_MON_AN,
        payload: monAn,
      })
    },

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FormMonAn);


