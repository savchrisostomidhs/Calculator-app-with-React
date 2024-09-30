import { useState } from "react";
import "./Header.css"

function Header() {
    const [theme, setTheme] = useState(1);
    const root = document.querySelector(":root");

    const theme1 = () => {
        root.style.setProperty('--main-bg', 'hsl(222, 26%, 31%)');
        root.style.setProperty('--toggle-keypad-bg', 'hsl(223, 31%, 20%)');
        root.style.setProperty('--screen-bg', 'hsl(224, 36%, 15%)');

        root.style.setProperty('--reset-key', 'hsl(225, 21%, 49%)');
        root.style.setProperty('--reset-key-shadow', 'hsl(224, 28%, 35%)');
        root.style.setProperty('--reset-key-hover', 'hsl(225, 21%, 60%)');

        root.style.setProperty('--eq-toggle', 'hsl(6, 63%, 50%)');
        root.style.setProperty('--eq-toggle-shadow', 'hsl(6, 70%, 34%)');
        root.style.setProperty('--eq-toggle-hover', 'hsl(6, 63%, 60%)');

        root.style.setProperty('--key', 'hsl(30, 25%, 89%)');
        root.style.setProperty('--key-shadow', 'hsl(28, 16%, 65%)');
        root.style.setProperty('--key-hover', 'hsl(0, 0%, 100%)');

        root.style.setProperty('--header', 'hsl(0, 0%, 100%)');
        root.style.setProperty('--text', 'hsl(221, 14%, 31%)');
        root.style.setProperty('--equals', 'hsl(0, 0%, 100%)');
        root.style.setProperty('--white', 'hsl(0, 0%, 100%)');
    };

    const theme2 = () => {
        root.style.setProperty('--main-bg', 'hsl(0, 0%, 90%)');
        root.style.setProperty('--toggle-keypad-bg', 'hsl(0, 5%, 81%)');
        root.style.setProperty('--screen-bg', 'hsl(0, 0%, 93%)');

        root.style.setProperty('--reset-key', 'hsl(185, 42%, 37%)');
        root.style.setProperty('--reset-key-shadow', 'hsl(185, 58%, 25%)');
        root.style.setProperty('--reset-key-hover', 'hsl(185, 58%, 45%)');

        root.style.setProperty('--eq-toggle', 'hsl(25, 98%, 40%)');
        root.style.setProperty('--eq-toggle-shadow', 'hsl(25, 99%, 27%)');
        root.style.setProperty('--eq-toggle-hover', 'hsl(25, 99%, 47%)');

        root.style.setProperty('--key', 'hsl(45, 7%, 89%)');
        root.style.setProperty('--key-shadow', 'hsl(35, 11%, 61%)');
        root.style.setProperty('--key-hover', 'hsl(0, 0%, 100%)');

        root.style.setProperty('--header', 'hsl(60, 10%, 19%)');
        root.style.setProperty('--text', 'hsl(60, 10%, 19%)');
        root.style.setProperty('--equals', 'hsl(0, 0%, 100%)');
        root.style.setProperty('--white', 'hsl(0, 0%, 100%)');
    };

    const theme3 = () => {
        root.style.setProperty('--main-bg', 'hsl(268, 75%, 9%)');
        root.style.setProperty('--toggle-keypad-bg', 'hsl(268, 71%, 12%)');
        root.style.setProperty('--screen-bg', 'hsl(268, 71%, 12%)');

        root.style.setProperty('--reset-key', 'hsl(281, 89%, 26%)');
        root.style.setProperty('--reset-key-shadow', 'hsl(285, 91%, 52%)');
        root.style.setProperty('--reset-key-hover', 'hsl(281, 89%, 46%)');

        root.style.setProperty('--eq-toggle', 'hsl(176, 100%, 44%)');
        root.style.setProperty('--eq-toggle-shadow', 'hsl(177, 92%, 70%)');
        root.style.setProperty('--eq-toggle-hover', 'hsl(177, 92%, 80%)');

        root.style.setProperty('--key', 'hsl(268, 47%, 21%)');
        root.style.setProperty('--key-shadow', 'hsl(290, 70%, 36%)');
        root.style.setProperty('--key-hover', 'hsl(281, 89%, 34%)');

        root.style.setProperty('--header', 'hsl(52, 100%, 62%)');
        root.style.setProperty('--text', 'hsl(52, 100%, 62%)');
        root.style.setProperty('--equals', 'hsl(198, 20%, 13%)');
        root.style.setProperty('--white', 'hsl(0, 0%, 100%)');
    };

    window.addEventListener("load", () => {
        const inner = document.querySelector("div.in");

        if (localStorage.getItem("theme") === "1") {
            inner.classList.add("first");
            theme1();
            setTheme(1);
        } else if (localStorage.getItem("theme") === "2") {
            inner.classList.add("second");
            theme2();
            setTheme(2);
        } else if (localStorage.getItem("theme") === "3") {
            inner.classList.add("third");
            theme3();
            setTheme(3);
        }
    });

    const toggleAnimation = () => {
        const an = document.querySelector("div.in");
        if (theme === 1) {
            an.style.animation = "second 0.5s forwards";
            localStorage.setItem("theme", 2)
            theme2();
            setTheme(2);
        } else if (theme === 2) {
            an.style.animation = "third 0.5s forwards";
            localStorage.setItem("theme", 3)
            theme3();
            setTheme(3);
        } else if (theme === 3) {
            an.style.animation = "first 0.5s forwards";
            localStorage.setItem("theme", 1)
            theme1();
            setTheme(1);
        }
    };

    const handleClick1 = () => {
        const firstAnimation = document.querySelector("div.in");
        if (theme === 2) {
            firstAnimation.style.animation = "secondToFirst 0.5s forwards"
        } else if (theme === 3) {
            firstAnimation.style.animation = "first 0.5s forwards"
        }
        localStorage.setItem("theme", 1)
        theme1();
        setTheme(1);
    };

    const handleClick2 = () => {
        const secondAnimation = document.querySelector("div.in");
        if (theme === 1) {
            secondAnimation.style.animation = "second 0.5s forwards"
        } else if (theme === 3) {
            secondAnimation.style.animation = "thirdToSecond 0.5s forwards"
        }
        localStorage.setItem("theme", 2);
        theme2();
        setTheme(2);
    };

    const handleClick3 = () => {
        const thirdAnimation = document.querySelector("div.in");
        if (theme === 1) {
            thirdAnimation.style.animation = "firstToThird 0.5s forwards"
        } else if (theme === 2) {
            thirdAnimation.style.animation = "third 0.5s forwards"
        }
        localStorage.setItem("theme", 3);
        theme3();
        setTheme(3);
    };

    return (
        <div className="header">
            <p>calc</p>
            <div className="toggle">
                <p>THEME</p>
                <div className="togbutton">
                    <div className="nums"><span onClick={handleClick1}>1</span><span onClick={handleClick2}>2</span><span onClick={handleClick3}>3</span></div>
                    <div className="outer" onClick={toggleAnimation}>
                        <div className="in"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header