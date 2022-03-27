const Button = ({size, importance, children, href}) => {
  let color;
  if(importance === "primary" && size !== "minimal") {
    color = "text-white bg-gradient-to-b from-prk-blue-light to-prk-blue"
  }
  else if(importance === "secondary" && size !== "minimal") {
    color = "text-white bg-gradient-to-b from-prk-orange-light to-prk-orange"
  }
  else if(importance === "primary" && size === "minimal") {
    color = "text-prk-blue bg-transparent"
  }
  else if(importance === "secondary" && size === "minimal") {
    color = "text-prk-orange bg-transparent"
  }
  else {
    color = "text-black bg-transparent"
  }
  
  
  let sizing = size === "large" ? "p-8 text-2xl" : size === "small" ? "p-4 text-xl" : "p-2 text-lg"
  let styles = "rounded-full font-display text-2xl uppercase tracking-widest text-center" + " " + sizing + " " + color
  
  return (
    <button className={styles} href={href}>
      {children}
    </button>
  );
};

export default Button;
