#back-to-index {
    position: absolute;
    top: 20px;
    right: 20px;
}

body {
    font-family: 'Palatino', serif;
    background-color: #f3e9dd;
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    color: #654321; /* Default link color */
}

.button {
    padding: 20px;
    margin: 10px;
    background-color: rgba(210, 192, 168, 0.5); /* Darker shade of #f3e9dd */
    border: none;
    box-shadow: none;
    text-align: center;
    cursor: pointer;
    text-decoration: none; /* Remove underline for anchor */
    color: black; /* Text color */
    display: inline-block;
    color: #654321;; /* Default link color */
    border-radius: 5px; /* Rounded corners */
}

.container {
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 1200px; /* Adjust the max-width as needed */
    margin: auto;
    background-color: #fbf5ee;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.left-panel {
    flex: 1;
    padding: 20px;
    border-right: 1px solid #ccc;
    background-color: #f9f9f9;
}

.right-panel {
    flex: 1;
    padding: 20px;
}

.question-container {
    flex: 1;
    padding-right: 20px; /* Space between questions and image */
    display: flex;
    flex-direction: column;
    align-items: center; /* Center items vertically */
    justify-content: center; /* Center items horizontally */
}

.question {
    margin-bottom: 20px;
}

.question p {
    margin-bottom: 10px;
}

.options {
    display: flex;
    gap: 10px;
}

.options label {
    cursor: pointer;
}

.submit-btn {
    display: block;
    margin: 20px auto 0;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.submit-btn:hover {
    background-color: #0056b3;
}

.image-container {
    flex: 2; /* Increase flex value to make the image container larger */
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-container img {
    max-width: 100%;
    height: auto;
    border-radius: 8px; /* Optional for better visuals */
    object-fit: contain; /* Maintain aspect ratio within container */
}

#results {
    margin-top: 20px;
    text-align: center;
}

@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }

    .question-container {
        padding-right: 0;
    }

    .image-container {
        margin-top: 20px;
    }

    .image-container img {
        width: 100%; /* Make sure the image still takes the full width on smaller screens */
        height: auto; /* Maintain aspect ratio */
    }
}
