import styles from "./keyboard.module.css";
type KeyboardProps = {
    activeLetters: string[],
    inactiveLetters: string[],
    addGuessedLetter: (letter: string) => void,
    disabled?: boolean;
}


const keyboard = ({activeLetters, inactiveLetters, addGuessedLetter, disabled = false}: KeyboardProps) => {
  const KEY: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {KEY.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInAcive = inactiveLetters.includes(key);
        return (
          <button 
            onClick={() => addGuessedLetter(key)} 
            key={key} 
            className={`${styles.btn} ${isActive ? styles.active : ""} ${isInAcive ? styles.inactive : ""}`}
            disabled={isInAcive || isActive || disabled}
        >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default keyboard;
