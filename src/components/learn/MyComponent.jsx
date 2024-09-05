import './style.css'

const MyComponent = () => {
    // const hodanit1 = 24;
    const hoidanit = {
        name: "hoidanit",
        tuoi: 34
    }
    const hoidanit2 = [1, 2, 3, 4]
    return (
        <>
            <div>{JSON.stringify(hoidanit)}Ho viet khanh</div>
            <div>{hoidanit2[2]}Ho viet khanh</div>
            <div className="child">child</div>
        </>

    )
}

export default MyComponent;