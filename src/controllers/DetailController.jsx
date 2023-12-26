import { useParams } from 'react-router-dom'
import Model from '../models/DetailModel'
import DetailView from '../views/DetailView'
import { useEffect, useState } from 'react';

const DetailController = () => {
   const [coin,setCoin] = useState(null)

//*1 url den id yi al
const {id} = useParams();
//*2 coin in detay verilerini ve fiyat geçmişini al
 useEffect(() =>{
    Model.getCoinDetails(id)
    .then((data) => setCoin(data))
 },[])
//*3 Detailview e bilgileri aktar

/* modelden bir örnek oluştrduk.
Örnek oluştururken coin bilgilerini gönderdik
model de gönderdiğimiz coin bilgileriyle view bileşeninde kullanılacak veriyi oluşturdu. */
    const model = new Model(coin);
    console.log(model)
//*
  return (
    <DetailView model={model}/>
  )
}

export default DetailController