interface shadowCursorProps{
    x: number;
    y: number;
}

export default function shadowCursor({x,y}: shadowCursorProps) {
    const roundShadow: React.CSSProperties = {
        boxShadow: 'rgba(38, 118, 255, 0.5) 0px 0px 200px 10px',
        position: 'absolute',
        top: y -58,
        left: x - 55, 
        width: '100px',
        height: '100px',
        backgroundColor: 'rgba(92, 130, 255, 0.2)',
        borderRadius: '50%',
        transition: 'top 0s, left 0',
        pointerEvents: 'none'
    };
    return <div style={roundShadow} />
};