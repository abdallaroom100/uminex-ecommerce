

const Search = () => {
  return (
 <div className="search  grow-[1] ">
          <div className="search__container flex  items-stretch w-full ">
            <div className="border-2 border-[#e5e8ec] rounded-l-sm flex items-center justify-center  w-full">
              <div className="select__category h-[100%] px-2 relative pr-5">
                <select name="" className=" text-[13px] font-[600] w-[180px] px-2 h-[100%]" id="">
                  <option value="" className="">All Categories</option>
                </select>
              </div> 
              <div className="search__input px-2 grow basis-0 h-[100%]">
                <input
                  className="border-2 outline-0 rounded-l-lg border-none  h-[100%] px-2 w-full"
                  placeholder="Search for products ..."
                  type="text"
                />
              </div>
            </div>
            <button className="bg-[#2b38d1] hover:bg-[#212529] p-3 px-8 text-[13px] font-[600] button-transition  cursor-pointer text-white rounded-r-sm  ">
              Search
            </button>
          </div>
        </div>
  )
}

export default Search