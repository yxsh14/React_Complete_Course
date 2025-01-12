import React from 'react'

const Card = (props) => {
    console.log(props); //ye empty hoga abhi k liye 
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full rounded-xl " src="https://deih43ym53wif.cloudfront.net/large_taj-mahal-india-shutterstock_540619192_89f0fb9375.jpeg" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset ,{props.someDetails.name}</div>
    <h3 >Network: {props.network}</h3>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
  )
}

export default Card