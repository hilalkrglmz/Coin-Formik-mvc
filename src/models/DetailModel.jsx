import axios from "axios";
import {SiCoinmarketcap} from 'react-icons/si'
import {MdEventAvailable} from 'react-icons/md'
import {MdPriceChange} from 'react-icons/md'
import {FaPercent} from 'react-icons/fa'
import {RiStockFill} from 'react-icons/ri'

export default class DetailModel {

//*constructor yapısı: bu class tan bir örnek aldığımızda elde edeceğimiz objenin verilerini tanımlar
    constructor(coin) {
        this.coin= coin;
        console.log(coin)
        this.infoFields= [
            {icon:<SiCoinmarketcap/> ,value: coin?.detail.marketCapUsd, label:'Market Hacmi'},
            {icon:<MdEventAvailable/> ,value: Number(coin?.detail.maxSupply), label:'Tedarik'},
            {icon:<MdPriceChange/> ,value: coin?.detail.priceUsd, label:'Fiyat Değişimi'},
            {icon:<FaPercent/> ,value:coin?.detail.changePercent24Hr, label:'24s Değişim (%)'},
            {icon:<RiStockFill/> ,value:coin?.detail.volumeUsd24Hr, label:'24s Hacim'},
        ];
        this.chartData= {
            labels: coin?.history.map((i) => new Date(i.date).toLocaleDateString()),
            datasets: [
              {
                label: 'Fiyat Değişimi',
                data: coin?.history.map((i) => i.priceUsd),
                borderColor: 'yellow',
                backgroundColor: 'crimson'
              }
            ],
          };
          ;
    }

    /* Verileri almaya yarayan function */
    static async getCoinDetails(coin) {
        try {
          const detailRes = await axios.get(
            `https://api.coincap.io/v2/assets/${coin}`);
          
        const historyRes = await axios.get(`https://api.coincap.io/v2/assets/${coin}/history?interval=d1`);
          
          return {detail: detailRes.data.data,
                  history: historyRes.data.data};
        }catch(err) {
            console.log(err);
        }
    }



}
