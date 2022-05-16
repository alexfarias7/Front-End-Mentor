import styles from "./styles.module.css";

const OptionResult = ({ changeValue }) => {
  const OptionResult = [
    { numResult: 1 },
    { numResult: 2 },
    { numResult: 3 },
    { numResult: 4 },
    { numResult: 5 },
  ];

  return (
    <div className={styles.option}>
      {OptionResult.map((value) => (
        <button
          className={styles.valueUser}
          tabIndex={value.numResult}
          key={value.numResult}
          onClick={() => changeValue(value.numResult)}
        >
          {value.numResult}
        </button>
      ))}
    </div>
  );
};

export default OptionResult;
