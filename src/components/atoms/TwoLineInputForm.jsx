function TwoLineInputForm({ id, name, type, value, onChange }) {
  return (
    <div className="pt-2 text-sm">
      <div>
        <label className="ps-2" htmlFor={id}>
          {name}
        </label>
      </div>

      <input
        type={type}
        id={id}
        name={id}
        className="my-1 w-full rounded-lg border border-tertiary p-1 px-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default TwoLineInputForm;
