'use client';

const DotSpan = ({ amount, active }) => {
  return (
    <span className="dot-panel">
      {[...Array(amount)].map((item, key) => {
        return (
          <div
            key={key}
            className={active === key + 1 ? 'dot active' : 'dot'}
          ></div>
        );
      })}
    </span>
  );
};

export default DotSpan;
