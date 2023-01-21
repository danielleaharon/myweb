import React from 'react';
import { useEffect, useState, useRef } from "react";

import Card from "./card";
import DialogProject from "./DialogProject";
import DialogFinish from "./DialogFinish";
import DialogProjectStart from "./DialogProjectStart";

import "./index.scss";
const cardRandomColor = ['#d471aa', '#095d59']


//card open dialog content
const projectContent = [
    {
        type: "ilist",
        image: require(`../../images/work/ilist.svg`),
        content: {
            title: "iList",
            lang: 'Android studio',
            description: (<div>
            An app that simplifies grocery shopping by allowing you to easily share lists with your family or roommates. Features include list sharing with friends, photo uploading for item recognition, tagging items as bought, the ability to copy and send lists, support for Hebrew and English, and multiple color schemes. The app utilizes Firebase for server-side functionality.
            </div>),
            github: "https://github.com/danielleaharon/androidproject",
            image: require(`../../images/work/ilist.svg`),
            demo: <iframe title="iList" src="https://appetize.io/embed/veudf5cvj43qu97h1c0gvrxnn4?device=pixel4" width="308px" height="730px" frameBorder="0" scrolling="no" ></iframe>
        }
    },
    {
        type: "fitshare",
        image: require(`../../images/work/fitshare.svg`),
        content: {
            title: <span> FitShare  <span className="fs18 d-block">FullStack final project </span></span>,
            lang: 'Android studio',
            description: `FitShare is a social platform focused on at-home fitness. It allows trainers to share workout videos and host synchronized Zoom sessions for trainees to participate in. Trainers have the option to post videos with specific equipment or muscle group focus. As a trainee, the app offers a diverse selection of workout options and trainers to choose from.`,
            github: "https://github.com/danielleaharon/androidproject",
            image: require(`../../images/work/fitshare.svg`),
        }
    },
    {
        type: "animalstore",
        image: require(`../../images/work/animal.svg`),
        content: {
            title: "Animal Store",
            lang: 'Android studio',
            description: `MVC online pet store architecture that includes a local database.
        Features user-specific recommendations based on previous interactions`,
            github: "https://github.com/danielleaharon/androidproject",
            image: require(`../../images/work/animal.svg`),
        }
    },
    {
        type: "flickrGallery",
        image: require(`../../images/work/fliker.svg`),
        content: {
            title: <span> FlickrGallary  <span className="fs18 d-block">Gallary app </span></span>,
            lang: 'Android studio',
            description: `Photo gallery scrolls with flickr api, *Design by me `,
            github: "https://github.com/danielleaharon/androidproject",
            image: require(`../../images/work/fliker.svg`),
            demo: <iframe title="FlickrGallary" src="https://appetize.io/embed/8bad8p6wfdckauc47d61qf0n88?device=pixel4" width="308px" height="730px" frameBorder="0" scrolling="no" ></iframe>
        }
    },
    {
        type: "opium",
        image: require(`../../images/work/opium.svg`),
        content: {
            title: "Opuim Store",
            lang: 'React&Wordpress',
            description: `An online platform for custom product printing, allowing users to design and order their products. The website was built using WordPress and React as part of a college "user experience" project, where the team analyzed and proposed improvements to the store's previous website. I implemented these changes after the project's completion.`,
            github: "https://github.com/danielleaharon/androidproject",
            image: require(`../../images/work/opium.svg`),
            demoweb: 'https://www.opiumstore.online/'

        }
    },
    {
        type: "web",
        image: require(`../../images/work/my-web.svg`),
        content: {
            title: <span> my site  <span className="fs18 d-block">this one </span></span>,
            lang: 'React',
            description: `My website serves as an introduction to my identity, skills, and portfolio of work.`,
            github: "https://github.com/danielleaharon/myweb",
            image: require(`../../images/work/my-web.svg`),
        }
    },
    {
        type: "looper",
        image: require(`../../images/work/soundlooper.svg`),
        content: {
            title: "Sound Looper",
            lang: 'React',
            description: `A website that allows users to play and layer up to nine different loops simultaneously. Each loop cycle is 8 seconds, and users can add additional loops during each round. The site also features a recording function, enabling users to save and replay their loops.`,
            github: "https://github.com/danielleaharon/soundLooper",
            image: require(`../../images/work/soundlooper.svg`),
            demoweb: 'https://soundlooper.herokuapp.com/'
        }
    }
];

