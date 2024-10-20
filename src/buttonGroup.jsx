import "./button.css";

// eslint-disable-next-line react/prop-types
const ButtonGroup = ({ buttons }) => {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <>
            {/* eslint-disable-next-line react/prop-types */}
            {buttons.map((buttonLabel, i) => (
                <button key={i} name={buttonLabel[0]} onClick={() => openInNewTab(buttonLabel[1])}>
                    {buttonLabel[0]}
                </button>

            ))}
        </>
    );
};

export default ButtonGroup;


