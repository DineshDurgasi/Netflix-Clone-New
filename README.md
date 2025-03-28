# Netflix Clone  

##  Project Overview 
This project is a Netflix clone built using React.js with features such as movie browsing, search and filter functionality, dark mode toggle, and local storage-based favorites management.

##  Features  

###  Homepage 

- Contains a main hero Banner along with some buttons 
- Displays a set of movie cards
  - Hovering effect on every card
  - Side arrow feature for navigating left and right of movie cards
- Clicking on any movie navigates to **Movie details page**
- Contains a **Navbar** and a **Footer**

### Navigation and Routing

- The Navbar includes
  - **Search** functionality for searching the movies
  - **Genre Filter** for filtering movies based on genre
  - **Toggle** button for toggling the theme between light and dark themes
  - And some buttons like **Home**,**Movies**,etc....
- Used **React Router** for seamless page navigation.

### Movie Details Page

- Displays the movie details of the movie card
- This Page Includes :-
   - Movie Banner
   - Movie Title
   - Release Date
   - Rating
- **Add To Favourites** button to add the movie to local storage

### Favourites Page

- Contains all the favourite movie of the user which are added from  movie details page
- These are stored in **Local Storage**
- **Remove From Favourites** button to remove the movie from local storage

### Search Functionality

- user can type movie keyword of his choice
- Results are displayed on a new page 

### Filter Functionality

- Contains a genre dropdown button on navbar which contains different generes
- selecting a genre navigates a new page
- Displays all the movies according to the selected genre

### Toggle Theme

- A button to toggle the theme between light and dark themes
- Implemented using **React Context API**.

###  Fully Responsive Design

- Works on **mobile, tablet, and desktop**.  
- Usesd CSS media queries**.

### Ui/Ux Effects

- **Hovering Effects** on movie cards and buttons
- **Loading Spinner** while fetching data

#  Technologies Used
- **Frontend:** React.js, CSS
- **State Management:** React Hooks, Context API
- **Routing:** React Router  
- **Deployment:** Netlify
 
 ##  Deployment  
 
 - Deployed on GitHub. Check out the code at **[https://github.com/DineshDurgasi/Netflix-Clone-New]**
 - Live Deployment: **[https://dineshindukuri.netlify.app]**

 # Folder Structure

 - src
  - assets
  - components
    - Footer
    - Navbar
    - TitleCards
    - ToggleTheme
  - pages
    - Favorites
    - Genres
    - Home
    - Login
    - MovieDetails
    - SearchByLanguage
    - SearchResults
  - App.css
  - App.jsx
  - index.css
  - main.jsx

## Getting Started ▶️

Follow the steps below to Run the project on your desktop.

#### 1. Clone the Repository

Clone This Repository Locally Using this Command

```sh
git clone https://github.com/DineshDurgasi/Netflix-Clone-New
```

#### 2. Navigate to the Project

Change your Current directory to the project folder:

```sh
cd Netflix
```

#### 3. Install Dependencies

Install the required packages 

```sh
npm install
```

### 5. Start the Project

Run this command

```sh
 npm run dev
```

### Responsive Design

- Desktop View
  
![Screenshot 1](https://github.com/DineshDurgasi/Netflix-Clone-New/blob/main/SS/SS/Desktop/Home-Desktop.png) | 
| ![Screenshot 2](https://github.com/DineshDurgasi/Netflix-Clone-New/blob/main/SS/SS/Desktop/Genre-Desktop.png) | 
| ![Screenshot 2](https://github.com/DineshDurgasi/Netflix-Clone-New/blob/main/SS/SS/Desktop/Favorites-Desktop.png) |

- Tablet View

  | ![Screenshot 2](https://github.com/DineshDurgasi/Netflix-Clone-New/blob/main/SS/SS/Tab/Home-Tab.png) |
  | ![Screenshot 2](https://github.com/DineshDurgasi/Netflix-Clone-New/blob/main/SS/SS/Tab/Genre-Tab.png) |
  | ![Screenshot 2](https://github.com/DineshDurgasi/Netflix-Clone-New/blob/main/SS/SS/Tab/Favorites-Tab.png) |

- Mobile View

  | ![Screenshot 2](https://github.com/DineshDurgasi/Netflix-Clone-New/blob/main/SS/SS/Mobile/Home-Mobile.png) |
  
  
## Conclusion

In this project, we successfully developed a Netflix clone with a user-friendly interface, smooth navigation, and some key features.Through this project, we deepened our understanding of React.js, local storage management, state handling, and component-based UI development. Future enhancements could include API integration for fetching real-time movie data, user authentication, and advanced filtering options to further enhance functionality. This project demonstrates our ability to build scalable and interactive web applications using modern frontend technologies
  
  
 
