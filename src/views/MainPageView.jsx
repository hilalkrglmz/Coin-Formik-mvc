import { FaBitcoin } from 'react-icons/fa'
import CardView from './CardView'
import millify from 'millify'
import { useNavigate } from 'react-router-dom'


const MainPageView = ({ coins, setPage }) => {
const navigate= useNavigate()


  return (
    <div className='container-xl mt-5 '>
      <h4 className='d-flex align-items-center gap-2'>
        <FaBitcoin />
        <span>Hoşgeldiniz, Coin Listesi:</span>
      </h4>
      <p>
        Coin Listesi, dünya genelindeki kripto para birimlerini ve dijital varlıkları takip etmek için güvenilir bir kaynaktır.
      </p>

      <div className='d-flex flex-wrap gap-4 justify-content-around my-5'>
        {coins?.slice(0, 3).map((data) => (
          <CardView data={data} />
        ))}
      </div>
      <table className='table table-dark table-hover table-responsive gap-5'>
        <thead>
          <tr>
            <th>#</th>
            <th>coin</th>
            <th>fiyat</th>
            <th>market hacmi</th>
            <th>işlem hacmi</th>
            <th>% değişim (24saat)</th>
          </tr>
        </thead>
        <tbody>
          {coins?.map((coin) => (
            <tr className='satir' onClick={() => navigate(`/coin/${coin.id}`)}>
              <td>
                {coin.rank}
              </td>
              <td>
                <span className='text-warning fw-bold me-2'>{coin.symbol}</span>
              </td>
              <td>
                <span>{coin.name}</span>
              </td>
              <td>
                <span>{millify(coin.priceUsd)}</span>
              </td>
              <td>
                <span>{millify(coin.marketCapUsd)}</span>
              </td>
              <td>
                <span className={
                  coin.changePercent24Hr >= 0 ? "up" : "down"
                }>%{Number(coin.changePercent24Hr).toFixed(2)}</span>
              </td>
            </tr>))}
        </tbody>
      </table>
      <div className='d-flex justify-content-center my-5'>
          <button onClick={() => setPage((page) => page+1)} id='more'> Daha Fazla
          </button>
        </div>

    </div>
  )
}

export default MainPageView