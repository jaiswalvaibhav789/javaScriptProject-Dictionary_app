# 📖 Dictionary App

A simple and beginner-friendly **Dictionary Web App** built with **HTML, CSS, and JavaScript**.  
The app uses the **Free Dictionary API** to fetch word information dynamically.

## ✨ Features

- 🔎 Search for an English word
- ⚡ Fetches word data using a REST API
- 📚 Displays the word's **part of speech**
- 🎨 Simple card-based user interface
- 📱 Responsive viewport configuration
- 🧩 Built using vanilla HTML, CSS, and JavaScript

## 🛠️ Technologies Used

- **HTML5** – Structure of the application
- **CSS3** – Styling and layout
- **JavaScript (ES6+)** – API requests and DOM manipulation
- **Fetch API** – Fetches dictionary data
- **Free Dictionary API** – Provides word information

## 📁 Project Structure

```text
Dictionary app/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

## 🚀 How to Run

### 1. Download or clone the project

```bash
git clone <your-repository-url>
```

### 2. Open the project

Open the `Dictionary app` folder in VS Code or any code editor.

### 3. Run the application

You can simply open:

```text
index.html
```

in your browser.

For the best development experience, use the **Live Server** extension in VS Code.

## 🔌 API

This project uses the Free Dictionary API:

```text
https://freedictionaryapi.com/api/v1/entries/en/{word}
```

For example:

```text
https://freedictionaryapi.com/api/v1/entries/en/hello
```

The JavaScript fetches the API response and displays the first entry's part of speech.

## 🧠 How It Works

1. The user enters a word in the search box.
2. The `search()` function reads the entered word.
3. JavaScript sends a request to the Dictionary API using `fetch()`.
4. The API returns the word data in JSON format.
5. The application reads the first dictionary entry.
6. The part of speech is displayed on the page.

## 💻 Example

Enter:

```text
hello
```

The application requests information about `hello` and displays the available part of speech.

## ⚠️ Current Limitations

- The app currently displays only the **part of speech**.
- There is no custom error message for invalid or unavailable words.
- The UI is intentionally simple.
- Internet access is required because dictionary data comes from an external API.

## 🔮 Future Improvements

Possible improvements include:

- Show the **definition**
- Show **pronunciation**
- Show **phonetics**
- Show **examples**
- Add **synonyms and antonyms**
- Add loading and error states
- Add dark mode
- Improve responsive design
- Add search history
- Add keyboard support for pressing **Enter** to search

## 👨‍💻 Author

**Vaibhav**

A beginner-friendly JavaScript project created to practice:

- DOM manipulation
- Async/Await
- Fetch API
- REST API integration
- HTML/CSS UI development

## 📄 License

This project is created for learning and educational purposes.
