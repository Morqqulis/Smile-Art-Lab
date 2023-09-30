const Stars = () => {
  return (
    <div className="flex gap-[5px]">
      {[1, 2, 3, 4, 5].map((_, index) => (
        <svg
          key={index} // Указываем ключ для каждого элемента в массиве
          width="24"
          height="21"
          viewBox="0 0 24 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.0216 8.15483C22.8765 7.72157 22.4785 7.41384 22.0076 7.37287L15.6114 6.81211L13.0821 1.0963C12.8956 0.677405 12.4709 0.40625 11.999 0.40625C11.5271 0.40625 11.1024 0.677405 10.9159 1.09728L8.38665 6.81211L1.9894 7.37287C1.51936 7.41482 1.12236 7.72157 0.976448 8.15483C0.830533 8.58809 0.965289 9.0633 1.32086 9.36287L6.15566 13.4568L4.72999 19.5203C4.62567 19.9662 4.80489 20.427 5.18803 20.6944C5.39396 20.8381 5.6349 20.9112 5.87787 20.9112C6.08735 20.9112 6.29515 20.8567 6.48165 20.7489L11.999 17.5651L17.5144 20.7489C17.918 20.9834 18.4267 20.962 18.809 20.6944C19.1923 20.4262 19.3713 19.9652 19.267 19.5203L17.8414 13.4568L22.6762 9.36368C23.0317 9.0633 23.1675 8.58891 23.0216 8.15483Z"
            fill="#FFC107"
          />
        </svg>
      ))}
    </div>
  );
};

export default Stars;