import '../styles/FilterBar.css'


function FilterBar({onFilterChange, activeFilter, tasksLeft, totTasks}) {
  return (
    <div className='filter-section'>
    <div className='filter-btns'>
      <button className={activeFilter === 'all' ? "filter-btn active" : "filter-btn"} onClick={() => onFilterChange("all")}>All</button>
      <button className={activeFilter === 'pending' ? "filter-btn active " : "filter-btn "} onClick={() => onFilterChange("pending")}>Pending</button>
      <button className={activeFilter === 'completed' ? "filter-btn active" : "filter-btn"} onClick={() => onFilterChange("completed")}>Completed</button>
    </div>

   { totTasks.length === 0 ? null : (<p className='taskleft-text'>{tasksLeft} tasks left</p>)}
    </div>
  )
}

export default FilterBar