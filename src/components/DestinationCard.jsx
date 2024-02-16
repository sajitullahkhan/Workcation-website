const DestinationCard = ({dataList}) => {

  return(
    <>
        <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
        <img className="h-32 w-32 flex-shrink-0" src={dataList.imageUrl} />
        <div className="px-6 py-4">
          <h3 className="text-lg font-semibold text-gray-800">{dataList.city}</h3>
    
          <p className="text-gray-600">$ {dataList.averagePrice} / night average</p>
          <div className="mt-4">
            <a href="#" className="text-brand-dark hover:text-brand font-semibold text-sm text-fuchsia-600">
              Explore {dataList.propertyCount} properties
            </a>
          </div>
        </div>
      </div>
    </>
    )

  
}

export default DestinationCard;