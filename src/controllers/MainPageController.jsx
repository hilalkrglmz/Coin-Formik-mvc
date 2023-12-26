import React, { useEffect, useState } from 'react'
import MainPageView from '../views/MainPageView'
import Model from '../models/MainPageModel'

const MainPageController = () => {

  const [coins, setCoins] = useState([]);

  const [page, setPage] = useState(1);


/* sayfa sayısı ehr arttığında bir sonraki sayfanın verilerini
al ve coins statine ekle */
useEffect(() => {
  Model.getCoins(page)
  /* aldığımız verileri önceki sayfanın verilerinin
  üzerine eklememiz için concat methodu kullanırız */
  .then((data) => setCoins(coins.concat(data)))
} ,[page])

  return (
    <MainPageView setPage={setPage} coins={coins}/>
  )
}

export default MainPageController