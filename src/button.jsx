import { useState } from 'react';
import styles from './button.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; // Import the CSS file

// eslint-disable-next-line react/prop-types
const Button = ({ note, onClick, faIcon, clicked = false, title, shortCut, right = false , text = ''}) => {
    const [isHovered, setIsHovered] = useState(false);
    const controlButtonNote = right ? styles.controlButtonNoteRight : styles.controlButtonNote;

    return (
        <div className={styles.controlButtonContainer}>
            <button
                aria-label={note}
                className={styles.controlButton}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={onClick}
            >
                <FontAwesomeIcon icon={faIcon} style={{color: clicked ? '#c084fc' : '#ffffff'}}/>
                {text}
            </button>
            {isHovered &&
                <span className={controlButtonNote}>
                    <div className={styles.tooltipHeader}>
                        <span className={styles.tooltipTitle}>{title}</span>
                        <span className={styles.tooltipShortcut}>{shortCut}</span>
                    </div>
                    <p className={styles.tooltipNote}>{note}</p>
                </span>
            }
        </div>
    );
};

export default Button;
