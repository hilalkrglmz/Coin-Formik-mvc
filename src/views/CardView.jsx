import millify from "millify"

const CardView = ({data}) => {

    console.log(data)
  return (
    <div className="coin-card d-flex flex-column justify-content-between border rounded p-3">
        <div >
        <h3>{data.name}</h3>
        <h6>{data.symbol}</h6>
        <p>{millify(data.priceUsd)}</p>
        </div>
        <p className="d-flex flex-column">
            <span>Günlük Değişim:</span>
            <span className={
                data.changePercent24Hr >=0 ? "up" : "down"
            }>{Number(data.changePercent24Hr).toFixed(3)}</span>
        </p>
    </div>
  )
}

export default CardView