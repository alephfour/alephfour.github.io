let faces = {
    'Face 1': '',
    'Face 2': '',
    'Face 3': '',
    'Face 4': ''
};

// Function to calculate Hamming distance
function hamming_distance(code1, code2) {
    let distance = 0;
    for (let i = 0; i < code1.length; i++) {
        if (code1[i] !== code2[i]) {
            distance++;
        }
    }
    return distance;
}

// Function to identify the face and the lie
function identify_face_and_lie(response) {
    for (let face in faces) {
        let code = faces[face];
        if (hamming_distance(response, code) === 1) {
            return { face: face, code: code };
        }
    }
    return null;
}

// Function to set character traits based on user input
function setCharacterTraits() {
    let characterTraitsForm = document.forms['characterTraitsForm'];
    
    for (let i = 1; i <= 4; i++) {
        let traits = '';
        for (let j = 1; j <= 5; j++) {
            traits += characterTraitsForm[`c${i}t${j}`].checked ? '1' : '0';
        }
        faces[`Face ${i}`] = traits;
    }
    
    alert('Character traits have been set!');
}

// Function to show the results
function showResults() {
    let response = [];
    response.push(document.querySelector('input[name="q1"]:checked').value || '0');
    response.push(document.querySelector('input[name="q2"]:checked').value || '0');
    response.push(document.querySelector('input[name="q3"]:checked').value || '0');
    response.push(document.querySelector('input[name="q4"]:checked').value || '0');
    response.push(document.querySelector('input[name="q5"]:checked').value || '0');

    let result = identify_face_and_lie(response.join(''));

    if (result) {
        let liePosition = response.map((val, index) => val !== result.code[index] ? index + 1 : -1).filter(val => val > 0)[0];
        document.getElementById('results').textContent = `The face is ${result.face} and the lie was in question ${liePosition}.`;
    } else {
        document.getElementById('results').textContent = "Unable to identify the face. Please check the responses.";
    }
}
