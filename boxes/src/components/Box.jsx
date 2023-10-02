export default function Box(props) {
    console.log(props.square);

    const styles = {
        backgroundColor: props.square.on ? '#222222' : 'transparent'
    }

    return (
        <div style={styles} className='box'></div>
    )
}