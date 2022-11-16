import {useEffect} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
import Message from '../components/Message'
import {addToCart} from '../actions/cartActions'

  const CartScreen = ({match, location, history}) =>{  
    const { id } = useParams()
    const qty = location.search ? Number(location.search.split('=')[1]): 1

    const dispatch = useDispatch()

    useEffect(() => {
      if(id){
        dispatch(addToCart(id, qty))
      }
    }, [dispatch, id, qty])
  return (
    <div>CartScreen</div>
  )
}

export default CartScreen