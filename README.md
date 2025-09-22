# Hiromam Club Coaches 🏋️‍♂️

This is a simple **Next.js frontend project** that displays a list of coaches at **Hiromam Club**.  
Users can view existing coaches and add new ones using a simple form.  
All data is saved locally in the browser (LocalStorage).

---

## ✨ Features
- Display list of coaches with:
  - Name
  - Specialty
  - Experience
  - Profile image
- Add new coaches through a form
- Save data in browser LocalStorage (persists after refresh)
- Simple responsive design

---

## 📂 Project Structure
hiromam-coaches/
│
├── app/
│ ├── page.js # Main page showing list of coaches
│ └── add.js # Page with form to add a new coach
│
├── components/
│ ├── CoachCard.js # Component to display a single coach
│ └── CoachList.js # Component to display the list of coaches
│
├── public/
│ └── images/ # (Optional) images for coaches
│
├── styles/
│ └── globals.css # Basic global styles
│
├── package.json
└── next.config.js

yaml
Copy code

---

## 🚀 How to Use
1. Clone this repository or download the code.
2. Install dependencies:
   ```bash
   npm install
Run the development server:

bash
Copy code
npm run dev
Open http://localhost:3000 in your browser.

🛠️ Technologies Used
Next.js – React framework

LocalStorage – for saving coaches’ data

Plain CSS for styling

🌟 Future Improvements
Ability to delete or edit a coach

Filter coaches by specialty

Store data in a backend (API or database)

Improved UI with Tailwind CSS or Material UI

yaml
Copy code
