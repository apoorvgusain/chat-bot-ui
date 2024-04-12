

const FilterTag = ({ name ,index}) => {
  return (
    <div className={index===0?"filter-tag filter-tag-first" :"filter-tag"}>
      <div className="filter-tag-name">{name}</div>
      <div className="delete-icon">X </div>
    </div>
  );
};

export default FilterTag;
