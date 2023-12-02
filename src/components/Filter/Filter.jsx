export const Filter = ({ onUpdateFilter }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" onChange={evt => onUpdateFilter(evt.target.value)} />
    </>
  );
};