function shuffleCards(array) {
    const length = array.length;
    for (let i = length; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * i);
        const currentIndex = i - 1;
        const temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
        var cardTypes = document.querySelectorAll('.work-card');
        cardTypes.forEach(card => {
            card.style.opacity = 1;
            card.style.removeProperty("display");
        })
    }
    return array;
}
export default function MemoryGame() {
    const [cards, setCards] = useState(
        shuffleCards.bind(null, projectContent.concat(projectContent))
    );
    const [openCards, setOpenCards] = useState([]);
    const [clearedCards, setClearedCards] = useState({});
    const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
    const [moves, setMoves] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [showModalProject, setShowModalProject] = useState(false);
    const [modalProjectContent, setModalProjectContent] = useState(projectContent[1].content);
    const [noPlay, setNoPlay] = useState(false);
    const [rndColor, setRndColor] = useState(cardRandomColor[Math.floor(Math.random() * cardRandomColor.length)]);


    const [bestScore, setBestScore] = useState(
        JSON.parse(localStorage.getItem("bestScore")) || Number.POSITIVE_INFINITY
    );
    const timeoutout = useRef(null);

    const disable = () => {
        setShouldDisableAllCards(true);
    };
    const enable = () => {
        setShouldDisableAllCards(false);
    };


    const handleCardClick = (index) => {
        if (openCards.length === 1) {
            setOpenCards((prev) => [...prev, index]);
            setMoves((moves) => moves + 1);
            disable();
        } else {
            clearTimeout(timeoutout.current);
            setOpenCards([index]);
        }
    };

    useEffect(() => {
        const evaluate = () => {
            const [first, second] = openCards;
            enable();
            if (cards[first].type === cards[second].type) {
                //on fint match open project model and see the card content
                setModalProjectContent(cards[first].content)
                setShowModalProject(true)
                setClearedCards((prev) => ({ ...prev, [cards[first].type]: true }));
                setOpenCards([]);
                return;
            }
            // This is to flip the cards back after 500ms duration
            timeoutout.current = setTimeout(() => {
                setOpenCards([]);
            }, 500);
        };
        let timeout = null;
        if (openCards.length === 2) {
            timeout = setTimeout(evaluate, 400);
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [openCards, cards]);

    useEffect(() => {
        const checkCompletion = () => {
            if (Object.keys(clearedCards).length === projectContent.length) {
                if (!noPlay)
                    setShowModal(true);
                const highScore = Math.min(moves, bestScore);
                localStorage.setItem("bestScore", highScore);
            }
        };
        checkCompletion();
    }, [clearedCards, bestScore, noPlay, moves]);

    useEffect(() => {
        if (Object.keys(clearedCards).length > 0) {
            Object.keys(clearedCards).forEach((key) => {
                var cardTypes = document.querySelectorAll('.' + key);
                if (cardTypes.length > 1) {
                    cardTypes[1].style.opacity = 0;
                    if (noPlay)
                        cardTypes[1].style.display = "none";
                }
            })
        }
    }, [clearedCards, noPlay]);

    const checkIsFlipped = (index) => {
        return openCards.includes(index);
    };

    const checkIsInactive = (card) => {
        return Boolean(clearedCards[card.type]);
    };

    const handleRestart = () => {
        setClearedCards({});
        setOpenCards([]);
        setShowModal(false);
        setMoves(0);
        enable();
        setNoPlay(false)
        setRndColor(cardRandomColor[Math.floor(Math.random() * cardRandomColor.length)])
        // set a shuffled deck of cards
        setCards(shuffleCards(projectContent.concat(projectContent)));
    };

    //flip card button - see all the project 
    const handleNotPlay = () => {
        setClearedCards({});
        setShouldDisableAllCards(false);
        setNoPlay(true);
        projectContent.forEach((card, index) => {
            setClearedCards((prev) => ({ ...prev, [card.type]: true }));
        })
    };

    return (
        <div className="memory">
            <div className='memory-btns ' style={{ '--rndcolor': rndColor }}>
                <div className='btns'>
                    <div className="restart" onClick={handleRestart} >
                        New Game
                        <div className='arrow'>
                            <i className="fas fa-angle-right"></i>
                        </div>
                    </div>
                    <div className="restart" onClick={handleNotPlay} >
                        Flip Cards
                        <div className='arrow'>
                            <i className="fas fa-angle-right"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-slice '>
                <div className="container">
                    {cards.map((card, index) => {
                        return (
                            <Card
                                key={index}
                                card={card}
                                index={index}
                                isDisabled={shouldDisableAllCards}
                                isInactive={checkIsInactive(card)}
                                isFlipped={checkIsFlipped(index)}
                                onClick={handleCardClick}
                                setShowModalProject={setShowModalProject}
                                setModalProjectContent={setModalProjectContent}
                                color={rndColor}
                            />
                        );
                    })}
                </div>
            </div>


            {!noPlay && showModal && !showModalProject && <DialogFinish handleRestart={handleRestart} handleClose={() => { setShowModal(false); setBestScore(localStorage.getItem("bestScore")); }} later={handleNotPlay} showModal={showModal} moves={moves} bestScore={bestScore} />}
            {(showModalProject) && <DialogProject showModal={showModalProject} handleClose={() => { setShowModalProject(false) }} content={modalProjectContent} />}
            {(JSON.parse(sessionStorage.getItem("popupStart")) === null) && <DialogProjectStart showModal={true} handleClose={() => {
                handleRestart(); sessionStorage.setItem("popupStart", true);
            }} handleNotPlay={() => { handleNotPlay(); sessionStorage.setItem("popupStart", true); }} />}
        </div>
    );
}