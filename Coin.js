import React from 'react';
import './Coin.css';

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  marketcaprank,
  volume,
  image,
  priceChange,
  priceChange24h,
  circulatingsupply
}) => {
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='coin-symbol'>{symbol}</p>
        </div>
        <div className='coin-data'>
          <p className='coin-price'> Current Price ${price.toLocaleString()}</p>
          <p className='coin-circulating-supply'> Circulating Coins {circulatingsupply.toLocaleString()}</p>
          <p className='coin-volume'>Market Cap ${volume.toLocaleString()}</p>
         
          <h5>Price Change Percentage</h5>
          {priceChange < 0 ? (
            <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
          )}
      
        </div>
      </div>
    </div>
  );
};

export default Coin;
