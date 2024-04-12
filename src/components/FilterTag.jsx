

const FilterTag = ({ name }) => {
  return (
    <div className="filter-tag">
      <div className="filter-tag-name">{name}</div>
      <div className="delete-icon">X</div>
    </div>
  );
};

export default FilterTag;
