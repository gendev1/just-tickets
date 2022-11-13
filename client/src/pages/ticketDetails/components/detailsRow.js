function DetailsRow({ heading, value }) {
  return (
    <>
      <div className="column mb-0 pb-0 is-6">
        <h6 className="mb-0 pb-0">{heading}</h6>
      </div>
      <div className="column is-6 mb-0 pb-0">
        <p className="mb-0 pb-0">{value}</p>
      </div>
    </>
  );
}

export default DetailsRow;
