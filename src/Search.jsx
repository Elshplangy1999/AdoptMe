export {Search};
const Search = () => {
  const location = "Banha";
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">Location</label>
        <input type="text" id="location" value={location} placeholder="Location" />
        <button>Submit</button>
      </form>
    </div>
  )
};