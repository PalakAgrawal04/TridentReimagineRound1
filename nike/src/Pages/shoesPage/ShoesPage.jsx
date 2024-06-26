import "./ShoesPageStyles.css";
import { CiFilter } from "react-icons/ci";
import AllShoes from "./AllShoes";
import FilterDrop from "./FilterDrop";
const ShoesPage = () => {

    const filterArr=[
        {
            name:"Gender",
            options:[
                {
                    op:"Male"
                },
                {
                    op:"Female"
                },
            ]
        },
        {
            name:"Shop By Price",
            options:[
                {
                    op:"5000"
                },
                {
                    op:"7000"
                },
                {
                    op:"10000"
                },
            ]
        },
        {
            name:"Sales and Offer",
            options:[
                {
                    op:"25% off"
                },
                {
                    op:"50% off"
                },
                {
                    op:"75% off"
                },
            ]
        },
        {
            name:"Size",
            options:[
                {
                    op:"7 UK"
                },
                {
                    op:"8 UK"
                },
                {
                    op:"9 UK"
                },
                {
                    op:"10 UK"
                },
            ]
        },
        {
            name:"Color",
            options:[
                {
                    op:"Red"
                },
                {
                    op:"White"
                },
                {
                    op:"Blue"
                },
                {
                    op:"Black"
                },
            ]
        },
        {
            name:"Collections",
            options:[
                {
                    op:"Jordans"
                },
                {
                    op:"Dunks"
                },
                {
                    op:"Air Force 1"
                },
                {
                    op:"Air Max"
                },
            ]
        },
    ]

    
    return ( 
        <>
            <div className="mainPage">
                <div className="shoePage">
                    <div className="filters">
                        <div className="filterTag">
                            <CiFilter size={25}/>
                            <h1>Filters</h1>
                        </div>
                        <div className="allFilters">
                            {
                                filterArr.map((filters) => {
                                    return(
                                        <>
                                            <FilterDrop filterName={filters.name} fitlerOptions={filters.options}/>
                                        </>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className="shoes">
                        <AllShoes/>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ShoesPage;