import "./ShoesPageStyles.css";


const FilterDrop = ({filterName, fitlerOptions}) => {
    return ( 
        <>
            <select className="selectBox" name={filterName} id="">
                <option className="optionBox" value="" disabled selected>
                    {filterName}
                </option>
                {
                    fitlerOptions.map((filter) => {
                        return(
                            <>
                                <option className="optionBox" value="">{filter.op}</option>
                            </>
                        );
                    })
                }
            </select>
        </>
     );
}
 
export default FilterDrop;