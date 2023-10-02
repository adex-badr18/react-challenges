export default function Box(props) {
    const styles = {
        backgroundColor: props.square.on ? '#222222' : 'transparent'
    }

    return (
        <div style={styles} onClick={() => props.toggleFunc(props.square.id)} className='box'></div>
    )
}