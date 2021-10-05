import { useEffect } from 'react'
import { gql, useQuery } from '@apollo/client'
import { useDispatch, useSelector } from 'react-redux'
import { getPromos } from '../../../store/selectors'
import { requestPromosLoading, requestPromosError, requestPromosSuccess } from '../../../store/actions'

export const GET_PROMOS = gql`
query getPromos($id: ID){
    promo(id: $id){
        name
        description
        menus{
            name
            description
            products{
                id
                description
                expiringDate           
                price
            }
            price
          }
        price
    }
}
`
export default function usePromos() {

    const { data, loading, error } = useQuery(GET_PROMOS)
    const dispatch = useDispatch()
    const promos = useSelector(state => getPromos(state))
  
    useEffect(() => {   
        if(loading){
            return dispatch(requestPromosLoading())
          }
          if(error){
            return dispatch(requestPromosError(error))
          }
          if(data){
            return dispatch(requestPromosSuccess(data.promo))
          }
    }, [loading, error, data])
  
    return {promos}
  }