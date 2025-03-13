const texts = [
    "I am a dedicated and passionate IT professional with expertise in web development, specializing in ",
    "creating dynamic, responsive websites. I excel in front-end development using HTML, CSS, React.js, and ",
    "JavaScript, while also proficient in back-end technologies like Python and PHP. My focus is on delivering ",
    "seamless user experiences and robust functionality.\n",
    "Throughout my journey, I have successfully worked on various projects involving both front-end and back-end development.\n",
    "I am always excited to work on innovative projects and continuously seek opportunities to enhance my skills.\n",
    "For more information, feel free to visit my social media pages or click Hire Me to download my CV.\n", 
    "Thank you."
];

let currentTextIndex = 0;
let currentCharText = 0;
const typewriterElement = document.getElementById("typeWriter");

function typeWriter() {
    if (currentCharText < texts[currentTextIndex].length) {
        typewriterElement.textContent += texts[currentTextIndex].charAt(currentCharText);
        currentCharText++;
        setTimeout(typeWriter, 100);
    } else if (currentTextIndex < texts.length - 1) {
        currentTextIndex++;
        currentCharText = 0;
        typewriterElement.textContent += '\n';
        setTimeout(typeWriter, 500);
    }
}
typeWriter();


// No 2


const words = ["Web Developer", "Web Designer", "Graphic Designer"];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;
const repeatElement = document.getElementById("text-repeat");

function type() {
    currentWord = words[wordIndex];

    if (isDeleting) {
        letterIndex--;
    } else {
        letterIndex++;
    }

    repeatElement.innerHTML = currentWord.slice(0, letterIndex);

    if (!isDeleting && letterIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1000);
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 50 : 150);
    }
}

document.addEventListener('DOMContentLoaded', type);



// No 3


document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll(".hide");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { root: null, threshold: 0.1 });

    elements.forEach(element => observer.observe(element));
});



// No 4

window.onscroll = function () { scrollFunction(); };

function scrollFunction() {
    var scrollup = document.querySelector(".return-top");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollup.style.display = "block";
    } else {
        scrollup.style.display = "none";
    }
}



// No 5


const currentLocation = location.href;
const menuLinks = document.querySelectorAll(".nav-link");

menuLinks.forEach(link => {
    if (link.href === currentLocation) {
        link.classList.add("active");
    }
});


// No 6


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".slow-motion");

    function revealOnScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                section.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Trigger on page load
});



// No 7


document.getElementById('downloadBtn').addEventListener('click', function () {
    const pdfUrl = 'CV.pdf'; // URL where your PDF is hosted
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});



document.getElementById("downloadBtn").addEventListener("click", function() {
    // Replace 'cv.pdf' with the actual path of your CV file
    const cvUrl = "cv.pdf";  
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "CV.pdf"; // File name when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});