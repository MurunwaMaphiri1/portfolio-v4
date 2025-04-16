import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleBookClick = () => {
    navigate("/books")
  }

  const handleBlogClick = () => {
    navigate("/blogs")
  }

  return (
    <>
      <div className="nav-container"> 
        <div className="button-container">
          <a href="/" className="button">
            <svg
              className="icon"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"
              ></path>
            </svg>
          </a>
          <a className="button" onClick={() => handleBlogClick()}>
            <svg className="icon" stroke="currentColor" fill="currentColor" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
              <path d="M 13 3 L 13 22.3125 L 13.1875 22.59375 L 17.78125 29 L 17.90625 29.21875 L 18.75 30.53125 L 22.875 37 L 20.625 37 L 20.34375 37.25 L 14 42.8125 L 14 37 L 11 37 C 8.722656 37 7 35.277344 7 33 L 7 12 C 7 9.722656 8.722656 8 11 8 L 12 8 L 12 6 L 11 6 C 7.675781 6 5 8.675781 5 12 L 5 33 C 5 36.324219 7.675781 39 11 39 L 12 39 L 12 47.21875 L 13.65625 45.75 L 21.375 39 L 40 39 C 43.324219 39 46 36.324219 46 33 L 46 12 C 46 8.675781 43.324219 6 40 6 L 25 6 L 25 3 Z M 15 5 L 23 5 L 23 19.5 L 19.375 18.0625 L 19 17.9375 L 18.625 18.0625 L 15 19.5 Z M 25 8 L 40 8 C 42.277344 8 44 9.722656 44 12 L 44 29 L 20.25 29 L 24.8125 22.59375 L 25 22.3125 Z M 19 20.09375 L 22.96875 21.6875 L 20.625 25 L 17.375 25 L 15.03125 21.6875 Z M 21.40625 31 L 44 31 L 44 33 C 44 35.277344 42.277344 37 40 37 L 25.21875 37 Z"></path>
            </svg>          
          </a>
          <a className="button" href="./CV/Murunwa Maphiri Fullstack Developer CV (1).pdf" download>
            <svg
              className="icon"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"
              ></path>
            </svg>
          </a>
          <a className="button" onClick={() => handleBookClick()}>
            <svg viewBox="0 0 24 24" height="1em" width="1em" className="icon" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLineJoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 10.4V20M12 10.4C12 8.15979 12 7.03969 11.564 6.18404C11.1805 5.43139 10.5686 4.81947 9.81596 4.43597C8.96031 4 7.84021 4 5.6 4H4.6C4.03995 4 3.75992 4 3.54601 4.10899C3.35785 4.20487 3.20487 4.35785 3.10899 4.54601C3 4.75992 3 5.03995 3 5.6V16.4C3 16.9601 3 17.2401 3.10899 17.454C3.20487 17.6422 3.35785 17.7951 3.54601 17.891C3.75992 18 4.03995 18 4.6 18H7.54668C8.08687 18 8.35696 18 8.61814 18.0466C8.84995 18.0879 9.0761 18.1563 9.29191 18.2506C9.53504 18.3567 9.75977 18.5065 10.2092 18.8062L12 20M12 10.4C12 8.15979 12 7.03969 12.436 6.18404C12.8195 5.43139 13.4314 4.81947 14.184 4.43597C15.0397 4 16.1598 4 18.4 4H19.4C19.9601 4 20.2401 4 20.454 4.10899C20.6422 4.20487 20.7951 4.35785 20.891 4.54601C21 4.75992 21 5.03995 21 5.6V16.4C21 16.9601 21 17.2401 20.891 17.454C20.7951 17.6422 20.6422 17.7951 20.454 17.891C20.2401 18 19.9601 18 19.4 18H16.4533C15.9131 18 15.643 18 15.3819 18.0466C15.15 18.0879 14.9239 18.1563 14.7081 18.2506C14.465 18.3567 14.2402 18.5065 13.7908 18.8062L12 20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLineJoin="round"></path> </g></svg>          
          </a>
        </div>
      </div>
    </>
  );
}
