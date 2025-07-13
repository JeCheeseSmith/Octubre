import Button from "./button.jsx";

// eslint-disable-next-line react/prop-types
const ButtonGroup = ({ buttons }) => {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <>
            {/* eslint-disable-next-line react/prop-types */}
            {buttons.map((buttonLabel, i) => (
                <Button key={i} text={buttonLabel[0]} onClick={() => openInNewTab(buttonLabel[1])} note={buttonLabel[2]} title={buttonLabel[1]}/>
            ))}
        </>
    );
};

export default ButtonGroup;


