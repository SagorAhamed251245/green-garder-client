const BurgerMenu = () => {
  return (
    <>
      <svg
        className={`swap-off fill-current w-8 h-8 transition-all duration-300 ease-in-out hover:transform hover:rotate-180
       `}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 18L20 18"
          stroke="#2FB95D"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 12L20 12"
          stroke="#2FB95D"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 6L20 6"
          stroke="#2FB95D"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};

export default BurgerMenu;
