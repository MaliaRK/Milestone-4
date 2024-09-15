document.getElementById('form')?.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameElement = document.getElementById('name') as HTMLInputElement | null;
    const emailElement = document.getElementById('email') as HTMLInputElement | null;
    const phoneElement = document.getElementById('phone') as HTMLInputElement | null;
    const degElement = document.getElementById('degree') as HTMLInputElement | null;
    const insElement = document.getElementById('ins') as HTMLInputElement | null;
    const yearElement = document.getElementById('year') as HTMLInputElement | null;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement | null;
    const expElement = document.getElementById('exp') as HTMLTextAreaElement | null;
    const refElement = document.getElementById('ref') as HTMLInputElement | null;

    if (!nameElement || !emailElement || !phoneElement || !degElement || !insElement || !yearElement || !skillsElement || !expElement || !refElement) {
        console.error("One or more elements are missing");
        return;
    }

    let name = nameElement.value.toUpperCase();
    let email = emailElement.value;
    let phone = phoneElement.value;
    let degree = degElement.value;
    let institue = insElement.value;
    let year = yearElement.value;
    let skills = skillsElement.value;
    let experience = expElement.value;
    let reference = refElement.value === "" ? "will be furnished on request." : refElement.value;

    const output = `
    <div class="output">
        <h1>RESUME</h1>
        <div class="resume-content">
            <h2 class="name">${name}</h2>
            <p class="pi"><strong>Email:</strong> ${email}</p>
            <p class="pi"><strong>Phone:</strong> ${phone}</p>
            <br>
            <h3>Education:</h3>
            <p><strong>Degree:</strong> ${degree}</p>
            <p><strong>Institute:</strong> ${institue}</p>
            <p><strong>Year:</strong> ${year}</p>
            <br>
            <h3>Skills:</h3><ul>${skills}</ul>
            <br>
            <h3>Work Experience:</h3><p>${experience}</p>
            <br>
            <h3>Reference:</h3> ${reference}
        </div>
        <button id="edit">Edit</button>
    </div>
    `;

    const generatedOutput = document.getElementById('output');
    if(generatedOutput) {
        generatedOutput.innerHTML = output;
        const editBtn = document.getElementById('edit');
        if(editBtn) {
            editBtn.addEventListener('click', () => {
                const form = document.getElementById('form');
                if(form) {
                    form.style.display = 'block';
                }
                generatedOutput.style.display = 'none'
            });
        }
     } else {
            console.error('output element not found');
        }

        const form = document.getElementById('form');
        if(form) {
            form.style.display = 'none';
        }
        if(generatedOutput) {
            generatedOutput.style.display = 'block'
        }
});

document.addEventListener('DOMContentLoaded', () => {        // Initial setup    
    const form = document.getElementById('form');
    const generatedOutput = document.getElementById('output');
    if(form && generatedOutput) {
        form.style.display = 'block';
        generatedOutput.style.display = 'none';
    }
});
