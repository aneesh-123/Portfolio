import React from 'react';
import styles from './styles/Home.module.css'; // Import the CSS module

function Home() {
    return (
        <div className={"flex flex-col items-center justify-center h-screen"} style = {{paddingLeft: '120px'}}>
            <h1 className={`${styles['neon-text-main']} text-center`} style={{ fontSize: '120px'}}>
                Aneesh Nagalkar
            </h1>
            <p className={`${styles['neon-text-main']} text-center`} style={{ fontSize: '40px'}}>
                Computer Engineering UIUC
                <br />
                <a
                    href="https://docs.google.com/document/d/1SM4k65pF8xlykih0V8Km0ksZ6zPJPS0gYC0zJgImJ7Y/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 flex items-center justify-center"
                >
                    Resume
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 ml-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M6.293 4.293a1 1 0 0 1 1.414 1.414L5.414 10l2.293 2.293a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 0 1.414zM11 11a1 1 0 1 0 0-2h7a1 1 0 1 0 0-2h-7a1 1 0 1 0 0 2h3v6h-3z"
                            clipRule="evenodd"
                        />
                    </svg>
                </a>
            </p>
            {/* Other elements with neon text */}
        </div>
    );
}

export default Home;
