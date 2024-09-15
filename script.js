var _a;
(_a = document.getElementById('form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var degElement = document.getElementById('degree');
    var insElement = document.getElementById('ins');
    var yearElement = document.getElementById('year');
    var skillsElement = document.getElementById('skills');
    var expElement = document.getElementById('exp');
    var refElement = document.getElementById('ref');
    if (!nameElement || !emailElement || !phoneElement || !degElement || !insElement || !yearElement || !skillsElement || !expElement || !refElement) {
        console.error("One or more elements are missing");
        return;
    }
    var name = nameElement.value.toUpperCase();
    var email = emailElement.value;
    var phone = phoneElement.value;
    var degree = degElement.value;
    var institue = insElement.value;
    var year = yearElement.value;
    var skills = skillsElement.value;
    var experience = expElement.value;
    var reference = refElement.value === "" ? "will be furnished on request." : refElement.value;
    var output = "\n    <div class=\"output\">\n        <h1>RESUME</h1>\n        <div class=\"resume-content\">\n            <h2 class=\"name\">".concat(name, "</h2>\n            <p class=\"pi\"><strong>Email:</strong> ").concat(email, "</p>\n            <p class=\"pi\"><strong>Phone:</strong> ").concat(phone, "</p>\n            <br>\n            <h3>Education:</h3>\n            <p><strong>Degree:</strong> ").concat(degree, "</p>\n            <p><strong>Institute:</strong> ").concat(institue, "</p>\n            <p><strong>Year:</strong> ").concat(year, "</p>\n            <br>\n            <h3>Skills:</h3><ul>").concat(skills, "</ul>\n            <br>\n            <h3>Work Experience:</h3><p>").concat(experience, "</p>\n            <br>\n            <h3>Reference:</h3> ").concat(reference, "\n        </div>\n        <button id=\"edit\">Edit</button>\n    </div>\n    ");
    var generatedOutput = document.getElementById('output');
    if (generatedOutput) {
        generatedOutput.innerHTML = output;
        var editBtn = document.getElementById('edit');
        if (editBtn) {
            editBtn.addEventListener('click', function () {
                var form = document.getElementById('form');
                if (form) {
                    form.style.display = 'block';
                }
                generatedOutput.style.display = 'none';
            });
        }
    }
    else {
        console.error('output element not found');
    }
    var form = document.getElementById('form');
    if (form) {
        form.style.display = 'none';
    }
    if (generatedOutput) {
        generatedOutput.style.display = 'block';
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('form');
    var generatedOutput = document.getElementById('output');
    if (form && generatedOutput) {
        form.style.display = 'block';
        generatedOutput.style.display = 'none';
    }
});
//     const generatedOutput = document.getElementById('output');
//     if (generatedOutput) {
//         generatedOutput.innerHTML = output;
//         const editButton = document.getElementById('edit');
//         if (editButton) {
//             editButton.addEventListener('click', () => {
//                 const form = document.getElementById('form');
//                 if (form) {
//                     form.style.display = 'block';
//                 }
//                 generatedOutput.style.display = 'none';
//             });
//         }
//     } else {
//         console.error('Output element not found');
//     }
//     const form = document.getElementById('form');
//     if (form) {
//         form.style.display = 'none';
//     }
//     if (generatedOutput) {
//         generatedOutput.style.display = 'block';
//     }
// });
// // Initial setup to hide output section and show form
// document.addEventListener('DOMContentLoaded', () => {
//     const generatedOutput = document.getElementById('output');
//     const form = document.getElementById('form');
//     if (generatedOutput && form) {
//         generatedOutput.style.display = 'none';
//         form.style.display = 'block';
//     }
// });
