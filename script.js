const outputElement = document.getElementById('output');
const inputElement = document.getElementById('input');

const methods = [
    "const aboutMe = () => {",
    "    return {",
    "        name: 'Dev ixAAr',",
    "        profession: 'Web Developer',",
    "        skills: ['HTML', 'CSS', 'JavaScript']",
    "        currentFocus: ['ERROR 404'],",
    "        communities: {",
    "            founder: ['Talk With ixAAr'],",
    "             member: ['Team Zyntax' , 'CyberLine']",
    "        },",
    "       lifePhilosophy: 'Learning something new every day 🚀'",
    "    };",
    "};",
    "",
    "console.log(aboutMe());"
];

let methodIndex = 0;
let charIndex = 0;

function typeMethod() {
    if (methodIndex < methods.length) {
        if (charIndex < methods[methodIndex].length) {
            outputElement.textContent += methods[methodIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeMethod, 50); // Adjust typing speed
        } else {
            outputElement.textContent += '\n'; // New line after method
            methodIndex++;
            charIndex = 0;
            setTimeout(typeMethod, 500); // Pause before next method
        }
    } else {
        // Reset typing after all methods
        setTimeout(() => {
            outputElement.textContent = '';
            methodIndex = 0;
            charIndex = 0;
            typeMethod();
        }, 3000);
    }
}

typeMethod();